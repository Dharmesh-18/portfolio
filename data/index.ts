export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
];

export const gridItems = [
    {
        id: 1,
        title: "I prioritize client collaboration, fostering open communication ",
        description: "",
        className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
        imgClassName: "w-full h-full",
        titleClassName: "justify-end",
        img: "/b1.svg",
        spareImg: "",
    },
    {
        id: 2,
        title: "I'm very flexible with time zone communications",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "",
        spareImg: "",
    },
    {
        id: 5,
        title: "",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "/b5.svg",
        spareImg: "",
    },
    {
        id: 4,
        title: "Tech enthusiast with a passion for development.",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "/grid.svg",
        spareImg: "/b4.svg",
    },

    {
        id: 3,
        title: "My tech stack",
        description: "I constantly try to improve",
        className: "md:col-span-3 md:row-span-2",
        imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
        titleClassName: "justify-center md:justify-start lg:justify-center",
        img: "",
        spareImg: "/grid.svg",
    },
    {
        id: 6,
        title: "Do you want to start a project together?",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-center md:max-w-full max-w-60 text-center",
        img: "",
        spareImg: "",
    },
];

export const projects = [
    {
        id: 1,
        title: "Anime Magic",
        des: "A Next.js mini app having Framer motion, infinite scroll and server actions, fetching data from a real API and loading content page-wise when scrolled to end of the current page.",
        img: "/p5.svg",
        iconLists: ["/re.svg", "/next.svg", "/tail.svg", "/ts.svg"],
        link: "https://anime-vault-delta.vercel.app/",
    },
    {
        id: 2,
        title: "MyTube- YouTube Clone",
        des: "Replica of the popular video streaming platform YouTube, enabling users to search, watch and explore videos.",
        img: "/p6.svg",
        iconLists: ["/re.svg", "/tail.svg"],
        link: "https://mytube-dharmesh.netlify.app/",
    },
    {
        id: 3,
        title: "Filmpire",
        des: "Netflix clone, including light/dark theme, optimized searching, API integration, pagination amd more",
        img: "/p7.svg",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
        link: "https://filmpire-dharmesh.netlify.app/",
    },
    {
        id: 4,
        title: "Animated Apple Iphone 3D Website",
        des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
        img: "/p4.svg",
        iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
        link: "https://dharmesh-iphone-site.netlify.app/",
    },
    {
        id: 5,
        title: "Brainwave",
        des: "Modern React Website with Bento Grid and latest UI components",
        img: "/p8.svg",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
        link: "https://dharmesh-brainwave.netlify.app",
    },
    {
        id: 6,
        title: "Messenger: Chat app with group and image share",
        des: "Used Next.js, NextAuth(for custom and social auths), prisma, cloudinary and pusher for real-time communication..",
        img: "/p8.svg",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/next.svg"],
        link: "Messenger clone: https://messenger-dharmeshs-projects-c5d90cdb.vercel.app",
    },
];


export const companies = [
    {
        id: 1,
        name: "cloudinary",
        img: "/cloud.svg",
        nameImg: "/cloudName.svg",
    },
    {
        id: 2,
        name: "appwrite",
        img: "/app.svg",
        nameImg: "/appName.svg",
    },
    {
        id: 3,
        name: "HOSTINGER",
        img: "/host.svg",
        nameImg: "/hostName.svg",
    },
    {
        id: 4,
        name: "stream",
        img: "/s.svg",
        nameImg: "/streamName.svg",
    },
    {
        id: 5,
        name: "docker.",
        img: "/dock.svg",
        nameImg: "/dockerName.svg",
    },
];

export const workExperience = [
    {
        id: 1,
        title: "Senior Software Engineer",
        organization: "NightHack Labs (Oct 2023 - Present)",
        desc: [
            "Skills acquired: Javascript, React.js, Next.js, MongoDB, Prisma, Docker, Redis, ChatGpt.",
            "Added pagination and search features for workspace module",
            "Stablising the product by solving bugs and refactoring",
            "Worked on development of multiple No Code Projects.",
            "Adding new and improving existing widgets and functionalities.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
            "Conducted technical interviews and assessments for software engineering candidates, contributing to the hiring process and team development.",
            "Mentored and supported junior software engineers, fostering skill development and ensuring project success."
        ],
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
    },
    {
        id: 2,
        title: "Associate Product Engineer",
        organization: "CredAble (Feb 2022 - Sep 2023)",
        desc: [
            "Skills acquired: Java 8+, Spring Boot, Hibernate, Spring Data JPA, MySQL, HTML, CSS, Javascript, Angular.",
            "Written new and enhanced exiting APIs according the business requirements.",
            "Added audit trail for Virtual Loan Accounts screen.",
            "Introduced Edit Commercial functionality in the product (UI, backend, integration and database changes involved).",
            "Worked on UI side of Borrower Module (a borrower friendly interface for checking their data and status).",
            "Written JUnit test cases for positive and negative scenarios.",
        ],
        className: "md:col-span-2", // change to md:col-span-2
        thumbnail: "/exp2.svg",
    }

];

export const socialMedia = [
    // {
    //     id: 1,
    //     img: "/git.svg",
    // },
    // {
    //     id: 2,
    //     img: "/twit.svg",
    // },
    // {
    //     id: 3,
    //     img: "/link.svg",
    // },
    {
        id: 4,
        img: "/phone-1.png",
    },

];
