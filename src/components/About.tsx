import { Scissors, Heart, Award } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <div className="rounded-3xl overflow-hidden aspect-[3/4] shadow-lg">
                <img
                  src="/about-image-1.png"
                  alt="Portrait einer Frau mit modernem Long Bob Styling aus unserem Salon"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="bg-[#E9D5CA] rounded-3xl p-8 aspect-square flex flex-col justify-end text-[#2D3436]">
                <h3 className="text-4xl font-bold">15+</h3>
                <p className="font-medium opacity-80">Jahre Erfahrung</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-[#B4D3B2] rounded-3xl p-8 aspect-square flex flex-col justify-center items-center text-center text-white">
                <Award className="w-12 h-12 mb-4" />
                <p className="font-bold text-lg">Meisterbetrieb</p>
              </div>
              <div className="rounded-3xl overflow-hidden aspect-[3/4] shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1620331311520-246422fd82f9?q=80&w=1974&auto=format&fit=crop"
                  alt="Nahaufnahme eines Haarschnitts"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-[#8DA399] font-bold tracking-widest uppercase text-sm">Unsere Geschichte</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-[#2D3436] leading-tight">
                Max Mustermann: <br />
                Handwerk mit Herz & Seele.
              </h3>
            </div>
            
            <p className="text-lg text-[#2D3436]/70 leading-relaxed">
              Seit über einem Jahrzehnt stehen wir in Musterhausen für exzellente Haarschnitte und typgerechte Beratung. Max Mustermann eröffnete seinen Salon mit einer klaren Vision: Ein Ort, an dem Stil auf Entspannung trifft.
            </p>

            <div className="space-y-6">
              {[
                { icon: <Scissors className="w-6 h-6" />, title: "Präzises Handwerk", desc: "Jeder Schnitt wird mit höchster Sorgfalt und Technik ausgeführt." },
                { icon: <Heart className="w-6 h-6" />, title: "Individuelle Beratung", desc: "Wir nehmen uns Zeit für Sie und Ihren ganz persönlichen Look." },
                { icon: <Award className="w-6 h-6" />, title: "Premium Produkte", desc: "Wir verwenden ausschließlich hochwertige Pflegeprodukte." },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="bg-[#8DA399]/10 p-3 h-fit rounded-2xl text-[#8DA399]">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#2D3436]">{item.title}</h4>
                    <p className="text-[#2D3436]/60">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
