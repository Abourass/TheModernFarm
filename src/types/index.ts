export interface GlossaryEntry {
  term: string;
  abbreviation?: string;
  definition: string;
  related?: string[];
  category: string;
  articleLink?: string;
}

export interface GlossaryData {
  terms: Record<string, GlossaryEntry>;
}
