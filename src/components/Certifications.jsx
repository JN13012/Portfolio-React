import React, { useState } from "react";
import THM_BG from "../assets/THM.jpg";
import COURSERA_BG from "../assets/COURSERA.jpg";

const CertifBadge = ({ titre, plateforme, date, themeColor, index }) => {
  const generateFakeHash = () => {
    return Array.from({ length: 12 }, () => Math.floor(Math.random() * 16).toString(16)).join('').toUpperCase();
  };

  return (
    <div 
      className="relative group bg-zinc-900/40 border border-white/5 p-5 transition-all duration-500 hover:bg-zinc-900/80 overflow-hidden flex flex-col justify-between min-h-[160px] animate-[fadeIn_0.5s_ease-out_forwards]"
      style={{ animationDelay: `${index * 100}ms`, opacity: 0 }}
    >
      {/* Barre supérieure : Opacité réduite pour un effet "vapeur" plutôt que "néon flash" */}
      <div className={`absolute top-0 left-0 w-full h-[2px] ${themeColor.bg} opacity-30 group-hover:opacity-100 transition-opacity group-hover:shadow-[0_0_10px_currentColor] ${themeColor.text}`}></div>
      
      {/* Glow d'accentuation très discret */}
      <div className={`absolute -bottom-10 -right-10 w-24 h-24 bg-gradient-to-br ${themeColor.bg} opacity-[0.02] blur-2xl group-hover:opacity-10 transition-all duration-700`}></div>

      <div className="flex justify-between items-start mb-6 z-10">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 border border-white/20 group-hover:border-white/50 rotate-45 transition-colors"></div>
          <span className={`text-[9px] font-mono tracking-[0.2em] uppercase font-medium ${themeColor.text}`}>
            {plateforme}
          </span>
        </div>
        <span className="text-[7px] text-zinc-600 font-mono tracking-widest">
          ID:{generateFakeHash()}
        </span>
      </div>

      <h3 className="text-sm md:text-base text-zinc-200 font-bold leading-snug group-hover:text-white transition-colors z-10">
        {titre}
      </h3>

      <div className="mt-8 flex justify-between items-end border-t border-white/5 pt-3 z-10 group-hover:border-white/10 transition-colors">
        <span className="text-[9px] text-zinc-500 font-mono uppercase tracking-widest italic">
          Status: <span className="text-green-500/60 font-bold">Verified</span>
        </span>
        <span className="text-[10px] font-mono font-bold text-zinc-500 group-hover:text-zinc-300 transition-colors">
          {date}
        </span>
      </div>
    </div>
  );
};

const Certifications = () => {
  const [activeNode, setActiveNode] = useState("THM");

  const certifs = [
    { titre: "Pre-Security", plateforme: "TryHackMe", cat: "THM", date: "2025" },
    { titre: "Cyber Security 101", plateforme: "TryHackMe", cat: "THM", date: "2025" },
    { titre: "Introduction to Artificial Intelligence", plateforme: "Coursera", cat: "COURSERA", date: "2025" },
    { titre: "Generative AI - Prompt Engineering Basics", plateforme: "Coursera", cat: "COURSERA", date: "2025" },
    { titre: "Introduction to Software Engineering", plateforme: "Coursera", cat: "COURSERA", date: "2025" },
    { titre: "Introduction to HTML, CSS & JavaScript", plateforme: "Coursera", cat: "COURSERA", date: "2025" },
    { titre: "Python for Data Science, AI & Development", plateforme: "Coursera", cat: "COURSERA", date: "2025" },
    { titre: "Developing AI Applications with Python and Flask", plateforme: "Coursera", cat: "COURSERA", date: "2025" },
  ];

  // Couleurs "Muted" : On utilise des nuances Zinc/Slate en base avec une touche de couleur
  const nodes = [
    {
      id: "THM",
      label: "PRACTICAL_LABS",
      image: THM_BG,
      theme: {
        bg: "bg-red-400/50", // Rouge désaturé
        text: "text-red-400/80",
        border: "border-red-400/20",
        activeBg: "bg-red-400/5"
      }
    },
    {
      id: "COURSERA",
      label: "THEORY_MODULES",
      image: COURSERA_BG,
      theme: {
        bg: "bg-blue-400/50", // Bleu désaturé
        text: "text-blue-400/80",
        border: "border-blue-400/20",
        activeBg: "bg-blue-400/5"
      }
    }
  ];

  const activeConfig = nodes.find(n => n.id === activeNode);

  return (
    <section id="certifications" className="py-24 relative overflow-hidden min-h-screen flex flex-col bg-[#0b0b0c]">
      
      {/* Background image encore plus subtile */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-[0.02] transition-all duration-1000 scale-105 pointer-events-none"
        style={{ backgroundImage: `url(${activeConfig.image})` }}
      ></div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        
        <h2 className="text-xl md:text-2xl font-bold mb-12 flex items-center gap-6">
          <span className="text-cyber opacity-30 font-mono text-sm">06.</span>
          <span className="text-zinc-400 tracking-[0.2em] uppercase font-mono">
            Certifications
          </span>
          <div className="h-px bg-white/5 flex-1"></div>
        </h2>

        {/* Database Selector - Style adouci */}
        <div className="mb-12 flex flex-col md:flex-row gap-4 justify-start items-start md:items-center">
          <span className="text-[10px] text-zinc-600 font-mono tracking-widest uppercase italic">
            {">"} Accessing_node:
          </span>
          <div className="flex gap-3 w-full md:w-auto">
            {nodes.map((node) => {
              const isActive = activeNode === node.id;
              return (
                <button
                  key={node.id}
                  onClick={() => setActiveNode(node.id)}
                  className={`relative px-6 py-3 font-mono text-[11px] tracking-widest uppercase transition-all duration-300 flex-1 md:flex-none text-left border ${
                    isActive 
                      ? `${node.theme.border} ${node.theme.activeBg} text-zinc-100` 
                      : "border-white/5 text-zinc-500 hover:border-white/20 hover:text-zinc-300 bg-zinc-950/50"
                  }`}
                >
                  {isActive && (
                    <div className={`absolute top-0 left-0 w-1 h-full ${node.theme.bg} ${node.theme.text}`}></div>
                  )}
                  {node.id} <span className="opacity-30 text-[9px] ml-2">// {node.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Panel principal */}
        <div className="bg-zinc-950/20 border border-white/5 p-6 md:p-10 backdrop-blur-sm min-h-[400px] shadow-2xl">
          <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-6">
            <h3 className={`font-mono text-xs tracking-[0.4em] uppercase ${activeConfig.theme.text}`}>
              CATALOG_DATA: {activeConfig.id}
            </h3>
            <span className="text-[9px] text-zinc-600 font-mono tracking-tighter uppercase">
              // Found {certifs.filter(c => c.cat === activeNode).length} entries
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {certifs
              .filter((c) => c.cat === activeNode)
              .map((c, i) => (
                <CertifBadge 
                  key={`${activeNode}-${i}`} 
                  {...c} 
                  themeColor={activeConfig.theme} 
                  index={i} 
                />
              ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Certifications;