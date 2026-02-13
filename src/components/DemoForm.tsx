import { useState } from 'react';

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
        const e: Record<string, string> = {};
        if (!formData.role) e.role = 'Please select a role';
        if (!formData.firstName.trim()) e.firstName = 'Required';
        if (!formData.lastName.trim()) e.lastName = 'Required';
        if (!formData.email.trim()) e.email = 'Required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) e.email = 'Invalid email';
        if (!formData.phone.trim()) e.phone = 'Required';
        if (!formData.restaurant.trim()) e.restaurant = 'Required';
        setErrors(e);
        return Object.keys(e).length === 0;
    };

    const handleSubmit = (ev: React.FormEvent) => {
        ev.preventDefault();
        if (validate()) setSubmitted(true);
    };

    const roles = ['Restaurant Owner', 'General Manager', 'Marketing Manager', 'Franchise Operator', 'Agency / Consultant', 'Other'];
    const sources = ['Google Search', 'Social Media', 'Friend / Referral', 'Industry Event', 'Blog / Article', 'Other'];

    if (submitted) {
        return (
            <div id="demo-form" className="bg-white rounded-2xl p-8 text-center py-16 border border-gray-100 shadow-sm">
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-5">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <h3 className="text-2xl font-bold font-heading text-gray-900 mb-2">You're all set!</h3>
                <p className="text-gray-500 text-sm">We'll reach out within 24 hours to schedule your personalized demo.</p>
            </div>
        );
    }

    return (
        <div id="demo-form" className="bg-white rounded-2xl p-6 lg:p-8 border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold font-heading text-gray-900 mb-6">Book your free demo</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Role */}
                <div>
                    <label className="form-label">Role</label>
                    <select value={formData.role} onChange={e => setFormData({ ...formData, role: e.target.value })} className="form-select">
                        <option value="">Select one...</option>
                        {roles.map(r => <option key={r} value={r}>{r}</option>)}
                    </select>
                    {errors.role && <p className="text-red-500 text-xs mt-1">{errors.role}</p>}
                </div>

                {/* Name */}
                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <label className="form-label">First name</label>
                        <input type="text" value={formData.firstName} onChange={e => setFormData({ ...formData, firstName: e.target.value })} placeholder="First name" className="form-input" />
                        {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                    </div>
                    <div>
                        <label className="form-label">Last name</label>
                        <input type="text" value={formData.lastName} onChange={e => setFormData({ ...formData, lastName: e.target.value })} placeholder="Last name" className="form-input" />
                        {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                    </div>
                </div>

                {/* Email */}
                <div>
                    <label className="form-label">Email</label>
                    <input type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} placeholder="Email" className="form-input" />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div>
                    <label className="form-label">Cellphone</label>
                    <div className="flex">
                        <div className="flex items-center gap-1.5 px-3 bg-gray-50 border border-gray-200 border-r-0 rounded-l-lg text-sm text-gray-500">
                            <span>🇮🇳</span><span>IN</span>
                        </div>
                        <input type="tel" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} placeholder="Cellphone" className="form-input rounded-l-none" />
                    </div>
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>

                {/* Restaurant */}
                <div>
                    <label className="form-label">Restaurant name</label>
                    <input type="text" value={formData.restaurant} onChange={e => setFormData({ ...formData, restaurant: e.target.value })} placeholder="Search your restaurant name..." className="form-input" />
                    <p className="text-xs text-gray-400 mt-1">Start typing, then select your restaurant from the list</p>
                    {errors.restaurant && <p className="text-red-500 text-xs mt-1">{errors.restaurant}</p>}
                </div>

                {/* How heard */}
                <div>
                    <label className="form-label">How did you hear about us?</label>
                    <select value={formData.heardAbout} onChange={e => setFormData({ ...formData, heardAbout: e.target.value })} className="form-select">
                        <option value="">Select one...</option>
                        {sources.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                </div>

                {/* SMS Consent */}
                <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-xs font-semibold text-gray-700 mb-2">Get scheduled fast:</p>
                    <label className="flex items-start gap-2.5 cursor-pointer">
                        <input type="checkbox" checked={formData.smsConsent} onChange={e => setFormData({ ...formData, smsConsent: e.target.checked })} className="mt-0.5 w-4 h-4 rounded border-gray-300 accent-gray-900 cursor-pointer" />
                        <span className="text-xs text-gray-500 leading-relaxed">
                            I agree to receive automated text messages from BestorantAI at the phone number provided to help me schedule a demo and evaluate the platform. Consent is not required. By signing up, I'll receive approximately 4 messages per month.
                        </span>
                    </label>
                    <p className="text-xs text-gray-400 mt-2">
                        Message & data rates may apply. Reply STOP to unsubscribe or HELP for help
                    </p>
                </div>

                {/* Submit */}
                <button type="submit" className="btn-primary">Get a free demo</button>

                <p className="text-xs text-center text-gray-400 leading-relaxed">
                    By providing us with your information you are consenting to the collection and use of your information in accordance with our{' '}
                    <a href="#" className="underline hover:text-gray-600">Terms of Service</a> and{' '}
                    <a href="#" className="underline hover:text-gray-600">Privacy Policy</a>.
                </p>
            </form>
        </div>
    );
}
