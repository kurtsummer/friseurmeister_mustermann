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
  ChevronRight,
  UtensilsCrossed
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface MealPlan {
  day: string;
  meals: {
    type: string;
    name: string;
    calories: number;
    time: string;
    ingredients: string[];
  }[];
}

const Plan = () => {
  const navigate = useNavigate();
  const [plan, setPlan] = useState<MealPlan[]>([]);
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
    
    // Simple mock generation based on diet
    const recipes = {
      Omnivor: [
        { name: "Hähnchen-Reis-Pfanne", cal: 650, time: "25 Min", ingredients: ["Hähnchen", "Reis", "Brokkoli", "Sojasauce"] },
        { name: "Pasta Bolognese", cal: 750, time: "30 Min", ingredients: ["Rinderhack", "Pasta", "Tomatensauce", "Parmesan"] },
        { name: "Lachs mit Kartoffeln", cal: 550, time: "20 Min", ingredients: ["Lachs", "Kartoffeln", "Spargel", "Zitrone"] },
      ],
      Vegetarisch: [
        { name: "Linsencurry", cal: 600, time: "30 Min", ingredients: ["Linsen", "Kokosmilch", "Reis", "Spinat"] },
        { name: "Gemüselasagne", cal: 700, time: "45 Min", ingredients: ["Lasagneblätter", "Zucchini", "Tomaten", "Mozzarella"] },
        { name: "Kichererbsen-Salat", cal: 500, time: "15 Min", ingredients: ["Kichererbsen", "Gurke", "Feta", "Olivenöl"] },
      ],
      Vegan: [
        { name: "Tofu Stir-fry", cal: 550, time: "20 Min", ingredients: ["Tofu", "Paprika", "Reisnudeln", "Erdnusssauce"] },
        { name: "Süßkartoffel-Bowl", cal: 650, time: "25 Min", ingredients: ["Süßkartoffel", "Quinoa", "Avocado", "Bohnen"] },
        { name: "Veganes Chili", cal: 600, time: "40 Min", ingredients: ["Sojahack", "Mais", "Bohnen", "Tomaten"] },
      ],
      "High Protein": [
        { name: "Putensteak mit Quark", cal: 600, time: "20 Min", ingredients: ["Pute", "Magerquark", "Gemüse", "Leinsamen"] },
        { name: "Rindersteak mit Salat", cal: 700, time: "25 Min", ingredients: ["Rind", "Mix-Salat", "Nüsse", "Ei"] },
      ],
      "Low Carb": [
        { name: "Zucchini-Nudeln mit Pesto", cal: 400, time: "15 Min", ingredients: ["Zucchini", "Basilikum", "Pinienkerne", "Parmesan"] },
        { name: "Gebackener Feta mit Gemüse", cal: 500, time: "20 Min", ingredients: ["Feta", "Tomaten", "Paprika", "Zwiebeln"] },
      ]
    };

    const selectedRecipes = recipes[data.diet as keyof typeof recipes] || recipes.Omnivor;

    const mockPlan = days.map(day => ({
      day,
      meals: [
        { type: "Frühstück", name: "Haferflocken mit Beeren", calories: Math.round(data.calories * 0.25), time: "10 Min", ingredients: ["Haferflocken", "Beeren", "Milch/Ersatz"] },
        { 
          type: "Mittagessen", 
          name: selectedRecipes[Math.floor(Math.random() * selectedRecipes.length)].name, 
          calories: Math.round(data.calories * 0.4), 
          time: selectedRecipes[Math.floor(Math.random() * selectedRecipes.length)].time,
          ingredients: selectedRecipes[Math.floor(Math.random() * selectedRecipes.length)].ingredients
        },
        { type: "Abendessen", name: "Leichte Bowl", calories: Math.round(data.calories * 0.35), time: "15 Min", ingredients: ["Salat", "Hülsenfrüchte", "Dressing"] }
      ]
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
          </div>
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" className="rounded-xl gap-2 font-bold border-slate-200">
              <Printer className="w-4 h-4" /> Drucken
            </Button>
            <Button variant="outline" className="rounded-xl gap-2 font-bold border-slate-200">
              <Share2 className="w-4 h-4" /> Teilen
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
                  <p className="text-xs text-slate-400 font-medium leading-relaxed">
                    Basierend auf deinen Angaben haben wir eine ausgewogene Mischung aus schnellen und nahrhaften Mahlzeiten zusammengestellt.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="p-6 rounded-[2rem] bg-secondary/10 border border-secondary/20">
              <h4 className="font-bold text-secondary mb-2 flex items-center gap-2">
                <ChefHat className="w-4 h-4" /> Profi-Tipp
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                Koche am Sonntag größere Portionen (Batch Cooking), um unter der Woche Zeit zu sparen!
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
                  {day.meals.map((meal, i) => (
                    <div 
                      key={i} 
                      className="group bg-white p-6 md:p-8 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-primary/5 transition-all flex flex-col md:flex-row gap-8 items-start md:items-center"
                    >
                      <div className="w-full md:w-32 flex flex-col items-center justify-center p-4 rounded-3xl bg-slate-50 group-hover:bg-primary/5 transition-colors">
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{meal.type}</span>
                        <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-2">
                          {meal.type === "Frühstück" ? "🥣" : meal.type === "Mittagessen" ? "🥘" : "🥗"}
                        </div>
                      </div>

                      <div className="flex-1 space-y-4">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <h3 className="text-2xl font-black">{meal.name}</h3>
                          <div className="flex items-center gap-3">
                             <Badge variant="outline" className="rounded-full border-slate-200 font-bold py-1 px-3">
                               <Clock className="w-3 h-3 mr-1.5 text-primary" /> {meal.time}
                             </Badge>
                             <Badge variant="outline" className="rounded-full border-slate-200 font-bold py-1 px-3">
                               <Flame className="w-3 h-3 mr-1.5 text-orange-500" /> {meal.calories} kcal
                             </Badge>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {meal.ingredients.map((ing, j) => (
                            <span key={j} className="text-xs font-bold bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full">
                              {ing}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Button variant="ghost" size="icon" className="hidden md:flex rounded-full hover:bg-primary/10 hover:text-primary transition-all">
                        <ChevronRight className="w-6 h-6" />
                      </Button>
                    </div>
                  ))}
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
