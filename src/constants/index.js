import {
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  netflix,
  jobit,
  tripguide,
  threejs,
  shoppingcart,
  fswfoods,
  alura,
  udemy
} from '../assets'

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'courses',
    title: 'Courses',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
]

const services = [
  {
    title: 'Front-end Developer',
    icon: web,
  },
  {
    title: 'Fullstack developer',
    icon: backend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  
]

const technologies = [
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'HTML 5',
    icon: html,
  },

  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },

  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },

  {
    name: 'docker',
    icon: docker,
  },
]

const experiences = [
  {
    title: 'Programming logic',
    company_name: 'Alura',
    icon: alura,
    iconBg: '#383E56',
    date: 'Jan 2024',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'JavaScript and TypeScript ',
    company_name: 'Udemy',
    icon: udemy,
    iconBg: '#E6DEDD',
    date: 'Dez 2023',
    points: [
      'Developing and maintaining web applications using Next.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Fundamentals HTML, CSS and JavaScript',
    company_name: 'Udemy',
    icon: udemy,
    iconBg: '#383E56',
    date: ' Dez 2023',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Python 3',
    company_name: 'Udemy',
    icon: udemy,
    iconBg: '#E6DEDD',
    date: 'Jan 2023 ',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
]

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
]

const projects = [
  {
    name: 'FSW Foods',
    description:
      'Ifood clone developed with next.js, react, typescript, tailwindcss, prisma, neon tech.',

    
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'react',
        color: 'green-text-gradient',
      },
      {
        name: 'prisma',
        color: 'pink-text-gradient',
      },
      {
        name: 'typescript',
       color: 'green-text-gradient',
      },
    ],
    image: fswfoods,
    source_code_link: 'https://github.com/angelalvess/fsw-foods',
  },
  {
    name: 'Netflix Clone',
    description:
      'Netflix clone developed with React.js, Tailwind, Vite, FirebaseDB ',

    
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'firebaseDB',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: netflix,
    source_code_link: 'https://github.com/angelalvess/netflix-react',
  },
  {
    name: 'Shopping Cart',
    description:
    'This is a shopping cart project developed with React JS and the Mercado Livre API.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'green-text-gradient',
      },
      {
        name: 'mercadolivre-api',
        color: 'pink-text-gradient',
      },
    ],
    image: shoppingcart,
    source_code_link: 'https://github.com/angelalvess/shopping-cart',
  },
]

export { services, technologies, experiences, testimonials, projects }
