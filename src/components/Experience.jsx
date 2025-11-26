import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
    {
        year: '2024 - 2025',
        company: 'Vanilla Trans Technor Pvt Ltd.',
        role: 'Mid SQL Developer',
        description: 'Leading the database migration team for a high-traffic fintech platform.',
        achievements: [
            'Assisted in managing and maintaining SQL Server used by over 700K users and handling 150K+ daily transactions.',
            'Reduced cloud infrastructure costs by 40% through query optimization.',
            'Implemented cross database replication for reporting and analytics, improving data accessibility by 60%.'
        ]
    },
    {
        year: '2021 - 2023',
        company: 'Synergy Tech Software',
        role: 'Support Engineer',
        description: 'Application Support for Class D Banks',
        achievements: [
            'Supporting and maintaining financial software systems used by microfinance institutions and cooperatives',
            'Involves troubleshooting and resolving complex issues across both the user interface and back-end',
            'Include collaborating with development teams to report bugs, test updates, and implement client-specific enhancements'
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-24 px-6 bg-background relative z-10">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold text-white mb-16 text-center"
                >
                    Career <span className="text-cyan">Timeline</span>
                </motion.h2>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-papaya via-cyan to-transparent opacity-30" />

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Timeline Node */}
                                <div className="absolute left-[-5px] md:left-1/2 md:-ml-[5px] w-[11px] h-[11px] rounded-full bg-background border-2 border-papaya z-10 shadow-[0_0_10px_#FF8700]" />

                                {/* Content */}
                                <div className="md:w-1/2 pl-8 md:pl-0 md:px-12">
                                    <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-start' : 'md:items-end'}`}>
                                        <span className="text-cyan font-mono text-sm mb-2 tracking-wider">{exp.year}</span>
                                        <h3 className="text-2xl font-bold text-white mb-1">{exp.company}</h3>
                                        <h4 className="text-lg text-gray-400 mb-4">{exp.role}</h4>
                                        <p className={`text-gray-500 mb-4 text-sm leading-relaxed ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                            {exp.description}
                                        </p>
                                        <ul className={`space-y-2 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                            {exp.achievements.map((item, i) => (
                                                <li key={i} className="text-gray-400 text-sm flex items-start gap-2 justify-start md:justify-inherit">
                                                    <span className="text-papaya mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Spacer for the other side */}
                                <div className="hidden md:block md:w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
