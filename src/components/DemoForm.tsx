import { useState } from 'react';
import { motion } from 'framer-motion';

export default function DemoForm() {
    const [formData, setFormData] = useState({
        role: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        restaurant: '',
        heardAbout: '',
        smsConsent: false,
    });
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validate = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.role) newErrors.role = 'Please select a role';
        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email';
        if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
        if (!formData.restaurant.trim()) newErrors.restaurant = 'Restaurant name is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) setSubmitted(true);
    };

    const roles = ['Restaurant Owner', 'General Manager', 'Marketing Manager', 'Franchise Operator', 'Agency / Consultant', 'Other'];
    const sources = ['Google Search', 'Social Media', 'Friend / Referral', 'Industry Event', 'Blog / Article', 'Other'];

    if (submitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="themed-form-container p-6 lg:p-8 rounded-2xl text-center py-12 transition-colors duration-300"
            >
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <h3 className="text-2xl font-bold font-heading mb-2 themed-h3 transition-colors">You're In!</h3>
                <p className="themed-text transition-colors">We'll reach out within 24 hours to schedule your personalized demo.</p>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            id="demo-form"
            className="themed-form-container p-6 lg:p-8 rounded-2xl transition-colors duration-300"
        >
            <h3 className="text-2xl font-bold font-heading mb-6 themed-h3 transition-colors">Book your free demo</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
                {/* Role */}
                <div>
                    <label className="block text-sm font-medium themed-text mb-1.5 transition-colors">Role</label>
                    <div className="relative">
                        <select
                            value={formData.role}
                            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                            className="themed-select w-full px-4 py-3 rounded-lg text-sm appearance-none cursor-pointer transition-colors duration-300 outline-none focus:ring-2 focus:ring-primary/20"
                        >
                            <option value="">Select one...</option>
                            {roles.map((r) => <option key={r} value={r}>{r}</option>)}
                        </select>
                        <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none themed-icon-muted transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                            <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    {errors.role && <p className="text-danger text-xs mt-1">{errors.role}</p>}
                </div>

                {/* Name row */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium themed-text mb-1.5 transition-colors">First name</label>
                        <input
                            type="text"
                            value={formData.firstName}
                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                            placeholder="First name"
                            className="themed-input w-full px-4 py-3 rounded-lg text-sm transition-colors duration-300 outline-none"
                        />
                        {errors.firstName && <p className="text-danger text-xs mt-1">{errors.firstName}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium themed-text mb-1.5 transition-colors">Last name</label>
                        <input
                            type="text"
                            value={formData.lastName}
                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                            placeholder="Last name"
                            className="themed-input w-full px-4 py-3 rounded-lg text-sm transition-colors duration-300 outline-none"
                        />
                        {errors.lastName && <p className="text-danger text-xs mt-1">{errors.lastName}</p>}
                    </div>
                </div>

                {/* Email */}
                <div>
                    <label className="block text-sm font-medium themed-text mb-1.5 transition-colors">Email</label>
                    <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Email"
                        className="themed-input w-full px-4 py-3 rounded-lg text-sm transition-colors duration-300 outline-none"
                    />
                    {errors.email && <p className="text-danger text-xs mt-1">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div>
                    <label className="block text-sm font-medium themed-text mb-1.5 transition-colors">Cellphone</label>
                    <div className="flex">
                        <div className="themed-phone-prefix flex items-center gap-1.5 px-3 rounded-l-lg border-y border-l text-sm transition-colors duration-300">
                            <span>🇮🇳</span><span>IN</span>
                        </div>
                        <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="Cellphone"
                            className="themed-input w-full px-4 py-3 rounded-r-lg rounded-l-none text-sm transition-colors duration-300 outline-none"
                        />
                    </div>
                    {errors.phone && <p className="text-danger text-xs mt-1">{errors.phone}</p>}
                </div>

                {/* Restaurant */}
                <div>
                    <label className="block text-sm font-medium themed-text mb-1.5 transition-colors">Restaurant name</label>
                    <input
                        type="text"
                        value={formData.restaurant}
                        onChange={(e) => setFormData({ ...formData, restaurant: e.target.value })}
                        placeholder="Search your restaurant name..."
                        className="themed-input w-full px-4 py-3 rounded-lg text-sm transition-colors duration-300 outline-none"
                    />
                    <p className="text-xs mt-1 themed-text-muted transition-colors">Start typing, then select your restaurant from the list</p>
                    {errors.restaurant && <p className="text-danger text-xs mt-1">{errors.restaurant}</p>}
                </div>

                {/* How heard */}
                <div>
                    <label className="block text-sm font-medium themed-text mb-1.5 transition-colors">How did you hear about us?</label>
                    <div className="relative">
                        <select
                            value={formData.heardAbout}
                            onChange={(e) => setFormData({ ...formData, heardAbout: e.target.value })}
                            className="themed-select w-full px-4 py-3 rounded-lg text-sm appearance-none cursor-pointer transition-colors duration-300 outline-none focus:ring-2 focus:ring-primary/20"
                        >
                            <option value="">Select one...</option>
                            {sources.map((s) => <option key={s} value={s}>{s}</option>)}
                        </select>
                        <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none themed-icon-muted transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                            <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>

                {/* SMS Consent */}
                <div className="themed-form-box rounded-lg p-4 transition-colors duration-300">
                    <p className="text-xs font-semibold mb-2 themed-text transition-colors">Get scheduled fast:</p>
                    <label className="flex items-start gap-2.5 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={formData.smsConsent}
                            onChange={(e) => setFormData({ ...formData, smsConsent: e.target.checked })}
                            className="mt-0.5 w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer accent-primary"
                        />
                        <span className="text-xs leading-relaxed themed-text-muted transition-colors">
                            I agree to receive automated text messages from BestorantAI at the phone number provided to help me schedule a demo and evaluate the platform. Consent is not required. By signing up, I'll receive approximately 4 messages per month.
                        </span>
                    </label>
                    <p className="text-xs mt-2 themed-text-muted transition-colors">
                        Message & data rates may apply. Reply STOP to unsubscribe or HELP for help
                    </p>
                </div>

                {/* Submit */}
                <motion.button
                    type="submit"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-primary-dark text-white font-bold text-base hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 cursor-pointer"
                >
                    Get a free demo
                </motion.button>

                <p className="text-xs text-center leading-relaxed themed-text-muted transition-colors">
                    By providing us with your information you are consenting to the collection and use of your information in accordance with our{' '}
                    <a href="#" className="underline hover:text-primary">Terms of Service</a> and{' '}
                    <a href="#" className="underline hover:text-primary">Privacy Policy</a>.
                </p>
            </form>
        </motion.div>
    );
}
