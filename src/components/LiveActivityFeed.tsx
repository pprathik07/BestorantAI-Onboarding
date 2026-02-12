import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const activities = [
    { restaurant: 'Spice Garden', action: 'launched 3 new campaigns', time: '2 min ago', emoji: '🚀' },
    { restaurant: 'Tandoori Nights', action: 'generated 5 AI creatives', time: '5 min ago', emoji: '🎨' },
    { restaurant: 'Curry Palace', action: 'reached 12K people today', time: '8 min ago', emoji: '📈' },
    { restaurant: 'Biryani House', action: 'optimized ad budget to $150/day', time: '12 min ago', emoji: '💰' },
    { restaurant: 'Masala Junction', action: 'scheduled weekend promo ads', time: '15 min ago', emoji: '📅' },
    { restaurant: 'Dosa Express', action: 'connected Meta Business account', time: '18 min ago', emoji: '🔗' },
    { restaurant: 'Naan Stop', action: 'created a festival night event', time: '22 min ago', emoji: '🎉' },
];

export default function LiveActivityFeed() {
    const [visibleItems, setVisibleItems] = useState(activities.slice(0, 4));
    const [currentIndex, setCurrentIndex] = useState(4);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => {
                const next = (prev + 1) % activities.length;
                setVisibleItems((items) => {
                    const newItem = activities[next];
                    return [newItem, ...items.slice(0, 3)];
                });
                return next;
            });
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="space-y-3">
            <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <h4 className="text-white font-semibold text-sm font-heading">Live Activity</h4>
                <span className="text-text-muted text-xs">Real-time updates</span>
            </div>

            <AnimatePresence mode="popLayout">
                {visibleItems.map((item, i) => (
                    <motion.div
                        key={`${item.restaurant}-${item.action}-${i}`}
                        initial={{ opacity: 0, x: -20, height: 0 }}
                        animate={{ opacity: 1, x: 0, height: 'auto' }}
                        exit={{ opacity: 0, x: 20, height: 0 }}
                        transition={{ duration: 0.4 }}
                        className="flex items-center gap-3 p-3 rounded-xl bg-dark-card/50 border border-dark-border/50"
                    >
                        <span className="text-xl flex-shrink-0">{item.emoji}</span>
                        <div className="min-w-0 flex-1">
                            <p className="text-white text-sm truncate">
                                <span className="font-semibold">{item.restaurant}</span>{' '}
                                <span className="text-text-secondary">{item.action}</span>
                            </p>
                            <p className="text-text-muted text-xs">{item.time}</p>
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
}
