// The five inspection lenses.
// `summary` and `highlights` appear in the home page tabs; the rest appears on the Five lenses page.
export type LensId = 'usability' | 'accessibility' | 'system-logic' | 'user-habits' | 'operational';

export interface Lens {
  id: LensId;
  name: string;
  title: string;
  lower: string;
  question: string;
  summary: string;
  highlights: string[];
  intro: string;
  checks: string[];
  typicalRust: string[];
  deliverable: string;
}

export const lenses: Lens[] = [
  {
    id: 'usability',
    name: 'Usability',
    title: 'Usability',
    lower: 'usability',
    question: 'Can people finish what they came to do?',
    summary:
      'We walk through your most important journeys the way your customers would, and record every point where they hesitate, guess or give up.',
    highlights: ['Key journeys completed without help', 'Labels, steps and errors that make sense', 'Dead ends and loops found and traced'],
    intro:
      'If people can’t complete the task, nothing else matters. Usability rust shows up as support calls, abandoned journeys and staff who keep a cheat sheet taped next to the screen.',
    checks: [
      'Task completion on your most important journeys',
      'Clarity of labels, instructions and error messages',
      'Navigation, dead ends and loops',
      'Forms: required fields, defaults and validation',
      'Consistency across screens and platforms',
    ],
    typicalRust: [
      'A fee that appears only after the PIN step',
      'An error that just says “Something went wrong”',
      'A back button that erases everything typed',
    ],
    deliverable: 'Each journey scored from start to finish, with the exact step where people get stuck.',
  },
  {
    id: 'accessibility',
    name: 'Accessibility',
    title: 'Accessibility',
    lower: 'accessibility',
    question: 'Does it work for everyone?',
    summary: 'We test with keyboards, screen readers and low-vision settings, and check every screen against WCAG 2.2 AA.',
    highlights: ['Screen-reader and keyboard walkthroughs', 'Contrast, focus and text-size checks', 'Findings mapped to WCAG criteria'],
    intro:
      'Customers who rely on screen readers, larger text or a keyboard are locked out when the basics are missed. Accessibility is also increasingly expected in public and financial services.',
    checks: [
      'Screen-reader walkthroughs with TalkBack and VoiceOver',
      'Keyboard-only navigation and focus order',
      'Colour contrast and text resizing',
      'Labels, alternative text and error announcements',
      'Every failure mapped to WCAG 2.2 AA',
    ],
    typicalRust: ['An amount field with no label', 'Grey hint text that fails contrast', 'A pop-up you can’t close with the keyboard'],
    deliverable: 'A WCAG 2.2 AA conformance summary, with every failure tied to its criterion.',
  },
  {
    id: 'system-logic',
    name: 'System logic',
    title: 'System logic',
    lower: 'system logic',
    question: 'Do the rules behave as the business intends?',
    summary:
      'We push states, edge cases and integrations until the logic either holds or breaks, then show exactly where it broke.',
    highlights: [
      'States and transitions that contradict each other',
      'Edge cases and integration failures',
      'Silent errors users never get told about',
    ],
    intro:
      'Logic rust is the most expensive kind. Nothing looks broken; the product just quietly does the wrong thing, like charging twice or approving what should be rejected.',
    checks: [
      'States and transitions: pending, paid, failed, reversed',
      'Business rules and their edge cases',
      'Integrations: payments, SMS and third-party services',
      'Error handling and recovery',
      'Permissions and roles',
    ],
    typicalRust: [
      'Success shown before the payment callback returns',
      'A refund that can be approved twice',
      'A role that can see data it shouldn’t',
    ],
    deliverable: 'A map of every state we tested, with each contradiction and silent failure marked.',
  },
  {
    id: 'user-habits',
    name: 'User habits',
    title: 'User habits',
    lower: 'user habits',
    question: 'Does it fit how people really behave?',
    summary: 'We look at the devices, routines and workarounds of your actual users, not the ideal user in the spec.',
    highlights: ['Features people never find', 'Workarounds staff and customers invent', 'Flows built for habits users don’t have'],
    intro:
      'Products are designed for an ideal user. Real users share phones, switch languages, screenshot their codes and invent shortcuts. When the product fights those habits, people work around it.',
    checks: [
      'Interviews and observation with real users or staff',
      'Device, language and connectivity patterns',
      'Workarounds and shadow tools: notebooks, spreadsheets, WhatsApp',
      'Feature discovery and repeat use',
      'Analytics review, where data is available',
    ],
    typicalRust: [
      'Staff re-typing data into a spreadsheet every evening',
      'A key feature behind a menu nobody opens',
      'Customers asking an agent to finish a self-service flow',
    ],
    deliverable: 'A habits profile of your users, showing where the product works against them.',
  },
  {
    id: 'operational',
    name: 'Operational',
    title: 'Operational requirements',
    lower: 'operational requirements',
    question: 'Does it survive real conditions?',
    summary:
      'We test on slow and dropping networks, shared devices, peak loads and staff handovers, because that is where products actually run.',
    highlights: ['Throttled and interrupted connections', 'Shared devices and session handovers', 'Behaviour at month-end and peak loads'],
    intro:
      'A product that works in the office can fail in the field. Network drops, shared devices, peak days and shift changes are normal conditions, not edge cases.',
    checks: [
      'Throttled, unstable and offline connections',
      'Low-cost and older devices',
      'Shared devices, sessions and sign-outs',
      'Peak loads such as month-end and salary days',
      'Handovers between staff, shifts and branches',
    ],
    typicalRust: ['A draft lost when the connection drops', 'Sessions left open on a shared branch tablet', 'Timeouts on salary day'],
    deliverable: 'A conditions report showing how the product behaves in each environment we tested.',
  },
];
