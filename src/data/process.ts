// Content for the How it works page.

export interface Stage {
  name: string;
  when: string;
  body: string;
  need: string;
  get: string;
  /** 'client' marks the stage your team owns (dashed); 'final' marks the re-check (rust). */
  style?: 'client' | 'final';
}

export const stages: Stage[] = [
  {
    name: 'Intake',
    when: 'Week 1',
    body: 'We meet your team, learn who your users are and what the business needs, and agree the journeys, platforms and lenses in scope.',
    need: 'An hour of your team’s time, product access and test accounts.',
    get: 'A signed scope with a fixed price and dates.',
  },
  {
    name: 'Inspection',
    when: 'Weeks [X–Y]',
    body: 'We inspect every journey in scope through all five lenses, on real devices and real network conditions, and talk to users or staff where habits matter.',
    need: 'A contact who can answer quick questions.',
    get: 'Progress updates, and an early warning for anything critical.',
  },
  {
    name: 'Report and walkthrough',
    when: 'End of inspection',
    body: 'We deliver the full report and walk your team through it, so engineers know what to fix and leaders know what to fund first.',
    need: 'The people who will prioritise and fix the work.',
    get: 'The report, the evidence library and a fix plan.',
  },
  {
    name: 'Your team fixes',
    when: 'Your schedule',
    body: 'Your engineers ship the fixes. We stay available for questions about any finding while you work.',
    need: 'Time to implement the recommended fixes.',
    get: 'Answers to questions about any finding.',
    style: 'client',
  },
  {
    name: 'Re-check',
    when: 'When you’re ready',
    body: 'We inspect every fixed finding again and confirm whether the rust is gone, with fresh evidence.',
    need: 'Notice that the fixes are live.',
    get: 'An updated report showing what’s resolved.',
    style: 'final',
  },
];

export const findingParts = [
  { name: 'ID and lens', body: 'A unique reference and the lens it was found through, so every finding can be tracked to its fix.' },
  { name: 'Severity', body: 'How much harm it causes and how many people it affects. It sets the order of work.' },
  { name: 'Evidence', body: 'A screen recording, screenshot or log that anyone can replay. No finding without proof.' },
  { name: 'Steps to reproduce', body: 'The exact device, network and actions that trigger it, so your engineers see it first time.' },
  { name: 'Recommended fix', body: 'A specific change your team can implement, written for your stack.' },
  { name: 'Re-check status', body: 'Open, fixed or confirmed. Updated after the re-check with fresh evidence.' },
];

export const severities = [
  {
    name: 'Critical',
    bg: 'var(--navy)',
    fg: 'var(--white)',
    body: 'Blocks a core task or causes harm: lost money, exposed data, people locked out. Fix before anything else.',
  },
  {
    name: 'Major',
    bg: 'var(--steel)',
    fg: 'var(--white)',
    body: 'Causes real failure or confusion for many users, with a painful workaround at best.',
  },
  {
    name: 'Minor',
    bg: 'var(--stone)',
    fg: 'var(--navy)',
    body: 'Friction or inconsistency that slows people down but doesn’t stop them.',
  },
  {
    name: 'Passed',
    bg: 'var(--white)',
    fg: 'var(--navy)',
    body: 'Inspected and working as intended. Recorded so you know what we checked.',
  },
];

export const reportContents = [
  { name: 'Executive summary', body: 'One page for leaders: what we found, what it costs you, and what to fund first.' },
  { name: 'Findings register', body: 'Every finding with its ID, lens, severity, evidence and fix.' },
  { name: 'Lens scorecards', body: 'How the product performs through each of the five lenses.' },
  { name: 'Evidence library', body: 'Recordings and screenshots behind every finding.' },
  { name: 'Fix plan', body: 'Findings grouped into a practical order of work for your team.' },
];

export const scopeFactors = [
  'How many journeys are in scope',
  'Which platforms: web, Android, iOS, USSD',
  'Which of the five lenses you need',
  'Whether we interview users or staff',
];
