import attend from "../../assets/AttendMate.png";
import managely from "../../assets/Managely.png";
import dotrack from "../../assets/DoTrack.png";

export const projects = [
      {
        id: "dotrack",
        title: "DOTrack – Decentralized Object & Deployment Tracker",
        type: "Fullstack project",
        summary:
            "A next-generation DevOps + Blockchain tracking platform that bridges traditional CI/CD pipelines with decentralized ecosystems.",
        description:
            "A next-generation DevOps + Blockchain tracking platform that bridges traditional CI/CD pipelines with decentralized ecosystems.",
        bullets: [
            "Real-time integration with GitHub, GitLab & Jenkins",
            "Smart CI/CD pipelines with on-chain deployment verification",
            "Immutable audit logs for transparent deployment history",
            "Multi-chain support: Ethereum, Polygon & Arbitrum",
            "Wallet integration (MetaMask, WalletConnect, Coinbase)",
            "Decentralized config marketplace powered by IPFS",
        ],
        tech: ["react", "typescript", "tailwindcss", "nodejs", "mongodb",  "polygon", "ipfs"],
        image: dotrack,
        gradient: "from-purple-500/20 to-pink-500/20",
        accentColor: "purple",
        githubLink: "https://github.com/sunilwane/DOTrack/tree/develop",
    },
    {
        id: "attend",
        title: "AttendMate",
        type: "Team project",
        summary: "Attendance automation system with facial recognition & geo-fencing.",
        description:
            "Attendance automation system with facial recognition, geo-fencing and role-based dashboards.",
        bullets: [
            "Role-based dashboards",
            "Secure geo-fenced attendance",
            "Real-time tracking & analytics",
            "Facial recognition attendance automation",
        ],
        tech: ["react", "javascript", "tailwindcss", "firebase", "typescript", "ionic"],
        image: attend,
        gradient: "from-indigo-500/20 to-blue-500/20",
        accentColor: "indigo",
        githubLink: "https://github.com/Chetan13334/Attendance_Management",
    },
    {
        id: "managely",
        title: "Managely",
        type: "Solo project",
        summary:
            "Full-stack employee management system with secure login, CRUD operations, and MySQL integration.",
        description:
            "Manager-admin system with secure auth, CRUD employee operations and clean dashboards.",
        bullets: [
            "Secure manager login",
            "Employee CRUD operations",
            "REST APIs with Spring Boot",
            "Responsive React frontend",
        ],
        tech: ["java", "react", "spring", "mysql", "bootstrap"],
        image: managely,
        gradient: "from-green-500/20 to-emerald-500/20",
        accentColor: "green",
        githubLink: "https://github.com/Chetan13334/Managely-",
    },
  
];
