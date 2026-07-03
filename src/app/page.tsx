import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import RecentChapters from "@/components/RecentChapters";
import ShowreelSection from "@/components/ShowreelSection";

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Legacy introduction bio excerpt */}
      <div className="py-28 px-6 md:px-16 bg-surface-dim/30 border-y border-outline-variant/10 text-center max-w-360 mx-auto">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-primary">
            The Julian Vance Studio Philosophy
          </span>
          <p className="font-display text-2xl sm:text-3xl text-on-surface leading-snug font-light">
            "Legacy is not what we leave behind, but the timeless frames we choose to keep alive."
          </p>
          <div className="w-12 h-px bg-outline-variant/55 mx-auto" />
          <p className="font-sans text-xs text-on-surface-variant max-w-lg mx-auto leading-relaxed tracking-wider font-light">
            5+ years capturing raw, moody, and timeless visual history for couples and artists globally.
          </p>
        </div>
      </div>

      {/* 2. Custom Seeker Showreel Video player */}
      <div id="showreel-anchor">
        <ShowreelSection />
      </div>

      {/* 3. Asymmetrical Work Grid */}
      <RecentChapters />

      {/* Footer Section */}
      <Footer />

    </>
  );
}
