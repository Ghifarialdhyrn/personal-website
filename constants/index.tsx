import type {
  ExperienceType,
  LinksType,
  ProjectType,
  ServiceType,
  StatsType,
  TestimonialsType,
  ToolsType,
} from '@/types';

/**
 * Assets
 */
import {
  Briefcase,
  Github,
  FileText,
  Globe,
  Home,
  Instagram,
  Layers,
  Mail,
  MessageCircle,
  Palette,
  Rocket,
  Settings,
  Smartphone,
  Linkedin,
  User,
} from 'lucide-react';

const navLinks: LinksType[] = [
  { label: 'Home', link: '#hero', icon: Home },
  {
    label: 'Projects',
    link: '#projects',
    icon: Briefcase,
  },
  { label: 'About', link: '#about', icon: User },
  {
    label: 'Services',
    link: '#services',
    icon: Settings,
  },
  { label: 'Resume', link: '#resume', icon: FileText },

  { label: 'Contact', link: '#contact', icon: Mail },
];

const socialLinks: LinksType[] = [
  {
    icon: Github,
    label: 'Github',
    link: 'https://github.com/Ghifarialdhyrn',
  },
  {
    icon: Linkedin,
    label: 'Linkedin',
    link: 'https://www.linkedin.com/in/ghifarialdhyrn/',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    link: 'https://instagram.com/ghifarialdhy',
  },
];

const projectsData: ProjectType[] = [
  {
    imgSrc: '/images/project-ph-1.png',
    title: 'Website Kebun Taniku',
    tags: ['Description', 'Demo'],
    projectLink: 'https://kebutaniku.store/',
  },
  {
    imgSrc: '/images/project-ph-2.png',
    title: 'Website Stayza Booking App',
    tags: ['Description', 'Demo'],
    projectLink: 'https://stayza-renting-property.vercel.app/',
  },
  {
    imgSrc: '/images/project-ph-3.png',
    title: 'One Love - Video',
    tags: ['Video'],
    projectLink: 'https://www.instagram.com/reel/DVklMHAEoKr/',
  },
  {
    imgSrc: '/images/project-ph-5.png',
    title: 'Sophie Martin - Video',
    tags: ['Video'],
    projectLink: 'https://www.instagram.com/reel/DVYqKiBEgYp/',
  },
];

const education: ExperienceType[] = [
  {
    year: '2021 – 2026',
    title: 'Bachelor of Computer Science',
    institute: 'Universitas Pendidikan Indonesia',
    desc: 'Focused on front-end development, back-end development, and web application architecture.',
  },
  {
    year: '2024 – 2025',
    title: 'Fullstack Web Development Bootcamp',
    institute: 'Purwadhika Digital Technology School',
    desc: 'Completed an intensive fullstack web development program covering JavaScript, React, Node.js, Express, and database systems while building scalable web applications through real-world projects and team collaboration.',
  },
];

const experience: ExperienceType[] = [
  {
    year: '2024',
    title: 'Web Developer Intern',
    institute: 'PT Len Industri',
    desc: 'Contributed as a Web Developer Intern in the Human Capital Services division by developing and maintaining internal web applications that support human resource management processes and improve operational efficiency.',
  },
];

const tools: ToolsType[] = [
  {
    label: 'Figma',
    imgSrc: '/images/tools/figma.svg',
  },
  {
    label: 'HTML',
    imgSrc: '/images/tools/html.png',
  },
  {
    label: 'CSS',
    imgSrc: '/images/tools/css3.svg',
  },
  {
    label: 'Tailwind CSS',
    imgSrc: '/images/tools/tailwindcss.svg',
  },
  {
    label: 'React',
    imgSrc: '/images/tools/react.svg',
  },
  {
    label: 'JavaScript',
    imgSrc: '/images/tools/javascript.svg',
  },
  {
    label: 'Node.js',
    imgSrc: '/images/tools/nodejs.svg',
  },
  {
    label: 'Express.js',
    imgSrc: '/images/tools/expressjs.svg',
  },
  {
    label: 'Mongodb',
    imgSrc: '/images/tools/mongodb.svg',
  },
  {
    label: 'Github',
    imgSrc: '/images/tools/github.png',
  },
  {
    label: 'PHP',
    imgSrc: '/images/tools/php.png',
  },
  {
    label: 'CapCut',
    imgSrc: '/images/tools/capcut.png',
  },
  {
    label: 'Canva',
    imgSrc: '/images/tools/canva.png',
  },
];

const services: ServiceType[] = [
  {
    title: 'Web Development',
    desc: 'Building high-performance, SEO-friendly websites using Next.js, Tailwind, and modern web technologies.',
    projects: '2 Projects',
    icon: <Globe className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'Video Editing',
    desc: 'I create engaging video content with smooth transitions, motion effects, and storytelling techniques to deliver visually appealing and impactful videos.',
    projects: '3 Projects',
    icon: <Palette className='h-6 w-6 text-green-400' />,
  },
];

const statsData: StatsType[] = [
  {
    number: '3.79/4.00',
    label: 'GPA',
  },
  {
    number: '01±',
    label: 'Years Of Experience',
  },
  {
    number: '5',
    label: 'Projects Done',
  },
];

export {
  socialLinks,
  projectsData,
  education,
  experience,
  tools,
  services,
  navLinks,
  statsData,
};
