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
      href: '#project',
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
      name: 'Emily Johnson',
      position: 'Marketing Director at GreenLeaf',
      img: 'assets/review1.png',
      review:
        'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
      id: 2,
      name: 'Mark Rogers',
      position: 'Founder of TechGear Shop',
      img: 'assets/review2.png',
      review:
        'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
      id: 3,
      name: 'John Dohsas',
      position: 'Project Manager at UrbanTech ',
      img: 'assets/review3.png',
      review:
        'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
      id: 4,
      name: 'Ether Smith',
      position: 'CEO of BrightStar Enterprises',
      img: 'assets/review4.png',
      review:
        'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
  ];
  
import logoPJ1 from "../public/assets/logo.jpg"
import logoPJ2 from "../public/assets/project-logo2.png"
import logoPJ3 from "../public/assets/project-logo3.png"
import logoPJ4 from "../public/assets/project-logo4.png"
import logoPJ5 from "../public/assets/project-logo5.png"


import spotlight1 from "../public/assets/spotlight1.png"
import spotlight2 from "../public/assets/spotlight2.png"
import spotlight3 from "../public/assets/spotlight3.png"
import spotlight4 from "../public/assets/spotlight4.png"
import spotlight5 from "../public/assets/spotlight5.png"

import video1 from "../public/textures/project/1.mp4"
import video2 from "../public/textures/project/pj2.mp4"
import web2pj from "../public/textures/project/web2pj.mp4"



import text1 from "../public/textures/project/project1.mp4"
import text2 from "../public/textures/project/project2.mp4"
import text3 from "../public/textures/project/project3.mp4"
import text4 from "../public/textures/project/project4.mp4"
import text5 from "../public/textures/project/project5.mp4"


import imgreact from "../public/assets/react.svg"
import tailwindcss from "../public/assets/tailwindcss.png"
import typescript from "../public/assets/typescript.png"
import framer from "../public/assets/framer.svg"



  export const myProjects = [
    {
      title: 'Moment',
      desc: 'This is a social networking website for sharing posts, featuring screenshot and camera capture functions, as well as a friend request feature.',
      subdesc:
        'Built as a unique Software-as-a-Service app with Next.js 14, Tailwind CSS, TypeScript, Framer Motion and Convex, Podcastr is designed for optimal performance and scalability.',
      href: 'https://moment.liber.vn/',
      texture: video2,
      logo: logoPJ1,
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: spotlight1,
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: imgreact,
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: tailwindcss,
        },
        {
          id: 3,
          name: 'TypeScript',
          path: typescript,
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: framer,
        },
      ],
    },
    {
      title: 'MyStuff',
      desc: 'Selling and Buying old stuff , archiver , life style ',
      subdesc:
        'This is a second-hand clothing marketplace where users can buy and sell pre-owned fashion items. The platform allows sellers to list their clothes with detailed descriptions and images, while buyers can browse, search, and filter items based on categories, sizes, and brands. Secure transactions and a user-friendly interface ensure a seamless shopping experience.',
      href: 'https://github.com/dinhchien1504/Web2',
      texture: video1,
      logo: logoPJ2,
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: spotlight2,
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: imgreact,
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: tailwindcss,
        },
        {
          id: 3,
          name: 'TypeScript',
          path: typescript,
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: framer,
        },
      ],
    },
    {
      title: 'CarePulse - Health Management System',
      desc: 'An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.',
      subdesc:
        'With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.',
      href: 'https://github.com/Duongnl/Web2',
      texture:web2pj,
      logo: logoPJ3,
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight:spotlight3,
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: imgreact,
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: tailwindcss,
        },
        {
          id: 3,
          name: 'TypeScript',
          path: typescript,
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: framer,
        },
      ],
    },
    // {
    //   title: 'Horizon - Online Banking Platform',
    //   desc: 'Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.',
    //   subdesc:
    //     'Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.',
    //   href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
    //   texture: text4,
    //   logo: logoPJ4,
    //   logoStyle: {
    //     backgroundColor: '#0E1F38',
    //     border: '0.2px solid #0E2D58',
    //     boxShadow: '0px 0px 60px 0px #2F67B64D',
    //   },
    //   spotlight: spotlight4,
    //   tags: [
    //     {
    //       id: 1,
    //       name: 'React.js',
    //       path: imgreact,
    //     },
    //     {
    //       id: 2,
    //       name: 'TailwindCSS',
    //       path: tailwindcss,
    //     },
    //     {
    //       id: 3,
    //       name: 'TypeScript',
    //       path: typescript,
    //     },
    //     {
    //       id: 4,
    //       name: 'Framer Motion',
    //       path: framer,
    //     },
    //   ],
    // },
    // {
    //   title: 'Imaginify - AI Photo Manipulation App',
    //   desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
    //   subdesc:
    //     'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
    //   href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
    //   texture: text5,
    //   logo:logoPJ5,
    //   logoStyle: {
    //     backgroundColor: '#1C1A43',
    //     border: '0.2px solid #252262',
    //     boxShadow: '0px 0px 60px 0px #635BFF4D',
    //   },
    //   spotlight: spotlight5,
    //   tags: [
    //     {
    //       id: 1,
    //       name: 'React.js',
    //       path: imgreact,
    //     },
    //     {
    //       id: 2,
    //       name: 'TailwindCSS',
    //       path: tailwindcss,
    //     },
    //     {
    //       id: 3,
    //       name: 'TypeScript',
    //       path: typescript,
    //     },
    //     {
    //       id: 4,
    //       name: 'Framer Motion',
    //       path: framer,
    //     },
    //   ],
    // },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.06 : isMobile ? 0.08 : 0.1,
      deskPosition: isMobile ? [0.5, -5.5, 0] : [0.25, -9.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [14, -8, 0],
      reactLogoPosition: isSmall ? [4,5, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 6, 0], 
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-30, 12, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-15, -10, -10] : [-17, -10, -4],
    };
  };
  

  import frm from "../public/assets/framer.svg"
  import figma from "../public/assets/figma.svg"
  import AE from "../public/assets/AE.jpg"
  import Blender from "../public/assets/Blender.png"

  
  export const workExperiences = [
    {
      id: 1,
      name: 'School',
      title: "SaiGon University 2021-2024 ",
      icon: frm,
      animation: 'victory',
    },
    {
      id: 2,
      name: 'Figma',
      // duration: '2020 - 2022',
      title: "Desinger Website",
      icon: figma,
      animation: 'clapping',
    },
    
    {
      id: 3,
      name: 'Freelance',
      duration: '2022 - 2023',
      title: "Editing video ",
      icon: AE,
      animation: 'salute',
    },
    {
      id: 4,
      name: 'Blender',
      duration: '2022 - 2023',
      title: "Creating 3d environment",
      icon: Blender,
      animation: 'salute',
    },
  ];