export const PERSONAL_INFO = {
  name: 'Yuliia Chimyrys',
  role: 'Software Engineer',
  shellUser: 'yuchi',
  shellHost: 'mac',
  shellPath: '~/portfolio',
  terminalTitle: 'yuchi@mac — ~/portfolio — fish',
  terminalWelcome: 'Welcome to yuchi portfolio, software engineer',
  terminalHelpPrefix: 'Type ',
  terminalHelpWord: 'help',
  terminalHelpSuffix: ' to view sections',
  terminalGreeting: 'hi, yuchi here.',
  terminalTagline:
    'Software engineer in Europe building distributed systems and AI-powered products.',
  description:
    'I am currently a Software Engineer at Microsoft, focused on scalable backend systems, production AI integrations, and shipping reliable software.',
  previous:
    'Previously at Meta and Netcracker, where I worked on large-scale web platforms and full-stack product development.',
  stack: ['Java', 'C#', 'TypeScript', 'React.js', 'Distributed Systems', 'Azure'],
  aside: '(ideally before production finds out)',
};

export const EXPERIENCE = [
  {
    role: 'Software Engineer',
    company: 'Microsoft',
    date: '2023 — Present',
    details: [
      'Designing and developing scalable services in distributed environments.',
      'Collaborating with cross-functional teams to deliver production-grade AI integrations.',
      'Driving performance optimization and code quality improvements.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Meta',
    date: '2021 — 2023',
    details: [
      'Built and maintained high-performance web systems for large-scale users.',
      'Worked on reliability and observability improvements for internal platforms.',
      'Contributed to design discussions and knowledge-sharing sessions.',
    ],
  },
  {
    role: 'Full-Stack Developer',
    company: 'Netcracker',
    date: '2019 — 2021',
    details: [
      'Developed end-to-end web apps with Java, Spring, and React.',
      'Implemented REST APIs and modernized UI architecture.',
      'Participated in code reviews and performance audits.',
    ],
  },
];

export const PROJECTS = [
  {
    title: 'Portfolio',
    description:
      'Personal site with scroll-driven navigation, minimal layout, and content-driven sections.',
    tags: ['React', 'CSS'],
    href: null,
  },
  {
    title: 'Distributed systems tooling',
    description:
      'Internal utilities and services for observability, reliability, and developer workflows.',
    tags: ['Backend', 'Cloud'],
    href: null,
  },
  {
    title: 'AI integrations',
    description:
      'Production RAG and LLM workflows — from prototyping to hardened deployment patterns.',
    tags: ['AI', 'RAG'],
    href: null,
  },
];
