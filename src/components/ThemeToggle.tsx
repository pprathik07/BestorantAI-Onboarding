import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
    const [dark, setDark] = useState(true);

    useEffect(() => {
        // Check localStorage on mount
        const saved = localStorage.getItem('bestorant-theme');
        if (saved === 'light') {
            setDark(false);
            document.documentElement.classList.remove('dark');
            document.documentElement.classList.add('light');
        } else {
            setDark(true);
            document.documentElement.classList.add('dark');
            document.documentElement.classList.remove('light');
        }
    }, []);

    const toggle = () => {
        const next = !dark;
        setDark(next);
        localStorage.setItem('bestorant-theme', next ? 'dark' : 'light');
        if (next) {
            document.documentElement.classList.add('dark');
            document.documentElement.classList.remove('light');
        } else {
            document.documentElement.classList.remove('dark');
            document.documentElement.classList.add('light');
        }
    };

    return (
        <motion.button
            onClick={toggle}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle theme"
            className="relative w-14 h-7 rounded-full p-0.5 transition-colors duration-300 cursor-pointer border"
            style={{
                background: dark
                    ? 'linear-gradient(135deg, #232340, #1A1A2E)'
                    : 'linear-gradient(135deg, #E0E7FF, #F0F4FF)',
                borderColor: dark ? '#2D2D4A' : '#C7D2FE',
            }}
        >
            <motion.div
                className="w-6 h-6 rounded-full flex items-center justify-center shadow-md"
                animate={{ x: dark ? 0 : 26 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                style={{
                    background: dark ? '#6C3CE9' : '#FBBF24',
                }}
            >
                {dark ? (
                    <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                ) : (
                    <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zM4.222 4.222a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zM15.071 4.929a1 1 0 010 1.414l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 0zM10 7a3 3 0 100 6 3 3 0 000-6zm-8 3a1 1 0 011-1h1a1 1 0 110 2H3a1 1 0 01-1-1zm14 0a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1zM4.929 15.071a1 1 0 011.414-1.414l.707.707a1 1 0 01-1.414 1.414l-.707-.707zM14.364 14.364a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zM10 15a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                )}
            </motion.div>
        </motion.button>
    );
}
