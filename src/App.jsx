import React, { useMemo, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Link as LinkIcon, Mail, Phone, MapPin, ExternalLink, ChevronRight } from "lucide-react";
import ZitaImg from "./assets/Zita.PNG";
import MyImg from "./assets/my.png"; 
import TradeImg from "./assets/trade.PNG";  
import EcomImg from "./assets/E-com.PNG";
import FoodImg from "./assets/food.PNG";
import My2Img from "./assets/my2.png";




// ==========================
// Animated Web-Series Portfolio
// ==========================
// - Single-file React component
// - Tailwind CSS for styling
// - Framer Motion for animations & parallax
// - Smooth scrolling sections
// - Replace placeholders with your real data
// ==========================

const SECTIONS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "timeline", label: "Timeline" },
  { id: "contact", label: "Contact" },
];

const skills = [
  { name: "HTML5", level: 90 },
  { name: "CSS3", level: 86 },
  { name: "JavaScript", level: 92 },
  { name: "TypeScript", level: 80 },
  { name: "React", level: 80 },
  { name: "Next.js", level: 78 },
  { name: "Tailwind", level: 88 },
  { name: "Node.js", level: 82 },
  { name: "Express", level: 80 },
  { name: "PHP", level: 80 },
  { name: "Laravel", level: 74 },
  { name: "MySQL", level: 82 },
  { name: "MongoDB", level: 70 },
  { name: "GSAP", level: 68 },
];

const projects = [
  {
    title: "E‑Commerce Platform",
    desc: "Full‑stack store with cart, payments, and admin dashboard.",
    stack: ["WIX", "Plugin", "Payments Gateway"],
    img: EcomImg,
    demo: "https://exexex901.wixsite.com/bkart",
    code: "#",
  },
  {
    title: "Portfolio Engine",
    desc: "Dynamic portfolio CMS with animations and theme switcher.",
    stack: ["PHP", "GSAP", "MSQl","JS","HTML","CSS"],
    img: TradeImg ,
    demo: "https://challengingtrader.ct.ws/?i=1",
    code: "#",
  },
  {
    title: "Food Delivery App",
    desc: "Menu, cart, tracking, and real‑time order updates.",
    stack: ["WIX", "Plugin", "Payments Gateway"],
    img: FoodImg,
    demo: "https://exexex901.wixsite.com/my-site-2",
    code: "#",
  },
  {
    title: "BrodBand Dashboard",
    desc: "Showcase plan pricing , Speed Test, Book New Connection.",
    stack: ["HTML-5", "CSS", "JS", "PHP", "MySQL", "GSAP"],
    img: ZitaImg,
    demo: "https://biki-wifi.netlify.app/",
    code: "#",
  },
];

const timeline = [
  { year: "2025", title: "Web Developer", place: "Freelance", text: "Leading end‑to‑end product builds with modern stacks and motion‑first UX." },
  { year: "2024", title: "Frontend Engineer", place: "Freelance", text: "Built design systems, optimized performance (LCP < 1.5s), and shipped PWAs." },
  { year: "2023", title: "Full‑Stack Developer", place: "Freelance", text: "Designed REST APIs, integrated payments, and automated CI/CD." },
  { year: "2022", title: "Intern Developer", place: "Freelance", text: "Converted Figma to responsive UIs and wrote reusable components." },
];

// Utility: smooth scroll to section
const scrollToId = (id) => () => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

// Card wrapper with hover/tilt
const TiltCard = ({ children }) => (
  <motion.div
    whileHover={{ y: -6, rotateX: 1.5, rotateY: -1.5 }}
    transition={{ type: "spring", stiffness: 200, damping: 20 }}
    className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4 shadow-lg overflow-hidden"
  >
    {/* Subtle radial highlight on hover */}
    <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{
      background: "radial-gradient(800px circle at var(--x,50%) var(--y,50%), rgba(255,255,255,0.12), transparent 40%)"
    }} />
    {children}
  </motion.div>
);

// Background Cinematic Layers with Extra Animations
const CinematicBG = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax movements
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_10%,rgba(56,189,248,0.2),transparent),radial-gradient(800px_400px_at_90%_20%,rgba(167,139,250,0.2),transparent),linear-gradient(180deg,rgba(12,12,18,1),rgba(12,12,18,1))]" />

      {/* Floating parallax blobs */}
      <motion.div
        style={{ y: y1 }}
        className="absolute -left-24 top-40 h-72 w-72 rounded-full blur-3xl opacity-40 bg-cyan-500/30"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute right-0 top-96 h-80 w-80 rounded-full blur-3xl opacity-30 bg-violet-500/30"
      />

      {/* Animated gradient wave overlay */}
      <div className="absolute inset-0 opacity-30 mix-blend-overlay">
        <div className="animate-[wave_12s_linear_infinite] h-full w-[200%] bg-[linear-gradient(270deg,#06b6d4_0%,#a78bfa_50%,#06b6d4_100%)] opacity-20" />
      </div>

      {/* Floating particles */}
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/20"
          style={{
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Shooting stars */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-0.5 w-20 bg-gradient-to-r from-white to-transparent opacity-0"
          style={{
            top: `${Math.random() * 80}%`,
            left: `${Math.random() * 100}%`,
            rotate: -45,
          }}
          animate={{
            x: [0, 400],
            y: [0, 200],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2 + Math.random(),
            delay: i * 3,
            repeat: Infinity,
            repeatDelay: 5 + Math.random() * 5,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
};

const Section = ({ id, children, title, kicker }) => (
  <section id={id} className="scroll-mt-24 py-20 md:py-28">
    <div className="mx-auto max-w-6xl px-4">
      {kicker && <p className="text-xs uppercase tracking-[0.3em] text-white/60 mb-3">{kicker}</p>}
      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-extrabold leading-tight"
        >
          {title}
        </motion.h2>
      )}
      <div className="mt-8">{children}</div>
    </div>
  </section>
);

const Navbar = () => (
  <div className="fixed top-4 left-1/2 z-50 -translate-x-1/2">
    <nav className="flex gap-1 rounded-2xl border border-white/10 bg-white/10 backdrop-blur px-2 py-2 shadow-xl">
      {SECTIONS.map((s) => (
        <button
          key={s.id}
          onClick={scrollToId(s.id)}
          className="px-3 md:px-4 py-2 text-sm md:text-base rounded-xl text-white/90 hover:text-white hover:bg-white/10 transition"
        >
          {s.label}
        </button>
      ))}
    </nav>
  </div>
);

import { Download, Play } from "lucide-react";


const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center bg-[#0d1117]"
    >
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* ==== LEFT: Text ==== */}
        <div className="text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
            Hi, I&apos;m <span className="text-cyan-400">Joydip!</span>
            <br />
            <span className="text-white">Creative</span>
            <span className="text-green-400"> Developer</span>
          </h1>
          <p className="mt-6 text-gray-400 max-w-xl text-lg">
            I&apos;m a passionate Web Developer with a mission to create delightful and
            intuitive digital experiences. With a strong foundation in modern
            technologies and a keen eye for design, I build engaging,
            user-friendly apps that inspire.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-5">
            <a
              href="/JOYDIP MANDAL-1.pdf"
              download
              className="inline-flex items-center gap-2 bg-green-500 text-black font-semibold px-5 py-3 rounded-md hover:bg-green-400 transition"
            >
              <Download size={20} /> Download CV
            </a>
           
          </div>
        </div>

        {/* ==== RIGHT: Stylish Hexagon Image ==== */}
        <div className="flex justify-center relative">
          <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">
            {/* Hexagon frame effect */}
            <div className="absolute inset-0 rounded-[30%] border-[6px] border-green-400 rotate-6"></div>
            <div className="absolute inset-0 rounded-[30%] border-[6px] border-cyan-400 -rotate-6"></div>

            {/* Image */}
            <img
              src={MyImg}
              alt="My Portrait"
              className="relative z-10 w-full h-full object-cover rounded-[30%]"
            />
          </div>
        </div>

      </div>
    </section>
  );
};



const About = () => (
  <Section id="about" kicker="Chapter 01" title={<>
    About <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">Me</span>
  </>}>
    <div className="grid md:grid-cols-5 gap-8 items-start">
      <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="md:col-span-3">
        <p className="text-white/80 leading-relaxed">
          I’m a web developer focused on performance, accessibility, and delightful motion. I turn complex ideas into beautiful, functional products.
        </p>
        <ul className="mt-6 space-y-3 text-white/80">
          <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-cyan-400"/> Pixel‑perfect UIs with responsive design</li>
          <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-violet-400"/> API design, auth, and real‑world integrations</li>
          <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-400"/> Animations that guide, not distract</li>
        </ul>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="md:col-span-2">
        <TiltCard>
          <div className="aspect-[4/3] w-full rounded-xl overflow-hidden">
            <img src={My2Img} alt="workspace" className="h-full w-full object-cover" />
          </div>
          <div className="mt-4">
            <p className="text-sm text-white/60">Currently open for freelance & full‑time roles.</p>
          </div>
        </TiltCard>
      </motion.div>
    </div>
  </Section>
);

const Skills = () => (
  <Section id="skills" kicker="Chapter 02" title={<>Skills <span className="text-white/60">&</span> Tools</>}>
    <div className="grid md:grid-cols-2 gap-8">
      <div className="space-y-5">
        {skills.slice(0, Math.ceil(skills.length/2)).map((s) => (
          <motion.div key={s.name} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
            <div className="flex justify-between text-sm">
              <span className="text-white/80">{s.name}</span>
              <span className="text-white/50">{s.level}%</span>
            </div>
            <div className="mt-2 h-2 rounded-full bg-white/10 overflow-hidden">
              <motion.div className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-400" initial={{ width: 0 }} whileInView={{ width: `${s.level}%` }} viewport={{ once: true }} transition={{ duration: 1 }} />
            </div>
          </motion.div>
        ))}
      </div>
      <div className="space-y-5">
        {skills.slice(Math.ceil(skills.length/2)).map((s) => (
          <motion.div key={s.name} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
            <div className="flex justify-between text-sm">
              <span className="text-white/80">{s.name}</span>
              <span className="text-white/50">{s.level}%</span>
            </div>
            <div className="mt-2 h-2 rounded-full bg-white/10 overflow-hidden">
              <motion.div className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-400" initial={{ width: 0 }} whileInView={{ width: `${s.level}%` }} viewport={{ once: true }} transition={{ duration: 1 }} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </Section>
);

const Projects = () => (
  <Section id="projects" kicker="Chapter 03" title={<>
    Featured <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">Projects</span>
  </>}>
    <div className="grid md:grid-cols-2 gap-8">
      {projects.map((p) => (
        <TiltCard key={p.title}>
          <div className="aspect-video w-full overflow-hidden rounded-xl">
            <motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 0.6 }} src={p.img} alt={p.title} className="h-full w-full object-cover" />
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="mt-1 text-white/70">{p.desc}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.stack.map((t) => (
                <span key={t} className="text-xs rounded-full bg-white/10 px-2.5 py-1 text-white/70">{t}</span>
              ))}
            </div>
            <div className="mt-4 flex gap-3">
              <a href={p.demo} className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-1.5 hover:bg-white/10 transition">
                <LinkIcon size={16} /> Live
              </a>
              <a href={p.code} className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-1.5 hover:bg-white/10 transition">
                <Github size={16} /> Code
              </a>
            </div>
          </div>
        </TiltCard>
      ))}
    </div>
  </Section>
);

const Timeline = () => (
  <Section id="timeline" kicker="Chapter 04" title={<>Career <span className="text-white/60">Timeline</span></>}>
    <div className="relative pl-6">
      <div className="absolute left-2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/60 via-white/20 to-violet-400/60" />
      <div className="space-y-10">
        {timeline.map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="relative">
            <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400" />
            <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-4">
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <span className="rounded-md bg-white/10 px-2 py-0.5">{item.year}</span>
                <strong className="text-white/90">{item.title}</strong>
                <span className="text-white/60">• {item.place}</span>
              </div>
              <p className="mt-2 text-white/75">{item.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </Section>
);

const Contact = () => (
  <Section id="contact" kicker="Finale" title={<>
    Let’s <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">Build</span> Together
  </>}>
    <div className="grid md:grid-cols-2 gap-8">
      <TiltCard>
        <form onSubmit={(e) => { e.preventDefault(); window.location.href = `mailto:youremail@example.com?subject=Project Inquiry&body=Hi, I’d like to work with you...`; }}>
          <div className="grid gap-4">
            <label className="block">
              <span className="text-sm text-white/70">Your Name</span>
              <input className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2 outline-none focus:border-cyan-400/60" placeholder="Joydip Mandal" required />
            </label>
            <label className="block">
              <span className="text-sm text-white/70">Email</span>
              <input type="email" className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2 outline-none focus:border-violet-400/60" placeholder="mjoydip0@gmail.com" required />
            </label>
            <label className="block">
              <span className="text-sm text-white/70">Message</span>
              <textarea rows={5} className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2 outline-none focus:border-cyan-400/60" placeholder="Tell me about your project..." />
            </label>
            <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/10 px-4 py-2 backdrop-blur hover:bg-white/20 transition">
              <Mail size={18} /> Send Message
            </button>
          </div>
        </form>
      </TiltCard>
      <div className="space-y-4">
        <TiltCard>
          <div className="flex items-center gap-3 text-white/80"><Mail size={18}/> mjoydip0@gmail.com</div>
          <div className="mt-2 flex items-center gap-3 text-white/80"><Phone size={18}/> +91 9134646427</div>
          <div className="mt-2 flex items-center gap-3 text-white/80"><MapPin size={18}/> Kolkata ,WB, India</div>
        </TiltCard>
        <TiltCard>
          <p className="text-white/70 text-sm">Prefer socials?</p>
          <div className="mt-3 flex gap-3">
            <a href="https://github.com/Yobiki" className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-1.5 hover:bg-white/10 transition">
              <Github size={16}/> GitHub
            </a>
            <a href="https://www.linkedin.com/in/joydipmandal/" className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-1.5 hover:bg-white/10 transition">
              <LinkIcon size={16}/> LinkedIn
            </a>
          </div>
        </TiltCard>
      </div>
    </div>
  </Section>
);

export default function PortfolioSeries() {
  // Cursor‑based spotlight for TiltCard backgrounds
  React.useEffect(() => {
    const handler = (e) => {
      const root = document.documentElement;
      root.style.setProperty("--x", e.clientX + "px");
      root.style.setProperty("--y", e.clientY + "px");
    };
    window.addEventListener("pointermove", handler);
    return () => window.removeEventListener("pointermove", handler);
  }, []);

  return (
    <div className="min-h-screen text-white bg-[#0c0c12] selection:bg-cyan-400/30 selection:text-white">
      <CinematicBG />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <Contact />
      <footer className="py-10 text-center text-white/50 text-sm">© {new Date().getFullYear()} Joydip Mandal</footer>
    </div>
  );
}
