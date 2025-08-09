import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Project } from "@/constants/projects";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export const ProjectCard = ({ project, className }: ProjectCardProps) => {
  return (
    <CardContainer className={className}>
      <CardBody className="bg-black/80 backdrop-blur-sm relative group/card hover:shadow-2xl hover:shadow-sky-500/10 border-sky-500/30 w-full sm:w-[30rem] h-full rounded-2xl p-6 border transition-all duration-300">
        {/* Project Header with Gradient */}
        <CardItem
          translateZ="50"
          className="text-2xl font-bold mb-2"
        >
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
            {project.name}
          </span>
        </CardItem>
        
        <CardItem
          as="p"
          translateZ="60"
          className= "text-sm max-w-sm text-gray-300 mb-4"
        >
          {project.headline}
        </CardItem>
        
        {/* Status and Dates */}
        <CardItem translateZ="40" className="flex items-center gap-2 mb-4">
          {project.status && (
            <Badge 
              variant={project.status === "Completed" ? "default" : "secondary"}
              className="bg-gradient-to-r from-sky-400 to-blue-600 text-white"
            >
              {project.status}
            </Badge>
          )}
          {project.startDate && (
            <span className="text-xs text-gray-400">
              {project.startDate} - {project.endDate || "Present"}
            </span>
          )}
        </CardItem>
        
        {/* Categories and Tags */}
        <CardItem translateZ="30" className="flex flex-wrap gap-2 mb-6">
          {project.category?.map((cat) => (
            <Badge 
              key={cat} 
              variant="outline"
              className="border-sky-400/50 text-sky-400"
            >
              {cat}
            </Badge>
          ))}
          {project.tags?.map((tag) => (
            <Badge 
              key={tag} 
              variant="secondary"
              className="bg-sky-500/10 text-sky-400"
            >
              {tag}
            </Badge>
          ))}
        </CardItem>
        
        {/* Project Images (first image as thumbnail) */}
        {project.projectImages && project.projectImages.length > 0 && (
          <CardItem
            translateZ="40"
            rotateX={5}
            rotateY={5}
            className="w-full mb-6"
          >
            <div className="relative aspect-video rounded-xl overflow-hidden border border-gray-800 group-hover/card:border-sky-300/50 transition-all">
              <Image
                src={project.projectImages[0]}
                alt={`${project.name} thumbnail`}
                fill
                className="object-cover group-hover/card:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity" />
            </div>
          </CardItem>
        )}
        
        {/* Problem Statement */}
        {project.problemStatement && (
          <CardItem
            translateZ="20"
            className="mb-4"
          >
            <h3 className="font-medium text-gray-200 flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mr-2"></span>
              Problem Statement
            </h3>
            <p className="text-sm text-gray-400 mt-2">
              {project.problemStatement}
            </p>
          </CardItem>
        )}
        
        {/* Solution Approach */}
        {project.solutionApproach && (
          <CardItem
            translateZ="10"
            className="mb-4"
          >
            <h3 className="font-medium text-gray-200 flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mr-2"></span>
              Solution Approach
            </h3>
            <p className="text-sm text-gray-400 mt-2">
              {project.solutionApproach}
            </p>
          </CardItem>
        )}
        
        {/* Achievements */}
        {project.achievement && project.achievement.length > 0 && (
          <CardItem
            translateZ="10"
            className="mb-6"
          >
            <h3 className="font-medium text-gray-200 flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mr-2"></span>
              Achievements
            </h3>
            <ul className="list-disc list-inside text-sm text-gray-400 mt-2 space-y-1 pl-1">
              {project.achievement.map((ach, i) => (
                <li key={i}>{ach}</li>
              ))}
            </ul>
          </CardItem>
        )}
        
        {/* Links */}
        <div className="flex justify-between items-center mt-auto">
          {(project.githubUrl || project.liveUrl || project.demoVideo) && (
            <CardItem translateZ={20}>
              <div className="flex gap-2 flex-wrap">
                {project.githubUrl && (
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    onClick={(e) => e.stopPropagation()}
                    className="px-4 py-2 rounded-lg text-xs font-medium bg-gray-800 hover:bg-gray-700 text-gray-300 transition-colors flex items-center gap-1"
                  >
                    <span>GitHub</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </Link>
                )}
                {project.liveUrl && (
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    onClick={(e) => e.stopPropagation()}
                    className="px-4 py-2 rounded-lg text-xs font-bold bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white transition-all flex items-center gap-1"
                  >
                    <span>Live Demo</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </Link>
                )}
                {project.demoVideo && (
                  <Link
                    href={project.demoVideo}
                    target="_blank"
                    onClick={(e) => e.stopPropagation()}
                    className="px-4 py-2 rounded-lg text-xs font-medium bg-gray-800 hover:bg-gray-700 text-gray-300 transition-colors flex items-center gap-1"
                  >
                    <span>Watch Demo</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="23 7 16 12 23 17 23 7"></polygon>
                      <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                    </svg>
                  </Link>
                )}
              </div>
            </CardItem>
          )}
          
          {project.blogUrl && (
            <CardItem translateZ={20}>
              <Link
                href={project.blogUrl}
                target="_blank"
                onClick={(e) => e.stopPropagation()}
                className="px-4 py-2 rounded-lg text-xs font-medium bg-gray-800 hover:bg-gray-700 text-gray-300 transition-colors flex items-center gap-1"
              >
                <span>Read Blog</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </Link>
            </CardItem>
          )}
        </div>
      </CardBody>
    </CardContainer>
  );
};














