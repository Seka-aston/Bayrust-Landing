// The sample audit report on /report. All of it is fictional sample content for a made-up mobile banking app.
// The counts match the sample report window on the home page: 20 findings, 2 critical, 7 major, 11 minor.
import type { LensId } from './lenses';

export type Severity = 'Critical' | 'Major' | 'Minor';

export interface Finding {
  id: string;
  lens: LensId;
  severity: Severity;
  title: string;
  journey: string;
  evidence: { kind: 'Recording' | 'Screenshot' | 'Log'; label: string; body: string };
  steps: string;
  fix: string;
  /** What the re-check found: 'confirmed' means the rust is gone. */
  recheck: { status: 'confirmed' | 'open'; note: string };
}

export const audit = {
  product: 'Mobile banking app',
  client: 'A fictional retail bank',
  platforms: 'Android app 4.2 and web banking',
  journeys: ['Sign-up and verification', 'Send money', 'Pay a bill', 'Statements'],
  devices: '12 devices, from entry-level Android to recent iPhones',
  networks: '3 network profiles: 4G, throttled 3G and dropping 2G',
  inspected: '3–14 March 2026',
  reported: '17 March 2026',
  rechecked: '20 April 2026',
};

export const summary = {
  verdict:
    'The app works well for confident customers on a good connection. It fails people on slow networks and people who use a screen reader, and in two places it puts customers’ money at risk. Both of those are quick to fix.',
  fundFirst: [
    { ids: ['AUD-003', 'AUD-014'], body: 'Make every payment wait for the bank’s confirmation, and make retries safe, so no one is charged twice or charged for nothing.' },
    { ids: ['AUD-009', 'AUD-005', 'AUD-013'], body: 'Make the transfer form usable with a screen reader and keyboard. Today it can’t be submitted at all.' },
    { ids: ['AUD-017', 'AUD-006'], body: 'Keep customers’ work when the network drops, and give codes long enough to arrive.' },
  ],
  recheck:
    'Your team fixed both critical findings and every money-handling issue. 16 of 20 findings are confirmed gone. Four remain open, three of them scheduled for the next release.',
};

/** Scores out of 100, at the first report and at the re-check. */
export const scores: Record<LensId, { before: number; after: number }> = {
  usability: { before: 68, after: 86 },
  accessibility: { before: 41, after: 88 },
  'system-logic': { before: 55, after: 94 },
  'user-habits': { before: 74, after: 80 },
  operational: { before: 52, after: 71 },
};

export const findings: Finding[] = [
  {
    id: 'AUD-001',
    lens: 'usability',
    severity: 'Minor',
    title: 'National ID field gives no example of the expected format',
    journey: 'Sign-up and verification',
    evidence: { kind: 'Recording', label: 'Recording 1:12', body: 'Four of eight participants typed the ID with spaces and were rejected with “Invalid ID”.' },
    steps: 'Any device. Start sign-up and enter a 16-digit ID with spaces between the groups.',
    fix: 'Accept spaces and strip them, and show the format as a hint under the field.',
    recheck: { status: 'confirmed', note: 'IDs with spaces are accepted. Hint added.' },
  },
  {
    id: 'AUD-002',
    lens: 'accessibility',
    severity: 'Minor',
    title: 'Labels are cut off when text is enlarged past 130%',
    journey: 'Send money',
    evidence: { kind: 'Screenshot', label: 'Screenshot set', body: 'At 150% text size, “Recipient account” reads “Recipient a…” and the fee label disappears.' },
    steps: 'Android 12, display text size at its largest. Open Send money.',
    fix: 'Let labels wrap onto a second line instead of truncating.',
    recheck: { status: 'confirmed', note: 'Labels wrap at every text size we tested.' },
  },
  {
    id: 'AUD-003',
    lens: 'system-logic',
    severity: 'Critical',
    title: 'Retrying a timed-out transfer sends the money twice',
    journey: 'Send money',
    evidence: { kind: 'Log', label: 'Server log', body: 'Two debits 38 s apart with the same amount and recipient, after the app showed “Request timed out. Try again”.' },
    steps: 'Throttled 3G profile. Send money, let the request time out, then tap Try again.',
    fix: 'Send an idempotency key with each transfer so the server ignores a repeated request.',
    recheck: { status: 'confirmed', note: 'Retries reuse the key. No duplicate debits in 30 attempts.' },
  },
  {
    id: 'AUD-004',
    lens: 'operational',
    severity: 'Minor',
    title: 'The 96 MB install fails on nearly full entry-level phones',
    journey: 'Sign-up and verification',
    evidence: { kind: 'Screenshot', label: 'Screenshot', body: 'Play Store “Not enough space” on a 16 GB phone with 180 MB free, the typical state of the devices we sampled.' },
    steps: '16 GB Android phone with under 200 MB free. Install from the Play Store.',
    fix: 'Ship an app bundle and move the onboarding video to a download on first use.',
    recheck: { status: 'open', note: 'Scheduled for release 4.4.' },
  },
  {
    id: 'AUD-005',
    lens: 'accessibility',
    severity: 'Major',
    title: 'Keyboard focus jumps from the PIN to the footer links',
    journey: 'Sign-up and verification',
    evidence: { kind: 'Recording', label: 'Recording 0:31', body: 'After the PIN, Tab moves to “Terms” and “Privacy”, skipping Sign in. It is reachable only by tabbing back.' },
    steps: 'Web banking, keyboard only. Tab through the sign-in form.',
    fix: 'Follow the visual order in the markup, and remove the positive tabindex values.',
    recheck: { status: 'confirmed', note: 'Focus order now follows the screen.' },
  },
  {
    id: 'AUD-006',
    lens: 'operational',
    severity: 'Major',
    title: 'The sign-up code often arrives after it has expired',
    journey: 'Sign-up and verification',
    evidence: { kind: 'Log', label: 'Delivery log', body: 'On one network, 9 of 20 SMS codes arrived after the 60-second limit, the slowest after 2 min 40 s.' },
    steps: 'SIM on the slower network. Start sign-up and wait for the code.',
    fix: 'Give codes 5 minutes, and offer a voice call after 60 seconds.',
    recheck: { status: 'confirmed', note: 'Codes last 5 minutes. Voice fallback works.' },
  },
  {
    id: 'AUD-007',
    lens: 'user-habits',
    severity: 'Minor',
    title: 'Customers screenshot the payment reference instead of copying it',
    journey: 'Pay a bill',
    evidence: { kind: 'Recording', label: 'Session notes', body: '7 of 9 participants took a screenshot to share the reference. None used the Copy button.' },
    steps: 'Pay any bill and reach the confirmation screen.',
    fix: 'Add a Share button that sends the reference as text, and make the reference large enough to read in a screenshot.',
    recheck: { status: 'confirmed', note: 'Share button added. Reference is larger.' },
  },
  {
    id: 'AUD-008',
    lens: 'usability',
    severity: 'Minor',
    title: 'Customers don’t recognise the word “Beneficiary”',
    journey: 'Send money',
    evidence: { kind: 'Recording', label: 'Interview clips', body: 'Branch staff said they explain the word “several times a day”. Five of eight participants hesitated on it.' },
    steps: 'Open Send money and look at the first step.',
    fix: 'Use “Who are you sending to?” and “Saved people”.',
    recheck: { status: 'confirmed', note: 'Copy changed in English and Kinyarwanda.' },
  },
  {
    id: 'AUD-009',
    lens: 'accessibility',
    severity: 'Critical',
    title: 'Transfer form can’t be completed with a screen reader',
    journey: 'Send money',
    evidence: { kind: 'Recording', label: 'Recording 0:42', body: 'TalkBack reads the amount field as “Edit box”. With no label, the form can’t be submitted.' },
    steps: 'Android 12 with TalkBack on. Open Send money and move to the amount.',
    fix: 'Add a visible label tied to the field, and announce validation errors as they appear.',
    recheck: { status: 'confirmed', note: 'Completed end to end with TalkBack and VoiceOver.' },
  },
  {
    id: 'AUD-010',
    lens: 'accessibility',
    severity: 'Minor',
    title: 'Error messages are shown but never announced',
    journey: 'Pay a bill',
    evidence: { kind: 'Recording', label: 'Recording 0:18', body: 'A wrong meter number turns the field red. TalkBack says nothing, and the customer waits.' },
    steps: 'TalkBack on. Pay a bill with an invalid meter number.',
    fix: 'Put errors in a live region, and move focus to the first field with an error.',
    recheck: { status: 'confirmed', note: 'Errors are announced.' },
  },
  {
    id: 'AUD-011',
    lens: 'operational',
    severity: 'Minor',
    title: 'Statements take 41 seconds to load on 2G',
    journey: 'Statements',
    evidence: { kind: 'Log', label: 'Network trace', body: 'The screen loads 2.4 MB, mostly merchant logos, before any transaction appears.' },
    steps: '2G profile. Open Statements for the last 30 days.',
    fix: 'Load the transactions first, and the logos later or not at all on slow connections.',
    recheck: { status: 'open', note: 'Text loads first. Logos are still 2.1 MB.' },
  },
  {
    id: 'AUD-012',
    lens: 'system-logic',
    severity: 'Minor',
    title: 'The home balance can be 10 minutes old without saying so',
    journey: 'Send money',
    evidence: { kind: 'Screenshot', label: 'Screenshot pair', body: 'After a transfer, the home screen showed the old balance for 9 min 50 s.' },
    steps: 'Send money, then return to the home screen.',
    fix: 'Refresh the balance after any transaction, and show when it was last updated.',
    recheck: { status: 'confirmed', note: 'Balance refreshes, with a time stamp.' },
  },
  {
    id: 'AUD-013',
    lens: 'accessibility',
    severity: 'Major',
    title: 'Hints and secondary buttons fail contrast at 2.5 : 1',
    journey: 'Send money',
    evidence: { kind: 'Screenshot', label: 'Contrast audit', body: 'Grey #9AA3AD on white measures 2.5 : 1 against the 4.5 : 1 that WCAG 2.2 AA requires.' },
    steps: 'Any screen with a field hint or a Cancel button.',
    fix: 'Darken the secondary grey to #5F6B78 (5.4 : 1) in the design tokens.',
    recheck: { status: 'confirmed', note: 'Token changed. Every screen passes AA.' },
  },
  {
    id: 'AUD-014',
    lens: 'system-logic',
    severity: 'Major',
    title: 'Payment marked successful before the mobile-money callback returns',
    journey: 'Pay a bill',
    evidence: { kind: 'Recording', label: 'Recording 0:57', body: 'On a throttled connection the success screen appears, the callback then fails, and the customer is charged with no order.' },
    steps: 'Android 10, 3G profile with 2 s latency. Pay any bill, then lose the network for 5 seconds.',
    fix: 'Show a pending state with a reference number until the callback confirms.',
    recheck: { status: 'confirmed', note: 'Pending state shown until confirmation.' },
  },
  {
    id: 'AUD-015',
    lens: 'user-habits',
    severity: 'Major',
    title: 'Shared family phones stay signed in to the last customer',
    journey: 'Sign-up and verification',
    evidence: { kind: 'Recording', label: 'Interview clips', body: 'Three participants share a phone with relatives. The app opens straight to the last person’s balance.' },
    steps: 'Sign in, close the app, and hand the phone to someone else.',
    fix: 'Ask for the PIN when the app returns from the background, and offer quick account switching.',
    recheck: { status: 'open', note: 'PIN prompt added. Account switching still to come.' },
  },
  {
    id: 'AUD-016',
    lens: 'usability',
    severity: 'Major',
    title: 'Back on the review step clears the whole transfer',
    journey: 'Send money',
    evidence: { kind: 'Recording', label: 'Recording 0:23', body: 'A participant went back to fix the amount and had to retype the account number, recipient and reason.' },
    steps: 'Fill in a transfer, reach Review, then tap Back.',
    fix: 'Keep the form state when going back a step.',
    recheck: { status: 'confirmed', note: 'Fields are kept.' },
  },
  {
    id: 'AUD-017',
    lens: 'operational',
    severity: 'Major',
    title: 'Draft transfer lost when the network drops',
    journey: 'Send money',
    evidence: { kind: 'Recording', label: 'Recording 0:14', body: 'On a dropping 2G profile, the connection fails on submit and every field is cleared.' },
    steps: '2G profile that drops for 10 seconds. Fill in a transfer and tap Continue.',
    fix: 'Keep the draft on the device and retry when the connection returns.',
    recheck: { status: 'confirmed', note: 'Draft kept and resent on reconnect.' },
  },
  {
    id: 'AUD-018',
    lens: 'accessibility',
    severity: 'Minor',
    title: 'Tab bar icons have no accessible names',
    journey: 'Statements',
    evidence: { kind: 'Recording', label: 'Recording 0:09', body: 'VoiceOver reads the five tabs as “Button, button, button, button, button”.' },
    steps: 'iPhone with VoiceOver on. Swipe across the bottom tab bar.',
    fix: 'Give each tab a label: Home, Send, Pay, Statements, Profile.',
    recheck: { status: 'confirmed', note: 'Each tab is announced.' },
  },
  {
    id: 'AUD-019',
    lens: 'operational',
    severity: 'Minor',
    title: 'Sessions expire mid-form on slow connections',
    journey: 'Pay a bill',
    evidence: { kind: 'Log', label: 'Session log', body: 'The 2-minute timeout counts time spent waiting for the network, so slow pages use up the session.' },
    steps: '2G profile. Start a bill payment and complete it at a normal pace.',
    fix: 'Count only idle time, and warn 30 seconds before the session ends.',
    recheck: { status: 'open', note: 'Warning added. Timeout still counts network time.' },
  },
  {
    id: 'AUD-020',
    lens: 'usability',
    severity: 'Minor',
    title: 'Transfer fee shown only after the PIN step',
    journey: 'Send money',
    evidence: { kind: 'Recording', label: 'Session recordings', body: 'Customers pause for about 6 s when the fee first appears after the PIN.' },
    steps: 'Send money to another bank and enter the PIN.',
    fix: 'Show the fee on the amount screen, before the PIN is asked for.',
    recheck: { status: 'confirmed', note: 'Fee shown with the amount.' },
  },
];

/** The fix plan groups findings into an order of work. */
export const plan = [
  { name: 'Now', when: 'This sprint', ids: ['AUD-003', 'AUD-009', 'AUD-014', 'AUD-017'] },
  { name: 'Next', when: 'Next release', ids: ['AUD-005', 'AUD-006', 'AUD-013', 'AUD-015', 'AUD-016', 'AUD-020', 'AUD-010'] },
  { name: 'Later', when: 'Within the quarter', ids: ['AUD-001', 'AUD-002', 'AUD-004', 'AUD-007', 'AUD-008', 'AUD-011', 'AUD-012', 'AUD-018', 'AUD-019'] },
];
