import { BsCodeSlash, BsClipboardData } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FaVideo, FaTabletAlt } from "react-icons/fa";

export const servicesData = [
  {
    id: 1,
    title: "Software Development",
    icon: <BsCodeSlash />,
  },
  {
    id: 2,
    title: "Data Engineering & ETL Pipelines",
    icon: <BsClipboardData />,
  },
  {
    id: 3,
    title: "Cloud Integration & Deployment",
    icon: <AiOutlineMail />, // You can replace with a cloud related icon if available
  },
  //   {
  //     id: 4,
  //     title: "AI & NLP Automation",
  //     icon: <FaTabletAlt />,
  //   },
  {
    id: 5,
    title: "API Development & Management",
    icon: <BsCodeSlash />,
  },
  {
    id: 6,
    title: "Technical Project Consulting",
    icon: <FaVideo />,
  },
];
