export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const clientReviews = [
    {
      id: 1,
      name: 'Charles Inwald',
      position: 'Full-Stack Developer at Trude',
      img: 'assets/review1.jpg',
      review:
        'Working with Dario on MintBill was a fantastic experience. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev project.',
    },
    {
      id: 2,
      name: 'Emanuele Garzelli',
      position: 'Digital Supply Chain at Transporeon',
      img: 'assets/EmanueleG.jpeg',
      review:
        'Dario’s expertise in web development is truly impressive. He delivered a robust and scalable solution for my e-commerce site, and my online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
  ];
  
  export const myProjects = [
    {
      title: 'EG-Stock - Inventory Management Interface',
      desc: 'EG-Stock is a revolutionary Software-as-a-Service platform for The Logistics Industry. With advanced and custumer tailored features like personalized inventory management functionality, it allows Logistics Execs and Entrepreneurs alike to have complete control over their own Digital Supply Chain tool.',
      subdesc:'Built as a unique Software-as-a-Service app with Next.js 14, Tailwind CSS, TypeScript, PostgreSQL and Node.js, EG-Stock is designed for optimal performance and scalability.',
      href: 'https://main.d3v2jehngjmc13.amplifyapp.com/',
      texture: '/textures/project/InventoryInterfaceScreenshot.png',
      logo: '/assets/EGSTOCK-Logo1.png',
      color: 'blue',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Node.js',
          path: '/assets/nodejs.webp',
        },
      ],
    },
    {
      title: 'Debate Solutions - Real-Time Social Media Platform',
      desc: 'DebateSolutions is a powerful collaborative app that elevates the capabilities of real-time interpersonal digital interaction. A cutting-edge collaborative platform designed for high-stakes, real-time digital discussions. Think of it as Twitter on steroids, built to handle millions of simultaneous content creators with precision and zero lag.',
      subdesc:'Powered by Next.js and the latest React tech, DebateSolutions delivers ultra-responsive, real-time editing and interaction. It’s the next evolution in collaborative tools. Built for speed, scale, and seamless teamwork.',
      href: 'https://debatesolutions-social-media.onrender.com',
      texture: '/textures/project/DebateSolutionsScreenshot.png',
      logo: '/assets/DebateSolutions1.webp',
      color: 'hot-pink',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Next.js',
          path: 'https://cdn.simpleicons.org/nextdotjs/white',
        },
        {
          id: 5,
          name: 'Node.js',
          path: '/assets/nodejs.webp',
        },
      ],
    },
    // {
    //   title: 'CarePulse - Health Management System',
    //   desc: 'An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.',
    //   subdesc:
    //     'With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.',
    //   href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
    //   texture: '/textures/project/project3.mp4',
    //   logo: '/assets/project-logo3.png',
    //   logoStyle: {
    //     backgroundColor: '#60f5a1',
    //     background:
    //       'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
    //     border: '0.2px solid rgba(208, 213, 221, 1)',
    //     boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    //   },
    //   spotlight: '/assets/spotlight3.png',
    //   tags: [
    //     {
    //       id: 1,
    //       name: 'React.js',
    //       path: '/assets/react.svg',
    //     },
    //     {
    //       id: 2,
    //       name: 'TailwindCSS',
    //       path: 'assets/tailwindcss.png',
    //     },
    //     {
    //       id: 3,
    //       name: 'TypeScript',
    //       path: '/assets/typescript.png',
    //     },
    //     {
    //       id: 4,
    //       name: 'Framer Motion',
    //       path: '/assets/framer.png',
    //     },
    //   ],
    // },
    {
      title: 'MintBill - Online Invoicing Platform',
      desc: 'MintBill is a sleek, modern online invoicing platform built for freelancers, entrepreneurs, and small businesses. It simplifies billing, accelerates payments, and helps users stay in control of their finances with no bloat, just speed and clarity.',
      subdesc:'Developed with React, Tailwind CSS, and Next.js, MintBill delivers a smooth user experience, from generating professional invoices to tracking payments in real-time. It’s clean, intuitive, and built to help you get paid faster no friction, no confusion.',
      href: 'https://mintbill.vercel.app/',
      texture: '/textures/project/MintBillScreenshot.png',
      logo: '/assets/MintBill1.webp',
      color: 'green',
      logoStyle: {
        backgroundColor: '#0E1F38',
        border: '0.2px solid #0E2D58',
        boxShadow: '0px 0px 60px 0px #2F67B64D',
      },
      spotlight: '/assets/spotlight4.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Next.js',
          path: 'https://cdn.simpleicons.org/nextdotjs/white',
        },
      ],
    },
    // {
    //   title: 'Imaginify - AI Photo Manipulation App',
    //   desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
    //   subdesc:
    //     'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
    //   href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
    //   texture: '/textures/project/project5.mp4',
    //   logo: '/assets/project-logo5.png',
    //   logoStyle: {
    //     backgroundColor: '#1C1A43',
    //     border: '0.2px solid #252262',
    //     boxShadow: '0px 0px 60px 0px #635BFF4D',
    //   },
    //   spotlight: '/assets/spotlight5.png',
    //   tags: [
    //     {
    //       id: 1,
    //       name: 'React.js',
    //       path: '/assets/react.svg',
    //     },
    //     {
    //       id: 2,
    //       name: 'TailwindCSS',
    //       path: 'assets/tailwindcss.png',
    //     },
    //     {
    //       id: 3,
    //       name: 'TypeScript',
    //       path: '/assets/typescript.png',
    //     },
    //     {
    //       id: 4,
    //       name: 'Framer Motion',
    //       path: '/assets/framer.png',
    //     },
    //   ],
    // },
  ];
  
  export const calculateSizes = (isSmall:boolean, isMobile:boolean, isTablet:boolean) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-14, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'EG-Stock',
      pos: 'FullStack Software Developer',
      duration: '2023 - 2024',
      title: "EG-Stock is my custom-built logistics market dashboard. I use it to visualize real-time data, monitor market trends, and make smarter inventory decisions. All in a clean, intuitive interface.",
      icon: '/assets/EGSTOCK-Logo1.png',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'DebateSolutions',
      pos: 'Software Developer',
      duration: '2022 - 2023',
      title: "DebateSolutions is my go-to platform for real-time collaboration and digital discussion. I use it to brainstorm, debate, and co-create ideas live with others. No lag, no limits, just instant connection.",
      icon: '/assets/DebateSolutions1.webp',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'MintBill',
      pos: 'Junior Software Developer',
      duration: '2021 - 2022',
      title: "MintBill helps me streamline my invoicing workflow. I use it to create professional invoices, track payments, and manage my freelance income. All from one fast, elegant dashboard.",
      icon: '/assets/MintBill1.webp',
      animation: 'salute',
    },
  ];