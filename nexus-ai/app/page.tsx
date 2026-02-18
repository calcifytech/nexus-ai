"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, CircuitBoard, Cpu, Terminal, Zap } from "lucide-react";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

export default function Home() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-neon selection:text-black overflow-x-hidden">
            {/* Navigation */}
            <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="text-xl font-bold tracking-tighter flex items-center gap-2">
                        <Terminal className="text-neon w-6 h-6" />
                        NEXUS AI
                    </div>
                    <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
                        <a href="#services" className="hover:text-neon transition-colors">SERVICES</a>
                        <a href="#process" className="hover:text-neon transition-colors">PROCESS</a>
                        <a href="#contact" className="hover:text-neon transition-colors">INITIATE</a>
                    </div>
                    <button className="border border-neon text-neon px-4 py-2 text-sm font-mono hover:bg-neon hover:text-black transition-all duration-300">
                        GET STARTED
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={staggerContainer}
                        className="max-w-4xl"
                    >
                        <motion.h1
                            variants={fadeInUp}
                            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight mb-8"
                        >
                            THE FUTURE OF <br />
                            <span className="text-neon">AUTOMATION</span>
                        </motion.h1>
                        <motion.p
                            variants={fadeInUp}
                            className="text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed"
                        >
                            Eliminate friction. Scale intelligence. Nexus AI builds the neural infrastructure for modern enterprise.
                        </motion.p>
                        <motion.div variants={fadeInUp}>
                            <a
                                href="#contact"
                                className="group inline-flex items-center gap-3 bg-neon text-black px-8 py-4 font-bold text-lg tracking-wide hover:bg-white transition-colors duration-300"
                            >
                                INITIATE SYSTEMS
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Background Grid Accent */}
                <div className="absolute top-0 right-0 -z-10 opacity-20">
                    <div className="w-[600px] h-[600px] bg-neon blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3" />
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-20 px-6 border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">CAPABILITIES</h2>
                        <p className="text-gray-400 max-w-md">
                            We specialize in deploying autonomous workflows that integrate seamlessly with your existing technology stack.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <CircuitBoard className="w-8 h-8" />,
                                title: "AI Implementation",
                                desc: "Bridging the gap between legacy systems and AI. We audit, strategy, and deploy custom agentic workflows."
                            },
                            {
                                icon: <Zap className="w-8 h-8" />,
                                title: "Workflow Optimization",
                                desc: "Autonomous processes designed for maximum efficiency. Reducing manual overhead by up to 90% via RAG systems."
                            },
                            {
                                icon: <Bot className="w-8 h-8" />,
                                title: "Custom LLMs",
                                desc: "Private, secure, and domain-specific intelligence models fine-tuned on your proprietary enterprise data."
                            }
                        ].map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group p-8 border border-white/10 hover:border-neon/50 bg-white/5 hover:bg-white/10 transition-all duration-300"
                            >
                                <div className="text-neon mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{service.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section id="process" className="py-20 px-6 bg-white/5">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-sm font-mono text-neon mb-12 tracking-widest">THE PROTOCOL</h2>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {["BLUEPRINT", "LINK", "ARCHITECT", "STYLIZE", "TRIGGER"].map((step, i) => (
                            <div key={step} className="border-t border-neon/30 pt-4">
                                <span className="text-xs text-gray-500 block mb-2">0{i + 1}</span>
                                <h4 className="font-bold tracking-wider">{step}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 px-6 border-t border-white/5">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 max-w-lg">
                            COMMENCE <br /> <span className="text-neon">TRANSFORMATION.</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-8">
                            Ready to automate the future? Share your project details and our team will provide a strategic implementation roadmap within 24 hours.
                        </p>
                        <div className="space-y-4 text-sm font-mono text-gray-500">
                            <p>EMAIL: hello@nexus-ai.sys</p>
                            <p>HQ: San Francisco, CA</p>
                        </div>
                    </div>

                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-mono text-neon">NAME_ID</label>
                                <input type="text" className="w-full bg-transparent border-b border-white/20 py-2 focus:border-neon focus:outline-none transition-colors" placeholder="Enter identification" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-mono text-neon">CONTACT_SIGNAL</label>
                                <input type="email" className="w-full bg-transparent border-b border-white/20 py-2 focus:border-neon focus:outline-none transition-colors" placeholder="Enter email address" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-mono text-neon">PROJECT_SCOPE</label>
                            <textarea rows={4} className="w-full bg-transparent border-b border-white/20 py-2 focus:border-neon focus:outline-none transition-colors resize-none" placeholder="Describe mission parameters" />
                        </div>
                        <button className="w-full bg-white text-black font-bold py-4 hover:bg-neon transition-colors duration-300 tracking-wide text-sm">
                            TRANSMIT DATA
                        </button>
                    </form>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 px-6 border-t border-white/10 text-xs font-mono text-gray-600">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>© 2024 NEXUS AI SYSTEMS. ALL PROTOCOLS RESERVED.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-neon">TERMINAL</a>
                        <a href="#" className="hover:text-neon">PRIVACY_V1.0</a>
                        <a href="#" className="hover:text-neon">GITHUB</a>
                    </div>
                </div>
            </footer>
        </main>
    );
}
