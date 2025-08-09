import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { ProjectCard } from "../_component/projectcard";
import { Project } from "@/constants/projects";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface ProjectDetailsProps {
  project: Project;
}

export const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/projects">
          <Button variant="ghost">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
        </Link>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* 3D Card Preview */}
        <div className="flex justify-center">
          <ProjectCard project={project} />
        </div>
        
        {/* Detailed Information */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{project.name}</h1>
          <p className="text-lg text-muted-foreground">{project.headline}</p>
          
          {/* Metadata */}
          <div className="flex flex-wrap gap-2">
            {project.status && (
              <Badge variant={project.status === "Completed" ? "default" : "secondary"}>
                {project.status}
              </Badge>
            )}
            {project.startDate && (
              <Badge variant="outline">
                {project.startDate} - {project.endDate || "Present"}
              </Badge>
            )}
            {project.category?.map((cat) => (
              <Badge key={cat} variant="outline">
                {cat}
              </Badge>
            ))}
          </div>
          
          {/* Problem & Solution Section */}
          <div className="space-y-4">
            {project.problemStatement && (
              <div>
                <h2 className="text-xl font-semibold mb-2">Problem Statement</h2>
                <p className="text-muted-foreground">{project.problemStatement}</p>
              </div>
            )}
            
            {project.solutionApproach && (
              <div>
                <h2 className="text-xl font-semibold mb-2">Solution Approach</h2>
                <p className="text-muted-foreground">{project.solutionApproach}</p>
              </div>
            )}
          </div>
          
          {/* Achievements */}
          {project.achievement && project.achievement.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold mb-2">Achievements</h2>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                {project.achievement.map((ach, i) => (
                  <li key={i}>{ach}</li>
                ))}
              </ul>
            </div>
          )}
          
          {/* Challenges Faced */}
          {project.challengesFaced && project.challengesFaced.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold mb-2">Challenges Faced</h2>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                {project.challengesFaced.map((challenge, i) => (
                  <li key={i}>{challenge}</li>
                ))}
              </ul>
            </div>
          )}
          
          {/* Future Scope */}
          {project.futureScope && project.futureScope.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold mb-2">Future Scope</h2>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                {project.futureScope.map((scope, i) => (
                  <li key={i}>{scope}</li>
                ))}
              </ul>
            </div>
          )}
          
          {/* Project Images Gallery */}
          {project.projectImages && project.projectImages.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Project Images</h2>
              <div className="grid grid-cols-2 gap-4">
                {project.projectImages.map((img, i) => (
                  <div key={i} className="relative aspect-video rounded-lg overflow-hidden">
                    <Image
                      src={img}
                      alt={`${project.name} screenshot ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}


          {/* PPT Images Gallery */}
          {project.pptImages && project.pptImages.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Project Images</h2>
              <div className="grid grid-cols-2 gap-4">
                {project.pptImages.map((img, i) => (
                  <div key={i} className="relative aspect-video rounded-lg overflow-hidden">
                    <Image
                      src={img}
                      alt={`${project.name} screenshot ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Links */}
          <div className="flex flex-wrap gap-4 pt-4">
            {project.githubUrl && (
              <Button asChild variant="outline">
                <Link href={project.githubUrl} target="_blank">
                  View on GitHub
                </Link>
              </Button>
            )}
            {project.liveUrl && (
              <Button asChild>
                <Link href={project.liveUrl} target="_blank">
                  Live Demo
                </Link>
              </Button>
            )}
            {project.demoVideo && (
              <Button asChild variant="outline">
                <Link href={project.demoVideo} target="_blank">
                  Watch Demo Video
                </Link>
              </Button>
            )}
            {project.blogUrl && (
              <Button asChild variant="outline">
                <Link href={project.blogUrl} target="_blank">
                  Read Blog Post
                </Link>
              </Button>
            )}
            {project.feedbackForm && (
              <Button asChild variant="secondary">
                <Link href={project.feedbackForm} target="_blank">
                  Provide Feedback
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};