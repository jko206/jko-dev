export interface BulletPoint {
  bold?: string
  text: string
}

export interface ContactItem {
  text: string
  href: string
}

export interface SkillItem {
  id: string
  name: string
}

export interface SkillGroup {
  title: string
  items: SkillItem[]
}

export interface EducationInfo {
  school: string
  degree: string
  notes?: string
  detail?: string
}

export interface ExperienceItem {
  id?: string
  title: string
  subtitle?: string
  period?: string
  desc?: string
  bullets: BulletPoint[]
  skills?: string[]
  hidden?: boolean
}

export interface ProjectItem {
  id?: string
  title: string
  subtitle?: string
  period?: string
  desc: string
  bullets: BulletPoint[]
  skills?: string[]
  hidden?: boolean
}

export interface ResumeData {
  name: string
  role: string
  contact: ContactItem[]
  introduction: string
  education: EducationInfo
  skills: {
    languages: SkillGroup
    paradigms: SkillGroup
    tools: SkillGroup
  }
  experiences: ExperienceItem[]
  projects: ProjectItem[]
  miscellaneous: string[]
}

export const resumeData: ResumeData = {
  name: 'J Ko',
  role: 'Software Developer',
  contact: [
    { text: 'J-Ko.dev', href: 'https://j-ko.dev' },
    { text: '206jko@gmail.com', href: 'mailto:206jko@gmail.com' },
    { text: '+1.425.220.5899', href: 'tel:+14252205899' },
    { text: 'Github.com/jko206', href: 'https://Github.com/jko206' },
    { text: 'LinkedIn.com/in/206jko', href: 'https://LinkedIn.com/in/206jko' }
  ],
  introduction: 'Connecting humans and computers',
  education: {
    school: 'U of Washington, Seattle',
    degree: 'Mathematics B.S.',
    notes: '(discontinued)',
    detail: 'Computer science focused'
  },
  skills: {
    languages: {
      title: 'Language / Frameworks',
      items: [
        { id: 'js', name: 'JavaScript' },
        { id: 'ts', name: 'TypeScript' },
        { id: 'react', name: 'React' },
        { id: 'react_native', name: 'React Native' },
        { id: 'expo', name: 'Expo' },
        { id: 'vue', name: 'Vue' },
        { id: 'node', name: 'NodeJS' },
        { id: 'css', name: 'CSS' },
        { id: 'html', name: 'HTML' },
        { id: 'gql', name: 'GraphQL' },
        { id: 'relay', name: 'Relay' },
        { id: 'redux', name: 'Redux' },
        { id: 'tail', name: 'Tailwind CSS' },
        { id: 'sass', name: 'SASS' },
        { id: 'scss', name: 'SCSS' },
        { id: 'es6', name: 'ES6+' },
        { id: 'firebase', name: 'Firebase' },
        { id: 'aws', name: 'AWS CDK' },
        { id: 'cypress', name: 'Cypress' },
        { id: 'playwright', name: 'Playwright' },
        { id: 'java', name: 'Java' },
        { id: 'php', name: 'PHP' },
        { id: 'mysql', name: 'MySQL' },
        { id: 'flow', name: 'Flow' },
        { id: 'hack', name: 'Hack' },
        { id: 'jest', name: 'Jest' },
        { id: 'vitest', name: 'Vitest' }
      ]
    },
    paradigms: {
      title: 'Concepts / Paradigms',
      items: [
        { id: 'func_prog', name: 'Functional programming' },
        { id: 'eda', name: 'Event-driven architecture' },
        { id: 'cloud', name: 'Cloud computing' },
        { id: 'spa', name: 'Single/Multi Page Application' },
        { id: 'oop', name: 'Object oriented programming (OOP)' },
        { id: 'resp', name: 'Responsive design' },
        { id: 'tdd', name: 'Test-driven development' },
        { id: 'hooks', name: 'React hooks' },
        { id: 'vue_comp', name: 'Vue composition' },
        { id: 'algo', name: 'Algorithms' },
        { id: 'data_struct', name: 'Data structures' },
        { id: 'ui', name: 'User interface (UI)' },
        { id: 'ux', name: 'User experience (UX)' },
        { id: 'i18n', name: 'Internationalization (i18n)' },
        { id: 'testing', name: 'Testing (unit / integration / E2E)' },
        { id: 'cicd', name: 'Continuous integration / continuous deployment (CI/CD)' }
      ]
    },
    tools: {
      title: 'Tools',
      items: [
        { id: 'npm', name: 'npm' },
        { id: 'webpack', name: 'vite' },
        { id: 'git', name: 'git' },
        { id: 'vue-tools', name: 'Vue dev tools' },
        { id: 'vue-tools', name: 'React dev tools' },
        { id: 'vue-tools', name: 'Chrome Lighthouse' },
        { id: 'copilot', name: 'GitHub Copilot' },
        { id: 'metro', name: 'Metro' },
        { id: 'flipper', name: 'Flipper' },
        { id: 'vs-code', name: 'VS Code' }
      ]
    }
  },
  experiences: [
    {
      id: 'meta_monetization',
      title: 'Meta: Applied Artificial Intelligence',
      subtitle: 'Software Engineer',
      period: '2025.01 – Present',
      desc: 'Recruited into the Applied Artificial Intelligence org following a company re-org; previously developed generative AI features and canvas composition editing tools within the Ads Manager monetization space.',
      bullets: [
        {
          bold: 'Accelerate AI-driven development',
          text: 'Leveraged AI tools to achieve the highest Source Lines of Code (SLOC) changes within a skip-level org of ~100 developers, generating ~100 "Engineering Times Saved (ETS)" (one of the highest in the group).'
        },
        {
          bold: 'Lead AI adoption',
          text: 'Spearheaded organization-wide Lunch & Learn initiatives focused on advanced AI tool usage and best practices to drive developer velocity.'
        },
        {
          bold: 'Create canvas editor',
          text: 'Architected Wizzy Editor canvas components from scratch, implementing custom drag-and-resize hooks and Playwright E2E tests for monetization products.'
        },
        {
          bold: 'Build core features',
          text: 'Implemented BrandKit custom font uploads and designed the Shopping Cart experience in Media Wizard popovers to manage generated/uploaded image and video creatives.'
        },
        {
          bold: 'Optimize frontend & operations',
          text: 'Restructured codebase into module-centric folders, optimized grid rendering, and resolved critical production memory/CPU SEVs as part of oncall duties.'
        }
      ],
      skills: ['react', 'flow', 'gql', 'relay', 'hooks', 'ui', 'ux', 'e2e', 'unit', 'playwright']
    },
    {
      id: 'amazon2',
      title: 'Amazon: Corporate Projects Team',
      subtitle: 'Software Engineer',
      period: '2024.02 – 2024.12',
      desc: 'Maintain and enhance the order intake app for an internal division; collaborate with stakeholders to deliver tailored solutions that improve operational efficiency and user experience.',
      bullets: [
        {
          bold: 'Develop and optimize file upload',
          text: 'by enabling users to validate and assess 3D files while managing parallel async operations, resolving performance issues through optimized library usage, reducing load times, and enhancing user experience during complex file uploads.'
        },
        {
          bold: 'Refactor frontend components',
          text: 'by implementing the reducer pattern, improving code readability, maintainability, and increasing test coverage from 80% to over 95%.'
        },
        {
          bold: 'Manage timelines and collaborate',
          text: 'in a dynamic environment by initiating early design planning, navigating ambiguous project requirements, coordinating with cross-functional teams, and documenting decisions to ensure smooth and successful project execution.'
        },
        {
          bold: 'Leverage a robust tech stack',
          text: 'including React, TypeScript, AWS CDK, AppSync, and Cognito to build and maintain a scalable, secure, and high-performance order intake application, seamlessly integrating with event-driven microservices architecture.'
        }
      ],
      skills: [
        'ts',
        'react',
        'jest',
        'hooks',
        'redux',
        'rxjs',
        'ui',
        'ux',
        'e2e',
        'unit',
        'rest',
        'i18n',
        'eda',
        'aws'
      ]
    },
    {
      id: 'rippling',
      title: 'Rippling',
      subtitle: 'Senior Software Engineer',
      period: '2022.10 - 2023.04',
      desc: 'Develop cross-platform modules and coordinate engineering alignment between web and mobile (React / React Native)',
      bullets: [
        {
          bold: 'Build OCR expense submission',
          text: 'by designing the photo capture receipt OCR prefill flow using React Native and Expo, and integrating backend APIs to streamline expense creation.'
        },
        {
          bold: 'Optimize mobile performance',
          text: 'by refactoring application rendering behavior to eliminate redundant React Native useEffect loops, resulting in a cleaner, event-driven reactive state.'
        },
        {
          bold: 'Unify shared type system',
          text: 'by consolidating bifurcated TypeScript type definition files for web and mobile, eradicating any/unknown typings, and enforcing design-system parity.'
        },
        {
          bold: 'Rearchitect shared hooks',
          text: 'by extracting shared web and mobile controller logic into testable React hooks, utilizing Redux for centralized global state management.'
        }
      ],
      skills: [
        'ts',
        'react',
        'react_native',
        'expo',
        'jest',
        'hooks',
        'redux',
        'ui',
        'ux',
        'e2e',
        'unit',
        'rest',
        'i18n',
        'mobile',
        'flipper'
      ]
    },
    {
      id: 'pilot',
      title: 'Pilot.com',
      subtitle: 'Software Engineer',
      period: '2019.03 – 2020.01',
      desc: 'Develop an app for the internal bookkeepers',
      bullets: [
        {
          bold: 'Redo customer dashboard',
          text: 'Revamped the page that displays all customer statuses with details about their work completion, assignee, etc.'
        },
        {
          bold: 'Build global component',
          text: 'Built a component that can be used across the app to toggle the status of a customer'
        },
        {
          bold: 'Communicate for quick result',
          text: 'Owing to startup nature of the company, talked directly with designers, PMs, devs, and other employees to quickly implement ideas, fix bugs, etc.'
        },
        {
          bold: 'Optimize/modernize codebase',
          text: 'Implemented newest standard of HTML/JavaScript/CSS and improved test coverage'
        }
      ],
      skills: ['vue', 'scss', 'sass', 'html', 'spa', 'vue-tools', 'e2e', 'jest', 'unit', 'resp'],
      hidden: true
    },
    {
      id: 'meta',
      title: 'Meta: Web3 Services',
      subtitle: 'Software Engineer',
      period: '2021.10 – 2022.10',
      desc: 'Build the internal platform as the company transitions from Web 2 to Web 3 using React, Flow, GraphQL and HackLang.',
      bullets: [
        {
          bold: 'Engage and plan',
          text: 'Actively engaged other teams to scope out needs and prioritize features with largest business impact'
        },
        {
          bold: 'Build platform',
          text: 'Built an internal tool for querying and displaying NFTs'
        },
        {
          bold: 'Rearchitect',
          text: 'Transformed a basic querying tool into a platform upon which others can build their own tools'
        },
        {
          bold: 'Mentor interns',
          text: 'Taught interns technical skills, as well as career planning and growth'
        }
      ],
      skills: ['flow', 'react', 'gql', 'ui', 'ux', 'hooks', 'e2e', 'unit', 'hack', 'php']
    },
    {
      id: 'amazon',
      title: 'Amazon Web Services: EC2 Networking',
      subtitle: 'Software Engineer',
      period: '2020.03 – 2021.10',
      desc: 'Develop the <a href="https://us-east-1.console.aws.amazon.com/ec2/home?region=us-east-1#LoadBalancers:" target="_blank" class="underline text-blue-500">console</a> and the infrastructure behind it for the Elastic Load Balancing org',
      bullets: [
        {
          bold: 'Rebuild console',
          text: 'Rewrote console previously written in GWT and Angular with internal React library, RxJS, Redux, and TypeScript.'
        },
        {
          bold: 'Improve testing',
          text: 'Wrote unit, integration, and E2E to tests to maintain bug-free service'
        },
        {
          bold: 'Listen and engage',
          text: "Read internal and external customers' feedback to plan and prioritize features, and catch UI/UX issues not caught by tests"
        },
        {
          bold: 'Manage deployment',
          text: 'Monitored and maintained CI/CD pipeline for smooth worldwide deployment'
        },
        {
          bold: 'Improve onboarding',
          text: 'Reduced onboarding time from 6 weeks to 1 week at the beginning of the pandemic'
        }
      ],
      skills: [
        'ts',
        'react',
        'jest',
        'hooks',
        'redux',
        'rxjs',
        'ui',
        'ux',
        'e2e',
        'unit',
        'rest',
        'i18n',
        'gwt'
      ]
    }
  ],
  projects: [
    {
      id: 'mtn',
      title: 'MathTestNinja',
      subtitle: 'Full Stack Developer',
      period: '2023.06 – 2024.02',
      desc: 'An app designed to help students practice basic arithmetic by tying math performance to rewards (such as screen time).',
      bullets: [
        {
          bold: 'AI-assisted orchestration',
          text: 'Developed a system of collaborative AI agents to automatically generate components, routing, and domain model updates.'
        },
        {
          bold: 'Full stack infrastructure',
          text: 'Built student reward portals integrating Firebase (Auth/Firestore), Stripe subscription processing, and Google Cloud Functions.'
        },
        {
          bold: 'Product Design',
          text: 'Planned, designed, and coded the entire application based on 9 years of teaching experience.'
        }
      ],
      skills: ['vue', 'vue-tools', 'ui', 'ux', 'spa', 'scss', 'tail', 'firebase']
    },
    {
      title: 'Arraze',
      desc: 'Lightweight utility library for intuitive array manipulation.',
      bullets: [
        {
          text: 'Implements core utilities (`sort()`, `filter()`, `shuffle()`, `createNumbered()`) with 100% test coverage.'
        },
        { text: 'Fully written in TypeScript for optimal IDE integration and type safety.' }
      ]
    },
    {
      title: 'DirTree',
      desc: 'An application generating visual directory structures for developer documentation.',
      bullets: [
        { text: 'Developed a custom display algorithm and keyboard-accessible UI/UX.' },
        { text: 'Utilizes Firestore to collect user feedback and usage metrics.' }
      ]
    },
    {
      title: 'PrecisionJS',
      desc: 'JavaScript math library for arbitrarily large numbers with infinite precision.',
      bullets: [
        {
          text: 'Parses repeating decimals/fractions and calculates trigonometric series via recursion and BigInt.'
        },
        { text: 'Written in TypeScript for type safety and clean IDE integration.' }
      ]
    }
  ],
  miscellaneous: [
    'Places in the top percentiles in various JavaScript assessments, such as LinkedIn, TopTal, TripleByte, etc.',
    "I write self-documenting code. Generally speaking, if I have to write comments, then there's probably a better way to write the code.",
    'Having been a private tutor for 9 years, I care deeply about how and why people encounter hindrance in accessing information. This care has been translated into my passion for creating intuitive UI/UX.'
  ]
}
