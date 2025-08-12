import dewataImg from "@/public/dewata.png";
import hedrImg from "@/public/hedr.png";
import kiranagaraImg from "@/public/kiranagara.png";
import lofoImg from "@/public/lofo.png";
import obeImg from "@/public/obe.png";
import seedsImg from "@/public/seeds.png";
import simakImg from "@/public/simak.png";
import siramaImg from "@/public/sirama.png";
import tellUs from "@/public/tellus.png";

import React from "react";
import { CgOrganisation, CgPen, CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import { VscOrganization } from "react-icons/vsc";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Master Degree of Computer Science",
    location: "Telkom University, Indonesia",
    description: React.createElement("span", null, `- Scholarship Recipient`),
    icon: React.createElement(LuGraduationCap),
    date: "09/2023 - Present",
  },
  {
    title: "System Analyst",
    location: "Telkom University, Indonesia",
    description: `I adeptly design and maintain high-performance RESTful services, ensuring impeccable functionality and seamless system operation. I prioritize clear communication, consistently providing progress updates to the system analyst, and foster a culture of collaboration within the team, contributing to the successful achievement of project goals.`,
    icon: React.createElement(CgWorkAlt),
    date: "02/2022 - Present",
  },
  {
    title: "Bachelor Degree of Computer Science",
    location: "Telkom University, Indonesia",
    description: React.createElement(
      "span",
      null,
      `- Scholarship Recipient`,
      React.createElement("br"),
      `- GPA  : 3.96/4.00 (Summa Cumlaude)`
    ),
    icon: React.createElement(LuGraduationCap),
    date: "09/2023 - Present",
  },
  {
    title: "Back End Developer",
    location: "Telkom University, Indonesia",
    description: `I adeptly design and maintain high-performance RESTful services, ensuring impeccable functionality and seamless system operation. I prioritize clear communication, consistently providing progress updates to the system analyst, and foster a culture of collaboration within the team, contributing to the successful achievement of project goals.`,
    icon: React.createElement(CgWorkAlt),
    date: "02/2022 - Present",
  },
  {
    title: "Associate of Computer Software Engineering",
    location: "Telkom University, Indonesia",
    description: React.createElement(
      "span",
      null,
      `- Scholarship Recipient`,
      React.createElement("br"),
      `- GPA  : 3.96/4.00 (Cumlaude)`
    ),
    icon: React.createElement(LuGraduationCap),
    // icon: React.createElement(CgWorkAlt),
    date: "09/2020 - 07/2023",
  },
  {
    title: "Teaching Assistant Database System",
    location: "Telkom University, Indonesia",
    description: `Empowering lecturers to effectively teach and guide students
      in mastering SQL and NoSQL database management, storage,
      and optimization techniques, ensuring a comprehensive
      understanding of these crucial skills.`,
    icon: React.createElement(CgPen),
    // icon: React.createElement(CgWorkAlt),
    date: "10/2022 - 06/2023",
  },
  {
    title: "Vice Coordinator",
    location: "Chevalier Lab SAS, Telkom University",
    description:
      "I efficiently organize and lead productive meetings, fostering collaboration among members. I also oversee study group progress, ensuring they meet educational objectives. Additionally, I actively support the coordinator's work, contributing to the project's smooth operation.",
    icon: React.createElement(VscOrganization),
    date: "10/2021 - 10/2022",
  },
  {
    title: "Education Volunteer",
    location: "Telkom University",
    description: `In 2021, I played an active role in the Himapur Telkom University
      organization by successfully holding roadshows, webinars,
      tryouts and edufairs. This initiative provides great benefts to
      member organizations and participants.`,
    icon: React.createElement(CgOrganisation),
    date: "01/2021 - 02/2021",
  },
  {
    title: "Assistant Lab of Web Development",
    location: "Chevalier Lab SAS, Telkom University",
    description:
      "I adeptly design and develop web applications that not only meet project requirements but also deliver exceptional user experiences. I proactively maintain and troubleshoot web applications to ensure their reliability, enhancing user satisfaction. Additionally, I provide informative reports for effective project tracking, and I actively engage in study groups to foster knowledge sharing, contributing to both personal and team growth.",
    icon: React.createElement(VscOrganization),
    date: "12/2020 - 10/2021",
  },
] as const;

export const projectsData = [
  {
    title: `OBE (Outcome Based Education)`,
    description:
      "OBE (Outcome-Based Education) is a system for managing and tracking educational outcomes, covering PEO, PLO, CLO assessments, and reporting. It helps institutions efficiently evaluate student learning achievements while supporting accreditation requirements.",
    tags: ["NestJS", "Prisma", "Microservices", "PostgreSQL", "JWT", "Angular"],
    imageUrl: obeImg,
    demoUrl: null, // Not publicly deployed
    githubUrl: null, // Not open source
    status: "Completed",
    type: "Enterprise",
  },
  {
    title: `Sirama - Back End Service`,
    description:
      "Sirama is a course registration application at Telkom University. This application simplifies the process of registering for courses, making it convenient and efficient for students.",
    tags: ["NestJS", "Prisma", "Microservices", "PostgreSQL", "JWT"],
    imageUrl: siramaImg,
    demoUrl: null, // Internal university system
    githubUrl: null, // Not open source
    status: "Completed",
    type: "Enterprise",
  },
  {
    title: `S.E.E.D.S - Back End Service`,
    description:
      "S.E.E.D.S (Student Enrollment and Education Data System) is a user-friendly application designed to streamline the process of collecting biodata from incoming students at Telkom University.",
    tags: ["NestJS", "Prisma", "Microservices", "PostgreSQL", "JWT"],
    imageUrl: seedsImg,
    demoUrl: null, // Internal university system
    githubUrl: null, // Not open source
    status: "Completed",
    type: "Enterprise",
  },
  {
    title: `Higher Education Digital Readiness`,
    description:
      "Questionnaire application that is useful for collecting digital readiness level data for all campuses in Indonesia.",
    tags: ["T3 Stack", "TypeScript", "Tailwind", "PostgreSQL"],
    imageUrl: hedrImg,
    demoUrl: null, // Government project, not public
    githubUrl: null, // Not open source
    status: "Completed",
    type: "Government",
  },
  {
    title: "Telu Tell Us",
    description:
      "The AI chatbot application uses datasets from Telkom University's openlib to help the Telkom University academic community",
    tags: [
      "Next.js",
      "PostgreSQL",
      "Tailwind",
      "Prisma",
      "Azure",
      "OpenAI",
      "NestJS",
      "Vercel AI SDK",
    ],
    imageUrl: tellUs,
    demoUrl: null, // Internal university system
    githubUrl: null, // Not open source yet
    status: "Completed",
    type: "AI",
  },
  {
    title: "Kiranagara",
    description:
      "Kiranagara is a free online learning platform that discusses the culture in Indonesia. Lots hope that with the creation of this e-learning website is to increase the knowledge of the nation's generations about the culture in Indonesia.",
    tags: ["Laravel", "PHP", "MySQL", "Tailwind"],
    imageUrl: kiranagaraImg,
    demoUrl: "https://kiranagara-demo.vercel.app", // Example demo URL - replace with actual
    githubUrl: "https://github.com/erlanggadewa/kiranagara", // Example GitHub URL - replace with actual
    status: "Completed",
    type: "Educational",
  },
  {
    title: "TelU Lost and Found - Back End Service",
    description:
      "Application functions as a forum or media for Telkom University students if they want to make reports of lost or found items.",
    tags: ["NestJS", "PostgreSQL", "Prisma", "JWT", "NodeMailer"],
    imageUrl: lofoImg,
    demoUrl: null, // Internal university system
    githubUrl: "https://github.com/erlanggadewa/telu-lost-found-api", // Example GitHub URL - replace with actual
    status: "Completed",
    type: "University",
  },
  {
    title: "SIMAK",
    description:
      "SIMAK (Financial Management System) is a desktop-based financial management application that offers features that allow users to carry out management related to company products, receipts and expenses.",
    tags: ["Java", "JavaFX", "MySQL"],
    imageUrl: simakImg,
    demoUrl: null, // Desktop application
    githubUrl: "https://github.com/erlanggadewa/simak-javafx", // Example GitHub URL - replace with actual
    status: "Completed",
    type: "Desktop",
  },
  {
    title: "Dewata Trans",
    description:
      "The Dewata Trans application in Malang, Indonesia, manages car rentals and tour package bookings. Admins can handle vehicle, tour package, and orderer data, stored securely in a database. They can also generate invoices from order data for transaction proof.",
    tags: ["PHP", "CSS", "JavaScript", "HTML"],
    imageUrl: dewataImg,
    demoUrl: "https://dewata-trans-demo.vercel.app", // Example demo URL - replace with actual
    githubUrl: "https://github.com/erlanggadewa/dewata-trans", // Example GitHub URL - replace with actual
    status: "Completed",
    type: "Web App",
  },
] as const;

export const skillsData = [
  `Node.js`,
  `Data Structures`,
  `NestJS`,
  `TypeScript`,
  `JavaScript`,
  `Postgres`,
  `Tailwind CSS`,
  `Postman`,
  `MySQL`,
  `Next.js`,
  `React`,
  `Object Relational Mapping`,
  `Java`,
  `Git (Version Control System)`,
  `Laravel`,
  `PHP`,
  `Sass (CSS Preprocessor)`,
  `MongoDB`,
  `Express`,
  `Hapi`,
  `Jest Testing`,
  `Amazon Web Service`,
  `Kotlin`,
  ,
] as const;
