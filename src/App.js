
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ShieldCheck, BarChart3, Users, Landmark, Zap, Minus, Plus, ChevronLeft, ChevronRight, CheckCircle, ArrowRight } from 'lucide-react';

const AmlLandingPage = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeFaq, setActiveFaq] = useState(null);
    const [isAnnual, setIsAnnual] = useState(true);
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Solutions', href: '#solutions' },
        { name: 'Platform', href: '#platform' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'FAQ', href: '#faq' },
    ];

    const faqItems = [
        {
            q: 'What is AML compliance?',
            a: 'Anti-Money Laundering (AML) compliance refers to the laws, regulations, and procedures intended to prevent criminals from disguising illegally obtained funds as legitimate income. Our platform automates and streamlines these complex processes.'
        },
        {
            q: 'How does your platform help my business?',
            a: 'Our AI-powered platform provides real-time transaction monitoring, sanctions screening, and risk assessment to help you stay compliant, reduce manual workload, and protect your business from financial crime.'
        },
        {
            q: 'Is the platform suitable for small businesses?',
            a: 'Yes. We offer scalable pricing plans and a flexible platform that caters to businesses of all sizes, from startups to large enterprises. Our Starter plan is perfect for getting started with essential AML tools.'
        },
        {
            q: 'How secure is my data?',
            a: 'Data security is our top priority. We use end-to-end encryption, are fully GDPR and CCPA compliant, and our infrastructure is built on world-class, secure cloud services to ensure your data is always protected.'
        },
    ];
    
    const testimonials = [
        {
            quote: "This platform has transformed our compliance workflow. What used to take days now takes minutes. It's a game-changer for our entire team.",
            name: 'Sarah Chen',
            title: 'Head of Compliance, FinBank',
            avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d'
        },
        {
            quote: "The accuracy of the risk-scoring engine is unparalleled. We've reduced false positives by over 80%, allowing our analysts to focus on high-risk cases.",
            name: 'Michael Rodriguez',
            title: 'Chief Risk Officer, Capital Trust',
            avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026705d'
        },
        {
            quote: "Seamless integration and exceptional support. The implementation was smooth, and their team has been incredibly responsive to our needs.",
            name: 'Emily White',
            title: 'CTO, Global Payments Inc.',
            avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026706d'
        }
    ];

    const testimonialIntervalRef = useRef(null);

    const nextTestimonial = useCallback(() => {
        setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, [testimonials.length]);

    const prevTestimonial = () => {
        setActiveTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length);
    };
    
    useEffect(() => {
        testimonialIntervalRef.current = setInterval(nextTestimonial, 5000);
        return () => clearInterval(testimonialIntervalRef.current);
    }, [nextTestimonial]);
    

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    const handleScroll = useCallback(() => {
        setIsScrolled(window.scrollY > 10);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    const handleNavLinkClick = (e, href) => {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({
            behavior: 'smooth'
        });
        if(mobileMenuOpen) {
            setMobileMenuOpen(false);
        }
    };

    return (
        <div className="bg-slate-900 text-slate-300 font-sans antialiased">
            {/* Header */}
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <a href="#hero" className="flex items-center space-x-2 text-2xl font-bold text-white" onClick={(e) => handleNavLinkClick(e, '#hero')}>
                            <ShieldCheck className="w-8 h-8 text-indigo-400" />
                            <span>Aegis</span>
                        </a>
                        <nav className="hidden lg:flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <a key={link.name} href={link.href} onClick={(e) => handleNavLinkClick(e, link.href)} className="text-slate-300 hover:text-white transition-colors duration-200">
                                    {link.name}
                                </a>
                            ))}
                        </nav>
                        <div className="hidden lg:flex items-center space-x-4">
                            <a href="#" className="text-slate-300 hover:text-white transition-colors duration-200">Log In</a>
                            <a href="#" className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-5 py-2.5 rounded-md transition-all duration-300 shadow-md hover:shadow-lg">
                                Request a Demo
                            </a>
                        </div>
                        <div className="lg:hidden">
                            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate-300 hover:text-white focus:outline-none" aria-label="Open menu">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
                {mobileMenuOpen && (
                    <div className="lg:hidden bg-slate-800/95 backdrop-blur-sm">
                        <nav className="flex flex-col items-center space-y-4 px-4 pt-2 pb-4">
                            {navLinks.map((link) => (
                                <a key={link.name} href={link.href} onClick={(e) => handleNavLinkClick(e, link.href)} className="text-slate-300 hover:text-white transition-colors duration-200 block w-full text-center py-2">
                                    {link.name}
                                </a>
                            ))}
                            <a href="#" className="text-slate-300 hover:text-white transition-colors duration-200 block w-full text-center py-2">Log In</a>
                            <a href="#" className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-5 py-2.5 rounded-md transition-all duration-300 shadow-md hover:shadow-lg w-full text-center mt-2">
                                Request a Demo
                            </a>
                        </nav>
                    </div>
                )}
            </header>

            <main>
                {/* Hero Section */}
                <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
                    <div className="absolute inset-0 bg-slate-900">
                        <div className="absolute inset-0 bg-grid-slate-800/50 [mask-image:linear-gradient(to_bottom,white_5%,transparent_100%)]"></div>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] h-[50%] bg-indigo-900/30 rounded-full blur-3xl opacity-40 animate-pulse"></div>
                    </div>
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight">
                            The Future of <span className="text-indigo-400">AML Compliance.</span> Automated.
                        </h1>
                        <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-slate-400">
                            Harness the power of AI to automate transaction monitoring, screen against global watchlists, and build a smarter, faster, and more effective AML framework.
                        </p>
                        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a href="#" className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-8 py-3.5 rounded-md transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 w-full sm:w-auto flex items-center justify-center">
                                Get Started <ArrowRight className="w-5 h-5 ml-2" />
                            </a>
                            <a href="#platform" onClick={(e) => handleNavLinkClick(e, '#platform')} className="bg-slate-700/50 hover:bg-slate-700 text-white font-semibold px-8 py-3.5 rounded-md transition-all duration-300 w-full sm:w-auto">
                                Explore Platform
                            </a>
                        </div>
                        <div className="mt-20">
                            <p className="text-sm text-slate-500 uppercase tracking-wider">Trusted by leading financial institutions</p>
                            <div className="mt-6 flex justify-center items-center space-x-8 sm:space-x-12 opacity-60">
                                <Landmark className="w-10 h-10" />
                                <span className="text-2xl font-bold">GlobalBank</span>
                                <span className="text-2xl font-bold italic">FinTrust</span>
                                <span className="hidden sm:inline text-2xl font-bold">SecureCorp</span>
                                <span className="hidden md:inline text-2xl font-bold">Vertex</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Solutions Section */}
                <section id="solutions" className="py-20 sm:py-32 bg-slate-900/50">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h2 className="text-3xl sm:text-4xl font-bold text-white">A Complete AML Toolkit</h2>
                            <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
                                Everything you need to fight financial crime and stay compliant, all in one powerful platform.
                            </p>
                        </div>
                        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-slate-800 p-8 rounded-lg shadow-lg border border-slate-700/50 transform hover:-translate-y-2 transition-transform duration-300">
                                <div className="bg-indigo-500/10 text-indigo-400 rounded-lg w-12 h-12 flex items-center justify-center">
                                    <BarChart3 className="w-6 h-6"/>
                                </div>
                                <h3 className="mt-6 text-xl font-bold text-white">Transaction Monitoring</h3>
                                <p className="mt-2 text-slate-400">AI-driven analysis of user behavior and transactions to detect suspicious activity in real-time.</p>
                            </div>
                            <div className="bg-slate-800 p-8 rounded-lg shadow-lg border border-slate-700/50 transform hover:-translate-y-2 transition-transform duration-300">
                                <div className="bg-emerald-500/10 text-emerald-400 rounded-lg w-12 h-12 flex items-center justify-center">
                                    <Users className="w-6 h-6"/>
                                </div>
                                <h3 className="mt-6 text-xl font-bold text-white">Sanctions Screening</h3>
                                <p className="mt-2 text-slate-400">Screen customers against 1,300+ global watchlists, sanctions, and PEP lists continuously.</p>
                            </div>
                            <div className="bg-slate-800 p-8 rounded-lg shadow-lg border border-slate-700/50 transform hover:-translate-y-2 transition-transform duration-300">
                                <div className="bg-rose-500/10 text-rose-400 rounded-lg w-12 h-12 flex items-center justify-center">
                                    <Zap className="w-6 h-6"/>
                                </div>
                                <h3 className="mt-6 text-xl font-bold text-white">Automated Risk Scoring</h3>
                                <p className="mt-2 text-slate-400">Dynamically assess customer risk based on configurable rules and machine learning models.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Platform Showcase */}
                <section id="platform" className="py-20 sm:py-32">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="pr-0 lg:pr-12">
                                <h2 className="text-3xl sm:text-4xl font-bold text-white">The Aegis Intelligence Hub</h2>
                                <p className="mt-4 text-lg text-slate-400">
                                    Our centralized dashboard provides a 360-degree view of your AML program. Investigate alerts, manage cases, and generate compliance reports with ease. Experience unparalleled clarity and control.
                                </p>
                                <ul className="mt-8 space-y-4">
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 text-emerald-400 mt-1 mr-3 flex-shrink-0" />
                                        <span><strong className="text-white">Intuitive Interface:</strong> Designed for analysts, loved by managers.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 text-emerald-400 mt-1 mr-3 flex-shrink-0" />
                                        <span><strong className="text-white">Customizable Workflows:</strong> Adapt the platform to your specific compliance processes.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 text-emerald-400 mt-1 mr-3 flex-shrink-0" />
                                        <span><strong className="text-white">API-First Integration:</strong> Seamlessly connect Aegis with your existing tech stack.</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-slate-800 p-4 rounded-lg shadow-2xl border border-slate-700">
                                <div className="aspect-w-16 aspect-h-10">
                                    <img src="https://placehold.co/800x500/1e293b/4f46e5?text=Dashboard+UI" alt="Platform Dashboard" className="rounded-md object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pricing Section */}
                <section id="pricing" className="py-20 sm:py-32 bg-slate-900/50">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto">
                            <h2 className="text-3xl sm:text-4xl font-bold text-white">Transparent Pricing for Teams of All Sizes</h2>
                            <p className="mt-4 text-lg text-slate-400">Choose the plan that fits your needs. Get started today and scale as you grow.</p>
                            <div className="mt-8 flex justify-center items-center space-x-4">
                                <span className={!isAnnual ? 'text-slate-400' : 'text-white'}>Monthly</span>
                                <button onClick={() => setIsAnnual(!isAnnual)} className="relative inline-flex h-6 w-11 items-center rounded-full bg-slate-700" aria-label="Toggle pricing period">
                                    <span className={`${isAnnual ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-indigo-500 transition-transform`}/>
                                </button>
                                <span className={isAnnual ? 'text-white' : 'text-slate-400'}>Annually</span>
                                <span className="bg-emerald-500/20 text-emerald-400 text-xs font-semibold px-2 py-1 rounded-full">Save 20%</span>
                            </div>
                        </div>
                        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Starter Plan */}
                            <div className="bg-slate-800 p-8 rounded-lg shadow-lg border border-slate-700 flex flex-col">
                                <h3 className="text-2xl font-bold text-white">Starter</h3>
                                <p className="mt-2 text-slate-400">For startups and small businesses getting started with AML.</p>
                                <div className="mt-6">
                                    <span className="text-4xl font-extrabold text-white">${isAnnual ? '499' : '599'}</span>
                                    <span className="text-slate-400">/mo</span>
                                </div>
                                <a href="#" className="mt-6 w-full text-center bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3 rounded-md transition-colors">Get Started</a>
                                <ul className="mt-8 space-y-4 text-slate-300 flex-grow">
                                    {[ 'Up to 5,000 checks/mo', 'Basic Sanctions Screening', 'Standard Risk Scoring', 'Email Support'].map(item =>
                                        <li key={item} className="flex items-center"><CheckCircle className="w-5 h-5 text-emerald-400 mr-3" />{item}</li>
                                    )}
                                </ul>
                            </div>
                            {/* Growth Plan */}
                            <div className="bg-slate-800 p-8 rounded-lg shadow-2xl border-2 border-indigo-500 flex flex-col relative">
                                <span className="absolute top-0 -translate-y-1/2 bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</span>
                                <h3 className="text-2xl font-bold text-white">Growth</h3>
                                <p className="mt-2 text-slate-400">For growing businesses that need a robust compliance solution.</p>
                                <div className="mt-6">
                                    <span className="text-4xl font-extrabold text-white">${isAnnual ? '1,199' : '1,499'}</span>
                                    <span className="text-slate-400">/mo</span>
                                </div>
                                <a href="#" className="mt-6 w-full text-center bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 rounded-md transition-colors">Get Started</a>
                                <ul className="mt-8 space-y-4 text-slate-300 flex-grow">
                                    {[ 'Up to 25,000 checks/mo', 'Continuous Sanctions Screening', 'Advanced Risk Scoring', 'Real-time Transaction Monitoring', 'Priority Support'].map(item =>
                                        <li key={item} className="flex items-center"><CheckCircle className="w-5 h-5 text-emerald-400 mr-3" />{item}</li>
                                    )}
                                </ul>
                            </div>
                            {/* Enterprise Plan */}
                            <div className="bg-slate-800 p-8 rounded-lg shadow-lg border border-slate-700 flex flex-col">
                                <h3 className="text-2xl font-bold text-white">Enterprise</h3>
                                <p className="mt-2 text-slate-400">For large-scale organizations with custom requirements.</p>
                                <div className="mt-6">
                                    <span className="text-4xl font-extrabold text-white">Custom</span>
                                </div>
                                <a href="#" className="mt-6 w-full text-center bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3 rounded-md transition-colors">Contact Sales</a>
                                <ul className="mt-8 space-y-4 text-slate-300 flex-grow">
                                    {[ 'Unlimited Checks', 'Custom Integrations & API Access', 'Dedicated Account Manager', 'On-premise Deployment Option', '24/7/365 Support'].map(item =>
                                        <li key={item} className="flex items-center"><CheckCircle className="w-5 h-5 text-emerald-400 mr-3" />{item}</li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section id="testimonials" className="py-20 sm:py-32 relative overflow-hidden">
                    <div className="absolute inset-0 bg-grid-slate-800/20 [mask-image:linear-gradient(to_bottom,white_1%,transparent_100%)]"></div>
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="text-center">
                            <h2 className="text-3xl sm:text-4xl font-bold text-white">Trusted by Compliance Leaders</h2>
                            <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
                                Don't just take our word for it. Here's what our customers have to say.
                            </p>
                        </div>
                        <div className="relative mt-16 max-w-3xl mx-auto">
                            <div className="overflow-hidden">
                                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}>
                                    {testimonials.map((t, index) => (
                                        <div key={index} className="w-full flex-shrink-0">
                                            <div className="bg-slate-800 p-8 rounded-lg text-center border border-slate-700">
                                                <img src={t.avatar} alt={t.name} className="w-20 h-20 rounded-full mx-auto mb-6 border-2 border-indigo-400" />
                                                <p className="text-xl italic text-slate-300">"{t.quote}"</p>
                                                <div className="mt-6">
                                                    <p className="font-bold text-white">{t.name}</p>
                                                    <p className="text-slate-400">{t.title}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <button onClick={prevTestimonial} className="absolute top-1/2 -left-4 md:-left-16 transform -translate-y-1/2 bg-slate-700/50 hover:bg-slate-700 p-3 rounded-full text-white transition-colors" aria-label="Previous testimonial">
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button onClick={nextTestimonial} className="absolute top-1/2 -right-4 md:-right-16 transform -translate-y-1/2 bg-slate-700/50 hover:bg-slate-700 p-3 rounded-full text-white transition-colors" aria-label="Next testimonial">
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section id="faq" className="py-20 sm:py-32 bg-slate-900/50">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl mx-auto">
                            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">Frequently Asked Questions</h2>
                            <div className="mt-12 space-y-4">
                                {faqItems.map((item, index) => (
                                    <div key={index} className="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden">
                                        <button
                                            onClick={() => toggleFaq(index)}
                                            className="w-full flex justify-between items-center text-left p-6 text-white font-semibold text-lg hover:bg-slate-700/50 transition-colors"
                                            aria-expanded={activeFaq === index}
                                        >
                                            <span>{item.q}</span>
                                            {activeFaq === index ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                                        </button>
                                        <div className={`transition-all duration-300 ease-in-out ${activeFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                            <p className="p-6 pt-0 text-slate-400">{item.a}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* CTA Section */}
                <section id="cta" className="py-20 sm:py-32">
                     <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-indigo-600/80 rounded-lg p-12 text-center relative overflow-hidden">
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/50 rounded-full blur-xl"></div>
                            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-indigo-500/50 rounded-full blur-xl"></div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-white">Ready to Modernize Your AML Strategy?</h2>
                            <p className="mt-4 text-lg text-indigo-200 max-w-2xl mx-auto">Schedule a personalized demo to see how Aegis can help you combat financial crime and ensure compliance with confidence.</p>
                            <a href="#" className="mt-8 inline-block bg-white hover:bg-slate-200 text-indigo-600 font-bold px-8 py-3.5 rounded-md transition-all duration-300 shadow-lg hover:scale-105">
                                Request a Demo
                            </a>
                        </div>
                    </div>
                </section>

            </main>

            {/* Footer */}
            <footer className="bg-slate-800/50 border-t border-slate-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                        <div className="col-span-2">
                            <a href="#hero" className="flex items-center space-x-2 text-xl font-bold text-white" onClick={(e) => handleNavLinkClick(e, '#hero')}>
                                <ShieldCheck className="w-7 h-7 text-indigo-400" />
                                <span>Aegis</span>
                            </a>
                            <p className="mt-4 text-slate-400 max-w-xs">AI-powered AML compliance for the modern financial world.</p>
                             <div className="mt-6">
                                <h4 className="text-white font-semibold">Stay updated</h4>
                                <form className="mt-2 flex">
                                    <input type="email" placeholder="Enter your email" className="w-full bg-slate-700 border-slate-600 rounded-l-md px-3 py-2 text-white focus:ring-indigo-500 focus:border-indigo-500" />
                                    <button type="submit" className="bg-indigo-500 hover:bg-indigo-600 text-white p-2 rounded-r-md" aria-label="Subscribe to newsletter"><ArrowRight/></button>
                                </form>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold">Solutions</h4>
                            <ul className="mt-4 space-y-2">
                                {['Transaction Monitoring', 'Sanctions Screening', 'Risk Assessment', 'Case Management'].map(item => <li key={item}><a href="#" className="text-slate-400 hover:text-white transition-colors">{item}</a></li>)}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold">Company</h4>
                            <ul className="mt-4 space-y-2">
                                {['About Us', 'Careers', 'Press', 'Contact'].map(item => <li key={item}><a href="#" className="text-slate-400 hover:text-white transition-colors">{item}</a></li>)}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold">Resources</h4>
                            <ul className="mt-4 space-y-2">
                                {['Blog', 'Whitepapers', 'API Docs', 'Support'].map(item => <li key={item}><a href="#" className="text-slate-400 hover:text-white transition-colors">{item}</a></li>)}
                            </ul>
                        </div>
                         <div>
                            <h4 className="text-white font-semibold">Legal</h4>
                            <ul className="mt-4 space-y-2">
                                {['Privacy Policy', 'Terms of Service', 'Security'].map(item => <li key={item}><a href="#" className="text-slate-400 hover:text-white transition-colors">{item}</a></li>)}
                            </ul>
                        </div>
                    </div>
                    <div className="mt-12 border-t border-slate-800 pt-8 text-center text-slate-500">
                        <p>&copy; {new Date().getFullYear()} Aegis Compliance Inc. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default AmlLandingPage;
