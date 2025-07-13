import React from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaUser,
} from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { Typewriter } from 'react-simple-typewriter';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Hero = () => {
  return (
    <section className="bg-black text-white min-h-screen flex items-center justify-center px-6 md:px-20 py-20 mt-10 relative overflow-hidden">
      <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">

        {/* Left Side */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-snug">
            <div className="flex flex-wrap items-center gap-4">
              <span>Hello,</span>

              {/* Inline Floating Tags */}
              <span className="flex gap-2 text-sm mt-1">
                <span className="px-3 py-1 rounded-lg bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 text-purple-400">
                  <i className="fas fa-wand-magic-sparkles"></i>&nbsp;UI Magic
                </span>
                <span className="px-3 py-1 rounded-lg bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 text-blue-400">
                  <i className="fas fa-code"></i>&nbsp;Clean Code
                </span>
                <span className="px-3 py-1 rounded-lg bg-amber-500/10 backdrop-blur-sm border border-amber-500/20 text-amber-400">
                  <i className="fas fa-lightbulb"></i>&nbsp;Innovation
                </span>
              </span>
            </div>

            <div>
              This is <span className="text-pink-500">NITISH</span>,<br />
              I'm a{' '}
              <span className="text-green-400">
                <Typewriter
                  words={['Software Developer.', 'AI/ML Enthusiast.', 'Problem Solver.']}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </div>
          </h1>

          {/* Social Icons */}
<div className="flex gap-4 text-pink-400 text-2xl mt-6">
  <a href="https://github.com/Niti2102" target="_blank" rel="noopener noreferrer">
    <FaGithub className="hover:text-white cursor-pointer" />
  </a>
  <a href="https://leetcode.com/u/user9212n/" target="_blank" rel="noopener noreferrer">
    <SiLeetcode className="hover:text-white cursor-pointer" />
  </a>
  <a href="https://www.linkedin.com/in/nitish-malaichamy-b7281727b/" target="_blank" rel="noopener noreferrer">
    <FaLinkedin className="hover:text-white cursor-pointer" />
  </a>
  <a href="mailto:nitishm.2102@gmail.com">
    <FaEnvelope className="hover:text-white cursor-pointer" />
  </a>
</div>


          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            
            
            <a href="/Nitish%20resume.pdf" download>
              <button className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 px-6 rounded-full hover:opacity-90 transition">
                GET RESUME <FaDownload />
              </button>
            </a>
          </div>
        </div>

        {/* Right Side Code Card */}
        <div className="bg-[#1e1e1e] border border-gray-1000 rounded-xl p-6 text-sm font-mono shadow-lg relative overflow-hidden">
          {/* Fake window buttons */}
          <div className="flex space-x-2 mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-400 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
          </div>

          {/* Code block */}
          <SyntaxHighlighter
            language="javascript"
            style={{ ...docco, backgroundColor: '#000000', padding: '16px', borderRadius: '10px' }}
            className="whitespace-pre text-sm leading-relaxed"
            customStyle={{
              backgroundColor: '#000000',
              color: '#f8f8f2',
              padding: '24px',
              borderRadius: '10px',
              lineHeight: '1.75',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
              overflowX: 'hidden',
              width: '100%',
            }}
          >
{`const coder = {
  name: 'Nitish M',
  skills: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind'],
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  hireable: function () {
    return (
      this.hardWorker &&
      this.problemSolver &&
      this.skills.length >= 4
    );
  }
};`}
          </SyntaxHighlighter>
        </div>
      </div>
    </section>
  );
};

export default Hero;
