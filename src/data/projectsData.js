import one from "../assets/svg/projects/one.svg";
import two from "../assets/svg/projects/two.svg";
import three from "../assets/svg/projects/three.svg";
import four from "../assets/svg/projects/four.svg";
import five from "../assets/svg/projects/five.svg";

export const projectsData = [
  {
    id: 1,
    projectName: "Data Access Portal",
    projectDesc:
      "Built a financial visualization platform with a natural language interface, enabling 100+ users to generate dynamic JSON templates",
    tags: ["Python", "Django REST API", "SQL", "Databricks"],
    code: "",
    demo: "",
    image: one,
    projectDetails: [
      "Developed a robust financial visualization platform used by business analysts and engineers for real-time data queries.",
      "Implemented a natural language query interface translating user requests to JSON templates, allowing anyone to analyze data easily.",
      "Integrated Databricks REST APIs for seamless data ingestion and visualization.",
      "Accelerated analysis cycles by 30% through automation and reduced manual SQL writing.",
      "Used Django REST API for scalable backend operations and ensured data validation and security.",
    ],
  },
  {
    id: 2,
    projectName: "Archival Portal",
    projectDesc:
      "Architected a low-cost archival platform for migrating metadata from hot to cold storage on AWS S3, reducing storage costs by 80%. Used Python, Django REST API, AWS S3, and OpenSearch.",
    tags: ["Python", "Django REST API", "AWS S3", "OpenSearch"],
    code: "",
    demo: "",
    image: two,
    projectDetails: [
      "Designed and deployed a metadata archival solution managing over 19TB of data for enterprise environments.",
      "Automated migration of files from hot to cold storage using AWS S3 lifecycle policies, resulting in 80% cost savings.",
      "Added advanced search and filtering via OpenSearch, enabling targeted exports and notifications.",
      "Built paginated APIs for high performance and stability with millions of file records.",
      "Supported safe archival while maintaining accessibility to project stakeholders.",
    ],
  },
  {
    id: 3,
    projectName: "Power Data Portal",
    projectDesc:
      "Contributed to the Data Vision module for the Power Data Portal, helping 1,000+ users manage Gas Power Data Lake assets and improve data discoverability across multiple business units.",
    tags: ["Python", "Django REST API", "SQL", "AWS"],
    code: "",
    demo: "",
    image: three,
    projectDetails: [
      "Worked on the Data Vision module, focusing on user experience for gas power data asset management.",
      "Enabled discovery and registration of data lake resources across 10+ business units.",
      "Supported features for data search, asset metadata display, and secure API integrations.",
      "Used Django REST API and AWS services to deliver scalable backend operations.",
      "Facilitated collaboration and info sharing between engineering, analytics, and operations teams.",
    ],
  },
  {
    id: 4,
    projectName: "Fitness Platform",
    projectDesc:
      "Developed subscription features, session booking, vitals monitoring, and an Admin dashboard for a fitness platform. Improved user engagement and reduced manual reporting.",
    tags: ["Python", "Django", "SQL"],
    code: "",
    demo: "",
    image: four,
    projectDetails: [
      "Upgraded the fitness platform with features for session booking and subscription management.",
      "Developed vitals monitoring interface linked to user accounts for real-time fitness tracking.",
      "Built a rich Admin dashboard for reporting key metrics like active users and revenue.",
      "Reduced manual reporting efforts by 60% by automating report generation.",
      "Improved user retention and engagement metrics.",
    ],
  },
  {
    id: 5,
    projectName: "NLP Automation",
    projectDesc:
      "Implemented automated text extraction, translation, and summarization using T5 and GPT models, streamlining data flows and reducing manual effort for enterprise data operations.",
    tags: ["Python", "NLP", "T5", "GPT", "Django"],
    code: "",
    demo: "",
    image: five,
    projectDetails: [
      "Deployed T5 and GPT language models for enterprise text processing tasks.",
      "Automated text extraction from documents, multilingual translation, and document summarization.",
      "Integrated NLP workflows into scalable Django microservices.",
      "Reduced data processing time by 40% compared to manual workflows.",
      "Enabled cross-team accessibility and adoption of AI-driven data solutions.",
    ],
  },
];
