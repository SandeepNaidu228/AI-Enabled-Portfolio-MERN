import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      
      "React",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
      "Redux",
      "Vite",
      
    ],
  },
  {
    title: "Backend Development",
    skills: [

      "Python",
      "PHP (Laravel)",
      "MongoDB",
      
      "MySQL",
    
      "REST API",
    ],
  },
  {
    title: "Artificial Intelligence",
    skills: [
      "OpenCV",
      "Scikit-Learn",
      "spaCy",
      "NLTK",
      "tensorflow","pytorch"
      
    ],
  },
  {
    title: "Machine Learning",
    skills: [
      "Scikit-Learn",
      "XGBoost",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
  
    ],
  },
  {
    title: "Generative AI",
    skills: [
      "OpenAI (GPT)",
      "ChatGPT",
      "GROQ AI",
      "GEMINI API",
      "FAISS VECTOR DB",
      "ollama",
      
      "Whisper",
      "Hugging Face",
      "Transformers",
      "LangChain",
      "LlamaIndex",
      "RAG (Retrieval-Augmented Generation)",
      "Streamlit",
      "Gradio",

    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "Docker",
      "AWS",
      "Kubernetes",
      "Git",
      "GitLab",
      "Render",
      "Linux",
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      "VS Code",
      "IntelliJ IDEA",
      "PyCharm",
      "Sublime Text",
      "Vercel"
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-[#0f0f0f] text-white min-h-screen py-20 scroll-mt-32"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-14 text-cyan-400 tracking-wider">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {skillCategories.map((category, idx) => (
            <Tilt
              key={idx}
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              glareEnable={true}
              glareMaxOpacity={0.2}
              scale={1.03}
              transitionSpeed={1200}
            >
              <motion.div
                className="bg-gradient-to-br from-[#1a1a1a] to-[#121212] rounded-2xl p-6 border border-cyan-700 shadow-lg hover:shadow-cyan-500/40 transition-shadow duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.2,
                  ease: "easeOut",
                }}
              >
                <h3 className="text-xl font-bold text-cyan-300 mb-5 text-center">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="px-4 py-2 border border-gray-700 rounded-full bg-[#2a2a2a] text-sm hover:bg-cyan-700 hover:text-white transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
