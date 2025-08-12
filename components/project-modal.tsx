"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import {
  FiCalendar,
  FiExternalLink,
  FiGithub,
  FiLock,
  FiTag,
  FiX,
} from "react-icons/fi";

type ProjectModalProps = {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    tags: readonly string[];
    imageUrl: any;
    demoUrl: string | null;
    githubUrl: string | null;
    status: string;
    type: string;
  };
};

export default function ProjectModal({
  isOpen,
  onClose,
  project,
}: ProjectModalProps) {
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
        return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300 border-red-200 dark:border-red-700";
      case "Enterprise":
        return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border-blue-200 dark:border-blue-700";
      case "Government":
        return "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 border-purple-200 dark:border-purple-700";
      case "AI":
        return "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300 border-cyan-200 dark:border-cyan-700";
      case "Educational":
        return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 border-green-200 dark:border-green-700";
      case "University":
        return "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300 border-indigo-200 dark:border-indigo-700";
      case "Desktop":
        return "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300 border-orange-200 dark:border-orange-700";
      case "Web App":
        return "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300 border-teal-200 dark:border-teal-700";
      case "Open Source":
        return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 border-emerald-200 dark:border-emerald-700";
      default:
        return "bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300 border-gray-200 dark:border-gray-700";
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            <div
              className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header with Close Button */}
              <div className="absolute top-4 right-4 z-10">
                <button
                  onClick={onClose}
                  className="p-2 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-800 rounded-full shadow-lg transition-all duration-200 backdrop-blur-sm"
                >
                  <FiX className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="overflow-y-auto max-h-[90vh]">
                {/* Hero Image */}
                <div className="relative h-64 sm:h-80 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700">
                  <Image
                    src={project.imageUrl}
                    alt={`${project.title} project screenshot`}
                    fill
                    quality={95}
                    className="object-cover"
                  />

                  {/* Status and Type Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <span
                      className={`px-3 py-1 text-xs font-medium text-white rounded-full shadow-lg backdrop-blur-sm ${getStatusColor(
                        project.status
                      )}`}
                    >
                      <FiCalendar className="w-3 h-3 inline mr-1" />
                      {project.status}
                    </span>
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full shadow-lg border backdrop-blur-sm ${getTypeColor(
                        project.type
                      )}`}
                    >
                      <FiTag className="w-3 h-3 inline mr-1" />
                      {project.type}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  {/* Title */}
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    {project.title}
                  </h2>

                  {/* Description */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      About This Project
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base mb-4">
                      {project.description}
                    </p>

                    {/* Additional project insights based on type */}
                    {project.type === "Enterprise" && (
                      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                        <p className="text-sm text-blue-800 dark:text-blue-200">
                          <strong>Enterprise Project:</strong> This project was
                          developed for enterprise-level usage with focus on
                          scalability, security, and performance. It follows
                          industry best practices and enterprise architecture
                          patterns.
                        </p>
                      </div>
                    )}

                    {project.type === "AI" && (
                      <div className="bg-cyan-50 dark:bg-cyan-900/20 p-4 rounded-lg border border-cyan-200 dark:border-cyan-800">
                        <p className="text-sm text-cyan-800 dark:text-cyan-200">
                          <strong>AI-Powered Project:</strong> This project
                          leverages artificial intelligence and machine learning
                          technologies to provide intelligent solutions and
                          enhanced user experiences.
                        </p>
                      </div>
                    )}

                    {project.type === "Government" && (
                      <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                        <p className="text-sm text-purple-800 dark:text-purple-200">
                          <strong>Government Project:</strong> This project was
                          developed for government institutions with strict
                          security requirements, compliance standards, and
                          public service objectives.
                        </p>
                      </div>
                    )}

                    {project.type === "University" && (
                      <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg border border-indigo-200 dark:border-indigo-800">
                        <p className="text-sm text-indigo-800 dark:text-indigo-200">
                          <strong>University Project:</strong> This project was
                          developed to support university operations and student
                          services, focusing on academic workflows and
                          institutional needs.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 text-sm font-medium text-purple-700 transition-transform duration-200 border rounded-lg bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 dark:text-purple-300 border-purple-200/50 dark:border-purple-700/50 hover:scale-105"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 px-6 py-3 font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                      >
                        <FiExternalLink className="w-5 h-5" />
                        View Live Demo
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 px-6 py-3 font-medium text-gray-900 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                      >
                        <FiGithub className="w-5 h-5" />
                        View Source Code
                      </a>
                    )}

                    {!project.demoUrl && !project.githubUrl && (
                      <div className="flex items-center justify-center gap-3 px-6 py-3 font-medium text-gray-500 bg-gray-100 dark:bg-gray-800 dark:text-gray-400 rounded-lg">
                        <FiLock className="w-5 h-5" />
                        Private/Internal Project
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
