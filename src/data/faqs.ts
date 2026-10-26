import { site } from './site';

export const faqs = [
  {
    q: 'How long does an audit take?',
    a: `Most audits take ${site.auditDuration} from intake to report, depending on how many journeys and platforms are in scope. The re-check is scheduled once your team has shipped the fixes.`,
  },
  {
    q: 'What do you need from us?',
    a: 'Access to the product or a test environment, test accounts, a contact person on your team, and an hour to walk us through your users and what matters most to the business.',
  },
  {
    q: 'Do you fix the issues for us?',
    a: 'We stay independent: we don’t write your production code. Every finding comes with a specific recommended fix your team can implement, and we confirm it in the re-check.',
  },
  {
    q: 'Which standard do you use for accessibility?',
    a: 'We test against WCAG 2.2 at level AA, and every accessibility finding is mapped to the criterion it fails.',
  },
  {
    q: 'How is our data kept safe?',
    a: 'We work under a confidentiality agreement, use test accounts wherever possible, and never store your customers’ personal data in our reports.',
  },
  {
    q: 'How is pricing set?',
    a: `Each audit has a fixed price agreed before we start, based on the number of journeys, platforms and lenses in scope. ${site.pricingDetails}`,
  },
];
