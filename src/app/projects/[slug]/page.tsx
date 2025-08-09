// 'use client'
// import { projects } from "@/constants/projects";
// import { ProjectDetails } from "./projectDetails";

// interface ProjectPageProps {
//   params: {
//     slug: string;
//   };
// }

// export default function ProjectPage({ params }: ProjectPageProps) {
//   const project = projects.find(
//     (p) => p.name.toLowerCase().replace(/\s+/g, "-") === params.slug
//   );

//   if (!project) {
//     return <div className="p-8">Project not found</div>;
//   }

//   return <ProjectDetails project={project} />;
// }


'use client';

import React from "react";
import { projects } from "@/constants/projects";
import { ProjectDetails } from "./projectDetails";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = React.use(params);

  const project = projects.find(
    (p) => p.name.toLowerCase().replace(/\s+/g, "-") === slug
  );

  if (!project) {
    return <div className="p-8">Project not found</div>;
  }

  return <ProjectDetails project={project} />;
}
