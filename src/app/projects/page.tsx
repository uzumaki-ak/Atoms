"use client";
import { projects } from "@/constants/projects";
import { ProjectCard } from "./_component/projectcard";
import { useRouter } from "next/navigation";
import { useState, useMemo } from "react";
import {Search } from "lucide-react";

export default function ProjectsPage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => 
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.headline.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (project.tags && project.tags.some(tag => 
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      ))
    );
  }, [projects, searchTerm]);

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
            Our Projects
          </span>
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
        Our work showcasing problem-solving, creativity, and technical expertise
        </p>
      </div>

      {/* Centered Search Bar */}
      <div className="relative max-w-md mx-auto">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search by title or tags..."
            className="block w-full pl-10 pr-3 py-2 border border-white/20 rounded-full bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const slug = project.name.toLowerCase().replace(/\s+/g, "-");
            return (
              <div
                key={slug}
                className="cursor-pointer transition-transform hover:scale-[1.02]"
                onClick={() => router.push(`/projects/${slug}`)}
              >
                <ProjectCard project={project} className="h-[550px] overflow-hidden"/>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-gray-500 text-lg">No projects found matching your search.</p>
        </div>
      )}
    </div>
  );
}