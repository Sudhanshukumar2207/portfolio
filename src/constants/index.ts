import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
  TEducation,
  TInternship,
} from "../types";

import {
  // mobile,
  backend,
  // creator,
  web,
  javascript,
  // typescript,
  html,
  css,
  reactjs,
  // redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  // figma,
  // docker,
  meta,
  starbucks,
  tesla,
  shopify,
  // carrent,
  // jobit,
  // tripguide,
  threejs,
  android,
  ios,
  ppu,
  vgu,
  cbse,
  rays,
  c,
  cpp,
  python,
  java,
  jquery,
  expressjs,
  mysql,
  github,
  contact,
  eduinfo,
  pl,
  restroqr,
  // portfolio,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {id:"education",
    title:"Education"
  },
  {
    id: "internship",
    title: "Internship",
  },
  {id:"skill",
    title:"Skill"
  },
  {id:"project",
    title:"Project"
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Andriod Developer",
    icon: android,
  },
  {
    title: "IOS Developer",
    icon: ios,
  },
];

const technologies: TTechnology[] = [
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "jQuery",
    icon: jquery,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: expressjs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "gitHub",
    icon: github,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "C",
    icon: c,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];
const Educations: TEducation[] =[
  {
    session: "2023-2025",
    class: "Master of Computer Application",
    collage: "Vivekanands Global University, Jaipur",
    marks: "Aggregate: 7.9 CGPA (upto 2nd sem)",
    icon:vgu,
    iconBg:"gray"
  },
  {
    session: "2020-2023",
    class: "Bachelor of Computer Application",
    collage: "Patliputra University, Patna",
    marks: "Aggregate: 62%",
    icon:ppu,
    iconBg:"gray"
  },
  {
    session: "2020",
    class: "Higher Secondary Schooling",
    collage: "Central Board of Secondary Education(CBSE)",
    marks: "Aggregate: 73%",
    icon:cbse,
    iconBg:"#383E56"
  },
  {
    session: "2017",
    class: "Secondary Schooling",
    collage: "Central Board of Secondary Education(CBSE)",
    marks: "Aggregate: 9.6 CGPA",
    icon:cbse,
    iconBg:"#383E56"
  },
];

const internships: TInternship[] = [
  {
    date:"Apr'23-Jul'23",
    companyName:"Rays edutech. pvt. ltd , Patna",
    post:"Full Stack Web Developer",
    role:"Team Leader",
    technology:"HTML, CSS, JS, jQuery, Python, MySQL",
    icon:rays,
    iconBg:"gray",
  },
  // {
  //   date:"Apr'23-Jul'23",
  //   companyName:"Rays edutech. pvt. ltd , Patna",
  //   post:"Full Stack Web Developer",
  //   role:"Team Leader",
  //   technology:"HTML, CSS, JS, jQuery, Python, MySQL",
  //   icon:rays,
  //   iconBg:"gray",
  // },
  // {
  //   date:"Apr'23-Jul'23",
  //   companyName:"Rays edutech. pvt. ltd , Patna",
  //   post:"Full Stack Web Developer",
  //   role:"Team Leader",
  //   technology:"HTML, CSS, JS, jQuery, Python, MySQL",
  //   icon:rays,
  //   iconBg:"gray",
  // },
  // {
  //   date:"Apr'23-Jul'23",
  //   companyName:"Rays edutech. pvt. ltd , Patna",
  //   post:"Full Stack Web Developer",
  //   role:"Team Leader",
  //   technology:"HTML, CSS, JS, jQuery, Python, MySQL",
  //   icon:rays,
  //   iconBg:"gray",
  // },
]

const experiences: TExperience[] = [
  {
    title: "React.js Developer",
    companyName: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    companyName: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    companyName: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    companyName: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials: TTestimonial[] = [
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

const projects: TProject[] = [
  {
    name: "Patliputra Logistics Control System",
    description:
      "It is a WEB Application for logistic in which they can manage Order, Depot, Distributer, Transport, vehicle details and also manage driver payments and other expenses and also generate for each order.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image: pl,
    sourceCodeLink: "https://github.com/Sudhanshukumar2207/patliputra_logistic_control_system",
    liveLink:"http://pcplpatna.com/",
  },
  {
    name: "Admission Management System",
    description:
      "It is a WEB Application for Admission Counselor in which they can manage collage, course detail and generate quotations and distribute them to students via email and WhatsApp.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image: eduinfo,
    sourceCodeLink: "https://github.com/Sudhanshukumar2207/admission_management_system",
    liveLink:"https://eduinfome.in/",
  },
  {
    name: "RestroQR Menu",
    description:
      "It is a WEB Application for Restaurant in which they can generate QR for Customer Menu and can view & analyze order and Customer can view menu by scanning QR and order items.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Supabase",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: restroqr,
    sourceCodeLink: "https://github.com/Sudhanshukumar2207/RestroMenu",
    liveLink:"https://restroqrmenu.netlify.app/",
  },
  // {
  //   name: "My Portfolio",
  //   description:
  //     "It is My Portfolio",
  //   tags: [
  //     {
  //       name: "React",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Threejs",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "Typescript",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: portfolio,
  //   sourceCodeLink: "https://github.com/Sudhanshukumar2207/portfolio",
  //   liveLink:"https://sudhanshu01-portfolio.netlify.app/",
  // },
  {
    name: "Contact Book",
    description:
      "It is a WEB Application of Contact Book in which we can store our contact details, search and edit & delete the contact.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
    ],
    image: contact,
    sourceCodeLink: "https://github.com/Sudhanshukumar2207/contact_backend",
    liveLink:"https://sudhanshu-contactbook.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects, Educations, internships };
