import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Video, ShoppingBag, Hammer, Smartphone, Compass, ClipboardList, Sparkles, Lock } from 'lucide-react';

const phase2Features = [
    {
        icon: Video,
        title: 'Video-to-3D Spatial Reconstruction',
        desc: 'Record a room walkthrough and navigate a fully reconstructed 3D model. Drag, drop, and validate furniture placement in your actual space before committing to a single rupee.',
        badge: 'Coming Soon',
        accentClass: 'from-primary/20 to-primary/5',
        borderClass: 'border-primary/20',
        iconBg: 'bg-primary/10',
        iconColor: 'text-primary',
        glowColor: 'primary',
        size: 'lg', // spans 2 cols
    },
    {
        icon: Smartphone,
        title: 'AR Live View',
        desc: 'Point your phone at any wall or corner. See real catalog products placed in real space — live, accurate, and shareable.',
        badge: 'Coming Soon',
        accentClass: 'from-copper/20 to-copper/5',
        borderClass: 'border-copper/20',
        iconBg: 'bg-copper/10',
        iconColor: 'text-copper',
        glowColor: 'copper',
        size: 'sm',
    },
    {
        icon: ShoppingBag,
        title: 'Verified Sourcing Engine',
        desc: 'Auto-scan 50+ verified vendors — retail, local, and artisan — with confidence scores and bundled execution packages. The 12-platform problem, solved permanently.',
        badge: 'Coming Soon',
        accentClass: 'from-primary/20 to-primary/5',
        borderClass: 'border-primary/20',
        iconBg: 'bg-primary/10',
        iconColor: 'text-primary',
        glowColor: 'primary',
        size: 'sm',
    },
    {
        icon: Hammer,
        title: 'Artisan Cloud',
        desc: 'A vetted craftsmen marketplace built into the sourcing engine. Compare retail furniture to custom artisan fabrication — on price, lead time, and quality — in real time. No global platform comes close.',
        badge: 'Coming Soon',
        accentClass: 'from-copper/20 to-copper/5',
        borderClass: 'border-copper/20',
        iconBg: 'bg-copper/10',
        iconColor: 'text-copper',
        glowColor: 'copper',
        size: 'sm',
    },
    {
        icon: Compass,
        title: 'Vastu Audit',
        desc: 'Automated floor plan validation across 50+ structured parameters with directional recommendations. Culturally relevant. Data-driven. Built for Indian homeowners.',
        badge: 'Coming Soon',
        accentClass: 'from-primary/20 to-primary/5',
        borderClass: 'border-primary/20',
        iconBg: 'bg-primary/10',
        iconColor: 'text-primary',
        glowColor: 'primary',
        size: 'sm',
    },
    {
        icon: ClipboardList,
        title: 'Turnkey Execution Management',
        desc: 'Verified project managers. Procurement coordination. Installation oversight. Bundled sourcing + execution packages. This is where A2S becomes full-stack home infrastructure.',
        badge: 'Coming Soon',
        accentClass: 'from-copper/20 to-copper/5',
        borderClass: 'border-copper/20',
        iconBg: 'bg-copper/10',
        iconColor: 'text-copper',
        glowColor: 'copper',
        size: 'lg',
    },
];

// Animated mini visual for the 3D Reconstruction card
function SpatialReconVisual() {
    return (
        <div className="relative h-24 mb-5 overflow-hidden rounded-xl bg-accent/20">
            <div className="absolute inset-0 flex items-center justify-center">
                {/* Grid floor */}
                <div
                    className="absolute bottom-0 left-0 right-0 h-10 opacity-20"
                    style={{
                        backgroundImage:
                            'repeating-linear-gradient(90deg, hsl(var(--primary)) 0,hsl(var(--primary)) 1px,transparent 0,transparent 50%), repeating-linear-gradient(180deg, hsl(var(--primary)) 0,hsl(var(--primary)) 1px,transparent 0,transparent 50%)',
                        backgroundSize: '20px 10px',
                    }}
                />
                {/* Room walls wireframe */}
                <motion.div
                    className="absolute border border-primary/30 rounded-sm"
                    style={{ width: 80, height: 56, bottom: 16, left: '50%', x: '-50%' }}
                    animate={{ rotateY: [0, 12, 0, -12, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <div className="absolute top-0 left-0 w-full h-full border border-primary/15 rounded-sm scale-75" />
                </motion.div>
                {/* Floating furniture dots */}
                {[
                    { x: -28, y: 8, delay: 0.3 },
                    { x: 20, y: 14, delay: 0.8 },
                    { x: -8, y: 20, delay: 1.4 },
                ].map((dot, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-3 h-2 rounded-sm bg-primary/50"
                        style={{ bottom: 22, left: `calc(50% + ${dot.x}px)` }}
                        animate={{ opacity: [0, 1, 1, 0], y: [dot.y, dot.y - 4, dot.y, dot.y + 2] }}
                        transition={{ duration: 3, delay: dot.delay, repeat: Infinity, repeatDelay: 2 }}
                    />
                ))}
                {/* Scan line */}
                <motion.div
                    className="absolute left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-primary/60 to-transparent"
                    animate={{ y: [52, 10, 52] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                />
            </div>
            <div className="absolute top-2 left-3 text-[9px] font-body text-primary/60 uppercase tracking-widest">Scanning…</div>
        </div>
    );
}

// AR visual
function ARVisual() {
    return (
        <div className="relative h-16 mb-4 overflow-hidden rounded-xl bg-accent/20 flex items-center justify-center">
            <motion.div
                className="absolute w-10 h-10 border-2 border-copper/50 rounded"
                animate={{ scale: [1, 1.2, 1], rotate: [0, 5, 0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
                className="absolute w-5 h-5 bg-copper/20 border border-copper/40 rounded-sm"
                animate={{ x: [-12, 8, -12], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
            />
            <div className="absolute bottom-1.5 right-2.5 text-[9px] font-body text-copper/60 uppercase tracking-widest">AR Mode</div>
        </div>
    );
}

// Sourcing engine visual
function SourcingVisual() {
    return (
        <div className="relative h-16 mb-4 overflow-hidden rounded-xl bg-accent/20 p-3 flex items-center gap-2">
            {[90, 72, 85, 60, 95].map((score, i) => (
                <div key={i} className="flex flex-col items-center gap-0.5 flex-1">
                    <motion.div
                        className="w-full rounded-t-sm bg-primary/20"
                        style={{ height: `${score * 0.28}px` }}
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 + i * 0.15, repeat: Infinity, repeatType: 'reverse', repeatDelay: 4 }}
                    />
                    <span className="text-[7px] font-body text-muted-foreground">{score}%</span>
                </div>
            ))}
            <div className="absolute top-1.5 right-2 text-[8px] font-body text-primary/60">50+ vendors</div>
        </div>
    );
}

// Artisan visual
function ArtisanVisual() {
    return (
        <div className="relative h-16 mb-4 overflow-hidden rounded-xl bg-accent/20 flex items-center justify-center gap-4 px-4">
            <div className="text-center">
                <div className="text-[10px] font-body text-muted-foreground">Retail</div>
                <motion.div
                    className="text-sm font-display font-bold text-foreground"
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                >₹42K</motion.div>
            </div>
            <motion.div
                className="text-copper font-bold"
                animate={{ x: [-3, 3, -3] }}
                transition={{ duration: 2, repeat: Infinity }}
            >vs</motion.div>
            <div className="text-center">
                <div className="text-[10px] font-body text-muted-foreground">Artisan</div>
                <motion.div
                    className="text-sm font-display font-bold text-copper"
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 3, delay: 1.5, repeat: Infinity }}
                >₹27K</motion.div>
            </div>
        </div>
    );
}

// Vastu visual
function VastuVisual() {
    return (
        <div className="relative h-16 mb-4 overflow-hidden rounded-xl bg-accent/20 flex items-center justify-center">
            <motion.div
                className="relative w-12 h-12 rounded-full border-2 border-primary/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
                {['N', 'E', 'S', 'W'].map((dir, i) => (
                    <span
                        key={dir}
                        className="absolute text-[7px] font-body text-primary/50"
                        style={{
                            top: i === 0 ? '0' : i === 2 ? 'auto' : '40%',
                            bottom: i === 2 ? '0' : 'auto',
                            left: i === 3 ? '0' : i === 1 ? 'auto' : '40%',
                            right: i === 1 ? '0' : 'auto',
                        }}
                    >
                        {dir}
                    </span>
                ))}
            </motion.div>
            <div className="absolute right-3 top-2 text-[8px] font-body text-primary/50">50+ params</div>
        </div>
    );
}

// Turnkey visual
function TurnkeyVisual() {
    const steps = ['Design', 'Source', 'Deliver', 'Done ✓'];
    return (
        <div className="relative h-16 mb-4 overflow-hidden rounded-xl bg-accent/20 flex items-center justify-center gap-1 px-3">
            {steps.map((step, i) => (
                <div key={step} className="flex items-center gap-1">
                    <motion.div
                        className="px-2 py-1 rounded text-[8px] font-body bg-card border border-border text-muted-foreground"
                        animate={{
                            borderColor: ['hsl(var(--border))', 'hsl(var(--copper))', 'hsl(var(--border))'],
                            color: ['hsl(var(--muted-foreground))', 'hsl(var(--copper))', 'hsl(var(--muted-foreground))'],
                        }}
                        transition={{ duration: 6, delay: i * 1.5, repeat: Infinity }}
                    >
                        {step}
                    </motion.div>
                    {i < steps.length - 1 && (
                        <motion.div
                            className="w-2 h-px bg-copper/30"
                            animate={{ opacity: [0.2, 1, 0.2] }}
                            transition={{ duration: 2, delay: i * 0.8, repeat: Infinity }}
                        />
                    )}
                </div>
            ))}
        </div>
    );
}

const featureVisuals = [
    SpatialReconVisual,
    ARVisual,
    SourcingVisual,
    ArtisanVisual,
    VastuVisual,
    TurnkeyVisual,
];

function Phase2Card({ feature, index }: { feature: typeof phase2Features[0]; index: number }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-60px' });
    const Visual = featureVisuals[index];
    const isLarge = feature.size === 'lg';

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            className={`group relative overflow-hidden rounded-2xl border bg-card/60 backdrop-blur-sm p-6 flex flex-col
        hover:shadow-lg transition-all duration-500
        ${feature.borderClass}
        ${isLarge ? 'md:col-span-2' : 'md:col-span-1'}
      `}
        >
            {/* Gradient glow blob */}
            <div
                className={`absolute -top-16 -right-16 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-700
          bg-gradient-to-br ${feature.accentClass}`}
            />

            {/* Coming Soon badge */}
            <div className="flex items-center justify-between mb-4">
                <div
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[10px] font-body font-semibold uppercase tracking-widest
            ${feature.borderClass} ${feature.iconColor} bg-card/40`}
                >
                    <Lock size={9} />
                    {feature.badge}
                </div>
            </div>

            {/* Animated visual */}
            {inView && <Visual />}

            {/* Icon + Title */}
            <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 rounded-xl ${feature.iconBg} flex items-center justify-center shrink-0 transition-colors group-hover:scale-110 duration-300`}>
                    <feature.icon size={18} className={feature.iconColor} />
                </div>
                <h3 className="font-display text-base font-semibold text-foreground leading-tight">{feature.title}</h3>
            </div>

            {/* Description */}
            <p className="font-body text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
        </motion.div>
    );
}

export default function Phase2Section() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="phase2" className="relative py-32 overflow-hidden">
            {/* Background glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-primary/4 blur-[140px]" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-copper/4 blur-[120px]" />

            <div className="container mx-auto px-6 relative">
                {/* Section header */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    {/* Phase badge */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={inView ? { scale: 1, opacity: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-copper/30 bg-copper/5 mb-6"
                    >
                        <motion.div
                            className="w-1.5 h-1.5 rounded-full bg-copper"
                            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                        <span className="text-[11px] font-body font-semibold text-copper uppercase tracking-[0.2em]">
                            Phase 2 — Execution Intelligence
                        </span>
                    </motion.div>

                    <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-5 leading-tight">
                        We Start with Catalog.{' '}
                        <br className="hidden md:block" />
                        <span className="text-gradient-copper">We End with Execution.</span>
                    </h2>

                    <p className="font-body text-muted-foreground max-w-2xl mx-auto text-base leading-relaxed mb-3">
                        Phase 1 builds the intelligence foundation. Phase 2 activates execution at scale —
                        turning design plans into fully delivered rooms, zero friction.
                    </p>

                    <div className="flex items-center justify-center gap-2 mt-6">
                        <Sparkles size={14} className="text-copper" />
                        <span className="font-body text-sm text-copper font-medium">
                            Every Phase 1 interaction trains the system that powers what comes next.
                        </span>
                        <Sparkles size={14} className="text-copper" />
                    </div>
                </motion.div>

                {/* Phase 2 feature cards grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {phase2Features.map((feature, i) => (
                        <Phase2Card key={feature.title} feature={feature} index={i} />
                    ))}
                </div>

                {/* Bottom CTA nudge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className="text-center mt-14"
                >
                    <p className="font-body text-muted-foreground text-sm">
                        Join the waitlist today — early users shape what Phase 2 looks like.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
