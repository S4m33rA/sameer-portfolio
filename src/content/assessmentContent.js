const countWords = (text) =>
  text
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

const brandAttributes = [
  "Proactive",
  "Structured communicator",
  "Collaborative problem-solver",
  "Calm under pressure",
];

const coverLetter = {
  role: "Graduate Business Technology Analyst",
  company: "Deloitte Australia",
  criterionArea: "Teamwork",
  criterionStatement: "A knack for problem solving and teamwork",
  date: "5 May 2026",
  opening:
    "Dear Hiring Manager,\n\nI am writing to express my interest in the Graduate Business Technology Analyst role at Deloitte Australia. I am completing a Bachelor of Business in IT and International Business at Macquarie University, and I am motivated by opportunities where strong teamwork drives better outcomes for clients. Deloitte's focus on collaboration and innovation strongly aligns with the way I work in academic, internship, and customer-facing environments.",
  criterionResponse:
    "I have developed strong teamwork skills by consistently working in multi-stakeholder environments where clear communication and shared ownership were essential. During a software engineering group project at university, I was responsible for coordinating a five-person team while also completing my own technical tasks. Early in the project, our team faced unclear responsibilities and uneven progress, which was affecting momentum and quality.\n\nTo solve this, I introduced a simple structure: weekly sprint goals, a shared Trello board, and short ten-minute check-ins to remove blockers. I encouraged each member to propose solutions rather than only reporting issues, which shifted the team toward collaborative problem solving. I also summarised meeting decisions in concise updates so no one was unclear about next steps. As a result, our team delivered the task management application on schedule, improved the quality of handovers between members, and reduced duplicated effort across features.\n\nI also learned to manage different working styles by clarifying expectations early, checking understanding before deadlines, and offering support when a teammate was overloaded. This approach helped maintain trust and momentum during busy periods, especially when workloads shifted unexpectedly. Rather than assigning blame, I focused discussions on solutions and next actions.\n\nI have applied the same teamwork mindset in my internships and customer-facing work by listening first, adapting communication to different audiences, and supporting colleagues to meet shared targets. These experiences have shown me that effective teamwork combines accountability, respectful communication, and a focus on collective outcomes.",
  mqbsReflection:
    "In MQBS2010 lectures and tutorials, I practiced structured communication and group-based problem solving through real workplace scenarios. Applying frameworks such as MECE issue trees and prioritisation matrices improved the way I contribute in teams, especially when clarifying roles, aligning ideas, and turning discussion into clear action plans.",
  closing:
    "Thank you for considering my application. I am confident my collaborative approach, structured communication, and commitment to shared outcomes would allow me to contribute positively to your graduate team. I welcome the opportunity to discuss my suitability further.\n\nYours sincerely,\nSameer Aleem",
};

const linkedInProfile = {
  headline:
    "Business & IT Graduate | Macquarie University | IT Support · Web Development · Digital Operations",
  about:
    "I'm a Business (IT & International Business) student at Macquarie University with hands-on experience across IT support, web development, accounting administration, and retail - all managed simultaneously alongside full-time study. I thrive when juggling competing priorities and enjoy translating complex problems into structured actions. I'm drawn to roles at the intersection of technology and business, where analytical thinking, clear communication, and a proactive attitude create measurable impact. I'm currently building toward a career in Business Technology, IT Consulting, or Digital Operations, and I am always happy to connect with professionals working at the crossroads of tech and business.",
  profilePhotoAlt: "Sameer Aleem profile photo",
  profileUrl: "https://www.linkedin.com/in/sameer-aleem-6a14b726b/",
};

const cvData = {
  contact: {
    name: "Sameer Aleem",
    location: "Sydney, NSW, Australia",
    phone: "+61 420 212 051",
    email: "sameeraleem@hotmail.com",
    linkedin: "https://www.linkedin.com/in/sameer-aleem-6a14b726b/",
    portfolio: "https://sameer-portfolio-blue.vercel.app",
  },
  professionalSummary:
    "Business-minded IT student with internship and project experience bridging technical and operational teams. Skilled in structured communication, requirements gathering, and process improvement. I bring a proactive, collaborative approach to solving business problems and delivering clear outcomes in fast-paced team environments.",
  keySkills: [
    "Calm verbal communication in high-stress environments",
    "Stakeholder requirement gathering and clarification",
    "Process mapping and issue prioritisation",
    "Cross-functional collaboration and team coordination",
  ],
  experience: [
    {
      organisation: "Cloudnova",
      role: "Accounting & Administration Intern",
      dates: "Dec 2024 - Jun 2025",
      bullets: [
        "Identified accounts workflow bottlenecks and coordinated process updates that improved data accuracy and turnaround times.",
        "Prepared management reports and documentation that supported clearer operational decisions.",
        "Coordinated communication between finance and operations stakeholders to keep deliverables on schedule.",
      ],
    },
    {
      organisation: "Adaptiverse Pty Ltd",
      role: "IT Support Intern",
      dates: "Nov 2023 - May 2024",
      bullets: [
        "Gathered end-user requirements and translated findings into actionable development notes.",
        "Conducted UI and workflow testing, logging defects with clear reproduction steps for faster fixes.",
        "Maintained account and workstation documentation to support reliable internal support processes.",
      ],
    },
    {
      organisation: "Self-employed",
      role: "IT Developer (Freelance)",
      dates: "Feb 2023 - Oct 2023",
      bullets: [
        "Delivered 5+ small business web projects by managing scope, client communication, and timelines.",
        "Converted 3 new clients through proactive outreach and referral-driven relationship management.",
      ],
    },
    {
      organisation: "JD Sports, NSW",
      role: "Sales Assistant",
      dates: "Apr 2023 - Jul 2025",
      bullets: [
        "Improved weekly sales by approximately 20% through tailored customer engagement and product matching.",
        "Maintained accurate POS and inventory records to support smooth daily operations.",
      ],
    },
  ],
  education: [
    "Bachelor of Business (IT & International Business), Macquarie University (Feb 2025 - Nov 2026)",
    "Bachelor of Information Systems, Western Sydney University (Mar 2022 - Nov 2024)",
  ],
};

const videoResponse = {
  skillArea: "Time management",
  interviewQuestion:
    "Tell us about how you manage your time when you had multiple activities at the same time.",
  targetDuration: "90-120 seconds",
  structure: [
    {
      label: "Situation",
      content:
        "During a demanding semester, I was balancing university assessments, a team software project, and 20-hour work weeks at JD Sports.",
    },
    {
      label: "Task",
      content:
        "I needed to maintain high-quality performance across all commitments without missing deadlines or impacting my team.",
    },
    {
      label: "Action",
      content:
        "I planned each week in Trello, broke major tasks into daily milestones, and scheduled buffer blocks for unexpected issues. I also held brief team check-ins and gave early notice when timelines shifted so we could reallocate work quickly.",
    },
    {
      label: "Result",
      content:
        "I met all assessment deadlines, maintained strong work performance, and helped my team deliver our project on time. The system also reduced stress because priorities were always visible and realistic.",
    },
  ],
  deliveryChecklist: [
    "Practice until response fits within two minutes",
    "Speak clearly with steady pace and eye contact",
    "Use a quiet space with good front lighting",
    "Do not read from notes on camera",
  ],
  placeholderVideoUrl: "https://youtu.be/KLI4AJNZLrM",
};

const coverLetterWordCounts = {
  opening: countWords(coverLetter.opening),
  criterionResponse: countWords(coverLetter.criterionResponse),
  mqbsReflection: countWords(coverLetter.mqbsReflection),
  closing: countWords(coverLetter.closing),
  total:
    countWords(coverLetter.opening) +
    countWords(coverLetter.criterionResponse) +
    countWords(coverLetter.mqbsReflection) +
    countWords(coverLetter.closing),
};

const linkedInAboutWordCount = countWords(linkedInProfile.about);

export {
  brandAttributes,
  coverLetter,
  coverLetterWordCounts,
  linkedInProfile,
  linkedInAboutWordCount,
  cvData,
  videoResponse,
};
