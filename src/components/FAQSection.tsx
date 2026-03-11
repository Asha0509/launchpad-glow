import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        q: 'Is Aesthetics To Spaces free to use?',
        a: 'Yes — early access is completely free. Our core discovery and price comparison tools will always have a free tier. Optional premium features, such as advanced AI planning and execution management, may be introduced in the future.',
    },
    {
        q: 'What is Phase 2 and what does it offer?',
        a: 'Phase 2 introduces execution intelligence: video-to-3D spatial reconstruction, AR live view, verified sourcing, artisan cloud, Vastu audit, and turnkey execution management. These features enable users to move from design discovery to full project delivery within a single platform.',
    },
    {
        q: 'When does Phase 2 launch?',
        a: 'Phase 2 features will be rolled out progressively after our initial launch. Waitlist members and early users will receive priority access and the opportunity to shape feature development.',
    },
    {
        q: 'How does the AI Design Assistant work?',
        a: 'Describe your room in plain language — style, budget, dimensions (optional) — and our AI curates a complete product shortlist from 28,000+ verified items, sorted by price, rating, and aesthetic match.',
    },
    {
        q: 'How does the 3D spatial reconstruction work?',
        a: 'You can record a walkthrough of your room, and our system will generate a fully navigable 3D model. This allows you to visualize and validate furniture placement before making any purchase decisions.',
    },
    {
        q: 'What is AR Live View?',
        a: 'AR Live View enables you to use your phone to place real catalog products in your space virtually, providing an accurate and interactive preview before you buy.',
    },
    {
        q: 'How does verified sourcing and the artisan cloud benefit me?',
        a: 'Our sourcing engine scans 50+ verified vendors and includes a vetted artisan marketplace. This ensures you receive the best options on price, quality, and lead time, whether you choose retail or custom fabrication.',
    },
    {
        q: 'What is turnkey execution management?',
        a: 'Turnkey execution management provides end-to-end project oversight, including procurement, installation, and project management. This service is designed to deliver a seamless experience from design to delivery.',
    },
    {
        q: 'Is my data safe?',
        a: 'Yes. All user data is stored securely and is never sold to third parties. You may request data deletion at any time by contacting our support team.',
    },
    {
        q: 'How do I qualify for beta testing or early access to new features?',
        a: 'Indicate your interest in beta testing on the waitlist form. We select participants based on a range of criteria to ensure diverse feedback and robust testing. Selected users will be contacted via email.',
    },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-30px' });

    return (
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            className="glass-card rounded-2xl overflow-hidden">
            <button
                onClick={() => setOpen(o => !o)}
                className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-accent/30 transition-colors duration-200"
                aria-expanded={open}
            >
                <span className="font-display text-sm font-semibold text-foreground">{q}</span>
                <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }} className="shrink-0">
                    <ChevronDown size={18} className="text-muted-foreground" />
                </motion.div>
            </button>
            <AnimatePresence>
                {open && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: 'easeInOut' }}>
                        <div className="px-6 pb-6 font-body text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
                            {a}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default function FAQSection() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="faq" className="relative py-32">
            {/* Schema.org FAQ structured data for SEO */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'FAQPage',
                    mainEntity: faqs.map(f => ({
                        '@type': 'Question',
                        name: f.q,
                        acceptedAnswer: { '@type': 'Answer', text: f.a },
                    })),
                })
            }} />

            <div className="container mx-auto px-6">
                <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }} className="text-center mb-16">
                    <span className="text-xs font-body text-copper uppercase tracking-[0.2em] mb-4 block">FAQ</span>
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                        Common{' '}
                        <span className="text-gradient-teal">Questions</span>
                    </h2>
                    <p className="font-body text-muted-foreground max-w-md mx-auto">
                        Everything you need to know before joining the waitlist.
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto space-y-3">
                    {faqs.map((faq, i) => (
                        <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
