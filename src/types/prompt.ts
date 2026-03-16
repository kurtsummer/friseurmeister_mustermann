export type MediaType = 'Image' | 'Video';

export type CameraType = 'Retro' | 'Analog' | 'Digital' | 'Mirrorless' | 'DSLR' | 'Vintage' | '35mm' | 'Medium Format' | 'Large Format' | 'GoPro' | 'iPhone';

export type FilmStock = 'Kodak Portra 400' | 'Fujifilm Superia' | 'Black & White' | 'CineStill 800T' | 'Polaroid' | 'Technicolor' | 'Ektachrome' | 'Standard Digital' | 'VHS' | 'Super 8' | 'Kodak Gold 200' | 'Ilford HP5';

export type Perspective = 'Wide Shot' | 'Close-up' | 'Bird\'s Eye View' | 'Low Angle' | 'High Angle' | 'Eye Level' | 'Dutch Angle' | 'Macro' | 'Extreme Close-up' | 'Full Shot' | 'Medium Shot' | 'Point of View';

export type Lighting = 'Golden Hour' | 'Cinematic' | 'Neon' | 'Soft Light' | 'Hard Light' | 'Studio Lighting' | 'Natural Light' | 'Moody' | 'Overcast';

export type Mood = 'Nostalgic' | 'Futuristic' | 'Gritty' | 'Ethereal' | 'Dreamy' | 'Professional' | 'Dark' | 'Vibrant';

export interface Prompt {
  id: string;
  title: string;
  content: string;
  mediaType: MediaType;
  cameraType: CameraType;
  filmStock: FilmStock;
  perspective: Perspective;
  lighting?: Lighting;
  mood?: Mood;
  tags: string[];
  createdAt: string;
}
