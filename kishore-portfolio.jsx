import { useState, useEffect } from "react";
import ParticleCanvas from "./components/ParticleCanvas";
import FloatCard from "./components/FloatCard";
import TypeWriter from "./components/TypeWriter";
import Counter from "./components/Counter";
import SkillOrb from "./components/SkillOrb";
import MiniBarChart from "./components/MiniBarChart";
import Heatmap from "./components/Heatmap";
import ProjectModal from "./components/ProjectModal";
import AIAssistant from "./components/AIAssistant";
import TimelineItem from "./components/TimelineItem";
import "./kishore-portfolio.css";

export default function App() {
  const [activeProject, setActiveProject] = useState(null);
  const [activeSection, setActiveSection] = useState("home");
  const [navVisible, setNavVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setNavVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
  };

  const projects = [
    {
      id: 1, icon: "🤖", title: "AI ATS Suite", category: "Resume Intelligence Platform",
      desc: "AI-powered resume analyzer that optimizes resumes for ATS compatibility and job matching.",
      fullDesc: "The project improves employment opportunities by helping job seekers create ATS-compliant resumes and better align their skills with industry requirements, supporting career growth and decent work opportunities.",
      tech: ["Python", "NLTK", "Scikit-Learn", "Streamlit", "PyPDF2", "Plotly", "PDFMiner"],
      features: ["ATS compatibility score analysis", "AI-powered resume & JD matching", "Missing keyword detection", "Resume ranking and feedback system", "Professional resume builder"],
      github: "https://github.com/kicha7887/AI-Based_ATS_Resume_Filter", demo: "https://ai-based-ats-resume-filter.onrender.com/",
    },

    {
      id: 2, icon: "👁️", title: "AI-Based Phishing Website Detector", category: "Cybersecurity | Machine Learning",
      desc: "AI-powered phishing website detector using machine learning, WHOIS, and SSL threat analysis.",
      fullDesc: "AI-Based Phishing Website Detector is an intelligent cybersecurity platform that detects phishing websites using machine learning, URL intelligence, WHOIS analysis, and SSL verification in real time.",
      tech: ["Python", "Scikit-Learn", "XGBoost", "Random Forest", "Streamlit", "SQLite"],
      features: ["Real-time phishing URL detection", "WHOIS & SSL certificate analysis", "Random Forest & XGBoost models", "Explainable AI threat scoring", "Interactive Streamlit dashboard"],
      github: "https://github.com/kicha7887/Phishing-URL-Detector", demo: "https://phishingwebsitechecker.streamlit.app/",
    },

    {
      id: 3,
      icon: "🛡️",
      title: "ML basedMalware-Classifier",
      category: "Cybersecurity",
      desc: "AI-powered malware detection platform that identifies malicious files using machine learning.",
      fullDesc: "Malware-Classifier is an AI-powered malware detection platform that analyzes executable files and classifies them as benign or malicious in real time.",
      tech: ["Python", "FastAPI", "React.js", "Scikit-learn", "JWT", "Tailwind CSS"],
      features: ["Real-time malware detection", "95%+ detection accuracy", "Secure JWT authentication", "REST API integration", "Interactive analysis dashboard"],
      github: "https://github.com/kicha7887/malware-classifier",
      demo: "https://malware-classifier-24jxf7ken-kishore-kumars-projects-b4e42267.vercel.app/",
    },
    {
      id: 4,
      icon: "⚡",
      title: "PDF Reader AI",
      category: "Generative AI",
      desc: "AI-powered document question answering system with semantic search and OpenAI fallback.",
      fullDesc: "PDFReader AI is an intelligent document Q&A platform that lets users upload PDFs, perform semantic search, and receive AI-powered answers with OpenAI fallback.",
      tech: ["Python", "FastAPI", "OpenAI API", "ChromaDB", "Streamlit", "FAISS"],
      features: ["Multi-PDF processing", "AI semantic search", "OpenAI fallback", "Source citations", "FastAPI backend"],
      github: "https://github.com/kicha7887/GENai_prjt/tree/main",
      demo: null,
    },
    {
      id: 5,
      icon: "⏱️",
      title: "Focus Sense",
      category: "Productivity",
      desc: "Cross-platform Pomodoro productivity app with distraction tracking and AI-powered focus insights.",
      fullDesc: "FocusSense is a cross-platform Pomodoro app that helps users improve productivity through customizable focus sessions, distraction tracking, and AI-powered productivity insights.",
      tech: ["React.js", "TypeScript", "Vite", "Tailwind CSS", "Capacitor", "SQLite"],
      features: ["Pomodoro timer", "Distraction tracking", "Session history", "AI focus insights", "Cross-platform support"],
      github: "https://github.com/kicha7887/focus-sense",
      demo: null,
    },
    /*
    {
      id: 4, icon: "📈", title: "DataMind", category: "Business Intelligence",
      desc: "Executive-grade Power BI dashboard suite for retail and e-commerce analytics.",
      fullDesc: "DataMind is a collection of 5 interconnected Power BI dashboards for a retail chain covering sales analytics, inventory management, customer segmentation, and demand forecasting. Processes 2M+ records daily with sub-second query performance.",
      tech: ["Power BI", "SQL", "Python", "DAX", "Azure Synapse", "Excel"],
      features: ["5 interconnected dashboards", "2M+ daily record processing", "Customer segmentation (RFM)", "Demand forecasting (ARIMA)", "Executive summary reports"],
      github: "https://github.com/kishorkumar/datamind", demo: null,
    },
    {
      id: 5, icon: "⚡", title: "AutoML Studio", category: "MLOps",
      desc: "End-to-end automated ML pipeline with CI/CD integration and model versioning.",
      fullDesc: "AutoML Studio is a production MLOps platform that automates the entire ML lifecycle from data ingestion to model deployment. Features include automated feature engineering, hyperparameter optimization with Optuna, and MLflow experiment tracking.",
      tech: ["Python", "MLflow", "Optuna", "Airflow", "Docker", "Kubernetes"],
      features: ["Automated feature engineering", "Optuna hyperparameter tuning", "MLflow experiment tracking", "Kubernetes deployment", "A/B testing framework"],
      github: "https://github.com/kishorkumar/automl-studio", demo: null,
    },
    {
      id: 6, icon: "🛡️", title: "ChurnGuard", category: "Predictive Analytics",
      desc: "Customer churn prediction system with 91% precision for telecom industry.",
      fullDesc: "ChurnGuard predicts customer churn 30 days in advance using a gradient boosting ensemble, enabling proactive retention strategies. Deployed for a simulated telecom dataset of 100K customers, achieving 91% precision and $2.3M simulated annual savings.",
      tech: ["Python", "XGBoost", "LightGBM", "SHAP", "Streamlit", "PostgreSQL"],
      features: ["30-day advance prediction", "91% precision on test set", "Customer risk scoring", "Intervention recommendation engine", "ROI calculator dashboard"],
      github: "https://github.com/kishorkumar/churnguard", demo: "https://churnguard.streamlit.app",
    },
    */
  ];

  const skills = [
    { skill: "Python", color: "#3b82f6" },
    { skill: "ML", color: "#ef4444" },
    { skill: "Deep\nLearn.", color: "#a855f7" },
    { skill: "SQL", color: "#f59e0b" },
    { skill: "Streamlit", color: "#22c55e" },
    { skill: "Power BI", color: "#f97316" },
    { skill: "Analytics", color: "#06b6d4" },
    { skill: "AI", color: "#ec4899" },
  ];

  const leetcodeData = [
    { label: "Jan", value: 28 },
    { label: "Feb", value: 35 },
    { label: "Mar", value: 42 },
    { label: "Apr", value: 31 },
    { label: "May", value: 55 },
    { label: "Jun", value: 48 },
    { label: "Jul", value: 62 },
  ];

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "stats", label: "Stats" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "analytics", label: "Analytics" },
    { id: "timeline", label: "Timeline" },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #030303 0%, #0a0505 40%, #050005 70%, #030303 100%)",
        fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
        color: "#f3f4f6",
        overflowX: "hidden",
        position: "relative",
      }}
    >
      {/* Canvas Background */}
      <ParticleCanvas />

      {/* Scan line effect */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background: "linear-gradient(90deg, transparent, rgba(220,38,38,0.4), transparent)",
          animation: "scanLine 8s linear infinite",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Navigation */}
      <nav
        style={{
          position: "fixed",
          top: 20,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 100,
          opacity: navVisible ? 1 : 0,
          transition: "opacity 0.5s ease",
        }}
      >
        <div
          className="glass"
          style={{
            borderRadius: 40,
            padding: "8px 20px",
            display: "flex",
            alignItems: "center",
            gap: 4,
            boxShadow: "0 8px 32px rgba(0,0,0,0.4), 0 0 20px rgba(220,38,38,0.1)",
          }}
        >
          <div style={{ color: "#ef4444", fontWeight: 800, fontSize: "0.85rem", marginRight: 12, fontFamily: "'Space Grotesk', sans-serif" }}>
            KK
          </div>
          {navLinks.map((l) => (
            <button
              key={l.id}
              className={`nav-link ${activeSection === l.id ? "active" : ""}`}
              onClick={() => scrollTo(l.id)}
            >
              {l.label}
            </button>
          ))}
        </div>
      </nav>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section id="home" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "0 24px", position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", paddingTop: 80 }}>
          <div
            className="hero-grid"
            style={{ display: "flex", gap: 48, alignItems: "center" }}
          >
            {/* Left: Profile */}
            <div style={{ flex: 1 }}>
              <div style={{ marginBottom: 20 }}>
                <span className="tag">⚡ Available for Opportunities</span>
              </div>

              <h1
                style={{
                  fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
                  fontWeight: 900,
                  fontFamily: "'Space Grotesk', sans-serif",
                  lineHeight: 1.05,
                  letterSpacing: "-0.03em",
                  marginBottom: 16,
                }}
              >
                KISHORE<br />
                <span className="shimmer-text">KUMAR</span>
              </h1>

              <div style={{ fontSize: "clamp(1rem, 2.5vw, 1.3rem)", color: "#9ca3af", marginBottom: 24, fontWeight: 300 }}>
                <TypeWriter
                  texts={[
                    "AI & Data Science Engineer",
                    "Machine Learning Specialist",
                    "Deep Learning Researcher",
                    "Data Analytics Expert",
                    "MLOps Engineer",
                  ]}
                  speed={70}
                />
              </div>

              <p style={{ color: "#6b7280", lineHeight: 1.8, maxWidth: 480, marginBottom: 36, fontSize: "0.95rem" }}>
                Building intelligent systems at the intersection of AI, data, and human impact.
                Passionate about turning raw data into decisions that matter.
              </p>

              {/* CTA Buttons */}
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 40 }}>
                <a
                  href="https://drive.google.com/file/d/1BVlnVeFQGpStoYBb-7YbYC8Zh8tksWt8/view?usp=drive_link"
                  style={{
                    padding: "14px 32px",
                    background: "linear-gradient(135deg, #dc2626, #991b1b)",
                    borderRadius: 12,
                    color: "#fff",
                    textDecoration: "none",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    boxShadow: "0 0 24px rgba(220,38,38,0.4)",
                    transition: "all 0.2s",
                    display: "inline-block",
                  }}
                >
                  ↓ Download Resume
                </a>
                <button
                  onClick={() => scrollTo("projects")}
                  style={{
                    padding: "14px 32px",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: 12,
                    color: "#f9fafb",
                    cursor: "pointer",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    transition: "all 0.2s",
                  }}
                >
                  View Projects →
                </button>
              </div>

              {/* Social Links */}
              <div style={{ display: "flex", gap: 12 }}>
                {[
                  { label: "GitHub", icon: "⌥", href: "https://github.com/kicha7887" },
                  { label: "LinkedIn", icon: "in", href: "https://www.linkedin.com/in/kishore-kumar-c-78b281295/" },
                  { label: "LeetCode", icon: "⚡", href: "https://leetcode.com/u/kishore7887/" },
                  { label: "Email", icon: "✉", href: "mailto:[kishore07887@gmail.com]" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    title={s.label}
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: 10,
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#9ca3af",
                      textDecoration: "none",
                      fontSize: "0.85rem",
                      fontWeight: 700,
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgba(220,38,38,0.5)";
                      e.currentTarget.style.color = "#ef4444";
                      e.currentTarget.style.background = "rgba(220,38,38,0.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                      e.currentTarget.style.color = "#9ca3af";
                      e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                    }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Right: Profile Card */}
            <div style={{ flexShrink: 0, animation: "floatBob 4s ease-in-out infinite" }} className="hide-mobile">
              <FloatCard>
                <div
                  className="glass-red"
                  style={{
                    borderRadius: 24,
                    padding: "40px 32px",
                    textAlign: "center",
                    minWidth: 300,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Holographic overlay */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(135deg, rgba(220,38,38,0.05) 0%, transparent 50%, rgba(220,38,38,0.03) 100%)",
                      pointerEvents: "none",
                    }}
                  />

                  {/* Avatar */}
                  <div style={{ position: "relative", display: "inline-block", marginBottom: 20 }}>
                    <div
                      style={{
                        width: 100,
                        height: 100,
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #dc2626, #7f1d1d, #dc2626)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "2.5rem",
                        margin: "0 auto",
                        animation: "pulseGlow 2s ease-in-out infinite",
                        position: "relative",
                        zIndex: 1,
                      }}
                    >
                      👨‍💻
                    </div>
                    {/* Orbit ring */}
                    <div
                      style={{
                        position: "absolute",
                        top: -8,
                        left: -8,
                        right: -8,
                        bottom: -8,
                        borderRadius: "50%",
                        border: "1px dashed rgba(220,38,38,0.4)",
                        animation: "rotate360 8s linear infinite",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: "#ef4444",
                        boxShadow: "0 0 8px rgba(220,38,38,1)",
                        transform: "translate(-50%,-50%) translateX(54px)",
                        transformOrigin: "-46px 0",
                        animation: "rotate360 8s linear infinite",
                      }}
                    />
                  </div>

                  <h3 style={{ fontSize: "1.3rem", fontWeight: 800, fontFamily: "'Space Grotesk', sans-serif", marginBottom: 4 }}>
                    Kishore Kumar
                  </h3>
                  <p style={{ color: "#ef4444", fontSize: "0.82rem", fontWeight: 600, marginBottom: 20, letterSpacing: "0.05em" }}>
                    AI & DATA SCIENCE ENGINEER
                  </p>

                  {/* Mini stats */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginBottom: 20 }}>
                    {[
                      { label: "Projects", val: "5+" },
                      { label: "Certifications", val: "5" },
                      { label: "LeetCode", val: "350+" },
                    ].map((s) => (
                      <div
                        key={s.label}
                        style={{
                          background: "rgba(0,0,0,0.3)",
                          borderRadius: 10,
                          padding: "10px 4px",
                          border: "1px solid rgba(220,38,38,0.15)",
                        }}
                      >
                        <div style={{ color: "#ef4444", fontWeight: 800, fontSize: "1.1rem" }}>{s.val}</div>
                        <div style={{ color: "#6b7280", fontSize: "0.65rem", marginTop: 2 }}>{s.label}</div>
                      </div>
                    ))}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 6,
                      color: "#22c55e",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                    }}
                  >
                    <div
                      style={{
                        width: 7,
                        height: 7,
                        borderRadius: "50%",
                        background: "#22c55e",
                        animation: "pulseGlow 1.5s ease-in-out infinite",
                      }}
                    />
                    Open to Work · Chennai, India
                  </div>
                </div>
              </FloatCard>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: 32,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
            color: "#374151",
            fontSize: "0.7rem",
            letterSpacing: "0.1em",
            animation: "floatBob 2s ease-in-out infinite",
          }}
        >
          <span>SCROLL</span>
          <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, rgba(220,38,38,0.6), transparent)" }} />
        </div>
      </section>

      {/* ── STATS WIDGETS ────────────────────────────────────────── */}
      <section id="stats" style={{ position: "relative", zIndex: 2, padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 48 }}>
            <div className="tag" style={{ marginBottom: 12 }}>⚙ System Dashboard</div>
            <h2 className="section-title">
              Command <span style={{ color: "#ef4444" }}>Center</span>
            </h2>
            <p className="section-sub">Real-time metrics and performance analytics</p>
          </div>

          <div className="grid-4">
            {[
              { icon: "🚀", label: "Total Projects", val: 5, suffix: "+", desc: "Production-ready AI systems" },
              { icon: "🏆", label: "Certifications", val: 5, suffix: "", desc: "From Google, IBM, AWS" },
              { icon: "⚡", label: "LeetCode Solved", val: 350, suffix: "+", desc: "Top 15% globally" },
              { icon: "⭐", label: "GitHub Stars", val: 15, suffix: "+", desc: "Across 40+ repositories" },
            ].map((s, i) => (
              <FloatCard key={i} delay={i * 0.3}>
                <div
                  className="glass"
                  style={{ borderRadius: 16, padding: "24px 20px", textAlign: "center", minHeight: 160 }}
                >
                  <div style={{ fontSize: "2rem", marginBottom: 12 }}>{s.icon}</div>
                  <Counter target={s.val} suffix={s.suffix} />
                  <div style={{ color: "#f3f4f6", fontWeight: 600, fontSize: "0.85rem", marginTop: 4 }}>{s.label}</div>
                  <div style={{ color: "#4b5563", fontSize: "0.72rem", marginTop: 6 }}>{s.desc}</div>
                </div>
              </FloatCard>
            ))}
          </div>

          {/* Internship widget */}
          <div className="grid-2" style={{ marginTop: 20 }}>
            <FloatCard delay={0.2}>
              <div className="glass" style={{ borderRadius: 16, padding: "28px 24px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: "rgba(220,38,38,0.15)",
                      border: "1px solid rgba(220,38,38,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.3rem",
                    }}
                  >
                    💼
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "0.95rem" }}>Internship Experience</div>
                    <div style={{ color: "#6b7280", fontSize: "0.75rem" }}>2 positions · 10 months total</div>
                  </div>
                </div>
                {[
                  { co: "TechSolutions India", role: "AI/ML Intern", dur: "Jun–Dec 2024", color: "#ef4444" },
                  { co: "Analytics Hub", role: "Data Science Intern", dur: "Jan–Jun 2023", color: "#f59e0b" },
                ].map((exp, i) => (
                  <div
                    key={i}
                    style={{
                      padding: "12px 16px",
                      background: "rgba(0,0,0,0.2)",
                      borderRadius: 10,
                      borderLeft: `3px solid ${exp.color}`,
                      marginBottom: i === 0 ? 12 : 0,
                    }}
                  >
                    <div style={{ fontWeight: 600, fontSize: "0.88rem", color: "#f3f4f6" }}>{exp.co}</div>
                    <div style={{ color: exp.color, fontSize: "0.78rem", marginTop: 2 }}>{exp.role}</div>
                    <div style={{ color: "#4b5563", fontSize: "0.72rem", marginTop: 2 }}>{exp.dur}</div>
                  </div>
                ))}
              </div>
            </FloatCard>

            <FloatCard delay={0.4}>
              <div className="glass" style={{ borderRadius: 16, padding: "28px 24px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: "rgba(220,38,38,0.15)",
                      border: "1px solid rgba(220,38,38,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.3rem",
                    }}
                  >
                    📜
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "0.95rem" }}>Certifications</div>
                    <div style={{ color: "#6b7280", fontSize: "0.75rem" }}>Industry-recognized credentials</div>
                  </div>
                </div>
                {[
                  { name: "Google Data Analytics", icon: "🔵", org: "Google" },
                  { name: "IBM Machine Learning", icon: "🟣", org: "IBM" },
                  { name: "AWS Cloud Practitioner", icon: "🟠", org: "Amazon" },
                  { name: "TensorFlow Developer", icon: "🟡", org: "Google" },
                  { name: "Meta Python Programming", icon: "🔴", org: "Meta" },
                ].map((c, i) => (
                  <div key={i} className="cert-badge" style={{ marginBottom: i < 4 ? 8 : 0 }}>
                    <span style={{ fontSize: "1rem" }}>{c.icon}</span>
                    <div>
                      <div style={{ color: "#f3f4f6", fontSize: "0.8rem", fontWeight: 600 }}>{c.name}</div>
                      <div style={{ color: "#6b7280", fontSize: "0.7rem" }}>{c.org}</div>
                    </div>
                  </div>
                ))}
              </div>
            </FloatCard>
          </div>
        </div>
      </section>

      {/* ── SKILLS ORBS ──────────────────────────────────────────── */}
      <section id="skills" style={{ position: "relative", zIndex: 2, padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 48 }}>
            <div className="tag" style={{ marginBottom: 12 }}>⬡ Neural Network</div>
            <h2 className="section-title">
              Skill <span style={{ color: "#ef4444" }}>Matrix</span>
            </h2>
            <p className="section-sub">Technologies orbiting my engineering core</p>
          </div>

          {/* Orb system */}
          <div
            style={{
              position: "relative",
              height: 360,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 48,
            }}
          >
            {/* Center core */}
            <div
              style={{
                width: 90,
                height: 90,
                borderRadius: "50%",
                background: "radial-gradient(circle at 35% 35%, rgba(220,38,38,0.4), rgba(127,29,29,0.6))",
                border: "1px solid rgba(220,38,38,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.8rem",
                boxShadow: "0 0 40px rgba(220,38,38,0.5), 0 0 80px rgba(220,38,38,0.2)",
                zIndex: 3,
                animation: "pulseGlow 2s ease-in-out infinite",
              }}
            >
              🧬
            </div>

            {skills.map((s, i) => (
              <SkillOrb
                key={i}
                skill={s.skill}
                angle={(i / skills.length) * Math.PI * 2}
                radius={150}
                speed={0.003 + i * 0.0005}
                color={s.color}
              />
            ))}

            {/* Orbit ring */}
            <div
              style={{
                position: "absolute",
                width: 320,
                height: 130,
                borderRadius: "50%",
                border: "1px solid rgba(220,38,38,0.1)",
                pointerEvents: "none",
              }}
            />
          </div>

          {/* Skill bars */}
          <div className="grid-2">
            {[
              { skill: "Python & Data Science", pct: 92 },
              { skill: "Machine Learning", pct: 88 },
              { skill: "Deep Learning & NLP", pct: 82 },
              { skill: "SQL & Databases", pct: 85 },
              { skill: "Power BI & Visualization", pct: 80 },
              { skill: "MLOps & Deployment", pct: 75 },
              { skill: "Computer Vision", pct: 78 },
              { skill: "Cloud (AWS/GCP)", pct: 68 },
            ].map((s, i) => (
              <div key={i} style={{ marginBottom: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                  <span style={{ fontSize: "0.82rem", color: "#d1d5db", fontWeight: 500 }}>{s.skill}</span>
                  <span style={{ fontSize: "0.78rem", color: "#ef4444", fontWeight: 700 }}>{s.pct}%</span>
                </div>
                <div style={{ height: 6, background: "rgba(255,255,255,0.05)", borderRadius: 3, overflow: "hidden" }}>
                  <div
                    style={{
                      height: "100%",
                      width: `${s.pct}%`,
                      background: "linear-gradient(90deg, #7f1d1d, #ef4444)",
                      borderRadius: 3,
                      boxShadow: "0 0 8px rgba(220,38,38,0.5)",
                      transition: "width 1s ease",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ─────────────────────────────────────────────── */}
      <section id="projects" style={{ position: "relative", zIndex: 2, padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 48 }}>
            <div className="tag" style={{ marginBottom: 12 }}>◈ System Modules</div>
            <h2 className="section-title">
              Project <span style={{ color: "#ef4444" }}>Showcase</span>
            </h2>
            <p className="section-sub">Click any card to expand holographic project details</p>
          </div>

          <div className="grid-3">
            {projects.map((p, i) => (
              <FloatCard key={p.id} delay={i * 0.15} onClick={() => setActiveProject(p)}>
                <div
                  className="glass"
                  style={{
                    borderRadius: 16,
                    padding: "24px",
                    height: "100%",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Glow corner */}
                  <div
                    style={{
                      position: "absolute",
                      top: -20,
                      right: -20,
                      width: 80,
                      height: 80,
                      background: "radial-gradient(circle, rgba(220,38,38,0.15), transparent)",
                      borderRadius: "50%",
                      pointerEvents: "none",
                    }}
                  />

                  <div style={{ fontSize: "2rem", marginBottom: 16 }}>{p.icon}</div>
                  <div style={{ marginBottom: 8 }}>
                    <span style={{ fontSize: "0.7rem", color: "#ef4444", fontWeight: 600, letterSpacing: "0.08em" }}>
                      {p.category.toUpperCase()}
                    </span>
                  </div>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#f9fafb", marginBottom: 10 }}>{p.title}</h3>
                  <p style={{ color: "#6b7280", fontSize: "0.82rem", lineHeight: 1.7, marginBottom: 20 }}>{p.desc}</p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {p.tech.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        style={{
                          padding: "3px 10px",
                          background: "rgba(220,38,38,0.08)",
                          border: "1px solid rgba(220,38,38,0.2)",
                          borderRadius: 20,
                          color: "#ef4444",
                          fontSize: "0.68rem",
                          fontWeight: 600,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                    {p.tech.length > 3 && (
                      <span style={{ fontSize: "0.68rem", color: "#4b5563", padding: "3px 8px" }}>
                        +{p.tech.length - 3} more
                      </span>
                    )}
                  </div>

                  <div
                    style={{
                      position: "absolute",
                      bottom: 16,
                      right: 20,
                      color: "#374151",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                    }}
                  >
                    Click to expand →
                  </div>
                </div>
              </FloatCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── ANALYTICS ────────────────────────────────────────────── */}
      <section id="analytics" style={{ position: "relative", zIndex: 2, padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 48 }}>
            <div className="tag" style={{ marginBottom: 12 }}>◎ Live Analytics</div>
            <h2 className="section-title">
              Code <span style={{ color: "#ef4444" }}>Intelligence</span>
            </h2>
            <p className="section-sub">LeetCode rankings and GitHub contribution metrics</p>
          </div>

          <div className="grid-2">
            {/* LeetCode */}
            <FloatCard>
              <div className="glass" style={{ borderRadius: 16, padding: "28px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24 }}>
                  <div>
                    <div style={{ fontSize: "1.3rem", marginBottom: 4 }}>⚡</div>
                    <h3 style={{ fontWeight: 700, fontSize: "1rem" }}>LeetCode Analytics</h3>
                    <p style={{ color: "#6b7280", fontSize: "0.78rem" }}>@kishore7887</p>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ color: "#ef4444", fontWeight: 800, fontSize: "1.6rem" }}>1650+</div>
                    <div style={{ color: "#6b7280", fontSize: "0.72rem" }}>Rating</div>
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginBottom: 24 }}>
                  {[
                    { label: "Easy", val: "180", color: "#22c55e" },
                    { label: "Medium", val: "130", color: "#f59e0b" },
                    { label: "Hard", val: "40", color: "#ef4444" },
                  ].map((d) => (
                    <div
                      key={d.label}
                      style={{
                        background: "rgba(0,0,0,0.3)",
                        borderRadius: 10,
                        padding: "12px 8px",
                        textAlign: "center",
                        border: `1px solid ${d.color}22`,
                      }}
                    >
                      <div style={{ color: d.color, fontWeight: 800, fontSize: "1.2rem" }}>{d.val}</div>
                      <div style={{ color: "#6b7280", fontSize: "0.7rem", marginTop: 2 }}>{d.label}</div>
                    </div>
                  ))}
                </div>

                <div style={{ marginBottom: 8 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                    <span style={{ color: "#9ca3af", fontSize: "0.75rem" }}>Monthly Problem Velocity</span>
                  </div>
                  <MiniBarChart data={leetcodeData} />
                </div>

                <div style={{ display: "flex", gap: 8, marginTop: 16, flexWrap: "wrap" }}>
                  {["Top 15%", "100 Day Streak", "Contest 1650+", "Daily Solver"].map((b) => (
                    <span
                      key={b}
                      style={{
                        padding: "4px 10px",
                        background: "rgba(220,38,38,0.1)",
                        border: "1px solid rgba(220,38,38,0.25)",
                        borderRadius: 20,
                        color: "#ef4444",
                        fontSize: "0.68rem",
                        fontWeight: 600,
                      }}
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </FloatCard>

            {/* GitHub */}
            <FloatCard delay={0.2}>
              <div className="glass" style={{ borderRadius: 16, padding: "28px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24 }}>
                  <div>
                    <div style={{ fontSize: "1.3rem", marginBottom: 4 }}>⌥</div>
                    <h3 style={{ fontWeight: 700, fontSize: "1rem" }}>GitHub Analytics</h3>
                    <p style={{ color: "#6b7280", fontSize: "0.78rem" }}>@kicha7887</p>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ color: "#ef4444", fontWeight: 800, fontSize: "1.6rem" }}>200+</div>
                    <div style={{ color: "#6b7280", fontSize: "0.72rem" }}>Contributions</div>
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginBottom: 24 }}>
                  {[
                    { label: "Repos", val: "40+" },
                    { label: "Stars", val: "15+" },
                    { label: "Forks", val: "8+" },
                  ].map((d) => (
                    <div
                      key={d.label}
                      style={{
                        background: "rgba(0,0,0,0.3)",
                        borderRadius: 10,
                        padding: "12px 8px",
                        textAlign: "center",
                        border: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      <div style={{ color: "#ef4444", fontWeight: 800, fontSize: "1.2rem" }}>{d.val}</div>
                      <div style={{ color: "#6b7280", fontSize: "0.7rem", marginTop: 2 }}>{d.label}</div>
                    </div>
                  ))}
                </div>

                <div>
                  <div style={{ color: "#9ca3af", fontSize: "0.75rem", marginBottom: 10 }}>Contribution Activity</div>
                  <Heatmap />
                </div>

                <div style={{ marginTop: 16 }}>
                  <div style={{ color: "#9ca3af", fontSize: "0.75rem", marginBottom: 8 }}>Top Languages</div>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {[
                      { lang: "Python", pct: 65, color: "#3b82f6" },
                      { lang: "Jupyter", pct: 20, color: "#f59e0b" },
                      { lang: "SQL", pct: 15, color: "#22c55e" },
                    ].map((l) => (
                      <div key={l.lang} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                        <div style={{ width: 8, height: 8, borderRadius: "50%", background: l.color }} />
                        <span style={{ color: "#d1d5db", fontSize: "0.75rem" }}>{l.lang}</span>
                        <span style={{ color: "#6b7280", fontSize: "0.72rem" }}>{l.pct}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FloatCard>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ─────────────────────────────────────────────── */}
      <section id="timeline" style={{ position: "relative", zIndex: 2, padding: "80px 24px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ marginBottom: 48, textAlign: "center" }}>
            <div className="tag" style={{ marginBottom: 12 }}>⟳ System Log</div>
            <h2 className="section-title">
              Career <span style={{ color: "#ef4444" }}>Timeline</span>
            </h2>
            <p className="section-sub">Education, internships, certifications, and milestones</p>
          </div>

          {/* Energy beam */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: 0,
                bottom: 0,
                width: 2,
                background: "linear-gradient(to bottom, transparent, rgba(220,38,38,0.6), rgba(220,38,38,0.3), transparent)",
                transform: "translateX(-50%)",
                animation: "energyPulse 2s ease-in-out infinite",
              }}
            />

            <TimelineItem
              year="2022 – 2026"
              title="B.Tech — AI & Data Science"
              subtitle="Chennai Engineering College"
              desc="CGPA: 8.4/10 · Final year student specializing in ML systems and data engineering"
              side="left"
            />
            <TimelineItem
              year="Jan – Jun 2023"
              title="Data Science Intern"
              subtitle="Analytics Hub"
              desc="Built Power BI dashboards, automated ETL pipelines, reduced reporting time by 60%"
              side="right"
            />
            <TimelineItem
              year="2023"
              title="Hackathon Winner"
              subtitle="National AI Hackathon"
              desc="1st place among 200 teams for ChurnGuard — customer churn prediction platform"
              side="left"
            />
            <TimelineItem
              year="2024"
              title="Research Publication"
              subtitle="IEEE Conference Paper"
              desc="Published 'Optimizing CNN Architectures for Edge Deployment' — 28 citations"
              side="right"
            />
            <TimelineItem
              year="Jun – Dec 2024"
              title="AI/ML Intern"
              subtitle="TechSolutions India"
              desc="Deployed 3 NLP models to production, improved model inference speed by 40%"
              side="left"
            />
            <TimelineItem
              year="2024"
              title="Smart India Hackathon Finalist"
              subtitle="Government of India Initiative"
              desc="Top 10 finalist out of 10,000+ teams for an AI-powered healthcare diagnosis system"
              side="right"
            />
            <TimelineItem
              year="2025"
              title="5 Major Certifications"
              subtitle="Google, IBM, AWS, Meta, TensorFlow"
              desc="Completed industry-recognized certifications in ML, cloud, and data analytics"
              side="left"
            />
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────── */}
      <section style={{ position: "relative", zIndex: 2, padding: "80px 24px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <div className="tag" style={{ marginBottom: 16, display: "inline-flex" }}>◉ Establish Connection</div>
          <h2 className="section-title" style={{ marginBottom: 16 }}>
            Let's <span style={{ color: "#ef4444" }}>Collaborate</span>
          </h2>
          <p style={{ color: "#6b7280", lineHeight: 1.8, marginBottom: 40, fontSize: "0.95rem" }}>
            Open to full-time roles, research collaborations, and ambitious projects in AI & Data Science.
            Let's build something extraordinary.
          </p>

          <FloatCard>
            <div
              className="glass-red"
              style={{ borderRadius: 20, padding: "40px 32px" }}
            >
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 24 }}>
                {[
                  { icon: "✉", label: "Email", val: "[kishore07887@gmail.com]", href: "mailto:[kishore07887@gmail.com]" },
                  { icon: "in", label: "LinkedIn", val: "linkedin.com/in/kishore-kumar-c-78b281295/", href: "https://www.linkedin.com/in/kishore-kumar-c-78b281295/" },
                  { icon: "⌥", label: "GitHub", val: "github.com/kicha7887", href: "https://github.com/kicha7887" },
                  { icon: "⚡", label: "LeetCode", val: "leetcode.com/u/kishore7887/", href: "https://leetcode.com/u/kishore7887/" },
                ].map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      padding: "16px",
                      background: "rgba(0,0,0,0.3)",
                      border: "1px solid rgba(220,38,38,0.15)",
                      borderRadius: 12,
                      textDecoration: "none",
                      transition: "all 0.2s",
                      display: "block",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgba(220,38,38,0.4)";
                      e.currentTarget.style.background = "rgba(220,38,38,0.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(220,38,38,0.15)";
                      e.currentTarget.style.background = "rgba(0,0,0,0.3)";
                    }}
                  >
                    <div style={{ color: "#ef4444", fontWeight: 800, fontSize: "1rem", marginBottom: 4 }}>{c.icon}</div>
                    <div style={{ color: "#f3f4f6", fontWeight: 600, fontSize: "0.8rem" }}>{c.label}</div>
                    <div style={{ color: "#4b5563", fontSize: "0.7rem", marginTop: 2 }}>{c.val}</div>
                  </a>
                ))}
              </div>

              <a
                href="mailto:kishore07887@gmail.com"
                style={{
                  display: "block",
                  padding: "16px 32px",
                  background: "linear-gradient(135deg, #dc2626, #991b1b)",
                  borderRadius: 12,
                  color: "#fff",
                  textDecoration: "none",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  boxShadow: "0 0 32px rgba(220,38,38,0.4)",
                  transition: "box-shadow 0.2s",
                  textAlign: "center",
                }}
              >
                ✉ Send Message
              </a>
            </div>
          </FloatCard>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          position: "relative",
          zIndex: 2,
          padding: "32px 24px",
          borderTop: "1px solid rgba(220,38,38,0.1)",
          textAlign: "center",
          color: "#374151",
          fontSize: "0.78rem",
        }}
      >
        <div style={{ color: "#ef4444", fontWeight: 800, fontFamily: "'Space Grotesk', sans-serif", marginBottom: 8 }}>
          KISHORE KUMAR
        </div>
        <div>AI & Data Science Engineer · Chennai, India</div>
        <div style={{ marginTop: 8, color: "#1f2937" }}>
          Built with React · Powered by ARIA AI
        </div>
      </footer>

      {/* Project Modal */}
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />

      {/* AI Assistant */}
      <AIAssistant />
    </div>
  );
}
