import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  TechboardLogo,
  SWClogo,
  munlogo,
  MunWebsite,
  HotShot,
  InternPortal,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Web Development Head",
    company_name: "Tech Board IITG",
    icon: TechboardLogo,
    iconBg: "#383E56",
    date: "April 2023 - Present",
    points: [
      "Developing and maintaining web applications for official use of Techboard IITG",
      "Collaborating with cross-functional teams including designers and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility along with backend management.",
      "Leading the team to ensure smooth functionality.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Students Web Committee IITG",
    icon: SWClogo,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications and Backend servers.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing complex schema designs and insuring api security.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "IITG MUN",
    icon: munlogo,
    iconBg: "#383E56",
    date: "Jan 2022 - Present",
    points: [
      "Developing and maintaining web applications and Backend servers.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "IITG MUN Website", 
    description:
      "Official Website of IITG MUN used for registration and information about the event. It is a full stack web application with a backend server and a frontend client. It is built using ReactJS, NodeJS, and Tailwind CSS.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: MunWebsite,
    source_code_link: "https://github.com/botketan/IITG_MUN_nweb",
  },
  {
    name: "Hot Shot",
    description:
      "Hotshot is your goto app for all day needs at IITG. Be it ordering food, sending images to stationary or just checking out shops it does it all. With support for refund along with pre-payment, Hotshot boosts hassle free payments with QR authentications. User Friendly UI, easy to order and secure checkouts are the corner stones of this Project.",
    tags: [
      {
        name: "node",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "cloudinary",
        color: "pink-text-gradient",
      },
    ],
    image: HotShot,
    source_code_link: "https://github.com/botketan/hotshot",
  },
  {
    name: "Intern Portal",
    description:
      "Intern Portal is official web application of IITG for students to apply for internships and for companies to post internships. It is a full stack web application with a backend server and a frontend client. It is built using ReactJS, NodeJS, and Tailwind CSS.",
    tags: [
      {
        name: "node",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
    ],
    image: InternPortal,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
