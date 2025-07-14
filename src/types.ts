export interface Herb {
  name: string;
  scientificName: string;
  category: string;
  effects: string[];              // ✅ ARRAY
  preparation: string;
  intensity: string;
  onset: string;
  legalStatus: string;
  region: string;
  tags: string[];                // ✅ ARRAY
  mechanismOfAction: string;
  activeCompounds: string;
  traditionalUses: string;
  modernUses: string;
  dosage: string;
  duration: string;
  contraindications: string;
  safetyRating: number;
}
