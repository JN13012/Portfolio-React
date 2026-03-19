import React, { useState } from "react";
import THM_BG from "../assets/THM.jpg";
import COURSERA_BG from "../assets/COURSERA.jpg";
import PRE_SECURITY_IMG from "../assets/THM/PreSecutiry.jpg";
import CYBERSECYRITY_101 from "../assets/THM/Cybersecurity_101.jpg";
import Introduction_to_AI from "../assets/Coursera/Introduction_to_Artificial_Intelligence.jpg";
import Generative_AI_Introduction from "../assets/Coursera/Generative_AI_Introduction_and_Applications.jpg";
import Prompt_Engineering from "../assets/Coursera/Generative_AI_Prompt_Engineering_Basics.jpg";
import Software_Engineering from "../assets/Coursera/Introduction_to_Software_Engineering.jpg";
import Intro_HTML_CSS_JavaScript from "../assets/Coursera/Introduction_to_HTML_CSS_JavaScript.jpg";
import Python_Data_Science from "../assets/Coursera/Python_for_Data_Science_AI_Development.jpg";
import Developing_AI_With_Python_Flask from "../assets/Coursera/Developing_AI_Applications_with_Python_and_Flask.jpg";
const Certifications = () => {
  const [activeNode, setActiveNode] = useState("TryHackMe");
  const [selectedCert, setSelectedCert] = useState(null);

  const certifs = [
    {
      titre: "Pre-Security",
      plateforme: "TryHackMe",
      cat: "TryHackMe",
      date: "2025",
      image: PRE_SECURITY_IMG,
      url: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-ZCUCFFIQO5.pdf",
      description:
        "Apprentissage des bases des réseaux, du Web, de Linux et de Windows pour la cybersécurité. SI ON CLIQUE SUR l'IMAGE L'imAGE PLEIN ECRAN",
    },
    {
      titre: "Cyber Security 101",
      plateforme: "TryHackMe",
      cat: "TryHackMe",
      date: "2025",
      image: CYBERSECYRITY_101,
      url: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-VEMPGXQSXD.pdf",
      description: "Introduction aux fondamentaux de la sécurité informatique.",
    },
    {
      titre: "Introduction to Artificial Intelligence",
      plateforme: "Coursera",
      cat: "COURSERA (IBM)",
      date: "2025",
      image: Introduction_to_AI,
      url: "https://coursera.org/share/466abca0568c44dd7e3d3258a47e99ee",
      description:
        "Apprentissage des bases des réseaux, du Web, de Linux et de Windows pour la cybersécurité.",
    },
    {
      titre: "Generative AI - Introduction and Applications",
      plateforme: "Coursera",
      cat: "COURSERA (IBM)",
      date: "2025",
      image: Generative_AI_Introduction,
      url: "https://coursera.org/share/7a06aa71ef5a258e81ad1af7c66a6f80",
      description:
        "Apprentissage des bases des réseaux, du Web, de Linux et de Windows pour la cybersécurité.",
    },
    {
      titre: "Generative AI - Prompt Engineering Basics",
      plateforme: "Coursera",
      cat: "COURSERA (IBM)",
      date: "2025",
      image: Prompt_Engineering,
      url: "https://coursera.org/share/3ce0e969ef13867efe203fe6f1bdbf0d",
      description:
        "Apprentissage des bases des réseaux, du Web, de Linux et de Windows pour la cybersécurité.",
    },
    {
      titre: "Introduction to Software Engineering",
      plateforme: "Coursera",
      cat: "COURSERA (IBM)",
      date: "2025",
      image: Software_Engineering,
      url: "https://coursera.org/share/1f4b38f67dfcdb136733cd9ec6d77da7",
      description:
        "Apprentissage des bases des réseaux, du Web, de Linux et de Windows pour la cybersécurité.",
    },
    {
      titre: "Introduction to HTML, CSS & JavaScript",
      plateforme: "Coursera",
      cat: "COURSERA (IBM)",
      date: "2025",
      image: Intro_HTML_CSS_JavaScript,
      url: "https://coursera.org/share/19c6fb4f7b7534c8d92b934ad11dc2f4",
      description: `Describe the Web Application Development Ecosystem and terminology like front-end developer, back-end, server-side, and full stack. 
                    Identify the developer tools, online editors like JSFiddle, and integrated development environments (IDEs) for building and testing web applications.
                    Create and structure basic web pages using HTML and style them with CSS.
                    Develop dynamic and interactive web pages using JavaScript, including DOM manipulation, form validation, and client-side scripting techniques.`,
    },
    {
      titre: "Python for Data Science, AI & Development",
      plateforme: "Coursera",
      cat: "COURSERA (IBM)",
      date: "2025",
      image: Python_Data_Science,
      url: "https://coursera.org/share/12ef6d1161ebabe8bd0bc270f208d8f3",
      description:
        "Apprentissage des bases des réseaux, du Web, de Linux et de Windows pour la cybersécurité.",
    },
    {
      titre: "Developing AI Applications with Python and Flask",
      plateforme: "Coursera",
      cat: "COURSERA (IBM)",
      date: "2025",
      image: Developing_AI_With_Python_Flask,
      url: "https://coursera.org/share/9e097eac39d7c42bdb4fa1826f485bc5",
      description:
        "Apprentissage des bases des réseaux, du Web, de Linux et de Windows pour la cybersécurité.",
    },
  ];

  const nodes = [
    {
      id: "TryHackMe",
      label: "PRACTICAL_LABS",
      image: THM_BG,
      theme: {
        bg: "bg-red-500",
        text: "text-red-500",
        border: "border-red-500/30",
        activeBg: "bg-red-500/10",
      },
    },
    {
      id: "COURSERA (IBM)",
      label: "THEORY_MODULES",
      image: COURSERA_BG,
      theme: {
        bg: "bg-blue-500",
        text: "text-blue-500",
        border: "border-blue-500/30",
        activeBg: "bg-blue-500/10",
      },
    },
  ];

  const activeConfig = nodes.find((n) => n.id === activeNode);

  return (
    <section
      id="certifications"
      className="py-24 relative overflow-hidden min-h-screen flex flex-col"
    >
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-[0.03] transition-all duration-1000 scale-105"
        style={{ backgroundImage: `url(${activeConfig.image})` }}
      ></div>

      <h2 className="text-xl md:text-2xl font-bold mb-12 flex items-center gap-6">
        <span className="text-cyber opacity-40 font-mono text-sm">06.</span>
        <span className="text-zinc-100 tracking-[0.2em] uppercase font-mono">
          Certifications
        </span>
        <div className="h-px bg-cyber/20 flex-1"></div>
      </h2>
      <div className="container mx-auto px-6 relative z-10">
        {/* SELECTEUR DE PLATEFORME DE FORMATION */}
        <div className="mb-12 flex flex-col md:flex-row gap-4 justify-start items-start md:items-center">
          <span className="text-base text-zinc-500 font-mono tracking-widest uppercase">
            {">"} Select_Database :
          </span>
          <div className="flex gap-4 w-full md:w-auto">
            {nodes.map((node) => {
              const isActive = activeNode === node.id;
              return (
                <button
                  key={node.id}
                  onClick={() => setActiveNode(node.id)}
                  className={`relative px-6 py-3 font-mono text-xs tracking-widest uppercase transition-all duration-300 overflow-hidden flex-1 md:flex-none text-left md:text-center border ${
                    isActive
                      ? `${node.theme.border} ${node.theme.activeBg} text-white`
                      : "border-white/10 text-zinc-500 hover:border-white/30 hover:text-zinc-300 bg-black/50"
                  }`}
                >
                  {isActive && (
                    <div
                      className={`absolute top-0 left-0 w-1 h-full ${node.theme.bg} shadow-[0_0_10px_currentColor] ${node.theme.text}`}
                    ></div>
                  )}
                  {node.id} // {node.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* GRILLE */}
        <div className="bg-black/40 border border-white/5 p-6 md:p-10 backdrop-blur-sm min-h-[400px]">
          <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
            <h3
              className={`font-mono text-base tracking-[0.3em] uppercase ${activeConfig.theme.text}`}
            >
              QUERY_RESULTS: {activeConfig.id}
            </h3>
            <span className="text-[10px] text-zinc-500 font-mono animate-pulse">
              [ {certifs.filter((c) => c.cat === activeNode).length} RECORDS
              FOUND ]
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {certifs
              .filter((c) => c.cat === activeNode)
              .map((c, i) => (
                <div
                  key={`${activeNode}-${i}`}
                  onClick={() => setSelectedCert(c)}
                >
                  <CertifBadge
                    {...c}
                    themeColor={activeConfig.theme}
                    index={i}
                  />
                </div>
              ))}
          </div>
        </div>

        {/* --- MODALE --- */}
        {selectedCert && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <div
              className={`bg-zinc-950 border ${activeConfig.theme.border} md:w-[80vw] lg:w-[60vw] max-h-[85vh] relative overflow-hidden flex flex-col shadow-2xl`}
            >
              {/* HEADER */}
              <div className="p-6  text-center relative">
                <p
                  className={`text-sm font-mono tracking-[0.3em] uppercase mb-3 ${activeConfig.theme.text}`}
                >
                  {selectedCert.plateforme}_DATABASE_RECORD
                </p>
                <h3 className="text-xl md:text-3xl font-bold text-white uppercase font-mono">
                  {selectedCert.titre}
                </h3>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-6 right-6 text-zinc-600 hover:text-white font-mono text-xl"
                >
                  [X]
                </button>
              </div>

              {/* BODY */}
              <div className="flex flex-col md:flex-row flex-grow overflow-hidden gap-4 px-4">
                {/* IMAGE */}
                <div className="w-full md:w-3/5 flex items-center justify-center">
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.titre}
                    className="max-w-full max-h-full object-contain shadow-2xl"
                  />
                </div>

                {/* DESCRIPTION */}
                <div className="w-full md:w-1/2 p-8 flex flex-col pt-16 bg-zinc-900/30 border border-white/5">
                  <span className="text-zinc-500 font-mono text-xl mb-2 uppercase tracking-widest">
                    {">"} Description:
                  </span>
                  <p className="text-zinc-400 text-sm md:text-base font-mono leading-relaxed border-l-2 border-white/10 pl-4">
                    {selectedCert.description}
                  </p>
                </div>
              </div>

              {/* FOOTER LINK */}
              <div className="p-6  bg-black/40">
                <a
                  href={selectedCert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-4 text-center font-mono text-xs font-bold uppercase border ${activeConfig.theme.border} ${activeConfig.theme.text} hover:bg-white/5 transition-all`}
                >
                  {">"} Access_Verified_Credential_Link
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

const CertifBadge = ({ titre, plateforme, date, themeColor, index }) => {
  const generateFakeHash = () => {
    return Array.from({ length: 12 }, () =>
      Math.floor(Math.random() * 16).toString(16),
    )
      .join("")
      .toUpperCase();
  };

  return (
    <div
      className="relative group bg-zinc-950/80 border border-white/5 p-5 transition-all duration-500 hover:bg-black overflow-hidden flex flex-col justify-between min-h-[160px] animate-[fadeIn_0.5s_ease-out_forwards] cursor-pointer"
      style={{ animationDelay: `${index * 100}ms`, opacity: 0 }}
    >
      <div
        className={`absolute top-0 left-0 w-full h-1 ${themeColor.bg} opacity-50 group-hover:opacity-100 transition-opacity group-hover:shadow-[0_0_15px_currentColor] ${themeColor.text}`}
      ></div>

      <div
        className={`absolute -bottom-10 -right-10 w-24 h-24 bg-gradient-to-br ${themeColor.bg} opacity-5 blur-2xl group-hover:opacity-20 transition-all duration-700 group-hover:scale-150`}
      ></div>

      <div className="flex justify-between items-start mb-6 z-10">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 border border-white/40 group-hover:border-white/80 rotate-45 transition-colors"></div>
          <span
            className={`text-[9px] font-mono tracking-[0.2em] uppercase ${themeColor.text}`}
          >
            {plateforme}
          </span>
        </div>
        <span className="text-[7px] text-white/20 font-mono tracking-widest">
          ID:{generateFakeHash()}
        </span>
      </div>

      <h3 className="text-sm md:text-base text-zinc-300 font-bold leading-snug group-hover:text-white transition-colors z-10">
        {titre}
      </h3>

      <div className="mt-8 flex justify-between items-end border-t border-white/5 pt-3 z-10 group-hover:border-white/20 transition-colors">
        <span className="text-[9px] text-zinc-600 font-mono uppercase tracking-widest">
          Status: <span className="text-green-500 animate-pulse">Verified</span>
        </span>
        <span className="text-[10px] font-mono font-bold text-white/50 group-hover:text-white/90 transition-colors">
          {date}
        </span>
      </div>
    </div>
  );
};

export default Certifications;
