import { site } from './site';

export const faqs = [
  {
    q: 'What exactly do we get at the end?',
    a: 'A report with every finding (its ID, lens, severity, evidence, steps to reproduce and a recommended fix), a one-page summary for leadership, a walkthrough session with your team, and a re-check once you have shipped the fixes.',
  },
  {
    q: 'How long does an audit take?',
    a: `Most audits take ${site.auditDuration} from intake to report, depending on how many journeys and platforms are in scope. We confirm the dates before we start, and the re-check is scheduled once your fixes are live.`,
  },
  {
    q: 'What do you need from us?',
    a: 'Access to the product or a test environment, test accounts, one contact person on your team, and an hour to walk us through your users and what matters most to the business.',
  },
  {
    q: 'Can you guarantee results?',
    a: 'No honest auditor can promise a number, because results depend on what your team ships. What we do guarantee is that every finding is real, backed by evidence, and comes with a fix your team can act on.',
  },
  {
    q: 'Do you fix the issues for us?',
    a: 'No. We stay independent, so we don’t write your production code or sell you a rebuild. Every finding comes with a specific recommended fix, and we confirm it in the re-check.',
  },
  {
    q: 'Can you audit something that isn’t live yet?',
    a: 'Yes. We inspect prototypes, staging environments and beta releases. Before launch is the cheapest time to find rust.',
  },
  {
    q: 'Which accessibility standard do you use?',
    a: 'WCAG 2.2 at level AA. Every accessibility finding is mapped to the criterion it fails, and you get a conformance summary you can share with partners, funders or regulators.',
  },
  {
    q: 'How is our data kept safe?',
    a: 'We work under a confidentiality agreement, use test accounts wherever possible, and never put your customers’ personal data in our reports.',
  },
  {
    q: 'How is pricing set?',
    a: `Each audit has one fixed price, agreed before we start and including the re-check. It depends on the number of journeys, platforms and lenses in scope. ${site.pricingDetails}`,
  },
];
