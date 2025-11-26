import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
    const [isHovered, setIsHovered] = useState(false);
    const canvasRef = useRef(null);
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 1.5;
                this.speedX = Math.random() * 0.5 - 0.25;
                this.speedY = Math.random() * 0.5 - 0.25;
                this.color = Math.random() > 0.5 ? '#FF8700' : '#00F0FF';
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x > canvas.width) this.x = 0;
                if (this.x < 0) this.x = canvas.width;
                if (this.y > canvas.height) this.y = 0;
                if (this.y < 0) this.y = canvas.height;
            }

            draw() {
                ctx.fillStyle = this.color;
                ctx.globalAlpha = 0.3;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const init = () => {
            particles = [];
            const numberOfParticles = Math.floor((canvas.width * canvas.height) / 15000);
            for (let i = 0; i < numberOfParticles; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        init();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-background">
            <canvas ref={canvasRef} className="absolute inset-0 z-0" />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background z-10 pointer-events-none" />

            <motion.div
                style={{ y: y1, opacity }}
                className="relative z-20 text-center px-4"
            >
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-cyan font-medium tracking-[0.2em] mb-4 uppercase text-sm md:text-base"
                >
                    SQL Engineer
                </motion.h2>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-5xl md:text-7xl lg:text-9xl font-bold text-white mb-6 tracking-tight cursor-pointer relative inline-block"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Background layer - DAVIT KHANAL (always visible underneath) */}
                    <span className="relative inline-block whitespace-nowrap">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-blue-400">SQL Developer</span>
                    </span>

                    {/* Foreground layer - SQL Developer (slides away on hover like ice) */}
                    <motion.span
                        className="absolute top-0 left-0 inline-block whitespace-nowrap"
                        style={{
                            backgroundColor: '#131212ff',
                            paddingTop: '10px',
                            paddingBottom: '10px',
                            paddingLeft: '10px',
                            paddingRight: '100vw'
                        }}
                        animate={{
                            x: isHovered ? '10%' : '0%',
                            opacity: isHovered ? 0 : 1
                        }}
                        transition={{
                            duration: 4,
                            ease: [0.16, 1, 0.3, 1]
                        }}
                    >
                        Davit <span className="text-transparent bg-clip-text bg-gradient-to-r from-papaya to-orange-300">Khanal</span>
                    </motion.span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-gray-400 text-lg md:text-2xl max-w-2xl mx-auto font-light"
                >
                    Turning terabytes into insights at <span className="text-white font-medium">lightspeed</span>.
                </motion.p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2"
            >
                <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-cyan to-transparent relative overflow-hidden">
                    <motion.div
                        animate={{ y: [0, 50] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                        className="absolute top-0 left-0 w-full h-1/2 bg-pink-500 blur-[1px]"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
