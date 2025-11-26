import React from 'react';
import { motion } from 'framer-motion';

const FloatingShapes = () => {
    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-[1]">
            {/* Large Circle - Top Right */}
            <motion.div
                className="absolute w-96 h-96 rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(255,135,0,0.1) 0%, rgba(255,135,0,0) 70%)',
                    filter: 'blur(40px)',
                }}
                initial={{ x: '100%', y: '-50%' }}
                animate={{
                    x: ['100%', '80%', '100%'],
                    y: ['-50%', '-30%', '-50%'],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            {/* Medium Circle - Left Side */}
            <motion.div
                className="absolute w-64 h-64 rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(0,240,255,0.15) 0%, rgba(0,240,255,0) 70%)',
                    filter: 'blur(30px)',
                }}
                initial={{ x: '-30%', y: '40%' }}
                animate={{
                    x: ['-30%', '-10%', '-30%'],
                    y: ['40%', '50%', '40%'],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            {/* Small Circle - Bottom Right */}
            <motion.div
                className="absolute w-48 h-48 rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(255,135,0,0.12) 0%, rgba(255,135,0,0) 70%)',
                    filter: 'blur(25px)',
                }}
                initial={{ x: '90%', y: '80%' }}
                animate={{
                    x: ['90%', '70%', '90%'],
                    y: ['80%', '90%', '80%'],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            {/* Floating Rectangle - Center */}
            <motion.div
                className="absolute w-72 h-72"
                style={{
                    background: 'linear-gradient(135deg, rgba(0,240,255,0.08) 0%, rgba(255,135,0,0.08) 100%)',
                    filter: 'blur(50px)',
                    borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                }}
                initial={{ x: '50%', y: '50%', rotate: 0 }}
                animate={{
                    x: ['50%', '45%', '50%'],
                    y: ['50%', '55%', '50%'],
                    rotate: [0, 180, 360],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: 'linear',
                }}
            />

            {/* Small Accent - Top Left */}
            <motion.div
                className="absolute w-32 h-32 rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(0,240,255,0.2) 0%, rgba(0,240,255,0) 70%)',
                    filter: 'blur(20px)',
                }}
                initial={{ x: '10%', y: '20%' }}
                animate={{
                    x: ['10%', '15%', '10%'],
                    y: ['20%', '25%', '20%'],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            {/* Morphing Blob - Bottom Left */}
            <motion.div
                className="absolute w-80 h-80"
                style={{
                    background: 'linear-gradient(45deg, rgba(255,135,0,0.1) 0%, rgba(0,240,255,0.1) 100%)',
                    filter: 'blur(60px)',
                    borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                }}
                initial={{ x: '-20%', y: '70%' }}
                animate={{
                    x: ['-20%', '0%', '-20%'],
                    y: ['70%', '75%', '70%'],
                    borderRadius: [
                        '60% 40% 30% 70% / 60% 30% 70% 40%',
                        '30% 60% 70% 40% / 50% 60% 30% 60%',
                        '60% 40% 30% 70% / 60% 30% 70% 40%',
                    ],
                }}
                transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />
        </div>
    );
};

export default FloatingShapes;
