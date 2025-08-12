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
      <div className="cv-summary">
        <p>
          I'm a professional software engineer with over 3 years of experience
          combining system analysis expertise with robust back-end development
          skills. Currently serving dual roles as a System Analyst for Outcome
          Based Education (OBE) applications and a Back-End Developer, I bridge
          business requirements with technical excellence.
        </p>
        <br />
        <p>
          As a System Analyst, I specialize in analyzing complex educational
          workflows including PEO, PLO, CLO assessments, and reporting systems.
          My expertise encompasses functional specification design, business
          process modeling (DFD/UML/BPMN), and seamless integration with
          academic systems like iGracias and LMS platforms while ensuring
          compliance with accreditation standards.
        </p>
        <br />

        <p>
          With 3+ years of back-end development experience, I have successfully
          architected high-performance RESTful services using{" "}
          <strong>
            NestJS, TypeScript, Laravel, PHP, PostgreSQL, and Prisma ORM
          </strong>
          . I excel in microservices architecture, production system
          maintenance, and delivering scalable solutions with impeccable
          functionality and performance.
        </p>
        <br />

        <p>
          My unique dual perspective enables comprehensive understanding of the
          software development lifecycle from requirements analysis to technical
          implementation. I leverage modern tools including Postman and GitLab
          while maintaining expertise in database design and management.
          Currently contributing at Telkom University IT Center (PuTI), I'm
          committed to delivering innovative solutions that drive educational
          excellence through technology.
        </p>
      </div>
    </motion.section>
  );
}
