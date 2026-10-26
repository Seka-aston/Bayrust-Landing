// Case studies. All entries are placeholders until real, client-approved case studies are ready.

export const sectors = ['Banking', 'Fintech', 'Public services', 'NGOs', 'Agencies'] as const;
export type Sector = (typeof sectors)[number];

export interface CaseStudy {
  sector: Sector;
  title: string;
  result: string;
  href: string;
}

export const caseStudies: CaseStudy[] = [
  { sector: 'Banking', title: '[CASE STUDY TITLE]', result: '[ONE-LINE RESULT]', href: '#' },
  { sector: 'Fintech', title: '[CASE STUDY TITLE]', result: '[ONE-LINE RESULT]', href: '#' },
  { sector: 'Public services', title: '[CASE STUDY TITLE]', result: '[ONE-LINE RESULT]', href: '#' },
  { sector: 'NGOs', title: '[CASE STUDY TITLE]', result: '[ONE-LINE RESULT]', href: '#' },
  { sector: 'Agencies', title: '[CASE STUDY TITLE]', result: '[ONE-LINE RESULT]', href: '#' },
  { sector: 'Banking', title: '[CASE STUDY TITLE]', result: '[ONE-LINE RESULT]', href: '#' },
];

export const featured = {
  sector: '[SECTOR]',
  title: '[CASE STUDY TITLE]',
  challenge: '[What the client was worried about, in one or two sentences.]',
  scope: '[Journeys, platforms and lenses in scope.]',
  found: '[The most important findings.]',
  changed: '[The result after the re-check.]',
  href: '#',
};

// Image placeholder colours, cycled across the grid: [background, text].
export const tones = [
  ['var(--navy)', 'var(--fog)'],
  ['var(--rust-tint)', 'var(--steel)'],
  ['var(--stone)', 'var(--steel)'],
] as const;
