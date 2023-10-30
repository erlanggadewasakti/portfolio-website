"use client";

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        I am an accomplished software engineer with{" "}
        <span className="font-medium">2 years of professional experience</span>,
        specializing in back-end development. My recognition comes from my
        expertise in REST API design, testing, and optimization. I excel at
        system maintenance, problem solving, and fostering effective team
        collaboration. My proficiency is further evidenced by my strong
        computing and critical thinking skills, all enhanced by my extensive
        knowledge in application database design and management. My core stack
        includes{" "}
        <span className="font-medium">
          Java, Tailwind, React, Next.js, Node.js, PostgreSQL, and MongoDB
        </span>
        , with additional understanding in{" "}
        <span className="font-medium">TypeScript and Prisma</span>. I have a
        genuine passion for learning new technologies and staying ahead in the
        ever-evolving technology. Currently, I contribute my skills and
        knowledge as a dedicated back-end developer at Telkom University IT
        Center (PuTI).
      </p>
    </motion.section>
  );
}
