"use client";

import { projectsData } from "@/lib/data";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { FiArrowRight, FiExternalLink, FiGithub, FiInfo } from "react-icons/fi";
import ProjectModal from "./project-modal";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  demoUrl,
  githubUrl,
  status,
  type,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFullyVisible, setIsFullyVisible] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  // Monitor scroll progress to determine when animation is complete
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // When scroll progress reaches 1 (100%), the scale animation is complete
    setIsFullyVisible(latest >= 1);
  });

  const hasAvailableLinks = demoUrl || githubUrl;

  const handleModalOpen = () => {
    if (isFullyVisible) {
      setIsModalOpen(true);
    }
  };

  const projectData = {
    title,
    description,
    tags,
    imageUrl,
    demoUrl,
    githubUrl,
    status,
    type,
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-500";
      case "In Progress":
        return "bg-yellow-500";
      case "Planned":
        return "bg-blue-500";
      default:
        return "bg-gray-500";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Private":
        return "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300 border-red-200 dark:border-red-700";
      case "Enterprise":
        return "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 border-blue-200 dark:border-blue-700";
      case "Government":
        return "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300 border-purple-200 dark:border-purple-700";
      case "AI":
        return "bg-cyan-100 text-cyan-700 dark:bg-cyan-900 dark:text-cyan-300 border-cyan-200 dark:border-cyan-700";
      case "Educational":
        return "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 border-green-200 dark:border-green-700";
      case "University":
        return "bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300 border-indigo-200 dark:border-indigo-700";
      case "Desktop":
        return "bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300 border-orange-200 dark:border-orange-700";
      case "Web App":
        return "bg-teal-100 text-teal-700 dark:bg-teal-900 dark:text-teal-300 border-teal-200 dark:border-teal-700";
      case "Open Source":
        return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300 border-emerald-200 dark:border-emerald-700";
      default:
        return "bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300 border-gray-200 dark:border-gray-700";
    }
  };

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="mb-8 group last:mb-0"
    >
      <div
        className={`relative overflow-hidden transition-all duration-500 bg-white border shadow-lg dark:bg-gray-900 rounded-2xl dark:shadow-2xl border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl dark:hover:shadow-2xl/50 hover:-translate-y-2 ${
          isFullyVisible
            ? "cursor-pointer ring-2 ring-transparent hover:ring-purple-500/50"
            : "cursor-default"
        }`}
        onClick={handleModalOpen}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-10 transition-opacity duration-500 opacity-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-teal-500/10 group-hover:opacity-100" />

        {/* Click Ready Indicator */}
        {isFullyVisible && (
          <div className="absolute z-30 top-2 left-2">
            <div className="flex items-center gap-1 px-2 py-1 text-xs font-medium text-purple-700 bg-purple-100 border border-purple-200 rounded-full dark:bg-purple-900/50 dark:text-purple-300 dark:border-purple-700">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              Click for details
            </div>
          </div>
        )}

        {/* Image Container */}
        <div className="relative h-64 overflow-hidden sm:h-72 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700">
          <Image
            src={imageUrl}
            alt={`${title} project screenshot`}
            fill
            quality={95}
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Overlay with action buttons */}
          <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 bg-black/0 group-hover:bg-black/40">
            <div className="flex flex-col gap-3 transition-all duration-300 transform translate-y-4 opacity-0 sm:flex-row group-hover:opacity-100 group-hover:translate-y-0">
              {/* View Details Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (isFullyVisible) {
                    setIsModalOpen(true);
                  }
                }}
                disabled={!isFullyVisible}
                className={`flex items-center gap-2 px-6 py-3 font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${
                  isFullyVisible
                    ? "text-white bg-purple-600 hover:bg-purple-700 hover:scale-105"
                    : "text-gray-400 bg-gray-500 cursor-not-allowed"
                }`}
              >
                <FiInfo className="w-4 h-4" />
                View Details
              </button>

              {hasAvailableLinks ? (
                <>
                  {demoUrl && (
                    <a
                      href={demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 px-6 py-3 font-medium text-gray-900 transition-all duration-300 bg-white rounded-full shadow-lg dark:bg-gray-800 dark:text-white hover:shadow-xl hover:scale-105"
                    >
                      <FiExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  {githubUrl && (
                    <a
                      href={githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 px-6 py-3 font-medium text-white transition-all duration-300 bg-gray-900 rounded-full shadow-lg dark:bg-white dark:text-gray-900 hover:shadow-xl hover:scale-105"
                    >
                      <FiGithub className="w-4 h-4" />
                      Source
                    </a>
                  )}
                </>
              ) : null}
            </div>
          </div>

          {/* Status and Type Badges */}
          <div className="absolute z-20 flex flex-col gap-2 top-4 right-4">
            <span
              className={`px-3 py-1 text-xs font-medium text-white rounded-full shadow-lg backdrop-blur-sm ${getStatusColor(
                status
              )}`}
            >
              {status}
            </span>
            <span
              className={`px-2 py-1 text-xs text-center font-medium rounded-full shadow-lg border backdrop-blur-sm ${getTypeColor(
                type
              )}`}
            >
              {type}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-20 p-6 sm:p-8">
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-900 transition-colors duration-300 sm:text-2xl dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400">
              {title}
            </h3>
            <FiArrowRight className="w-5 h-5 text-gray-400 transition-all duration-300 transform group-hover:text-purple-600 dark:group-hover:text-purple-400 group-hover:translate-x-1" />
          </div>

          <p className="mb-6 text-sm leading-relaxed text-gray-600 dark:text-gray-300 sm:text-base line-clamp-3">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 6).map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-medium text-purple-700 transition-transform duration-200 border rounded-full bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900 dark:text-purple-300 border-purple-200/50 dark:border-purple-700/50 hover:scale-105"
              >
                {tag}
              </span>
            ))}
            {tags.length > 6 && (
              <span className="px-3 py-1 text-xs font-medium text-gray-600 bg-gray-100 border border-gray-200 rounded-full dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700">
                +{tags.length - 6} more
              </span>
            )}
          </div>
        </div>

        {/* Bottom gradient line */}
        <div className="h-1 transition-opacity duration-500 opacity-0 bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 group-hover:opacity-100" />
      </div>

      {/* Project Modal */}
      {/* Project Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={projectData}
      />
    </motion.div>
  );
}
