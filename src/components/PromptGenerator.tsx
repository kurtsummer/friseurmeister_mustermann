import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { MediaType, CameraType, FilmStock, Perspective, Lighting, Mood, Prompt } from "../types/prompt";
import { Sparkles, Copy, Check, Save, Wand2, RefreshCcw } from "lucide-react";
import { toast } from "../hooks/use-toast";

interface PromptGeneratorProps {
  onSave: (prompt: Prompt) => void;
}

export function PromptGenerator({ onSave }: PromptGeneratorProps) {
  const [config, setConfig] = useState({
    subject: "",
    mediaType: "Image" as MediaType,
    cameraType: "Analog" as CameraType,
    filmStock: "Kodak Portra 400" as FilmStock,
    perspective: "Eye Level" as Perspective,
    lighting: "Golden Hour" as Lighting,
    mood: "Nostalgic" as Mood,
  });

  const [generatedPrompt, setGeneratedPrompt] = useState("");
  const [copied, setCopied] = useState(false);

  const generatePrompt = () => {
    if (!config.subject) return;

    const parts = [
      config.mediaType === "Video" ? "Cinematic video of" : "High quality image of",
      config.subject,
      `shot from a ${config.perspective} perspective`,
      `using a ${config.cameraType} camera`,
      `on ${config.filmStock} film stock`,
      `with ${config.lighting} lighting`,
      `creating a ${config.mood} atmosphere`,
      "--ar 16:9 --v 6.0", // Midjourney defaults as example
    ];

    setGeneratedPrompt(parts.join(", "));
  };

  // Re-generate whenever config changes (if subject exists)
  useEffect(() => {
    if (config.subject) {
      generatePrompt();
    }
  }, [config]);

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedPrompt);
    setCopied(true);
    toast({ title: "Kopiert!", description: "Prompt bereit zum Einfügen." });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSave = () => {
    if (!generatedPrompt) return;
    
    const newPrompt: Prompt = {
      id: Math.random().toString(36).substr(2, 9),
      title: config.subject.slice(0, 20) + (config.subject.length > 20 ? "..." : ""),
      content: generatedPrompt,
      mediaType: config.mediaType,
      cameraType: config.cameraType,
      filmStock: config.filmStock,
      perspective: config.perspective,
      lighting: config.lighting,
      mood: config.mood,
      tags: ["generated", config.mediaType.toLowerCase()],
      createdAt: new Date().toISOString(),
    };

    onSave(newPrompt);
    toast({ title: "Gespeichert", description: "Prompt wurde zur Datenbank hinzugefügt." });
  };

  const cameraTypes: CameraType[] = ["Retro", "Analog", "Digital", "Mirrorless", "DSLR", "Vintage", "35mm", "Medium Format", "Large Format", "GoPro", "iPhone"];
  const filmStocks: FilmStock[] = ["Kodak Portra 400", "Fujifilm Superia", "Black & White", "CineStill 800T", "Polaroid", "Technicolor", "Ektachrome", "Standard Digital", "VHS", "Super 8", "Kodak Gold 200", "Ilford HP5"];
  const perspectives: Perspective[] = ["Wide Shot", "Close-up", "Bird's Eye View", "Low Angle", "High Angle", "Eye Level", "Dutch Angle", "Macro", "Extreme Close-up", "Full Shot", "Medium Shot", "Point of View"];
  const lightings: Lighting[] = ["Golden Hour", "Cinematic", "Neon", "Soft Light", "Hard Light", "Studio Lighting", "Natural Light", "Moody", "Overcast"];
  const moods: Mood[] = ["Nostalgic", "Futuristic", "Gritty", "Ethereal", "Dreamy", "Professional", "Dark", "Vibrant"];

  return (
    <Card className="border-2 border-primary/20 shadow-2xl bg-white dark:bg-zinc-950 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-blue-500 to-purple-600" />
      <CardHeader>
        <div className="flex items-center gap-2 mb-1">
          <Wand2 className="w-5 h-5 text-primary" />
          <CardTitle>KI Prompt Generator</CardTitle>
        </div>
        <CardDescription>Konfiguriere deinen perfekten Prompt Schritt für Schritt.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="md:col-span-2 lg:col-span-3 space-y-2">
            <Label htmlFor="subject" className="text-sm font-bold">Was soll zu sehen sein?</Label>
            <Textarea 
              id="subject"
              placeholder="z.B. Ein Astronaut, der in einem Pariser Café einen Espresso trinkt..."
              className="h-24 resize-none rounded-xl border-zinc-200 dark:border-zinc-800 focus:ring-primary"
              value={config.subject}
              onChange={(e) => setConfig({ ...config, subject: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label className="text-xs font-bold uppercase text-muted-foreground">Medien-Typ</Label>
            <Select value={config.mediaType} onValueChange={(v) => setConfig({ ...config, mediaType: v as MediaType })}>
              <SelectTrigger className="rounded-xl h-11"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="Image">Bild</SelectItem>
                <SelectItem value="Video">Video</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="text-xs font-bold uppercase text-muted-foreground">Kamera</Label>
            <Select value={config.cameraType} onValueChange={(v) => setConfig({ ...config, cameraType: v as CameraType })}>
              <SelectTrigger className="rounded-xl h-11"><SelectValue /></SelectTrigger>
              <SelectContent>
                {cameraTypes.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="text-xs font-bold uppercase text-muted-foreground">Film/Look</Label>
            <Select value={config.filmStock} onValueChange={(v) => setConfig({ ...config, filmStock: v as FilmStock })}>
              <SelectTrigger className="rounded-xl h-11"><SelectValue /></SelectTrigger>
              <SelectContent>
                {filmStocks.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="text-xs font-bold uppercase text-muted-foreground">Perspektive</Label>
            <Select value={config.perspective} onValueChange={(v) => setConfig({ ...config, perspective: v as Perspective })}>
              <SelectTrigger className="rounded-xl h-11"><SelectValue /></SelectTrigger>
              <SelectContent>
                {perspectives.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="text-xs font-bold uppercase text-muted-foreground">Beleuchtung</Label>
            <Select value={config.lighting} onValueChange={(v) => setConfig({ ...config, lighting: v as Lighting })}>
              <SelectTrigger className="rounded-xl h-11"><SelectValue /></SelectTrigger>
              <SelectContent>
                {lightings.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="text-xs font-bold uppercase text-muted-foreground">Stimmung</Label>
            <Select value={config.mood} onValueChange={(v) => setConfig({ ...config, mood: v as Mood })}>
              <SelectTrigger className="rounded-xl h-11"><SelectValue /></SelectTrigger>
              <SelectContent>
                {moods.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
        </div>

        {generatedPrompt && (
          <div className="mt-8 p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl border-2 border-dashed border-primary/20 relative group">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Generierter Prompt
              </span>
              <div className="flex gap-2">
                <Button 
                  size="sm" 
                  variant="ghost" 
                  onClick={() => setConfig({...config, subject: ""})}
                  className="h-8 text-xs text-muted-foreground"
                >
                  <RefreshCcw className="w-3 h-3 mr-1" /> Neu
                </Button>
              </div>
            </div>
            <p className="text-sm font-medium leading-relaxed mb-6 italic">
              "{generatedPrompt}"
            </p>
            <div className="grid grid-cols-2 gap-3">
              <Button onClick={handleCopy} variant="outline" className="gap-2 h-11 rounded-xl">
                {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                Kopieren
              </Button>
              <Button onClick={handleSave} className="gap-2 h-11 rounded-xl">
                <Save className="w-4 h-4" /> Speichern
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
