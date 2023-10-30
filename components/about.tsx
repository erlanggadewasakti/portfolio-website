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
        I'm a skilled software engineer with{" "}
        <span className="font-medium">2 years of professional experience</span>,
        focusing on back-end development. I'm recognized for my expertise in
        designing, testing, and optimizing REST APIs. I'm also great at
        maintaining systems, solving problems, and promoting effective teamwork.
        My strengths lie in strong computing and critical thinking skills,
        supported by my extensive knowledge of application database design and
        management.
        <br />
        <br />
        My primary tech stack includes{" "}
        <span className="font-medium">
          Java, Tailwind, React, Next.js, Node.js, PostgreSQL, MySQL, and
          MongoDB
        </span>
        . I also have a good understanding of{" "}
        <span className="font-medium">TypeScript and Prisma</span>. I have a
        genuine passion for learning new technologies and keeping up with the
        ever-evolving tech landscape. Currently, I contribute my skills and
        knowledge as a dedicated back-end developer at Telkom University IT
        Center (PuTI).
      </p>
    </motion.section>
  );
}
