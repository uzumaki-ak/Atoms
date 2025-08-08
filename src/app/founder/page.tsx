"use client";

import React from "react";
import {
  Linkedin,
  Instagram,
  Twitter,
  ExternalLink,
  Github,
} from "lucide-react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  instagram?: string;
  twitter?: string;
  github?: string;
  description?: string;
  gridSize: "small" | "medium" | "large";
}

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Aryan Jha",
    role: "Manager+Backend Dev",
    image: "./images/aryan.jpg",
    linkedin: "https://www.linkedin.com/in/aryan-jha-530719325/",
    github: "https://github.com/Diotoara",
    instagram: "https://www.instagram.com/diotoara",
    description:
      "Team manager and backend developer with a proven ability to coordinate projects, streamline workflows, and ensure smooth team operations. Skilled in designing and maintaining robust backend systems, integrating APIs, and optimizing performance, while overseeing timelines, resource allocation, and cross-functional collaboration to deliver high-quality results.",
    gridSize: "medium",
  },
  {
    id: "2",
    name: "Md.Ehshan",
    role: "Fullstack+ContentCreator",
    image: "./images/Ehshan.jpeg",
    linkedin: "https://www.linkedin.com/in/mohammad-ehshan-4362a0298/",
    instagram: "https://www.instagram.com/hackathonwalebhaiya/",
    github: "https://github.com/Mohammad-Ehshan",
    description:
      "CSE’27 student with a strong track record in innovation and problem-solving. 3x Google Agentic AI Mentor, winner & finalist at 15+ prestigious hackathons including IIT, NSUT, and Microsoft, and participant in 30+ hackathons overall. Skilled in MERN stack, Next.js, and Generative AI, with 200+ DSA problems solved, showcasing solid algorithmic and development expertise.",
    gridSize: "large",
  },
  {
    id: "3",
    name: "Aditya Singh",
    role: "AI-ML",
    image: "./images/Aditya.jpg",
    linkedin: "https://www.linkedin.com/in/aditya-singh-7210b2267/",
    github: "https://github.com/ADITYASINGH77770000",
    description:
      "AI/ML developer passionate about building intelligent systems and data-driven solutions. Skilled in machine learning algorithms, deep learning frameworks, and model deployment, with experience in developing predictive models, automating workflows, and optimizing performance for real-world applications.",
    gridSize: "medium",
  },
  {
    id: "4",
    name: "N.Aarwin",
    role: "Product Research & Frontend Dev",
    image: "./images/aarwin.jpg",
    linkedin: "https://www.linkedin.com/in/n-aarwin-4343a0292",
    instagram: "http://Instagram.com/haoshoku47",
    github: "https://github.com/Aarwin10",
    description:
      "Frontend developer with a strong focus on market research and product insights. Skilled in building user-friendly interfaces while analyzing market trends and user behavior to guide design decisions and enhance product relevance. Adept at bridging technical execution with strategic research to deliver solutions that resonate with target audiences.",
    gridSize: "small",
  },
  {
    id: "5",
    name: "Koshal Yadav",
    role: "UI/UX Designer & Video Editor",
    image: "./images/koshal.jpg",
    linkedin: "https://www.linkedin.com/in/koshal-im-b4a5722a5/",
    instagram: "#",
    description:
      "UI/UX developer passionate about crafting intuitive, user-centered digital experiences paired with strong video editing skills to create engaging visual content. Experienced in wireframing, prototyping, and user research, alongside video production and editing to enhance storytelling and brand communication across platforms.",
    gridSize: "medium",
  },
  {
    id: "6",
    name: "Anikesh Kumar",
    role: "Fullstack Web & App Developer",
    image: "./images/Anikesh.jpg",
    linkedin: "https://www.linkedin.com/in/anikesh-kumar-1b87b42a5/",
    instagram: "https://www.instagram.com/anikeshiro/",
    github: "https://github.com/uzumaki-ak/",
    description:
      "Versatile fullstack developer skilled in building scalable web and mobile applications. Experienced in both frontend and backend technologies, focused on delivering seamless, high-performance user experiences across platforms. Adept at end-to-end development, from designing robust APIs to deploying polished web and app solutions.",
    gridSize: "small",
  },
  {
    id: "7",
    name: "Swayam Jha",
    role: "IoT & Cybersecurity Specialist",
    image: "./images/Swayam.jpg",
    linkedin: "https://www.linkedin.com/in/swayam-jha-520ba9312/",
    instagram: "https://www.instagram.com/swayam_jhaa",
    github: "https://github.com/Swayam-jhaa",
    description:
      "SIoT and cybersecurity professional skilled in securing connected devices and networks against evolving threats. Experienced in designing and implementing robust security protocols, vulnerability assessments, and real-time monitoring for IoT ecosystems. Adept at balancing device functionality with strong security measures to ensure safe and reliable operation of smart systems.",
    gridSize: "large",
  },
  {
    id: "8",
    name: "Pawan Tiwari",
    role: "Video Editor",
    image: "./images/pawan.jpg",
    instagram: "https://www.instagram.com/2005pawan/",
    description:
      "Skilled video editor specializing in crafting compelling visual stories through precise cutting, color grading, and effects. Experienced with industry-standard editing software to produce engaging videos for marketing, social media, and brand storytelling. Passionate about enhancing narrative flow and visual impact to captivate audiences.",
    gridSize: "medium",
  },
];

const TeamCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  const getGridClasses = () => {
    switch (member.gridSize) {
      case "large":
        return "md:col-span-2 md:row-span-2";
      case "medium":
        return "md:col-span-1 md:row-span-2";
      case "small":
        return "md:col-span-1 md:row-span-1";
      default:
        return "md:col-span-1 md:row-span-1";
    }
  };

  const getImageHeight = () => {
    switch (member.gridSize) {
      case "large":
        return "h-96 md:h-full";
      case "medium":
        return "h-80 md:h-full";
      case "small":
        return "h-64 md:h-full";
      default:
        return "h-64 md:h-full";
    }
  };

  return (
    <div
      className={`group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl ${getGridClasses()}`}
    >
      {/* Background Image */}
      <div className={`relative ${getImageHeight()} overflow-hidden`}>
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => {
            e.currentTarget.src = `data:image/svg+xml;base64,${btoa(`
              <svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
                <rect width="400" height="400" fill="#374151"/>
                <text x="200" y="200" text-anchor="middle" dy="0.3em" fill="#9CA3AF" font-family="Arial" font-size="20">
                  ${member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </text>
              </svg>
            `)}`;
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

        {/* Content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="text-orange-500 font-extrabold text-lg mb-1 tracking-wide">
              {member.name}
            </h3>
            <p className="text-gray-300 text-sm font-bold mb-3 tracking-wider">
              {member.role}
            </p>

            {/* Description - appears on hover */}
            {member.description && (
              <p className="text-gray-300 text-sm leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                {member.description}
              </p>
            )}

            {/* Social Links */}
            <div className="flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white/10 hover:bg-blue-600 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  <Linkedin size={16} className="text-white" />
                </a>
              )}
              {member.instagram && (
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white/10 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  <Instagram size={16} className="text-white" />
                </a>
              )}
              {member.twitter && (
                <a
                  href={member.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white/10 hover:bg-blue-400 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  <Twitter size={16} className="text-white" />
                </a>
              )}
              {member.github && (
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white/10 hover:bg-yellow-400 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  <Github size={16} className="text-white" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Hover indicator */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
            <ExternalLink size={16} className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Founder: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Meet the Team.
          </h1>
          <p className="text-gray-300 text-xl leading-relaxed max-w-3xl mx-auto">
            The creative minds and technical experts behind our innovative
            solutions. Each member brings unique expertise and passion to
            deliver exceptional results.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
          {teamMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center relative overflow-hidden rounded-2xl border border-gray-700 bg-gradient-to-br from-black via-[#0c0c2b] to-[#001F3F] p-8 md:p-12">
          {/* Falling stars animation layer */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="animate-fallStars absolute top-0 left-[20%] w-1 h-1 bg-white rounded-full opacity-70"></div>
            <div className="animate-fallStars animation-delay-1000 absolute top-0 left-[40%] w-1 h-1 bg-white rounded-full opacity-70"></div>
            <div className="animate-fallStars animation-delay-2000 absolute top-0 left-[60%] w-1 h-1 bg-white rounded-full opacity-70"></div>
            <div className="animate-fallStars animation-delay-3000 absolute top-0 left-[80%] w-1 h-1 bg-white rounded-full opacity-70"></div>
          </div>

          {/* Main content */}
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need a Website, App, or Content?
            </h2>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
              We're a modern digital agency turning ideas into beautiful
              websites, powerful apps, and compelling content. Let’s bring your
              vision to life.
            </p>
            <a
              href="/contact"
              className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold  transition-all duration-200 transform hover:scale-105 inline-block hover:bg-orange-100"
            >
              Get Your Work Done
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founder;
