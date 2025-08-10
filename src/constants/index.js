export const myProjects = [
  {
    id: 1,
    title: "💻 Hotel Booking System",
    description:
      "A full-stack web application for seamless hotel room reservations, built to support real-time booking, secure user authentication, and intuitive admin control.",
    subDescription: [
      "🔹 Developed a dynamic admin dashboard with secure login/logout functionality, JWT-based authentication, and role-based access protection using middleware.",
      "🔹 Built RESTful APIs with Node.js and Express for booking, registration, login, password reset (with token verification), and admin-specific operations.",
      "🔹 Designed a fully responsive frontend with React and Tailwind CSS, featuring multi-tab forms, conditional UI rendering, and user-friendly validation (e.g., password match check).",
      "🔹 Integrated MongoDB for storing user, admin, and booking data, with Mongoose models for schema validation and flexible queries (e.g., user-based booking retrieval).",
      "🔹 Applied middleware authentication to prevent unauthorized access to admin routes using token verification logic.",
      "🔹 Implemented password reset flows with secure email token handling and password confirmation fields.",
    ],
    href: "",
    logo: "",
    image: "./assets/projects/HotelBooking.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "./assets/logos/nextjs.svg",
      },
      {
        id: 2,
        name: "Express",
        path: "./assets/logos/expressjs.svg",
      },
      {
        id: 3,
        name: "MongoDB",
        path: "./assets/logos/mongodb.svg",
      },
      {
        id: 4,
        name: "Mongoose",
        path: "",
      },
      {
        id: 5,
        name: "React",
        path: "./assets/logos/react.svg",
      },
      {
        id: 6,
        name: "TailwindCSS",
        path: "./assets/logos/tailwindcss.svg",
      },
      {
        id: 7,
        name: "JWT",
        path: "./assets/logos/jwt.svg",
      },
      {
        id: 8,
        name: "REST API",
        path: "./assets/logos/restapi.svg",
      },
      {
        id: 9,
        name: "Node.js",
        path: "./assets/logos/nodejs.svg",
      },
    ],
  },
  {
    id: 2,
    title: "📱 AI-powered Prescription Reader",
    description:
      "Facilitates accurate extraction of medicine names from handwritten prescriptions using AI and Google Gemini API. The system supports uploading prescription images via a user-friendly React Native mobile app, which communicates with a secure Flask backend.",
    subDescription: [
      "  Developed a robust backend using Flask that:",
      "🔹Processes images with PIL and OpenCV.",
      "🔹Trained a Optical Character Recognition (CRNN-CTC) model to predict the handwritten text using IAM dataset.",
      "🔹Sends data to CRNN-CTC model and Google’s Gemini Vision API for AI-based text extraction.",
      "🔹Returns medicine names in a readable format.",
      "  Built a clean, responsive React Native app that:",
      "🔹Allows users to upload images directly from their device.",
      "🔹Displays AI-extracted medicine names in real-time.",
      "🔹Provides error handling, feedback, and smooth UX.",
      "  Integrated AI capabilities and image preprocessing for increased accuracy in reading real-world prescriptions with varying handwriting and lighting conditions.",
    ],
    href: "",
    logo: "",
    image: "./assets/projects/prescriptionreader.png",
    tags: [
      {
        id: 1,
        name: "ReactNative",
        path: "./assets/logos/reactnative.svg",
      },
      {
        id: 2,
        name: "Flask",
        path: "./assets/logos/flask.svg",
      },
      {
        id: 3,
        name: "Python",
        path: "./assets/logos/python.svg",
      },
      {
        id: 4,
        name: "OpenCV",
        path: "./assets/logos/opencv.svg",
      },
      {
        id: 5,
        name: "Gemini API",
        path: "./assets/logos/googlegemini.svg",
      },
      {
        id: 6,
        name: "OCR",
        path: "./assets/logos/ocr.png",
      },
      {
        id: 7,
        name: "REST API",
        path: "./assets/logos/restapi.svg",
      },
    ],
  },
  {
    id: 3,
    title: "📚 Mathematical Q&A and Book Rental Platform",
    description:
      "A full-stack web application, I was responsible of developing Backend of the system, designed for efficient mathematical Q&A searching, book management and rentals, featuring secure user authentication, AWS-integrated image handling, and scalable PostgreSQL storage with advanced query features like full-text search.",
    subDescription: [
      "🔹 Engineered a robust backend using Node.js and Express, implementing modular routes and controllers for clean, maintainable API logic.",
      "🔹 Integrated JWT-based authentication for secure session management, including protected routes for sensitive operations.",
      "🔹 Built RESTful APIs for user management, book CRUD operations, admin-book mappings, and file uploads using Multer and AWS S3.",
      "🔹 Designed and normalized a PostgreSQL schema with proper use of foreign keys, composite keys, constraints, indexes, and multivalued attribute handling.",
      "🔹 Enabled full-text search indexing on Questions and answers, book reviews and titles using PostgreSQL’s tsvector, improving query efficiency and result relevance.",
      "🔹 Implemented real-time API testing using Postman, following REST standards and defensive error handling throughout the stack.",
      "🔹 Applied modular environment configuration and used dotenv for secure credential management.",
    ],
    href: "",
    logo: "",
    image: "./assets/projects/QWA_logical.png",
    tags: [
      {
        id: 1,
        name: "Node.JS",
        path: "./assets/logos/nodejs.svg",
      },
      {
        id: 2,
        name: "Express",
        path: "./assets/logos/expressjs.svg",
      },
      {
        id: 3,
        name: "PostgreSQL",
        path: "./assets/logos/postgresql.svg",
      },
      {
        id: 4,
        name: "JWT",
        path: "./assets/logos/jwt.svg",
      },
      {
        id: 5,
        name: "AWS S3",
        path: "./assets/logos/awss3.svg",
      },
      {
        id: 6,
        name: "Full-Text Search",
        path: "",
      },
      {
        id: 7,
        name: "Modular Backend Architecture",
        path: "./assets/logos/backenddev.png",
      },
      {
        id: 8,
        name: "Postman",
        path: "./assets/logos/postman.png",
      },
    ],
  },
  {
    id: 4,
    title: "🛏️ Blanket Manufacturing Management System",
    description:
      "A scalable service-oriented application that streamlines the manufacturing process of blankets, enabling efficient coordination between manufacturers, distributors, and sellers with real-time updates and inventory control.",
    subDescription: [
      "🔹 Developed a robust backend using ASP.NET Core Web API to handle CRUD operations for blanket models with proper data validation using data annotations.",
      "🔹 Created modular service layers for manufacturers, distributors, and sellers to support independent microservices communication.",
      "🔹 Built RESTful endpoints for creating, updating, deleting, and searching blanket models with efficient query handling using LINQ and EF Core.",
      "🔹 Utilized SQL Server for relational data storage and optimized schema using precision types and foreign keys.",
      "🔹 Integrated a WPF client to display real-time order status and model inventory with MVVM binding and UI enhancements.",
      "🔹 Implemented versioned APIs and modular controller structure for better maintainability and scalability.",
      "🔹 Used NuGet package management for adding EF Core and SQL Server dependencies, enabling fast ORM integration and code-first migrations.",
      "🔹 Enhanced data handling with asynchronous API calls and repository-based architecture for separation of concerns.",
    ],
    href: "",
    logo: "",
    image: "./assets/projects/soc.png",
    tags: [
      {
        id: 1,
        name: ".NET Core",
        path: "./assets/logos/netcore.svg",
      },
      {
        id: 2,
        name: "C#",
        path: "./assets/logos/csharp.svg",
      },
      {
        id: 3,
        name: "ASP.NET Web API",
        path: "./assets/logos/webapi.png",
      },
      {
        id: 4,
        name: "Entity Framework Core",
        path: "",
      },
      {
        id: 5,
        name: "SQL Server",
        path: "./assets/logos/sqlserver.png",
      },
      {
        id: 6,
        name: "WPF Desktop clinet application",
        path: "",
      },
      {
        id: 7,
        name: "MVVM",
        path: "",
      },
      {
        id: 8,
        name: "NuGet",
        path: "",
      },
    ],
  },
  {
    id: 5,
    title: "📱 LuxeVista Resort Booking App",
    description:
      "A modern Android mobile application for booking resort rooms and services with Firebase backend integration, built for personalized travel experiences, seamless user registration, and real-time room availability checks.",
    subDescription: [
      "🔹 Designed a native Android application in Java using ConstraintLayout, RecyclerView, and modern UI practices for an intuitive resort booking experience.",
      "🔹 Implemented Firebase Authentication and Firestore Database to manage user registration, login, and real-time storage of room data and bookings.",
      "🔹 Built a dynamic room listing page with Picasso-powered image loading and RecyclerView adapters to display room types (e.g., Deluxe, Suite, Single, Double).",
      "🔹 Added a dropdown filter feature for sorting rooms based on type, improving user navigation and experience.",
      "🔹 Developed booking logic that stores selected booking dates as Firestore document IDs to avoid duplicate bookings and enhance validation.",
      "🔹 Integrated date picker dialogs for intuitive selection of travel dates when booking a room.",
      "🔹 Used modular Java classes for managing room data, adapters, and Firestore interaction for scalable, clean architecture.",
      "🔹 Ensured app responsiveness and minimized emulator/device compatibility issues through layout optimizations and resource management.",
      "🔹 Styled activities with background images, transparency overlays, and material-inspired UI components for a polished look and feel.",
    ],
    href: "",
    logo: "",
    image: "./assets/projects/luxevista.png",
    tags: [
      {
        id: 1,
        name: "Android",
        path: "./assets/logos/android.svg",
      },
      {
        id: 2,
        name: "Java",
        path: "./assets/logos/java.svg",
      },
      {
        id: 3,
        name: "Firebase Firestore",
        path: "./assets/logos/firebase.svg",
      },
      {
        id: 4,
        name: "FirebaseAuth",
        path: "./assets/logos/firebase.svg",
      },
      {
        id: 5,
        name: "DatePicker",
        path: "",
      },
      {
        id: 6,
        name: "Mobile App",
        path: "",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "https://wa.me/+94771307505",
    icon: "./assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "www.linkedin.com/in/tmsirikumara",
    icon: "./assets/socials/linkedIn.svg",
  },
  {
    name: "Github",
    href: "https://github.com/it20651060",
    icon: "./assets/socials/github.svg",
  },
];

export const experiences = [
  {
    title: "Internship Software Engineer",
    job: "RedDotCode Software Solutions",
    date: "2023-2024",
    contents: [
      "Actively involved in the client meetings and discussions and documented and breakdown client requirements.",
      "Designed and developed backend technologies and business logics to successfully operate the client requirements.",
      "Maintained clear and reusable code bases for better understandings and future works and updates.",
      "Used versioning and designing applications like Draw.io , Miro, GitHub and Figma.",
      "Created and designed Logical databases.",
      "Worked as Full stack developer with technologies MERN, PERN, Android(Java), Next.js",
    ],
  },
  {
    title: "Freelance Developer",
    job: "Self-Employed",
    date: "2025-Present",
    contents: [
      "Designed and developed various web, mobile and desktop applications for clients.",
      "Continuously enhancing technical skills and expanding expertise in modern web development, back-end technologies and AI technologies",
    ],
  },
];
export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];
