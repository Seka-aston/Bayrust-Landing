// Company details used across the site.
// Replace the [BRACKETED] placeholders when the details are confirmed.
export const site = {
  name: 'Bayrust',
  tagline: 'Find the rust before your users do.',
  description:
    'Independent software quality audits from Kigali, Rwanda: usability, accessibility, system logic, user habits and operational fit.',
  email: '[YOUR EMAIL]',
  linkedin: '[LINKEDIN]',
  responseTime: '[RESPONSE TIME]',
  auditDuration: '[X–Y] weeks',
  pricingDetails: '[PRICING DETAILS]',
  location: 'Kigali, Rwanda',
  year: 2026,
};

export const nav = [
  { key: 'lenses', label: 'Five lenses', href: '/lenses' },
  { key: 'process', label: 'How it works', href: '/process' },
  { key: 'work', label: 'Our work', href: '/work' },
  { key: 'faq', label: 'FAQ', href: '/#faq' },
] as const;

export type NavKey = (typeof nav)[number]['key'];
