import { useState, useMemo } from "react";
import { mockPrompts } from "../data/mockData";
import { PromptCard } from "../components/PromptCard";
import { PromptFilters } from "../components/PromptFilters";
import { AddPromptModal } from "../components/AddPromptModal";
import { PromptGenerator } from "../components/PromptGenerator";
import { Prompt } from "../types/prompt";
import { Sparkles, Database, LayoutGrid, Wand2 } from "lucide-react";
import { Button } from "../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

export default function Index() {

  const [prompts, setPrompts] = useState<Prompt[]>(mockPrompts);
  const [filters, setFilters] = useState({
    search: "",
    mediaType: "",
    cameraType: "",
    filmStock: "",
    perspective: "",
  });

  const filteredPrompts = useMemo(() => {
    return prompts.filter((p) => {
      const matchesSearch = 
        p.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        p.content.toLowerCase().includes(filters.search.toLowerCase()) ||
        p.tags.some(t => t.toLowerCase().includes(filters.search.toLowerCase()));
      
      const matchesMediaType = !filters.mediaType || p.mediaType === filters.mediaType;
      const matchesCameraType = !filters.cameraType || p.cameraType === filters.cameraType;
      const matchesFilmStock = !filters.filmStock || p.filmStock === filters.filmStock;
      const matchesPerspective = !filters.perspective || p.perspective === filters.perspective;

      return matchesSearch && matchesMediaType && matchesCameraType && matchesFilmStock && matchesPerspective;
    });
  }, [prompts, filters]);

  const handleAddPrompt = (newPrompt: Prompt) => {
    setPrompts([newPrompt, ...prompts]);
  };

  const handleResetFilters = () => {
    setFilters({
      search: "",
      mediaType: "",
      cameraType: "",
      filmStock: "",
      perspective: "",
    });
  };

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-black text-foreground selection:bg-primary/20">
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-primary rounded-2xl shadow-lg shadow-primary/20">
              <Database className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">PromptDB</h1>
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-semibold">AI Generator Engine</p>
            </div>
          </div>
          <AddPromptModal onAdd={handleAddPrompt} />
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto mb-16 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 text-primary border border-primary/10 text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            <span>Kreatives Prompt-Werkzeug</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Vom Konzept zum <span className="text-primary">perfekten Prompt</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Wähle deine Kamera, den Film-Look und die Perspektive. Beschreibe deine Szene und lass den Generator den Rest erledigen.
          </p>
        </div>

        <Tabs defaultValue="generator" className="space-y-12">
          <div className="flex justify-center">
            <TabsList className="h-14 p-1 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border-2">
              <TabsTrigger value="generator" className="rounded-xl px-8 flex items-center gap-2 data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-800 data-[state=active]:shadow-sm">
                <Wand2 className="w-4 h-4" /> Generator
              </TabsTrigger>
              <TabsTrigger value="database" className="rounded-xl px-8 flex items-center gap-2 data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-800 data-[state=active]:shadow-sm">
                <LayoutGrid className="w-4 h-4" /> Datenbank
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="generator" className="max-w-4xl mx-auto focus-visible:outline-none">
            <PromptGenerator onSave={handleAddPrompt} />
          </TabsContent>

          <TabsContent value="database" className="space-y-8 focus-visible:outline-none">
            <PromptFilters
              filters={filters}
              setFilters={setFilters}
              onReset={handleResetFilters}
            />

            <div className="flex items-center justify-between mb-6">
              <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider">
                {filteredPrompts.length} gespeicherte Prompts
              </h3>
            </div>

            {filteredPrompts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPrompts.map((prompt) => (
                  <PromptCard key={prompt.id} prompt={prompt} />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center border-2 border-dashed rounded-3xl bg-zinc-50 dark:bg-zinc-900/20">
                <p className="text-zinc-500 font-medium">Keine Prompts gefunden.</p>
                <Button variant="link" onClick={handleResetFilters} className="mt-2">Filter aufheben</Button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </main>

      <footer className="border-t py-12 mt-20 bg-white dark:bg-zinc-950">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} PromptDB. Gebaut für kreative Köpfe.
          </p>
        </div>
      </footer>
    </div>
  );
}
