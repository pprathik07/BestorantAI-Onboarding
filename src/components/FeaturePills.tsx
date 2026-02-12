import { motion } from 'framer-motion';

const pills = [
    { icon: '🎨', label: 'AI Creative Generation', color: 'from-purple-500/20 to-purple-600/20', border: 'border-purple-500/30' },
    { icon: '📊', label: 'Meta Insights Dashboard', color: 'from-blue-500/20 to-blue-600/20', border: 'border-blue-500/30' },
    { icon: '📅', label: 'Auto-Scheduling', color: 'from-green-500/20 to-green-600/20', border: 'border-green-500/30' },
    { icon: '🎯', label: 'Localized Targeting', color: 'from-orange-500/20 to-orange-600/20', border: 'border-orange-500/30' },
    { icon: '⚡', label: 'Budget Optimization', color: 'from-yellow-500/20 to-yellow-600/20', border: 'border-yellow-500/30' },
    { icon: '📱', label: 'Multi-Platform Ads', color: 'from-pink-500/20 to-pink-600/20', border: 'border-pink-500/30' },
];

export default function FeaturePills() {
    return (
        <div className="overflow-x-auto no-scrollbar py-4">
            <div className="flex gap-3 min-w-max px-4">
                {pills.map((pill, i) => (
                    <motion.div
                        key={pill.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * i }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className={`flex items-center gap-2.5 px-5 py-3 rounded-full bg-gradient-to-r ${pill.color} border ${pill.border} cursor-pointer transition-all`}
                    >
                        <span className="text-lg">{pill.icon}</span>
                        <span className="text-white text-sm font-medium whitespace-nowrap">{pill.label}</span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
