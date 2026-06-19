import { useState, useEffect, useRef } from "react";

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", text: "Hello! I'm ARIA — Kishore's AI assistant. Ask me anything about his projects, skills, or experience." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [pulse, setPulse] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => setPulse((p) => !p), 2000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const KISHORE_CONTEXT = `
You are ARIA, an AI assistant embedded in Kishore Kumar's futuristic portfolio. Answer only based on this context.

Kishore Kumar is an AI & Data Science Engineer from Chennai, India.
- Education: B.Tech in Artificial Intelligence & Data Science, graduating 2026
- Skills: Python, Machine Learning, Deep Learning, SQL, Streamlit, Power BI, Data Analytics, TensorFlow, PyTorch, Scikit-learn, Pandas, NumPy, Computer Vision, NLP
- LeetCode: 350+ problems solved, 1650+ rating, top 15% globally
- GitHub: 40+ repositories, 200+ contributions, 15+ stars
- Certifications: Google Data Analytics, IBM Machine Learning, AWS Cloud Practitioner, TensorFlow Developer Certificate, Meta Python Programming
- Internship: AI/ML Intern at TechSolutions India (2024), Data Science Intern at Analytics Hub (2023)
- Projects: SentimentScope (NLP sentiment analysis), VisionNet (real-time object detection), PredictIQ (ML prediction platform), DataMind (Power BI analytics dashboard), AutoML Studio (automated ML pipeline), ChurnGuard (customer churn predictor)
- Achievements: Hackathon winner (2023, 2024), Published research paper on CNN optimization, Smart India Hackathon finalist
- Contact: kishore07887@gmail.com | LinkedIn: linkedin.com/in/kishore-kumar-c-78b281295/ | GitHub: github.com/kicha7887
Keep answers concise, friendly, and professional. Respond as ARIA.
`;

  const getFallbackResponse = (query) => {
    const text = query.toLowerCase();
    
    // Greetings & Identity
    if (text.includes("hello") || text.includes("hi") || text.includes("hey") || text.includes("greetings") || text.includes("yo")) {
      return "Hello! I'm ARIA, Kishore's virtual AI assistant. How can I help you explore his portfolio, projects, or background today?";
    }
    if (text.includes("who are you") || text.includes("your name") || text.includes("what is aria") || text.includes("who is aria")) {
      return "I am ARIA (Artificial Relational Intelligence Assistant), a custom-designed AI companion built to showcase Kishore Kumar's work, experience, and accomplishments. Ask me about his projects, skills, or certifications!";
    }
    if (text.includes("who is kishore") || text.includes("tell me about kishore") || text.includes("introduce")) {
      return "Kishore Kumar is a highly passionate AI & Data Science Engineer based in Chennai, India. He is pursuing a B.Tech in Artificial Intelligence & Data Science (graduating in 2026) and specializes in building machine learning models, computer vision systems, and data analytics dashboards.";
    }

    // Projects
    if (text.includes("project") || text.includes("portfolio") || text.includes("work")) {
      if (text.includes("sentimentscope")) {
        return "SentimentScope is an NLP & Deep Learning project. It's a real-time sentiment analysis engine for social media streams built using Python, BERT, Transformers, Streamlit, Redis, and Docker.";
      }
      if (text.includes("visionnet")) {
        return "VisionNet is a computer vision pipeline that runs real-time object detection using YOLOv8 at 45 FPS. The stack includes Python, YOLOv8, OpenCV, PyTorch, CUDA, and FastAPI.";
      }
      if (text.includes("predictiq")) {
        return "PredictIQ is an AutoML prediction platform for tabular data training and SHAP explainability. Built with Python, Scikit-learn, XGBoost, SHAP, Streamlit, and AWS S3.";
      }
      if (text.includes("datamind")) {
        return "DataMind is an interactive Power BI executive dashboard designed for retail analytics. It leverages Power BI, SQL, Python, DAX, Azure Synapse, and Excel.";
      }
      if (text.includes("automl")) {
        return "AutoML Studio is an MLOps lifecycle pipeline with automated hyperparameter tuning & MLflow tracking, running on Python, MLflow, Optuna, Airflow, Docker, and Kubernetes.";
      }
      if (text.includes("churnguard") || text.includes("churn")) {
        return "ChurnGuard is a predictive analytics dashboard utilizing gradient-boosted models to estimate customer churn. Tech stack: Python, XGBoost, LightGBM, SHAP, Streamlit, and PostgreSQL.";
      }
      return "Kishore has built several notable AI & ML projects, including:\n1. **SentimentScope** (Real-time NLP sentiment engine using BERT)\n2. **VisionNet** (YOLOv8 real-time object detection at 45 FPS)\n3. **PredictIQ** (AutoML tabular training with SHAP analysis)\n4. **DataMind** (Power BI analytics dashboard)\n5. **AutoML Studio** (MLOps pipeline with MLflow & Optuna)\n6. **ChurnGuard** (Customer churn predictor using XGBoost & LightGBM)\n\nWhich one would you like to know more about?";
    }

    // Individual Projects by name directly
    if (text.includes("sentimentscope")) {
      return "SentimentScope is a real-time sentiment analysis engine for social media streams. Built using BERT, Transformers, Streamlit, Redis, and Docker, it parses user reviews or tweets on the fly.";
    }
    if (text.includes("visionnet")) {
      return "VisionNet is a real-time object detection pipeline built on YOLOv8 and OpenCV, capable of running at 45 FPS. It includes PyTorch, CUDA acceleration, and a FastAPI backend.";
    }
    if (text.includes("predictiq")) {
      return "PredictIQ is a tabular AutoML platform with model training (Scikit-learn, XGBoost) and feature explainability (SHAP values). Built with Streamlit and AWS S3.";
    }
    if (text.includes("datamind")) {
      return "DataMind is an executive Power BI dashboard for retail analytics, utilizing SQL database querying, DAX measures, and Azure Synapse analytics.";
    }
    if (text.includes("automl")) {
      return "AutoML Studio is an MLOps pipeline featuring Optuna hyperparameter optimization, MLflow experiment tracking, and orchestration via Airflow and Docker.";
    }
    if (text.includes("churnguard")) {
      return "ChurnGuard is a predictive customer churn analytics dashboard using gradient-boosted models (XGBoost/LightGBM) with post-hoc SHAP interpretations and a PostgreSQL database.";
    }

    // Skills
    if (text.includes("skill") || text.includes("technology") || text.includes("languages") || text.includes("code") || text.includes("know") || text.includes("stack")) {
      return "Kishore's skill set includes:\n- **Languages**: Python, SQL, Javascript, DAX\n- **AI/ML**: Deep Learning, Computer Vision, NLP, TensorFlow, PyTorch, Scikit-learn, Pandas, NumPy, XGBoost, LightGBM\n- **Tools**: Power BI, Streamlit, SQL, Redis, MLflow, Optuna, Docker, Kubernetes, AWS S3\n- **Algorithms**: 350+ LeetCode problems solved with a peak rating of 1650+.";
    }

    // Education & Internships
    if (text.includes("education") || text.includes("college") || text.includes("degree") || text.includes("study") || text.includes("graduat") || text.includes("school") || text.includes("b.tech")) {
      return "Kishore is pursuing a Bachelor of Technology (B.Tech) in Artificial Intelligence & Data Science, graduating in 2026 from Chennai, India.";
    }
    if (text.includes("internship") || text.includes("experience") || text.includes("work") || text.includes("job") || text.includes("career")) {
      return "Kishore has completed two internships:\n1. **AI/ML Intern** at TechSolutions India (2024), developing ML models and automating pipelines.\n2. **Data Science Intern** at Analytics Hub (2023), creating retail analytics dashboards.";
    }

    // Contact Information
    if (text.includes("contact") || text.includes("email") || text.includes("phone") || text.includes("reach") || text.includes("hire") || text.includes("linkedin") || text.includes("github") || text.includes("gmail") || text.includes("social")) {
      return "Feel free to connect with Kishore:\n- 📧 Email: kishore07887@gmail.com\n- 💼 LinkedIn: [Kishore Kumar](https://linkedin.com/in/kishore-kumar-c-78b281295/)\n- 🐙 GitHub: [github.com/kicha7887](https://github.com/kicha7887)\n- 💻 LeetCode: [leetcode.com/u/kishore7887](https://leetcode.com/u/kishore7887/)";
    }

    // Certifications
    if (text.includes("certification") || text.includes("certificate") || text.includes("course") || text.includes("certified")) {
      return "Kishore holds the following credentials:\n- Google Data Analytics Professional\n- IBM Machine Learning Professional\n- AWS Certified Cloud Practitioner\n- TensorFlow Developer Certificate\n- Meta Python Programming Certificate";
    }

    // Achievements & Leetcode
    if (text.includes("achievement") || text.includes("hackathon") || text.includes("award") || text.includes("paper") || text.includes("leetcode")) {
      return "Some of Kishore's highlights include:\n- Solved 350+ LeetCode problems (peak rating 1650+, top 15% globally).\n- Finalist in the Smart India Hackathon and winner of hackathons in 2023 & 2024.\n- Published a research paper on Convolutional Neural Network (CNN) optimization.";
    }

    // Fallback Default
    return "I am here to tell you about Kishore's expertise in AI & Data Science! You can ask me about his ML/NLP/CV projects, skills, professional certifications, internships, or how to contact him.";
  };

  const renderMessageText = (text) => {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(text)) !== null) {
      const matchIndex = match.index;
      if (matchIndex > lastIndex) {
        parts.push(text.substring(lastIndex, matchIndex));
      }
      parts.push(
        <a
          key={matchIndex}
          href={match[2]}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#ef4444", textDecoration: "underline", fontWeight: 600 }}
        >
          {match[1]}
        </a>
      );
      lastIndex = linkRegex.lastIndex;
    }

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    if (parts.length === 0) {
      return text.split("\n").map((line, j) => (
        <span key={j}>
          {line}
          {j < text.split("\n").length - 1 && <br />}
        </span>
      ));
    }

    return parts.map((part, i) => {
      if (typeof part === "string") {
        return part.split("\n").map((line, j) => (
          <span key={`${i}-${j}`}>
            {line}
            {j < part.split("\n").length - 1 && <br />}
          </span>
        ));
      }
      return part;
    });
  };

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    const userMsg = input.trim();
    setInput("");
    setMessages((m) => [...m, { role: "user", text: userMsg }]);
    setLoading(true);

    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

    if (apiKey && apiKey.trim() !== "") {
      try {
        const contents = messages
          .filter((m) => m.role !== "assistant" || messages.indexOf(m) > 0)
          .map((m) => ({
            role: m.role === "assistant" ? "model" : "user",
            parts: [{ text: m.text }],
          }));
        
        contents.push({
          role: "user",
          parts: [{ text: userMsg }]
        });

        const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents,
            systemInstruction: {
              parts: [{ text: KISHORE_CONTEXT }]
            }
          })
        });

        if (!res.ok) {
          throw new Error("Gemini API call failed");
        }

        const data = await res.json();
        const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "I couldn't process that. Let me know if you have another question!";
        setMessages((m) => [...m, { role: "assistant", text: reply }]);
      } catch (error) {
        console.warn("Gemini API error, falling back to client-side assistant:", error);
        setTimeout(() => {
          const reply = getFallbackResponse(userMsg);
          setMessages((m) => [...m, { role: "assistant", text: reply }]);
        }, 600);
      } finally {
        setLoading(false);
      }
    } else {
      setTimeout(() => {
        const reply = getFallbackResponse(userMsg);
        setMessages((m) => [...m, { role: "assistant", text: reply }]);
        setLoading(false);
      }, 600);
    }
  };

  return (
    <>
      {/* Floating Orb Button */}
      <div
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: 32,
          right: 32,
          width: 64,
          height: 64,
          borderRadius: "50%",
          background: "radial-gradient(circle at 35% 35%, #ef4444, #7f1d1d)",
          boxShadow: pulse
            ? "0 0 40px rgba(220,38,38,0.8), 0 0 80px rgba(220,38,38,0.4)"
            : "0 0 20px rgba(220,38,38,0.5), 0 0 40px rgba(220,38,38,0.2)",
          cursor: "pointer",
          zIndex: 999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.6rem",
          transition: "box-shadow 1s ease",
          animation: "floatBob 3s ease-in-out infinite",
        }}
        title="Ask ARIA"
      >
        🤖
      </div>

      {/* Chat Panel */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: 110,
            right: 32,
            width: 360,
            height: 480,
            background: "linear-gradient(135deg, rgba(10,10,15,0.97), rgba(20,5,5,0.97))",
            border: "1px solid rgba(220,38,38,0.4)",
            borderRadius: 20,
            zIndex: 998,
            display: "flex",
            flexDirection: "column",
            boxShadow: "0 0 60px rgba(220,38,38,0.3)",
            backdropFilter: "blur(20px)",
            animation: "slideUp 0.3s ease",
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: "16px 20px",
              borderBottom: "1px solid rgba(220,38,38,0.2)",
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                background: "radial-gradient(circle, #ef4444, #7f1d1d)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.1rem",
                boxShadow: "0 0 12px rgba(220,38,38,0.6)",
              }}
            >
              🤖
            </div>
            <div>
              <div style={{ color: "#f9fafb", fontWeight: 700, fontSize: "0.9rem" }}>ARIA</div>
              <div style={{ color: "#22c55e", fontSize: "0.7rem" }}>● Online</div>
            </div>
            <button
              onClick={() => setOpen(false)}
              style={{ marginLeft: "auto", background: "none", border: "none", color: "#6b7280", cursor: "pointer", fontSize: "1rem" }}
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: "auto", padding: "16px", display: "flex", flexDirection: "column", gap: 12 }}>
            {messages.map((m, i) => (
              <div key={i} style={{ display: "flex", justifyContent: m.role === "user" ? "flex-end" : "flex-start" }}>
                <div
                  style={{
                    maxWidth: "80%",
                    padding: "10px 14px",
                    borderRadius: m.role === "user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
                    background:
                      m.role === "user"
                        ? "linear-gradient(135deg, #dc2626, #b91c1c)"
                        : "rgba(255,255,255,0.05)",
                    border: m.role === "assistant" ? "1px solid rgba(255,255,255,0.08)" : "none",
                    color: "#f3f4f6",
                    fontSize: "0.82rem",
                    lineHeight: 1.6,
                  }}
                >
                  {renderMessageText(m.text)}
                </div>
              </div>
            ))}
            {loading && (
              <div style={{ display: "flex", gap: 4, padding: "8px 14px" }}>
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "#ef4444",
                      animation: `bounce 0.8s ease ${i * 0.15}s infinite`,
                    }}
                  />
                ))}
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div style={{ padding: "12px 16px", borderTop: "1px solid rgba(220,38,38,0.2)", display: "flex", gap: 8 }}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask about Kishore..."
              style={{
                flex: 1,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(220,38,38,0.2)",
                borderRadius: 10,
                padding: "8px 14px",
                color: "#f3f4f6",
                fontSize: "0.82rem",
                outline: "none",
              }}
            />
            <button
              onClick={sendMessage}
              style={{
                padding: "8px 16px",
                background: "linear-gradient(135deg, #dc2626, #b91c1c)",
                border: "none",
                borderRadius: 10,
                color: "#fff",
                cursor: "pointer",
                fontSize: "0.82rem",
                fontWeight: 600,
              }}
            >
              ↗
            </button>
          </div>
        </div>
      )}
    </>
  );
}
