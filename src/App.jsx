import React, { useEffect, useState } from "react";
import {
  ArrowUp,
  ArrowUpRight,
  BookOpen,
  Box,
  CalendarCheck,
  ChartNoAxesCombined,
  Code2,
  Coffee,
  Github,
  GraduationCap,
  Instagram,
  Keyboard,
  Languages,
  Lightbulb,
  Mail,
  MapPin,
  Medal,
  Menu,
  MessageCircle,
  MessagesSquare,
  PanelsTopLeft,
  Table,
  Target,
  Trophy,
  Linkedin,
  X,
} from "lucide-react";

const navigation = [
  ["home", "Home"],
  ["about", "About"],
  ["skills", "Skills"],
  ["projects", "Projects"],
  ["achievements", "Achievements"],
  ["contact", "Contact"],
];

const projects = [
  {
    visual: "visual-blue",
    icon: CalendarCheck,
    category: "01 / MANAGEMENT",
    type: "Python / Management",
    number: "01",
    title: "School Attendance Management System",
    description:
      "A system concept for organizing student attendance records and making daily tracking more efficient.",
    technologies: ["Python", "Tkinter", "Data"],
  },
  {
    visual: "visual-green",
    icon: MessagesSquare,
    category: "02 / AUTOMATION",
    type: "Python / Automation",
    number: "02",
    title: "WhatsApp Management System",
    description:
      "A project exploring ways to organize and streamline repetitive WhatsApp-related workflows.",
    technologies: ["Python", "Automation", "Workflow"],
  },
  {
    visual: "visual-purple",
    icon: BookOpen,
    category: "03 / ORGANIZATION",
    type: "Python / Records",
    number: "03",
    title: "Library Management System",
    description:
      "A simple management solution for keeping track of books, library records, and lending activity.",
    technologies: ["Python", "Tkinter", "CRUD"],
  },
  {
    visual: "visual-pink",
    icon: Instagram,
    category: "04 / AUTOMATION",
    type: "Python / Social tools",
    number: "04",
    title: "Instagram Automation",
    description:
      "An automation project exploring repetitive social-media tasks. Use responsibly and follow platform rules.",
    technologies: ["Python", "Automation", "Scripting"],
  },
];

function Icon({ icon: IconComponent, ...props }) {
  return <IconComponent aria-hidden="true" {...props} />;
}

function Brand({ footer = false }) {
  return (
    <a
      className={`brand${footer ? " footer-brand" : ""}`}
      href="#home"
      aria-label={footer ? undefined : "Aditi Verma home"}
    >
      <span className="brand-mark">A</span>
      <span>
        Aditi Verma<span className="brand-dot">.</span>
      </span>
    </a>
  );
}

function Header({ activeSection, menuOpen, setMenuOpen }) {
  return (
    <header className="topbar">
      <Brand />
      <button
        className="menu-toggle"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <Icon icon={menuOpen ? X : Menu} />
      </button>
      <nav className={`nav-links${menuOpen ? " open" : ""}`} id="navLinks">
        {navigation.map(([id, label]) => (
          <a
            className={`nav-link${activeSection === id ? " active" : ""}`}
            href={`#${id}`}
            key={id}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </a>
        ))}
      </nav>
      <a className="top-cta" href="#contact">
        Let's talk <Icon icon={ArrowUpRight} />
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section-shell" id="home">
      <div className="hero-copy reveal">
        <div className="eyebrow">
          <span className="status-dot" /> OPEN TO LEARNING &amp; OPPORTUNITIES
        </div>
        <p className="hello">Hello, I'm</p>
        <h1>
          Aditi <span className="gradient-text">Verma</span>
          <span className="hero-period">.</span>
        </h1>
        <h2>
          B.Tech CSE Student <span className="divider">/</span> Aspiring Developer
        </h2>
        <p className="hero-description">
          I turn ideas into useful digital experiences with code, curiosity, and a little
          creativity. Currently learning, building, and growing one project at a time.
        </p>
        <div className="hero-tags">
          <span>Python</span>
          <span>Web Development</span>
          <span>Data Analysis</span>
        </div>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            Explore my work <Icon icon={ArrowUpRight} />
          </a>
          <a className="button button-ghost" href="mailto:programmeraditi@gmail.com">
            <Icon icon={Mail} /> Contact me
          </a>
        </div>
        <div className="social-row">
          <a href="https://github.com/programmeraditi" target="_blank" rel="noreferrer">
            <Icon icon={Github} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/aditi-verma-480b9743b/"
            target="_blank"
            rel="noreferrer"
          >
            <Icon icon={Linkedin} /> LinkedIn
          </a>
          <span className="location">
            <Icon icon={MapPin} /> Lucknow, India
          </span>
        </div>
      </div>
      <div className="hero-art reveal">
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="profile-card">
          <div className="profile-top">
            <span className="mini-dot" />
            <span className="mini-dot" />
            <span className="mini-dot" />
            <span className="profile-label">aditi.py</span>
          </div>
          <div className="avatar">
            <span className="avatar-letter">
              A<span>.</span>
            </span>
            <div className="avatar-spark spark-one">✦</div>
            <div className="avatar-spark spark-two">✧</div>
          </div>
          <div className="profile-code">
            <span className="code-muted">class</span>{" "}
            <span className="code-purple">Developer</span>
            <span className="code-muted">:</span>
            <br />
            &nbsp;&nbsp;curiosity = <span className="code-green">True</span>
            <br />
            &nbsp;&nbsp;keep_building()<span className="cursor">▍</span>
          </div>
          <div className="floating-chip chip-python">
            <span>🐍</span> Python
          </div>
          <div className="floating-chip chip-web">
            <Icon icon={Code2} /> Web Dev
          </div>
        </div>
        <div className="art-note note-top">
          build with purpose <span>↗</span>
        </div>
        <div className="art-note note-bottom">
          <span className="note-line" /> learning in public
        </div>
      </div>
      <a className="scroll-cue" href="#about">
        <span className="scroll-mouse" /> Scroll to explore
      </a>
    </section>
  );
}

function SectionHeading({ kicker, title, gradient, index }) {
  return (
    <div className="section-heading reveal">
      <div>
        <p className="section-kicker">{kicker}</p>
        <h2>
          {title} <span className="gradient-text">{gradient}</span>
        </h2>
      </div>
      <span className="section-index">{index}</span>
    </div>
  );
}

function About() {
  return (
    <section className="section section-shell" id="about">
      <SectionHeading
        kicker="A LITTLE ABOUT ME"
        title="Curious mind."
        gradient="Builder's heart."
        index="01 / ABOUT"
      />
      <div className="about-grid">
        <article className="about-card glass-card reveal">
          <div className="card-icon">
            <Icon icon={Coffee} />
          </div>
          <h3>Hey, nice to meet you!</h3>
          <p>
            I'm Aditi, a second-year B.Tech Computer Science student at Babu Sunder Singh
            Institute of Technology and Management, Lucknow. I enjoy exploring technology,
            writing code, and creating practical projects that solve everyday problems.
          </p>
          <p>
            I'm building my foundation in programming, web development, and data analysis
            while staying open to new tools, challenges, and collaborations.
          </p>
          <a className="text-link" href="mailto:programmeraditi@gmail.com">
            Let's connect <Icon icon={ArrowUpRight} />
          </a>
        </article>
        <div className="info-grid reveal">
          <div className="info-card glass-card">
            <Icon icon={GraduationCap} />
            <div>
              <span>Education</span>
              <strong>B.Tech — Computer Science</strong>
              <small>Babu Sunder Singh Institute of Technology and Management</small>
            </div>
          </div>
          <div className="info-card glass-card">
            <Icon icon={MapPin} />
            <div>
              <span>Based in</span>
              <strong>Lucknow, India</strong>
              <small>Uttar Pradesh</small>
            </div>
          </div>
          <div className="info-card glass-card">
            <Icon icon={Mail} />
            <div>
              <span>Email</span>
              <a href="mailto:programmeraditi@gmail.com">programmeraditi@gmail.com</a>
            </div>
          </div>
          <div className="info-card glass-card">
            <Icon icon={Target} />
            <div>
              <span>Currently focused on</span>
              <strong>Learning by building</strong>
              <small>Code • Projects • Collaboration</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const skills = [
  { symbol: "Py", style: "python", name: "Python", description: "Programming" },
  { symbol: "5", style: "html", name: "HTML", description: "Web structure" },
  { symbol: "3", style: "css", name: "CSS", description: "Web styling" },
  { symbol: "JS", style: "js", name: "JavaScript", description: "Interactivity" },
  {
    icon: MessageCircle,
    style: "wa",
    name: "WhatsApp Language",
    description: "Messaging workflows",
  },
  { icon: PanelsTopLeft, style: "tk", name: "Tkinter", description: "Desktop GUI" },
  { icon: Table, style: "pd", name: "Pandas", description: "Data handling" },
  { icon: Box, style: "np", name: "NumPy", description: "Numerical computing" },
  {
    icon: ChartNoAxesCombined,
    style: "da",
    name: "Data Analysis",
    description: "Insights & patterns",
  },
  { icon: Keyboard, style: "type", name: "Typing", description: "Accuracy & speed" },
];

function Skills() {
  return (
    <section className="section section-shell" id="skills">
      <SectionHeading
        kicker="MY TOOLKIT"
        title="Skills I'm"
        gradient="growing with."
        index="02 / SKILLS"
      />
      <p className="section-intro reveal">
        A growing toolkit for turning ideas into working solutions. Always learning
        something new.
      </p>
      <div className="skills-grid">
        {skills.map(({ symbol, icon, style, name, description }) => (
          <div className="skill-card reveal" key={name}>
            <div className={`skill-symbol ${style}`}>
              {icon ? <Icon icon={icon} /> : symbol}
            </div>
            <strong>{name}</strong>
            <span>{description}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section section-shell" id="projects">
      <SectionHeading
        kicker="THINGS I'VE BUILT"
        title="Selected"
        gradient="projects."
        index="03 / PROJECTS"
      />
      <p className="section-intro reveal">
        A few projects from my learning journey. Add repository links and screenshots as
        you polish each project.
      </p>
      <div className="projects-grid">
        {projects.map((project) => {
          const ProjectIcon = project.icon;
          return (
            <article className="project-card reveal" key={project.number}>
              <div className={`project-visual ${project.visual}`}>
                <div className="visual-orb" />
                <Icon icon={ProjectIcon} />
                <span className="visual-label">{project.category}</span>
              </div>
              <div className="project-content">
                <div className="project-meta">
                  <span>{project.type}</span>
                  <span className="project-number">{project.number}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-list">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
                <a
                  className="project-link"
                  href="https://github.com/programmeraditi"
                  target="_blank"
                  rel="noreferrer"
                >
                  Find on GitHub <Icon icon={ArrowUpRight} />
                </a>
              </div>
            </article>
          );
        })}
      </div>
      <div className="project-note reveal">
        <Icon icon={Lightbulb} />
        <span>
          <strong>Portfolio tip:</strong> Replace the GitHub profile links on each card
          with the exact repository URL once you publish each project.
        </span>
      </div>
    </section>
  );
}

const achievements = [
  {
    icon: Trophy,
    style: "icon-trophy",
    label: "HACKATHON",
    title: "Smart India Hackathon",
    description:
      "Participation experience focused on teamwork, problem-solving, and building ideas.",
  },
  {
    icon: Medal,
    style: "icon-sport",
    label: "EXTRACURRICULAR",
    title: "Sports",
    description:
      "Learning discipline, consistency, and teamwork through sports participation.",
  },
  {
    icon: Languages,
    style: "icon-language",
    label: "CERTIFICATION",
    title: "Russian Language Certificate",
    description:
      "A language-learning milestone that reflects curiosity beyond technology.",
  },
];

function Achievements() {
  return (
    <section className="section section-shell" id="achievements">
      <SectionHeading
        kicker="MILESTONES & MORE"
        title="Small steps,"
        gradient="big growth."
        index="04 / HIGHLIGHTS"
      />
      <div className="achievement-grid">
        {achievements.map(({ icon, style, label, title, description }) => (
          <article className="achievement-card glass-card reveal" key={title}>
            <div className={`achievement-icon ${style}`}>
              <Icon icon={icon} />
            </div>
            <div>
              <span className="achievement-label">{label}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
            <span className="achievement-arrow">↗</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section section-shell" id="contact">
      <div className="contact-panel reveal">
        <div className="contact-glow" />
        <div className="contact-copy">
          <p className="section-kicker">HAVE AN IDEA?</p>
          <h2>
            Let's make something <span className="gradient-text">meaningful.</span>
          </h2>
          <p>
            Open to learning opportunities, project collaborations, and connecting with
            people who love building things.
          </p>
          <a className="button button-primary" href="mailto:programmeraditi@gmail.com">
            Say hello <Icon icon={ArrowUpRight} />
          </a>
        </div>
        <div className="contact-details">
          <a href="mailto:programmeraditi@gmail.com">
            <span className="contact-icon">
              <Icon icon={Mail} />
            </span>
            <span>
              <small>Email me</small>
              <strong>programmeraditi@gmail.com</strong>
            </span>
            <Icon icon={ArrowUpRight} className="detail-arrow" />
          </a>
          <a href="https://github.com/programmeraditi" target="_blank" rel="noreferrer">
            <span className="contact-icon">
              <Icon icon={Github} />
            </span>
            <span>
              <small>Explore my code</small>
              <strong>github.com/programmeraditi</strong>
            </span>
            <Icon icon={ArrowUpRight} className="detail-arrow" />
          </a>
          <a
            href="https://www.linkedin.com/in/aditi-verma-480b9743b/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-icon">
              <Icon icon={Linkedin} />
            </span>
            <span>
              <small>Connect professionally</small>
              <strong>LinkedIn profile</strong>
            </span>
            <Icon icon={ArrowUpRight} className="detail-arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const revealItems = document.querySelectorAll(".reveal");
    let revealObserver;

    if ("IntersectionObserver" in window) {
      revealObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 },
      );
      revealItems.forEach((item) => revealObserver.observe(item));
    } else {
      revealItems.forEach((item) => item.classList.add("is-visible"));
    }

    const sections = document.querySelectorAll("main section[id]");
    let sectionObserver;

    if ("IntersectionObserver" in window) {
      sectionObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActiveSection(entry.target.id);
          });
        },
        { rootMargin: "-30% 0px -55% 0px", threshold: 0 },
      );
      sections.forEach((section) => sectionObserver.observe(section));
    }

    const updateBackToTop = () => setShowBackToTop(window.scrollY > 500);
    window.addEventListener("scroll", updateBackToTop, { passive: true });

    return () => {
      revealObserver?.disconnect();
      sectionObserver?.disconnect();
      window.removeEventListener("scroll", updateBackToTop);
    };
  }, []);

  return (
    <>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <Header
        activeSection={activeSection}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <footer className="footer section-shell">
        <Brand footer />
        <span>
          Designed &amp; built with curiosity <span className="heart">♥</span>
        </span>
        <span>© {new Date().getFullYear()} Aditi Verma</span>
      </footer>
      <button
        className={`back-to-top${showBackToTop ? " visible" : ""}`}
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <Icon icon={ArrowUp} />
      </button>
    </>
  );
}

export default App;
