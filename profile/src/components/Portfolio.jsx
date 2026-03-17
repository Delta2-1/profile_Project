import React, { useState } from 'react';
import './Portfolio.css'; // Import your CSS here

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="portfolio-root">
      {/* NAVIGATION */}
      <header className="nav">
        <div className="container nav-inner">
          <div className="brand">
            <div className="brand-badge" aria-hidden="true"></div>
            <span>Clyne Jester Aquino</span>
          </div>
          <button 
            className="menu-btn"
            onClick={toggleMenu} 
            aria-label="Toggle menu"
          >
            ☰
          </button>
      
          <nav 
            className={`nav-links ${isMenuOpen ? 'open' : ''}`} 
            aria-label="Primary"
          >
            <a href="#home">Home</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#reflection">Reflection</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        {/* HOME / ABOUT ME */}
        <section id="home" className="container hero">
          <div>
            <div className="profile-image">
              <img src="profile.png" alt="Profile" />
            </div>
            <span className="pill">About Me</span>
            <h1>Hi! I'm Clyne, an IT student, aspiring game Developer and a dreaming Software Engineer.</h1>
            <p>
              I am passionate about building games, web applications, and software that solve problems.
              I often engage in creative thinking, especially at night, which I call “night thinking,” 
              to explore possibilities and keep my curiosity alive.I frequently imagine stories and ideas, 
              which I later develop into concepts for novels or games that I plan to work on in the future. 
              I maintain a disciplined balance between using technology and immersing myself in books, while 
              also keeping up with daily chores, workouts, and my night thinking sessions. I genuinely love 
              learning new things and constantly seek opportunities to expand my knowledge and creativity. 
              My goal is to become a skilled Indie Game developer and get my dream Database Engineer Career 
              to contribute on innovative projects.
            </p>
            
            <div className="kpis">
              <div className="kpi"><div className="num">1</div><div>Biggest Accomplishment</div></div>
              <div className="kpi"><div className="num">3</div><div>Years of Learning</div></div>
              <div className="kpi"><div className="num">2</div><div>Projects Built</div></div>
              <div className="kpi"><div className="num">2</div><div>Projects in development</div></div>
            </div>
            
            <div className="hero-card"> {/* Added hero-card class to use your CSS styles */}
              <p><strong>Biggest Accomplishment:</strong> Developed A fully functional Mobile application for last semester's Project (MindForge App).</p>
              <p><strong>Area of Interest:</strong> Game Development, Web Development, and Backend Systems or Database Systems.</p>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="pill">Skills</span>
                <h2 className="title">Programming Languages & Tools</h2>
              </div>
              <div className="subtitle">Technologies I use to build projects</div>
            </div>

            <div className="cards">
              <article className="card">
                <h3>Programming Languages</h3>
                <p>Languages I am proficient in and frequently use in projects.</p>
                <div className="tag-row">
                  {['HTML', 'CSS', 'JavaScript', 'PHP', 'Python'].map(skill => (
                    <span key={skill} className="tag">{skill}</span>
                  ))}
                </div>
              </article>

              <article className="card">
                <h3>Tools & Frameworks</h3>
                <p>Platforms and tools I utilize to streamline development.</p>
                <div className="tag-row">
                  {['Unity', 'Blender', 'MySQL', 'Node.js', 'VS Code'].map(tool => (
                    <span key={tool} className="tag">{tool}</span>
                  ))}
                </div>
              </article>

              <article className="card">
                <h3>System Visual Design</h3>
                <p>I design simple and user-friendly interfaces with a focus on clarity.</p>
                <div className="tag-row">
                  {['Unity UI', 'UI Design', 'UX Design', 'AutoDesk Sketch', 'Figma'].map(design => (
                    <span key={design} className="tag">{design}</span>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="pill">Portfolio</span>
                <h2 className="title">Projects</h2>
              </div>
              <div className="subtitle">Academic and personal projects</div>
            </div>

            <div className="cards">
              <article class="card">
          <h3>GreyLine Extraction (In Development Personal Project)</h3>
          <p>A Mobile extraction game inspired by Arena Breakout.</p>
          <p><strong>Role:</strong> Lead Developer</p>
          <p><strong>Technologies:</strong> Unity, C#, Blender, Autodesk Sketch</p>
        </article>
               <article class="card">
          <h3>TaskForge AI (In Development Personal Project)</h3>
          <p>TaskForge AI turns raw project requirements into structured, trackable tasks using AI.</p>
          <p><strong>Role:</strong> Lead Developer</p>
          <p><strong>Technologies:</strong> Web Language, Node.js, Express.js, PostgreSQL, Prisma ORM, JWT Authentication, OpenAI API</p>
        </article>

        <article class="card">
          <h3>2rd Year Baby Thesis Project (HarvestLane Mamburao)</h3>
          <p>Developed a Baby Thesis project for class activity.</p>
          <p><strong>Role:</strong> Lead Developer, Research Leader</p>
          <p><strong>Technologies:</strong> HTML, CSS, JS, XAMPP, PHP, Microsoft Word</p>
        </article>

        <article class="card">
          <h3>3rd Year-1st Semester Research Project (MindForge App)</h3>
          <p>Developed a research project for class activity.</p>
          <p><strong>Role:</strong> Lead Developer, Research Leader</p>
          <p><strong>Technologies:</strong> Unity, C#, Microsoft Word</p>
        </article>

        <article class="card">
          <h3>Personal Portfolio Website</h3>
          <p>Designed and developed this portfolio to showcase my skills and projects.</p>
          <p><strong>Role:</strong> Full-stack Developer & Designer</p>
          <p><strong>Technologies:</strong> HTML, CSS, JavaScript</p>
        </article>
            </div>
          </div>
        </section>

        {/* REFLECTION */}
        <section id="reflection">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="pill">Reflection</span>
                <h2 className="title">My Thoughts & Learnings</h2>
              </div>
               <div class="subtitle">Self-assessment and future goals</div>
            </div>
            <div class="cards">
        <article class="card">
          <h3>Technologies Used & Why</h3>
          <p>I used HTML, CSS, JS for frontend; Unity and C# for game development; Blender and Autodesk for Design; PHP/MySQL for backend. 
          Chosen for accessibility, versatility, and industry relevance.</p>
        </article>

        <article class="card">
          <h3>Easiest Parts</h3>
          <p>Structuring HTML and designing UI layout was straightforward thanks to prior practice.</p>
        </article>

        <article class="card">
          <h3>Most Challenging Parts</h3>
          <p>Integrating animations, button effects, responsiveness, for this portfolio, and as for game mechanics, it is required to do iterative debugging and research.</p>
        </article>

        <article class="card">
          <h3>Technologies I Want to Learn</h3>
          <p>AI integration, Advanced backend frameworks (Node.js, Django), and mobile app development.</p>
        </article>

        <article class="card">
          <h3>Future Applications I Want to Build</h3>
          <p>Interactive games that I have Planned for entertainment and hobby, productivity apps, and educational software that can solve real problems, and apps required by company in future.</p>
        </article>
      </div>
 

          </div>
        </section>

        {/* CONTACT */}
        <section id="contact">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="pill">Get in Touch</span>
                <h2 className="title">Contact</h2>
              </div>
            </div>

            <div className="contact-info">
              <div className="info-card">
                <ul>
                  <li><strong>Email:</strong> <a href="mailto:aqinocjay@gmail.com">aqinocjay@gmail.com</a></li>
                  <li><strong>Phone:</strong> <a href="tel:+639751142377">+63 975 114 2377</a></li>
                  <li><strong>Location:</strong> Abra De Ilog, Occidental Mindoro, Philippines</li>
                  <li><strong>GitHub:</strong> <a href="https://github.com/Delta2-1" target="_blank" rel="noreferrer">Delta2-1</a></li>
                  <li><strong>Facebook:</strong> <a href="https://www.facebook.com/clyne.j.aquino" target="_blank">clyne.j.aquino</a></li>
                </ul>
              </div>
            </div>

            <p className="foot">© {new Date().getFullYear()} Clyne Jester Aquino. All rights reserved.</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;