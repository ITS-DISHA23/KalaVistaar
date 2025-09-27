import { motion } from 'framer-motion';

export function HeroStories() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden h-[720px] bg-[#fffef5]"
    >
      {/* Collage background inspired by Artisan hero */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-10 select-none">
        {/* Left big circle image */}
        <div className="absolute -left-24 top-44 h-[440px] w-[440px] rounded-full overflow-hidden border border-foreground/10 shadow-sm">
          <img
            src="/hero/left-circle.png"
            onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1627123428839-8b60d65ff2aa?q=80&w=1200&auto=format&fit=crop'; }}
            alt="artisan-left"
            className="h-full w-full object-cover"
          />
        </div>
        {/* Left tilted rectangle image */}
        <div className="absolute left-[300px] top-28 h-[380px] w-[320px] -rotate-8 rounded-3xl overflow-hidden shadow-md border border-foreground/10">
          <img
            src="/hero/left-tilt.png"
            onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1604214339996-69e71b3a79d6?q=80&w=1200&auto=format&fit=crop'; }}
            alt="artisan-left-2"
            className="h-full w-full object-cover"
          />
        </div>
        {/* Right tilted rectangle image */}
        <div className="absolute right-[300px] top-28 h-[380px] w-[320px] rotate-8 rounded-3xl overflow-hidden shadow-md border border-foreground/10">
          <img
            src="/hero/right-tilt.png"
            onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1579547945315-3a59c9f5b7a4?q=80&w=1200&auto=format&fit=crop'; }}
            alt="artisan-right-1"
            className="h-full w-full object-cover"
          />
        </div>
        {/* Right big circle image */}
        <div className="absolute -right-28 top-8 h-[560px] w-[560px] rounded-full overflow-hidden border border-foreground/10 shadow-sm">
          <img
            src="/hero/right-circle.png"
            onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1400&auto=format&fit=crop'; }}
            alt="artisan-right"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Diagonal guide lines to mimic figma vector */}
        <div className="absolute left-0 top-24 w-[140%] -translate-x-1/4 border-t border-foreground/10 rotate-[-12deg]" />
        <div className="absolute right-0 top-60 w-[140%] translate-x-1/4 border-t border-foreground/10 rotate-12" />
      </div>

      <div className="relative mx-auto max-w-6xl h-full">
        <div className="relative z-20 flex h-full items-center justify-center pt-10 pb-16 md:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-center px-6 py-10 md:px-10 md:py-12 bg-white/70 backdrop-blur-lg border border-white/60 rounded-2xl shadow-[0_30px_120px_rgba(0,0,0,0.15)]"
          >
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-tight">
              Where Every Thread
              <br />
              <span className="text-accent">Tells a Story</span>
            </h1>
            <p className="text-base md:text-xl text-foreground/70 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
              Journey into the heart of rural India where skilled artisans breathe life into age-old traditions,
              creating masterpieces that carry the soul of their heritage.
            </p>
            <motion.a
              href="#stories-grid"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center bg-accent text-accent-foreground px-8 py-4 rounded-full text-lg shadow-soft"
            >
              Explore Their Stories
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Subtle outline rings to match the Artisan feel */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -left-24 -top-10 h-[360px] w-[360px] rounded-full border border-foreground/10" />
        <div className="absolute right-0 -top-8 h-[560px] w-[560px] rounded-full border border-foreground/10" />
        <div className="absolute left-1/3 bottom-0 h-[420px] w-[420px] rounded-full border border-foreground/10" />
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="flex items-center justify-center pb-6"
      >
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>
    </motion.section>
  );
}


