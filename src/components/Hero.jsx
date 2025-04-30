import React from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaUser,
} from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Hero = () => {
  return (
    <section className="bg-black text-white min-h-screen flex items-center justify-center px-6 md:px-20 py-20 mt-20">
      <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">

        {/* Left Side */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-snug">
            Hello,<br />
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
          </h1>

          {/* Social Icons */}
          <div className="flex gap-4 text-pink-400 text-2xl mt-6">
            <a href="https://github.com/Niti2102" target="_blank" rel="noopener noreferrer">
              <FaGithub className="hover:text-white cursor-pointer" />
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
            <a href="#contact">
              <button className="flex items-center gap-2 border-2 border-white py-3 px-6 rounded-full hover:bg-white hover:text-black transition">
                CONTACT ME <FaUser />
              </button>
            </a>
            <a href="/Nitish%20resume.pdf" download>
              <button className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 px-6 rounded-full hover:opacity-90 transition">
                GET RESUME <FaDownload />
              </button>
            </a>
          </div>
        </div>

        {/* Right Side Code Card */}
        <div className="bg-[#1e1e1e] border border-gray-700 rounded-xl p-6 text-sm font-mono shadow-lg relative overflow-hidden">
          {/* Fake window buttons */}
          <div className="flex space-x-2 mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-400 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
          </div>

          {/* Code block */}
          <SyntaxHighlighter
            language="javascript"
            style={{ ...docco, backgroundColor: '#000000', padding: '16px', borderRadius: '8px' }}
            className="whitespace-pre text-sm leading-relaxed"
            customStyle={{
              backgroundColor: '#000000',
              color: '#f8f8f2',
              overflowX: 'hidden',
              whiteSpace: 'pre-wrap',
              wordWrap: 'break-word',
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
