import React from 'react';
import IMG1 from '../../assets/alc.png';
import IMG2 from '../../assets/todo.png';
import IMG3 from '../../assets/shelter.png';
import IMG4 from '../../assets/fake.png';
import IMG5 from '../../assets/news.png';
import IMG6 from '../../assets/math.png';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Client Docs',
      img: IMG1,
      description:
        ' A real-time chat app using the MERN stack, enhanced with AI support from Google Gemini. We integrated Redis for better performance and use socket connections for smooth real-time communication..',
      technologies: 'MERN | Tailwind CSS',
      link: 'https://clientdocs-frontend.vercel.app',
      github: 'https://github.com/Aditya75420/clientdocs-frontend',
    },
    {
      id: 2,
      title: 'Prepwise AI',
      img: IMG4,
      description:
        'Responsive streaming interface built with React.js and Tailwind CSS, featuring movie carousels and Netflixs signature design with mobile-first responsive layout.',
      technologies: 'React | Redux',
      link: 'https://interview-ai-ten-liart.vercel.app',
      github: 'https://github.com/Aditya75420/INTERVIEW-AI',
    },
    {
      id: 3,
      title: 'Collaborative Code Editor',
      img: IMG2,
      description: 'User friendly app to plan your day and manage tasks',
      technologies: 'JavaScript | Webpack',
      link: 'http://docker-aws-yt-alb-424299845.ap-northeast-1.elb.amazonaws.com',
      github: 'https://github.com/Aditya75420/Collaborative_CodeEditor-',
    },
    {
      id: 4,
      title: 'Strength-Maker',
      img: IMG3,
      description:
        'Location-based attendance tracking app that automates employee check-ins and check-outs using geofencing.',
      technologies: 'Flutter | Dart | Firebase | Geofencing',
      link: 'https://strength-maker-frontend.vercel.app/',
      github: '',
    },
    {
      id: 5,
      title: 'World News',
      img: IMG5,
      description:
        'Fully responsive interactive website built based on Adobe XD design',
      technologies: 'JavaScript | CSS',
      link: 'https://meri-mg.github.io/Unilab-world-news/',
      github: 'https://github.com/Meri-MG/Unilab-world-news',
    },
    {
      id: 6,
      title: 'Math Resource',
      img: IMG6,
      description:
        'Real-world group project which is still in progress and will provide educational platform for future young developers',
      technologies: 'JavaScript | Scss | Python',
      link: 'https://lukinoo.github.io/math-resource/',
      github: 'https://github.com/lukinoo/math-resource',
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
