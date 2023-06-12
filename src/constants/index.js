import {
  mobile,
  backend,
  creator,
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
  CourseReview,
  trackit,
  YashSocial,
  upskillz, 
  carrent,
  jobit,
  tripguide,
  threejs, 
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
    title: "JAVA Programmer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "React Native Developer",
    icon: creator,
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
    name: "Redux Toolkit",
    icon: redux,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Upskillz",
    icon: upskillz,
    iconBg: "#E6DEDD",
    date: "June 2022 - August 2022",
    points: [
      "Developed a full Stack Hotel Reservation App , interactive and responsive Booking Webiste.",
      "Technology used for Back-end: Nodejs , Rest-API , MongoDb.",
      "Technology used for Front-end: HTML , CSS , JavaScript , ReactJs.",
    ],
  },
  {
    title: "Web Developer Trainie",
    company_name: "Upskillz",
    icon: upskillz,
    iconBg: "#E6DEDD",
    date: "June 2022 - August 2022",
    points: [
      "Trained as a Website developer intern to develop websites using ReactJs and MongoDb databases.",
      "Developed problem solving and debugging skills helped in identifying and resolving issues in my code.",
      "Learned about Web Development best practices including code optimization, performance improvement, and adherence to web standards.",
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
    name: "Track-IT",
    description:
      "• Full-Stack budget maintaining Website to have control over money. • Used Speechly as voice input technology to take input from the user. • Based on chart representation of data entered by user to enhance proficiency.",
    tags: [
      {
        name: "Speechly",
        color: "blue-text-gradient",
      },
      {
        name: "ChartJS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: trackit,
    source_code_link: "https://github.com/Yashpokharna/Track-IT",
  },
  {
    name: "ReviewKar",
    description:
      "• A online course review website to guide students for better courses. • Developed using MERN stack technology. • Implementing responsive design and ensuring cross-browser compatibility.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDb",
        color: "green-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: CourseReview,
    source_code_link: "https://github.com/Yashpokharna/CourseReview",
  },
  {
    name: "Hotel Guide",
    description:
      "• A MERN stack website to book your vacation stays. • Aims at providing the user to reserve accommodation at hotels online. • Utilize user data to offer personalized hotel recommendations.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Postman",
        color: "green-text-gradient",
      },
      {
        name: "RestAPI",
        color: "pink-text-gradient",
      },
    ],
    image: YashSocial,
    source_code_link: "https://github.com/Yashpokharna/Hotel-Guide",
  },
];

export { services, technologies, experiences, testimonials, projects };
