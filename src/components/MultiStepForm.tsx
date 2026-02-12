import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FormData {
    restaurant: string;
    name: string;
    email: string;
    phone: string;
    monthlySpend: string;
}

export default function MultiStepForm() {
    const [isOpen, setIsOpen] = useState(false);
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<FormData>({
        restaurant: '',
        name: '',
        email: '',
        phone: '',
        monthlySpend: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const totalSteps = 3;

    const handleNext = () => {
        if (step < totalSteps) setStep(step + 1);
        else {
            setSubmitted(true);
            setTimeout(() => {
                setIsOpen(false);
                setSubmitted(false);
                setStep(1);
            }, 3000);
        }
    };

    const spendOptions = ['< $500/mo', '$500 - $2,000/mo', '$2,000 - $5,000/mo', '$5,000+/mo', 'Not running ads yet'];

    return (
        <>
            {/* Floating trigger button */}
            <motion.button
                onClick={() => setIsOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="fixed bottom-6 right-6 z-40 px-6 py-4 rounded-2xl bg-gradient-to-r from-primary to-secondary text-white font-bold text-sm shadow-2xl shadow-primary/30 flex items-center gap-2 cursor-pointer"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Get Early Access
            </motion.button>

            {/* Modal */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                        onClick={(e) => { if (e.target === e.currentTarget) setIsOpen(false); }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="w-full max-w-md rounded-2xl bg-dark-surface border border-dark-border p-8 relative"
                        >
                            {/* Close button */}
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-4 right-4 text-text-muted hover:text-white transition-colors cursor-pointer"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                    <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>

                            {submitted ? (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-8">
                                    <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                            <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold font-heading text-white mb-2">Welcome Aboard!</h3>
                                    <p className="text-text-secondary text-sm">We'll set up your personalized demo within 24 hours.</p>
                                </motion.div>
                            ) : (
                                <>
                                    {/* Progress */}
                                    <div className="flex items-center gap-2 mb-6">
                                        {Array.from({ length: totalSteps }).map((_, i) => (
                                            <div key={i} className="flex-1 h-1.5 rounded-full overflow-hidden bg-dark-card">
                                                <motion.div
                                                    className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                                                    initial={{ width: 0 }}
                                                    animate={{ width: i < step ? '100%' : '0%' }}
                                                    transition={{ duration: 0.3 }}
                                                />
                                            </div>
                                        ))}
                                    </div>

                                    <AnimatePresence mode="wait">
                                        {step === 1 && (
                                            <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                                                <h3 className="text-xl font-bold font-heading text-white mb-1">Your Restaurant</h3>
                                                <p className="text-text-muted text-sm mb-6">Tell us about your business</p>
                                                <div className="space-y-4">
                                                    <div>
                                                        <label className="block text-sm font-medium text-text-secondary mb-1.5">Restaurant Name</label>
                                                        <input
                                                            type="text"
                                                            value={formData.restaurant}
                                                            onChange={(e) => setFormData({ ...formData, restaurant: e.target.value })}
                                                            placeholder="Start typing your restaurant name..."
                                                            className="w-full px-4 py-3 rounded-lg bg-dark-card border border-dark-border text-white placeholder-text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-sm"
                                                        />
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}

                                        {step === 2 && (
                                            <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                                                <h3 className="text-xl font-bold font-heading text-white mb-1">Contact Info</h3>
                                                <p className="text-text-muted text-sm mb-6">How can we reach you?</p>
                                                <div className="space-y-4">
                                                    <div>
                                                        <label className="block text-sm font-medium text-text-secondary mb-1.5">Full Name</label>
                                                        <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="John Doe" className="w-full px-4 py-3 rounded-lg bg-dark-card border border-dark-border text-white placeholder-text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-sm" />
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-medium text-text-secondary mb-1.5">Email</label>
                                                        <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="john@restaurant.com" className="w-full px-4 py-3 rounded-lg bg-dark-card border border-dark-border text-white placeholder-text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-sm" />
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-medium text-text-secondary mb-1.5">Phone</label>
                                                        <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="+91 98765 43210" className="w-full px-4 py-3 rounded-lg bg-dark-card border border-dark-border text-white placeholder-text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-sm" />
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}

                                        {step === 3 && (
                                            <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                                                <h3 className="text-xl font-bold font-heading text-white mb-1">Marketing Budget</h3>
                                                <p className="text-text-muted text-sm mb-6">What's your current ad spend?</p>
                                                <div className="space-y-3">
                                                    {spendOptions.map((opt) => (
                                                        <button
                                                            key={opt}
                                                            onClick={() => setFormData({ ...formData, monthlySpend: opt })}
                                                            className={`w-full text-left px-4 py-3 rounded-lg border transition-all text-sm cursor-pointer ${formData.monthlySpend === opt
                                                                    ? 'bg-primary/20 border-primary text-white'
                                                                    : 'bg-dark-card border-dark-border text-text-secondary hover:border-primary/50'
                                                                }`}
                                                        >
                                                            {opt}
                                                        </button>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    <div className="flex items-center gap-3 mt-8">
                                        {step > 1 && (
                                            <button
                                                onClick={() => setStep(step - 1)}
                                                className="px-5 py-3 rounded-lg border border-dark-border text-text-secondary hover:text-white hover:border-primary/50 transition-all text-sm cursor-pointer"
                                            >
                                                Back
                                            </button>
                                        )}
                                        <motion.button
                                            onClick={handleNext}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="flex-1 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-semibold text-sm hover:shadow-lg hover:shadow-primary/30 transition-all cursor-pointer"
                                        >
                                            {step === totalSteps ? 'Submit' : 'Continue →'}
                                        </motion.button>
                                    </div>
                                </>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
