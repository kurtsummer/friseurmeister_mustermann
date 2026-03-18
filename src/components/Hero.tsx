import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center pt-24 pb-32 md:pt-40 md:pb-48">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.png"
          alt="Business Meeting in Graz"
          className="w-full h-full object-cover"
        />
        {/* Soft gradient overlay for readability and "Calm" atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F8F9FC] via-[#F8F9FC]/95 to-[#F8F9FC]/30"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="flex flex-col items-start gap-20">
          {/* Text Content */}
          <div className="w-full lg:w-3/5 text-left animate-fade-in">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#6D5EF5]/8 text-[#6D5EF5] text-sm font-bold mb-8 uppercase tracking-widest border border-[#6D5EF5]/10">
              <Sparkles className="w-4 h-4" />
              <span>KI-Marketing Strategie für KMU</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#1F2A44] mb-8 leading-[1.05]">
              KI-Marketing für KMU — <br />
              <span className="text-[#6D5EF5]">persönlich</span> begleitet, <br />
              <span className="text-[#6D5EF5]">professionell</span> umgesetzt.
            </h1>
            
            <p className="text-xl md:text-2xl text-[#1A1D24]/70 mb-12 leading-relaxed max-w-2xl font-medium">
              Ich unterstütze kleine und mittlere Unternehmen dabei, KI sinnvoll im Marketing einzusetzen — von Social Media über Webseiten bis zu effizienteren Prozessen. Verständlich in der Beratung, modern in der Umsetzung und klar auf Ergebnisse ausgerichtet.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Button
                size="lg"
                className="w-full sm:w-auto h-16 px-10 rounded-2xl bg-[#1F2A44] hover:bg-[#1F2A44]/95 text-white font-bold text-xl shadow-xl shadow-[#1F2A44]/10 transition-all hover-lift active:scale-[0.98]"
              >
                Kostenloses Erstgespräch anfragen
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto h-16 px-10 rounded-2xl border-[#1F2A44]/10 text-[#1F2A44]/70 font-bold text-xl hover:bg-white hover:text-[#1F2A44] transition-all hover-lift"
              >
                Leistungen ansehen
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6 text-[#1A1D24]/50 text-sm font-semibold">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7FA38A]"></span>
                Kostenlos & unverbindlich
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7FA38A]"></span>
                30 Min. Online-Call (Zoom)
              </div>
            </div>

            <div className="mt-16 flex flex-wrap items-center gap-8 text-[#1A1D24]/60">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#7FA38A]" />
                <span className="text-base font-bold">Keine Vorkenntnisse nötig</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#7FA38A]" />
                <span className="text-base font-bold">Individuelle Betreuung</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
