import attend from "../../assets/AttendMate.png";
import managely from "../../assets/Managely.png";

export const projects = [
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
        tech: ["react", "javascript", "tailwindcss", "firebase", "typescript", "github", "ionic"],
        image: attend,
        gradient: "from-indigo-500/20 to-blue-500/20",
        accentColor: "indigo",
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
        tech: ["java", "react", "spring", "mysql", "bootstrap", "github"],
        image: managely,
        gradient: "from-green-500/20 to-emerald-500/20",
        accentColor: "green",
    },
];
