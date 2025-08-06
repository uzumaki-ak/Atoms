"use client"

import { motion, useScroll } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MapPin, X } from "lucide-react"
import { experiences, Experience, Project } from "@/constants/experience"

export default function Timeline() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  return (
    <div ref={ref} className="relative mx-auto max-w-5xl px-4 py-12">
      <motion.div
        style={{ scaleY: scrollYProgress }}
        className="absolute left-9 top-0 bottom-0 w-1 origin-top bg-gradient-to-b from-sky-400 to-blue-600 glow"
      />

      <div className="space-y-24 relative">
        {experiences.map((experience, index) => (
          <TimelineItem key={index} experience={experience} index={index} />
        ))}
      </div>
    </div>
  )
}

function formatDate(dateStr?: string) {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function TimelineItem({
  experience,
  index,
}: {
  experience: Experience;
  index: number;
}) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const startDate = formatDate(experience.startDate);
  const endDate = formatDate(experience.endDate);
  const dateRange = startDate && endDate ? `${startDate} - ${endDate}` : startDate || "Present";

  const openImageModal = (image: string) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
        className="relative"
      >
        {/* Circle marker */}
        <div className="absolute left-9 -translate-x-1/2 h-5 w-5 rounded-full bg-gradient-to-r from-sky-400 to-blue-600 glow z-10" />

        <div className="grid md:grid-cols-[1fr,1.5fr] gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="ml-16 md:text-right"
          >
            <span className="text-3xl md:text-3xl font-bold relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
              {dateRange}
            </span>
            <h3 className="text-xl md:text-2xl font-semibold mt-2 text-white">{experience.title}</h3>
            {experience.organization && (
              <p className="text-white/80 mt-1">{experience.organization}</p>
            )}
            {experience.location && (
              <p className="text-white/70 mt-1">{experience.location}</p>
            )}
            {experience.description && (
              <p className="text-white/70 mt-2 ">{experience.description}</p>
            )}
            {experience.linkedinPost && (
              <Link
                href={experience.linkedinPost}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-4 text-sm text-sky-400 hover:text-sky-300 transition-colors"
              >
                <span>View on LinkedIn</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="ml-16"
          >
            <div className="glass rounded-xl p-5 border border-white/10">
              {/* Projects */}
              {experience.projects && experience.projects.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-white mb-2">Projects:</h4>
                  <ul className="space-y-2">
                    {experience.projects.map((project, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 * i }}
                        viewport={{ once: true }}
                        className="flex items-start gap-2"
                      >
                        <div className="w-4 h-4 rounded-full bg-gradient-to-r from-sky-400 to-blue-600 mt-1 flex-shrink-0" />
                        <span className="text-white/80">
                          {project.name}
                          {project.link && (
                            <Link 
                              href={project.link} 
                              target="_blank"
                              rel="noopener noreferrer"
                              className="ml-2 text-sky-400 hover:underline text-sm"
                            >
                              (View Project)
                            </Link>
                          )}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Achievement */}
              {experience.achievement && (
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-white mb-2">Achievement:</h4>
                  <p className="text-white/80">{experience.achievement}</p>
                </div>
              )}

              {/* Team Information */}
              {(experience.teamName || experience.teamMembers) && (
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-white mb-2">Team:</h4>
                  {experience.teamName && (
                    <p className="text-white/80 mb-1">Team Name: {experience.teamName}</p>
                  )}
                  {experience.teamMembers && experience.teamMembers.length > 0 && (
                    <div>
                      <p className="text-white/80 mb-1">Members:</p>
                      <ul className="list-disc list-inside text-white/70">
                        {experience.teamMembers.map((member, i) => (
                          <li key={i}>{member}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {/* Tags */}
              {experience.tags && experience.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {experience.tags.map((tag, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2, delay: 0.1 * i }}
                      viewport={{ once: true }}
                      className="px-3 py-1 bg-sky-500/20 text-sky-300 rounded-full text-sm"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              )}

              {/* Images */}
              {experience.images && experience.images.length > 0 && (
                <div className="grid grid-cols-3 gap-3 mt-4">
                  {experience.images.map((image, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.2 * i }}
                      viewport={{ once: true }}
                      className="relative aspect-video rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() => openImageModal(image)}
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`Project image ${i + 1}`}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
          <button 
            onClick={closeImageModal}
            className="absolute top-4 right-4 text-white hover:text-sky-300 transition-colors"
            aria-label="Close image"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="relative w-full max-w-4xl h-full max-h-[90vh]">
            <Image
              src={selectedImage}
              alt="Enlarged project image"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </>
  )
}