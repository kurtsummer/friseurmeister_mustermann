import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ChefHat, 
  ArrowLeft, 
  Calendar, 
  ShoppingCart, 
  Printer, 
  Share2, 
  Clock, 
  Flame, 
  Wallet,
  CheckCircle2,
  UtensilsCrossed,
  ListChecks,
  Info
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Meal {
  type: string;
  name: string;
  calories: number;
  time: string;
  ingredients: string[];
  instructions: string[];
  imageUrl: string;
}

interface DayPlan {
  day: string;
  meals: Meal[];
}

const Plan = () => {
  const navigate = useNavigate();
  const [plan, setPlan] = useState<DayPlan[]>([]);
  const [inputData, setInputData] = useState<any>(null);

  useEffect(() => {
    const saved = localStorage.getItem("prep_master_input");
    if (saved) {
      const data = JSON.parse(saved);
      setInputData(data);
      generateMockPlan(data);
    } else {
      navigate("/generator");
    }
  }, [navigate]);

  const generateMockPlan = (data: any) => {
    const days = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"];
    
    const recipes: Record<string, Omit<Meal, "type">[]> = {
      Omnivor: [
        { 
          name: "Hähnchen-Reis-Pfanne", 
          calories: 650, 
          time: "25 Min", 
          imageUrl: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
          ingredients: ["150g Hähnchenbrust", "80g Reis (ungekocht)", "150g Brokkoli", "1 EL Sojasauce", "1 TL Öl", "Frischer Ingwer", "1 Frühlingszwiebel"],
          instructions: [
            "Den Reis in einem Sieb gründlich waschen, bis das Wasser klar bleibt. Dann nach Packungsanweisung in leicht gesalzenem Wasser gar kochen.",
            "Während der Reis kocht, die Hähnchenbrust unter kaltem Wasser abspülen, trocken tupfen und in etwa 2 cm große Würfel schneiden.",
            "Den Brokkoli in kleine Röschen teilen. Den Ingwer fein reiben und die Frühlingszwiebel in feine Ringe schneiden.",
            "In einer großen Pfanne oder einem Wok das Öl stark erhitzen. Das Hähnchen darin von allen Seiten ca. 5 Minuten goldbraun und durchbraten.",
            "Die Brokkoliröschen und den Ingwer hinzufügen und für weitere 3-4 Minuten mitbraten, bis der Brokkoli bissfest ist.",
            "Den gekochten Reis unterheben, mit Sojasauce ablöschen und alles gut vermengen. Mit Frühlingszwiebeln garniert servieren."
          ]
        },
        { 
          name: "Pasta Bolognese", 
          calories: 750, 
          time: "30 Min", 
          imageUrl: "https://images.unsplash.com/photo-1622973536968-3ead9e780960?auto=format&fit=crop&w=800&q=80",
          ingredients: ["100g Rinderhack", "100g Vollkornpasta", "200ml Tomatensauce", "1 EL Parmesan", "1 kleine Zwiebel", "1 Knoblauchzehe", "Getrockneter Oregano"],
          instructions: [
            "Einen großen Topf mit Salzwasser zum Kochen bringen und die Pasta darin nach Packungsanweisung al dente garen.",
            "Zwiebel und Knoblauch fein würfeln. In einer Pfanne etwas Öl erhitzen und das Rinderhackfleisch darin krümelig anbraten.",
            "Zwiebeln und Knoblauch hinzugeben und glasig dünsten. Mit Oregano, Salz und Pfeffer würzen.",
            "Die Tomatensauce hinzugeben, die Hitze reduzieren und alles bei geschlossenem Deckel ca. 10-15 Minuten köcheln lassen, damit sich die Aromen entfalten.",
            "Die Pasta abgießen und direkt mit der Sauce mischen oder die Sauce über die Pasta geben. Mit frisch geriebenem Parmesan bestreuen."
          ]
        },
      ],
      Vegetarisch: [
        { 
          name: "Linsencurry", 
          calories: 600, 
          time: "30 Min", 
          imageUrl: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
          ingredients: ["80g rote Linsen", "100ml Kokosmilch", "60g Reis", "Eine Handvoll Spinat", "1 TL Currypulver", "1/2 Zwiebel", "Prise Kurkuma"],
          instructions: [
            "Den Reis nach Packungsanweisung kochen. Die roten Linsen in einem Sieb waschen.",
            "Die Zwiebel fein würfeln und in einem Topf mit etwas Öl dünsten. Currypulver und Kurkuma kurz mitrösten, bis es duftet.",
            "Die Linsen hinzufügen und mit der Kokosmilch sowie etwa 100ml Wasser ablöschen.",
            "Bei mittlerer Hitze ca. 15-20 Minuten köcheln lassen, bis die Linsen weich sind und die Flüssigkeit sämig geworden ist.",
            "Zum Schluss den frischen Spinat unterrühren und zusammenfallen lassen. Mit Salz und Pfeffer abschmecken und auf dem Reis servieren."
          ]
        },
        { 
          name: "Kichererbsen-Salat", 
          calories: 500, 
          time: "15 Min", 
          imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
          ingredients: ["1 Dose Kichererbsen (240g Abtropfgewicht)", "1/2 Gurke", "50g Feta", "1 EL Olivenöl", "Saft einer halben Zitrone", "Frische Petersilie"],
          instructions: [
            "Die Kichererbsen in ein Sieb geben, gründlich mit kaltem Wasser abspülen und gut abtropfen lassen.",
            "Die Gurke waschen und in kleine Würfel schneiden. Die Petersilie fein hacken.",
            "In einer Schüssel Kichererbsen, Gurkenwürfel und die gehackte Petersilie vermengen.",
            "Den Feta mit den Händen grob über den Salat bröseln.",
            "Für das Dressing Olivenöl und Zitronensaft verrühren, über den Salat geben und alles vorsichtig vermischen. Mit Salz und Pfeffer abschmecken."
          ]
        },
      ],
      Vegan: [
        { 
          name: "Tofu Stir-fry", 
          calories: 550, 
          time: "20 Min", 
          imageUrl: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
          ingredients: ["150g Tofu (natur oder geräuchert)", "1 rote Paprika", "100g Reisnudeln", "2 EL Erdnusssauce", "Sesamsamen", "1 Frühlingszwiebel"],
          instructions: [
            "Reisnudeln in eine Schüssel geben, mit kochendem Wasser übergießen und ca. 5-8 Minuten ziehen lassen (siehe Packungsanweisung), dann abgießen.",
            "Den Tofu in Würfel schneiden und mit Küchenpapier trocken pressen, damit er beim Braten knusprig wird.",
            "Paprika entkernen und in Streifen schneiden. Frühlingszwiebel in Ringe schneiden.",
            "In einer Pfanne Öl erhitzen und den Tofu ca. 5-7 Minuten rundherum scharf anbraten, bis er goldbraun ist.",
            "Die Paprika hinzufügen und 3-4 Minuten mitgaren, bis sie noch leicht bissfest ist.",
            "Die Erdnusssauce und die abgetropften Nudeln in die Pfanne geben, alles gut vermengen und kurz erwärmen. Mit Sesamsamen bestreut servieren."
          ]
        },
      ],
      "High Protein": [
        { 
          name: "Putensteak mit Quark", 
          calories: 600, 
          time: "20 Min", 
          imageUrl: "https://images.unsplash.com/photo-1632778149975-420e0e75ee08?auto=format&fit=crop&w=800&q=80",
          ingredients: ["200g Putensteak", "150g Magerquark", "250g gemischtes Pfannengemüse", "Frische Kräuter (Schnittlauch/Dill)", "1 TL Paprikapulver edelsüß"],
          instructions: [
            "Das Putensteak trocken tupfen und von beiden Seiten mit Salz, Pfeffer und Paprikapulver würzen.",
            "In einer beschichteten Pfanne etwas Öl erhitzen und das Steak bei mittlerer Hitze ca. 4-5 Minuten pro Seite braten, bis es gar ist.",
            "In der Zwischenzeit den Magerquark mit einem Schuss Sprudelwasser oder Milch glatt rühren und die gehackten Kräuter unterheben.",
            "Das Steak aus der Pfanne nehmen und warm stellen. Das Gemüse in der gleichen Pfanne für ca. 6-8 Minuten dünsten, bis es gar, aber noch knackig ist.",
            "Alles zusammen auf einem Teller anrichten und den Kräuterquark als Dip zum Fleisch servieren."
          ]
        },
      ],
      "Low Carb": [
        { 
          name: "Zucchini-Nudeln mit Pesto", 
          calories: 400, 
          time: "15 Min", 
          imageUrl: "https://images.unsplash.com/photo-1645112481338-3561ec819bc7?auto=format&fit=crop&w=800&q=80",
          ingredients: ["2 große Zucchini", "2 EL Basilikumpesto", "10g Pinienkerne", "Kirschtomaten", "Parmesan"],
          instructions: [
            "Die Zucchini waschen und die Enden abschneiden. Mit einem Spiralschneider zu langen 'Zoodles' (Zucchini-Nudeln) verarbeiten.",
            "Pinienkerne in einer Pfanne ohne Fett goldbraun rösten, dann herausnehmen.",
            "Die Kirschtomaten halbieren. Etwas Öl in der Pfanne erhitzen und die Zoodles darin für nur 2-3 Minuten andünsten (nicht zu lange, sonst werden sie wässrig).",
            "Die Tomaten hinzufügen und kurz mitwärmen.",
            "Die Pfanne vom Herd nehmen, das Pesto unter die Zoodles mischen und mit Pinienkernen sowie gehobeltem Parmesan bestreuen."
          ]
        },
      ]
    };

    const selectedPool = recipes[data.diet as keyof typeof recipes] || recipes.Omnivor;

    const mockPlan = days.map(day => ({
      day,
      meals: [
        { 
          type: "Frühstück", 
          name: "Haferflocken mit Beeren", 
          calories: Math.round(data.calories * 0.25), 
          time: "10 Min", 
          imageUrl: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=800&q=80",
          ingredients: ["50g Haferflocken", "100g TK-Beeren", "150ml Milch oder Haferdrink", "1 TL Honig oder Ahornsirup", "Eine Prise Zimt"],
          instructions: [
            "Die Haferflocken zusammen mit der Milch in einen kleinen Topf geben.",
            "Unter Rühren aufkochen lassen, dann die Hitze reduzieren und ca. 2-3 Minuten köcheln lassen, bis eine cremige Konsistenz entsteht.",
            "Die gefrorenen oder frischen Beeren hinzufügen und kurz mitwärmen oder unterrühren.",
            "Mit Honig und Zimt abschmecken und in einer Schüssel anrichten."
          ]
        },
        { 
          type: "Mittagessen", 
          ...selectedPool[Math.floor(Math.random() * selectedPool.length)],
          type: "Mittagessen"
        },
        { 
          type: "Abendessen", 
          name: "Protein-Salat-Bowl", 
          calories: Math.round(data.calories * 0.35), 
          time: "15 Min", 
          imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
          ingredients: ["100g Mix-Salat", "1 Dose Thunfisch (im eigenen Saft) oder 150g Kichererbsen", "1/2 Avocado", "5 Kirschtomaten", "Leichtes Joghurt-Dressing"],
          instructions: [
            "Den Mix-Salat gründlich waschen und trocken schleudern.",
            "Die Avocado halbieren, den Kern entfernen und das Fruchtfleisch in Scheiben schneiden. Tomaten halbieren.",
            "Thunfisch oder Kichererbsen in einem Sieb abtropfen lassen.",
            "Alle Zutaten nebeneinander in einer großen Bowl anrichten, um die Optik zu bewahren.",
            "Mit dem Dressing beträufeln und sofort genießen."
          ]
        }
      ].map(m => ({ ...m, type: m.type })) as Meal[]
    }));

    setPlan(mockPlan);
  };

  if (!inputData) return null;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="h-16 border-b bg-white sticky top-0 z-50 flex items-center px-4 md:px-8">
        <Button variant="ghost" onClick={() => navigate("/generator")} className="gap-2 text-muted-foreground hover:text-primary">
          <ArrowLeft className="w-4 h-4" /> Zurück
        </Button>
        <div className="flex-1 flex justify-center items-center gap-2 pr-20">
          <ChefHat className="w-6 h-6 text-primary" />
          <span className="font-bold text-lg hidden sm:inline">PrepMaster</span>
        </div>
      </header>

      <main className="flex-1 max-w-6xl mx-auto w-full py-12 px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm mb-2">
              <CheckCircle2 className="w-4 h-4" /> Plan erfolgreich erstellt
            </div>
            <h1 className="text-4xl md:text-5xl font-black">Dein 7-Tage Plan</h1>
            <p className="text-slate-500 mt-2 font-medium">Alle Rezepte sind für <span className="text-primary font-bold">1 Person</span> berechnet.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" className="rounded-xl gap-2 font-bold border-slate-200" onClick={() => window.print()}>
              <Printer className="w-4 h-4" /> Drucken
            </Button>
            <Button className="rounded-xl gap-2 font-bold bg-primary hover:bg-primary/90">
              <ShoppingCart className="w-4 h-4" /> Einkaufsliste
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Summary Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="rounded-[2rem] border-none shadow-sm overflow-hidden">
              <CardHeader className="bg-primary text-white pb-6">
                <CardTitle className="text-lg">Zusammenfassung</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                      <Flame className="w-4 h-4" /> Kalorien Ziel
                    </div>
                    <span className="font-bold">{inputData.calories} kcal</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                      <UtensilsCrossed className="w-4 h-4" /> Diät
                    </div>
                    <span className="font-bold">{inputData.diet}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                      <Wallet className="w-4 h-4" /> Budget
                    </div>
                    <span className="font-bold">~{inputData.budget}€ / Woche</span>
                  </div>
                </div>
                <div className="pt-6 border-t border-slate-100">
                  <div className="flex items-start gap-3 p-3 rounded-2xl bg-blue-50 border border-blue-100">
                    <Info className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <p className="text-[11px] text-blue-700 font-medium leading-relaxed">
                      Die Mengenangaben beziehen sich auf eine Portion pro Mahlzeit.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="p-6 rounded-[2rem] bg-secondary/10 border border-secondary/20">
              <h4 className="font-bold text-secondary mb-2 flex items-center gap-2">
                <ListChecks className="w-4 h-4" /> Batch Cooking
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                Bereite Fleisch/Tofu und Kohlenhydrate (Reis/Pasta) für 2-3 Tage vor, um Zeit zu sparen.
              </p>
            </div>
          </div>

          {/* Plan Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="Montag" className="space-y-8">
              <div className="bg-white p-2 rounded-2xl shadow-sm border border-slate-100 overflow-x-auto">
                <TabsList className="bg-transparent h-auto p-0 flex justify-start sm:justify-between min-w-max">
                  {plan.map(day => (
                    <TabsTrigger 
                      key={day.day} 
                      value={day.day}
                      className="rounded-xl px-5 py-3 font-bold data-[state=active]:bg-primary data-[state=active]:text-white transition-all"
                    >
                      {day.day}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {plan.map(day => (
                <TabsContent key={day.day} value={day.day} className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <Accordion type="single" collapsible className="space-y-4">
                    {day.meals.map((meal, i) => (
                      <AccordionItem 
                        key={i} 
                        value={`item-${i}`}
                        className="bg-white px-6 md:px-8 py-2 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-primary/5 transition-all overflow-hidden"
                      >
                        <AccordionTrigger className="hover:no-underline py-6">
                          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center w-full text-left">
                            <div className="w-full md:w-24 flex flex-col items-center justify-center p-3 rounded-2xl bg-slate-50 group-hover:bg-primary/5 transition-colors">
                              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{meal.type}</span>
                              <span className="text-2xl">
                                {meal.type === "Frühstück" ? "🥣" : meal.type === "Mittagessen" ? "🥘" : "🥗"}
                              </span>
                            </div>

                            <div className="flex-1 space-y-2">
                              <h3 className="text-xl font-black">{meal.name}</h3>
                              <div className="flex items-center gap-3">
                                <Badge variant="secondary" className="rounded-full font-bold">
                                  <Clock className="w-3 h-3 mr-1 text-primary" /> {meal.time}
                                </Badge>
                                <Badge variant="secondary" className="rounded-full font-bold">
                                  <Flame className="w-3 h-3 mr-1 text-orange-500" /> {meal.calories} kcal
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pb-8 pt-4 border-t border-slate-50">
                          <div className="space-y-8">
                            {/* Hero Image for Recipe */}
                            <div className="relative w-full h-48 sm:h-64 rounded-[2rem] overflow-hidden shadow-inner">
                              <img 
                                src={meal.imageUrl} 
                                alt={meal.name} 
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
                                <span className="text-white font-black text-2xl drop-shadow-md">{meal.name}</span>
                              </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                              <div>
                                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                  <ListChecks className="w-4 h-4 text-primary" /> Zutaten (1 Person)
                                </h4>
                                <ul className="space-y-2">
                                  {meal.ingredients.map((ing, j) => (
                                    <li key={j} className="flex items-center gap-3 text-slate-600 font-medium text-sm">
                                      <div className="w-1.5 h-1.5 rounded-full bg-primary/40"></div>
                                      {ing}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                  <ChefHat className="w-4 h-4 text-primary" /> Zubereitung
                                </h4>
                                <ol className="space-y-4">
                                  {meal.instructions.map((step, j) => (
                                    <li key={j} className="flex gap-4 text-slate-600 text-sm leading-relaxed">
                                      <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center font-black text-[10px] shrink-0">
                                        {j + 1}
                                      </span>
                                      {step}
                                    </li>
                                  ))}
                                </ol>
                              </div>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </main>

      <footer className="py-12 border-t mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-400 text-sm font-medium">
            Dein Plan wurde mit künstlicher Intelligenz optimiert. Guten Appetit!
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Plan;
