export type Project = {
  name: string;
  link?: string;
};

export type Experience = {
  title: string;
  organization?: string;
  startDate?: string;
  endDate?: string;
  location?: string;
  type?: string;
  description?: string;
  projects?: Project[];
  linkedinPost?: string;
  achievement?: string;
  images?: string[];
  tags?: string[];
  teamName?: string;
  teamMembers?: string[];
};

export const experiences:Experience[]= [
  {
    "title": "TechMind",
    "organization": "IITM",
    "startDate": "2024-03-15",
    "endDate": "2024-03-15",
    "location": "IITM, Janakpuri,Delhi",
    "type": "Hackathon",
    "description": "Built Seva Samarth project",
    "projects": [
      {
        "name": "Seva Samarth",
        "link": ""
      }
    ],
    "linkedinPost": "",
    "achievement": "",
    "images": ["/photosByEhshan/sevaSamarth.png", "/photosByEhshan/sevaSamarth.png"],
    "tags": [],
    "teamName": "Dev Dyanamos",
    "teamMembers": ["Sumit rathore", "Tanmay Tiwari", "Jai Chawla", "Mohammad Ehshan"]
  },
  {
    "title": "Build with Delhi",
    "organization": "Hack with India",
    "startDate": "2024-06-29",
    "endDate": "2024-06-29",
    "location": "ITS Engineering College, Greater Noida, India",
    "type": "Hackathon",
    "description": "Developed Pravasi Path (MERN stack + AI/ML solution for migrant workers), selected for offline round among top 100/400+ teams",
    "projects": [
      {
        "name": "Pravasi Path",
        "link": ""
      }
    ],
    "linkedinPost": "https://www.linkedin.com/posts/mohammad-ehshan-4362a0298_hackathon-buildwithdelhi-pravasipath-activity-7213500738503593984-AfYO",
    "achievement": "Top 100 Teams",
    "images": ["/photosByEhshan/buildwithdelhi1.jpg", "/photosByEhshan/buildwithdelhi2.jpg", "/photosByEhshan/buildwithdelhi3.jpg", "/photosByEhshan/buildwithdelhi4.jpg", "/photosByEhshan/buildwithdelhi5.jpg"],
    "tags": ["Top 100"],
    "teamName": "Dev Dyanamos",
    "teamMembers": ["Sumit Rathore", "dk.python (MD Imran)", "N. Aarwin", "Mohammad Ehshan"]
  },
  {
    "title": "Hackathon Participant",
    "organization": "IITM",
    "startDate": "2024-09-20",
    "endDate": "2024-09-20",
    "location": "Chennai, India",
    "type": "Hackathon",
    "description": "Presented GreenMindAI project",
    "projects": [
      {
        "name": "GreenMindAI",
        "link": ""
      }
    ],
    "linkedinPost": "",
    "achievement": "Top 12",
    "images": [],
    "tags": ["Top 12"],
    "teamName": "",
    "teamMembers": []
  },
  {
    "title": "Hackathon Participant",
    "organization": "JIMS",
    "startDate": "2024-09-25",
    "endDate": "2024-09-25",
    "location": "Delhi, India",
    "type": "Hackathon",
    "description": "Presented GreenMindAI project",
    "projects": [
      {
        "name": "GreenMindAI",
        "link": ""
      }
    ],
    "linkedinPost": "",
    "achievement": "Participation",
    "images": [],
    "tags": [],
    "teamName": "",
    "teamMembers": []
  },
  {
    "title": "Hackathon Participant",
    "organization": "IEEE ADGIPS",
    "startDate": "2024-10-14",
    "endDate": "2024-10-14",
    "location": "ADGIPS, Delhi, India",
    "type": "Hackathon",
    "description": "Presented GreenMindAI (5th place) and Link-O-Matic (6th place) projects among 100+ teams",
    "projects": [
      {
        "name": "GreenMindAI",
        "link": ""
      },
      {
        "name": "Link-O-Matic",
        "link": ""
      }
    ],
    "linkedinPost": "",
    "achievement": "5th & 6th Place",
    "images": [],
    "tags": ["Top 6"],
    "teamName": "Ai & Arcane Bytes",
    "teamMembers": []
  },
  {
    "title": "Hackathon Participant",
    "organization": "TechNexus Community",
    "startDate": "2025-01-18",
    "endDate": "2025-01-18",
    "location": "Microsoft Office, Gurgaon, India",
    "type": "Hackathon",
    "description": "Finalist in competition with 1000+ participants, pitched project at Microsoft finals",
    "projects": [],
    "linkedinPost": "",
    "achievement": "Finalist (Top 17)",
    "images": [],
    "tags": ["Finalist"],
    "teamName": "",
    "teamMembers": []
  },
  {
    "title": "Hackathon Participant",
    "organization": "Sharda University",
    "startDate": "2025-01-21",
    "endDate": "2025-01-22",
    "location": "Remote",
    "type": "Hackathon",
    "description": "Presented Rushless project",
    "projects": [
      {
        "name": "Rushless",
        "link": ""
      }
    ],
    "linkedinPost": "",
    "achievement": "",
    "images": [],
    "tags": [],
    "teamName": "",
    "teamMembers": []
  },
  {
    "title": "Competition Participant",
    "organization": "E-Cell DTU",
    "startDate": "2025-01-21",
    "endDate": "2025-01-21",
    "location": "Remote",
    "type": "Competition",
    "description": "Participated in online quiz",
    "projects": [],
    "linkedinPost": "",
    "achievement": "28th Rank",
    "images": [],
    "tags": [],
    "teamName": "",
    "teamMembers": []
  },
  {
    "title": "Hackathon Participant",
    "organization": "Hack Data",
    "startDate": "2025-01-24",
    "endDate": "2025-01-24",
    "location": "Remote",
    "type": "Hackathon",
    "description": "Submitted Health Sync project",
    "projects": [
      {
        "name": "Health Sync",
        "link": ""
      }
    ],
    "linkedinPost": "",
    "achievement": "",
    "images": [],
    "tags": [],
    "teamName": "",
    "teamMembers": []
  },
  {
    "title": "Hackathon Participant",
    "organization": "Hack the Future",
    "startDate": "2025-01-25",
    "endDate": "2025-01-25",
    "location": "Remote",
    "type": "Hackathon",
    "description": "Presented GreenMindAI project",
    "projects": [
      {
        "name": "GreenMindAI",
        "link": ""
      }
    ],
    "linkedinPost": "",
    "achievement": "",
    "images": [],
    "tags": [],
    "teamName": "",
    "teamMembers": []
  },
  {
    "title": "Hackathon Participant",
    "organization": "Code for Bharat",
    "startDate": "2025-01-25",
    "endDate": "2025-01-25",
    "location": "Remote",
    "type": "Hackathon",
    "description": "Presented Link-O-Matic and GreenMindAI projects",
    "projects": [
      {
        "name": "Link-O-Matic",
        "link": ""
      },
      {
        "name": "GreenMindAI",
        "link": ""
      }
    ],
    "linkedinPost": "",
    "achievement": "",
    "images": [],
    "tags": [],
    "teamName": "",
    "teamMembers": []
  },
  {
    "title": "Hackathon Participant",
    "organization": "Avensis",
    "startDate": "2025-01-26",
    "endDate": "2025-01-26",
    "location": "Remote",
    "type": "Hackathon",
    "description": "Submitted projects and shortlisted for offline round",
    "projects": [
      {
        "name": "Link-O-Matic",
        "link": ""
      },
      {
        "name": "GreenMindAI",
        "link": ""
      }
    ],
    "linkedinPost": "",
    "achievement": "Shortlisted for Offline Round",
    "images": [],
    "tags": [],
    "teamName": "",
    "teamMembers": []
  },
  {
    "title": "Hackathon Participant",
    "organization": "SRM University",
    "startDate": "2025-01-28",
    "endDate": "2025-01-29",
    "location": "Remote",
    "type": "Hackathon",
    "description": "Built Narrato project in 24-hour hackathon",
    "projects": [
      {
        "name": "Narrato",
        "link": ""
      }
    ],
    "linkedinPost": "",
    "achievement": "",
    "images": [],
    "tags": [],
    "teamName": "",
    "teamMembers": []
  },
  {
    "title": "Ideathon Participant",
    "organization": "Smart Delhi",
    "startDate": "2025-01-31",
    "endDate": "2025-01-31",
    "location": "USAR (GGSIPU East Campus), Delhi, India",
    "type": "Ideathon",
    "description": "Presented Rushless traffic control prototype, selected among top 125/900+ teams",
    "projects": [
      {
        "name": "Rushless",
        "link": ""
      }
    ],
    "linkedinPost": "",
    "achievement": "Top 125 Teams",
    "images": [],
    "tags": ["Top 125"],
    "teamName": "",
    "teamMembers": []
  },
  {
    "title": "Hackathon Participant",
    "organization": "ECell IIITD",
    "startDate": "2025-02-15",
    "endDate": "2025-02-16",
    "location": "IIIT Delhi, India",
    "type": "Hackathon",
    "description": "Built AI finance management app (expense tracking, budgeting chatbot, advisory system) in 24-hour hackathon",
    "projects": [
      {
        "name": "Fingenie",
        "link": ""
      }
    ],
    "linkedinPost": "",
    "achievement": "",
    "images": [],
    "tags": [],
    "teamName": "",
    "teamMembers": []
  },
  {
    "title": "Hackathon Participant",
    "organization": "NSUT Delhi (SpaceCon'25)",
    "startDate": "2025-02-23",
    "endDate": "2025-02-23",
    "location": "NSUT, Delhi, India",
    "type": "Hackathon",
    "description": "Built AI emotion-analysis and video-storytelling system in 5 hours using Next.js, LLM, Hugging Face, and Firebase",
    "projects": [
      {
        "name": "Narrato",
        "link": "https://lnkd.in/eMXr9Uih"
      }
    ],
    "linkedinPost": "",
    "achievement": "",
    "images": [],
    "tags": [],
    "teamName": "",
    "teamMembers": []
  },
  {
    "title": "Hackathon Participant",
    "organization": "TRYST, IIT Delhi",
    "startDate": "2025-03-11",
    "endDate": "2025-03-12",
    "location": "IIT Delhi, India",
    "type": "Hackathon",
    "description": "Built AI-powered career mapping tool using Next.js, Python, LangChain, and Generative AI",
    "projects": [
      {
        "name": "MargDarshak",
        "link": ""
      }
    ],
    "linkedinPost": "",
    "achievement": "5th Position",
    "images": [],
    "tags": ["Top 5"],
    "teamName": "",
    "teamMembers": []
  },
  {
    "title": "Hackathon Participant",
    "organization": "IIIT Delhi",
    "startDate": "2025-02-21",
    "endDate": "2025-02-21",
    "location": "IIIT Delhi, India",
    "type": "Hackathon",
    "description": "Built IoT-based traffic light changer for emergency vehicles using ESP32 and encrypted Bluetooth",
    "projects": [
      {
        "name": "Rushless",
        "link": ""
      }
    ],
    "linkedinPost": "",
    "achievement": "",
    "images": [],
    "tags": [],
    "teamName": "",
    "teamMembers": []
  },
  {
    "title": "Hackathon Participant",
    "organization": "IIIT Delhi",
    "startDate": "2025-03-22",
    "endDate": "2025-03-22",
    "location": "IIIT Delhi, India",
    "type": "Hackathon",
    "description": "Presented Fingenie project in finance track",
    "projects": [
      {
        "name": "Fingenie",
        "link": ""
      }
    ],
    "linkedinPost": "",
    "achievement": "",
    "images": [],
    "tags": [],
    "teamName": "",
    "teamMembers": []
  },
  {
    "title": "Hackathon Participant",
    "organization": "NSUT",
    "startDate": "2025-04-04",
    "endDate": "2025-04-04",
    "location": "NSUT, Delhi, India",
    "type": "Hackathon",
    "description": "Built CampusBuddy (AI canteen manager, lost & find system, scholarship finder) and won competition",
    "projects": [
      {
        "name": "CampusBuddy",
        "link": ""
      }
    ],
    "linkedinPost": "",
    "achievement": "Winner",
    "images": [],
    "tags": ["Winner"],
    "teamName": "AstraX",
    "teamMembers": ["Aditya Singh", "Mohammad Ehshan", "Anikesh Kumar", "N. Aarwin"]
  },
  {
    "title": "Mentor",
    "organization": "Hackhazard",
    "startDate": "2025-04-10",
    "endDate": "2025-04-20",
    "location": "Remote",
    "type": "Mentorship",
    "description": "Mentored 17,000+ participants in nationwide hackathon",
    "projects": [],
    "linkedinPost": "",
    "achievement": "",
    "images": [],
    "tags": ["Mentor"],
    "teamName": "",
    "teamMembers": []
  },
  {
    "title": "Hackathon Participant",
    "organization": "DoraHacks",
    "startDate": "2025-04-17",
    "endDate": "2025-04-17",
    "location": "Microsoft Gurgaon, India",
    "type": "Hackathon",
    "description": "Presented Fingenie and Rushless projects, qualified through multiple rounds",
    "projects": [
      {
        "name": "Fingenie",
        "link": ""
      },
      {
        "name": "Rushless",
        "link": ""
      }
    ],
    "linkedinPost": "",
    "achievement": "",
    "images": [],
    "tags": [],
    "teamName": "",
    "teamMembers": []
  },
  {
    "title": "Ideathon Participant",
    "organization": "JIMS",
    "startDate": "2025-03-22",
    "endDate": "2025-03-22",
    "location": "Delhi, India",
    "type": "Ideathon",
    "description": "Presented BioSky research project on air pollution reduction",
    "projects": [
      {
        "name": "BioSky",
        "link": ""
      }
    ],
    "linkedinPost": "",
    "achievement": "",
    "images": [],
    "tags": [],
    "teamName": "",
    "teamMembers": []
  },
  {
    "title": "Hackathon Participant",
    "organization": "IIT Delhi",
    "startDate": "2025-03-10",
    "endDate": "2025-03-10",
    "location": "IIT Delhi, India",
    "type": "Hackathon",
    "description": "Presented EV vehicle project",
    "projects": [
      {
        "name": "EV Vehicle Project",
        "link": ""
      }
    ],
    "linkedinPost": "",
    "achievement": "",
    "images": [],
    "tags": [],
    "teamName": "",
    "teamMembers": []
  },
  {
    "title": "Hackathon Participant",
    "organization": "University of Delhi",
    "startDate": "2025-04-19",
    "endDate": "2025-04-19",
    "location": "New Delhi, India",
    "type": "Hackathon",
    "description": "Presented MargDarshak project, selected for offline round",
    "projects": [
      {
        "name": "MargDarshak",
        "link": ""
      }
    ],
    "linkedinPost": "",
    "achievement": "Selected for Offline Round",
    "images": [],
    "tags": [],
    "teamName": "",
    "teamMembers": []
  },
  {
    "title": "Hackathon Participant",
    "organization": "Galgotias College",
    "startDate": "2025-04-27",
    "endDate": "2025-04-27",
    "location": "Galgotias College, Greater Noida, India",
    "type": "Hackathon",
    "description": "Presented RoboPulse project",
    "projects": [
      {
        "name": "RoboPulse",
        "link": ""
      }
    ],
    "linkedinPost": "",
    "achievement": "",
    "images": [],
    "tags": [],
    "teamName": "",
    "teamMembers": []
  },
  {
    "title": "Competition Participant",
    "organization": "Summer of Product",
    "startDate": "2025-06-18",
    "endDate": "2025-06-30",
    "location": "Remote",
    "type": "Competition",
    "description": "Submitted Eco Cart and Skill Proof case studies",
    "projects": [
      {
        "name": "Eco Cart",
        "link": ""
      },
      {
        "name": "Skill Proof",
        "link": ""
      }
    ],
    "linkedinPost": "",
    "achievement": "",
    "images": [],
    "tags": [],
    "teamName": "",
    "teamMembers": []
  },
  {
    "title": "Hackathon Participant",
    "organization": "DCG",
    "startDate": "",
    "endDate": "",
    "location": "DTU, Delhi, India",
    "type": "Hackathon",
    "description": "Presented Health Sync project",
    "projects": [
      {
        "name": "Health Sync",
        "link": ""
      }
    ],
    "linkedinPost": "",
    "achievement": "",
    "images": [],
    "tags": [],
    "teamName": "",
    "teamMembers": []
  },
  {
    "title": "Hackathon Participant",
    "organization": "Code Clash 2.0",
    "startDate": "",
    "endDate": "",
    "location": "",
    "type": "Hackathon",
    "description": "Built Kaamly - AI-powered booking agent using LLMs and communication APIs",
    "projects": [
      {
        "name": "Kaamly",
        "link": "https://lnkd.in/ga4FzkAv"
      }
    ],
    "linkedinPost": "",
    "achievement": "",
    "images": [],
    "tags": [],
    "teamName": "ARCANE",
    "teamMembers": ["Anikesh Kumar"]
  },
  {
    "title": "Hackathon Participant",
    "organization": "APIHub",
    "startDate": "",
    "endDate": "",
    "location": "",
    "type": "Hackathon",
    "description": "Presented Sparkswipe and Family Vault projects",
    "projects": [
      {
        "name": "Sparkswipe",
        "link": ""
      },
      {
        "name": "Family Vault",
        "link": ""
      }
    ],
    "linkedinPost": "",
    "achievement": "",
    "images": [],
    "tags": [],
    "teamName": "",
    "teamMembers": []
  },
  {
    "title": "Mentor",
    "organization": "HackOrbit",
    "startDate": "2025-07-09",
    "endDate": "2025-07-09",
    "location": "Remote",
    "type": "Mentorship",
    "description": "Mentored 3,000+ participants in national-level hackathon",
    "projects": [],
    "linkedinPost": "",
    "achievement": "",
    "images": [],
    "tags": ["Mentor"],
    "teamName": "",
    "teamMembers": []
  },
  {
    "title": "Hackathon Participant",
    "organization": "Algoverse",
    "startDate": "2025-07-18",
    "endDate": "2025-07-18",
    "location": "Microsoft Office, Gurgaon, India",
    "type": "Hackathon",
    "description": "Presented De-Cognito (OSINT-based cyber investigation tool) to cybercrime experts",
    "projects": [
      {
        "name": "De-Cognito",
        "link": "https://lnkd.in/ggUXQGeB"
      }
    ],
    "linkedinPost": "",
    "achievement": "Shortlisted for Offline Round",
    "images": [],
    "tags": [],
    "teamName": "",
    "teamMembers": ["Aditya Singh", "Pooja Bhalla", "Anikesh Kumar"]
  },
  {
    "title": "Hackathon Participant",
    "organization": "Triwizardathon",
    "startDate": "2025-08-02",
    "endDate": "2025-08-02",
    "location": "Microsoft Office, Gurgaon, India",
    "type": "Hackathon",
    "description": "Presented De-Cognito project, finished in top 20/1200+ teams",
    "projects": [
      {
        "name": "De-Cognito",
        "link": "https://lnkd.in/ggUXQGeB"
      }
    ],
    "linkedinPost": "",
    "achievement": "Top 20",
    "images": [],
    "tags": ["Top 20"],
    "teamName": "",
    "teamMembers": []
  },
  {
    "title": "Mentor",
    "organization": "Google Cloud + Hack2skill",
    "startDate": "",
    "endDate": "",
    "location": "Bangalore, India",
    "type": "Mentorship",
    "description": "Mentored 50+ teams at largest AI hackathon (57,000+ participants)",
    "projects": [],
    "linkedinPost": "",
    "achievement": "",
    "images": [],
    "tags": ["Mentor"],
    "teamName": "",
    "teamMembers": []
  },
  {
    "title": "Developer",
    "organization": "BizByte Community",
    "startDate": "2024-11",
    "endDate": "2025-04",
    "location": "Remote",
    "type": "Community",
    "description": "Client-based full-stack development work",
    "projects": [],
    "linkedinPost": "",
    "achievement": "",
    "images": [],
    "tags": [],
    "teamName": "",
    "teamMembers": []
  },
  {
    "title": "Developer",
    "organization": "Hack4Brahma",
    "startDate": "2025-04",
    "endDate": "2025-08",
    "location": "Remote",
    "type": "Community",
    "description": "Developed official hackathon website",
    "projects": [],
    "linkedinPost": "",
    "achievement": "",
    "images": [],
    "tags": [],
    "teamName": "",
    "teamMembers": []
  },
  {
    "title": "Full Stack Intern",
    "organization": "Elite Coder",
    "startDate": "",
    "endDate": "",
    "location": "",
    "type": "Internship",
    "description": "Full-stack development internship",
    "projects": [],
    "linkedinPost": "",
    "achievement": "",
    "images": [],
    "tags": [],
    "teamName": "",
    "teamMembers": []
  }
]