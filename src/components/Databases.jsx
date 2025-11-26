import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Server, Wind, Layers, X, CheckCircle2, ArrowRight } from 'lucide-react';
import { SiPostgresql, SiApacheairflow } from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { GrMysql } from "react-icons/gr";

const databases = [
    {
        id: 'postgresql',
        name: 'PostgreSQL',
        icon: SiPostgresql,
        tagline: 'Advanced Object-Relational DB',
        color: '#336791',
        projects: [
            {
                title: 'High-Scale Analytics Engine',
                desc: 'Optimized complex joins across billion-row tables for a fintech client.',
                stats: ['Reduced query time 45s → 1.2s', 'Implemented declarative partitioning'],
                tags: ['PL/pgSQL', 'PostGIS']
            },
            {
                title: 'Multi-Tenant SaaS Architecture',
                desc: 'Designed row-level security policies for secure data isolation.',
                stats: ['Zero data leaks', 'Seamless tenant migration'],
                tags: ['RLS', 'Supabase']
            }
        ]
    },
    {
        id: 'sqlserver',
        name: 'SQL Server',
        icon: DiMsqlServer,
        tagline: 'Enterprise Data Management',
        color: '#CC2927',
        projects: [
            {
                title: 'Legacy System Migration',
                desc: 'Migrated on-premise MSSQL cluster to Azure SQL Managed Instance.',
                stats: ['99.99% availability', 'Automated failover setup'],
                tags: ['Azure', 'T-SQL']
            }
        ]
    },
    {
        id: 'mysql',
        name: 'MySQL',
        icon: GrMysql,
        tagline: 'Reliable Web Database',
        color: '#00758F',
        projects: [
            {
                title: 'E-commerce Inventory System',
                desc: 'High-concurrency inventory tracking for flash sales.',
                stats: ['Handled 50k req/sec', 'Optimized InnoDB buffer pool'],
                tags: ['Vitess', 'Percona']
            }
        ]
    },
    {
        id: 'airflow',
        name: 'Airflow',
        icon: SiApacheairflow,
        tagline: 'Workflow Orchestration',
        color: '#00C7D4',
        projects: [
            {
                title: 'Data Pipeline Orchestration',
                desc: 'Managed 500+ daily DAGs for marketing analytics.',
                stats: ['Reduced failure rate by 80%', 'Custom operators for internal APIs'],
                tags: ['Python', 'Dag']
            }
        ]
    }
];

const ProjectModal = ({ db, onClose }) => {
    useEffect(() => {
        // Prevent scrolling when modal is open
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return createPortal(
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-[#1a1a1a] border border-white/10 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
                data-lenis-prevent
            >
                {/* Header */}
                <div className="sticky top-0 bg-[#1a1a1a]/95 backdrop-blur border-b border-white/10 p-6 flex items-center justify-between z-10">
                    <div className="flex items-center gap-4">
                        <div
                            className="p-5 rounded-lg bg-blue/5"
                            style={{ color: db.color }}
                        >
                            <db.icon size={100} />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white">{db.name}</h3>
                            <p className="text-gray-400 text-sm">Project Showcase</p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-white/10 rounded-full text-gray-400 hover:text-white transition-colors"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-8">
                    {db.projects.map((project, idx) => (
                        <div key={idx} className="bg-white/5 rounded-xl p-6 border border-white/5 hover:border-white/10 transition-colors">
                            <div className="flex justify-between items-start mb-4">
                                <h4 className="text-xl font-bold text-white">{project.title}</h4>
                                <div className="flex gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-2 py-1 bg-black/30 text-cyan text-xs rounded border border-cyan/20 font-mono">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <p className="text-gray-300 mb-6 leading-relaxed">
                                {project.desc}
                            </p>

                            <div className="space-y-3">
                                <h5 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Key Achievements</h5>
                                <ul className="space-y-2">
                                    {project.stats.map((stat, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                                            <CheckCircle2 size={16} className="text-papaya mt-0.5 flex-shrink-0" />
                                            <span>{stat}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-white/10 bg-white/5">
                    <button
                        onClick={onClose}
                        className="w-full py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium transition-colors"
                    >
                        Close
                    </button>
                </div>
            </motion.div>
        </motion.div>,
        document.body
    );
};

const Databases = () => {
    const [selectedDb, setSelectedDb] = useState(null);

    return (
        <section id="databases" className="py-24 px-6 bg-background relative z-10">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        Technical <span className="text-papaya">Arsenal</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl">
                        Click on a technology to view real-world project implementations.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {databases.map((db, index) => (
                        <motion.div
                            key={db.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => setSelectedDb(db)}
                            className="group cursor-pointer"
                        >
                            <div className="bg-dark-surface border border-white/5 rounded-xl p-8 h-full flex flex-col items-center justify-center gap-6 hover:border-papaya/50 hover:bg-white/5 transition-all duration-300 shadow-lg hover:shadow-papaya/10">
                                <div
                                    className="p-5 rounded-full bg-white/5 group-hover:scale-110 transition-transform duration-300"
                                    style={{ color: db.color }}
                                >
                                    <db.icon size={56} />
                                </div>
                                <div className="text-center">
                                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-papaya transition-colors">{db.name}</h3>
                                    <p className="text-gray-400 text-sm font-medium">{db.tagline}</p>
                                </div>
                                <div className="mt-auto pt-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                    <span className="text-cyan text-xs font-bold uppercase tracking-widest flex items-center gap-1">
                                        View Projects <ArrowRight size={12} />
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedDb && (
                    <ProjectModal db={selectedDb} onClose={() => setSelectedDb(null)} />
                )}
            </AnimatePresence>
        </section>
    );
};

export default Databases;
