import React, { useState } from "react";
import THM_BG from "../assets/THM.jpg";
import COURSERA_BG from "../assets/COURSERA.jpg";

// Composant Badge optimisé pour la lisibilité
const CertifBadge = ({ titre, plateforme, date }) => (
  <div className="p-4 border border-white/10 bg-black/60 backdrop-blur-md font-mono flex flex-col justify-between hover:border-white/30 transition-all duration-300 min-h-[120px]">
    <div>
      <div className="text-[9px] text-cyber/80 opacity-70 uppercase tracking-[0.2em]">
        {plateforme}
      </div>
      <div className="text-xs md:text-sm text-white font-bold leading-tight mt-2">
        {titre}
      </div>
    </div>
    <div className="text-[9px] text-gray-500 mt-4 border-t border-white/5 pt-2">
      ISSUED: {date}
    </div>
  </div>
);

const Certifications = () => {
  const [activeBlock, setActiveBlock] = useState(null);

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

  const toggleBlock = (block) => {
    setActiveBlock(activeBlock === block ? null : block);
  };

  return (
    <section id="certifications" className="py-24 overflow-hidden min-h-screen flex flex-col justify-center">
      <h2 className="text-xl md:text-2xl font-bold mb-16 flex items-center gap-6">
        <span className="text-cyber/40 font-mono text-sm">06.</span>
        <span className="text-white tracking-[0.2em] uppercase font-mono">
          CERTIFICATIONS "~/ACCESS_PANEL/CERTS"
        </span>
        <div className="h-px bg-cyber/20 flex-1"></div>
      </h2>

      {/* Conteneur principal à hauteur relative (65% de l'écran) */}
      <div className="relative flex flex-col lg:flex-row gap-6 h-[65vh] transition-all duration-700">
        
        {/* BLOC 01 - TRYHACKME */}
        <div
          onClick={() => toggleBlock("THM")}
          className={`group cursor-pointer overflow-hidden border transition-all duration-700 ease-in-out relative
            ${activeBlock === "THM" ? "w-full lg:w-[85%] z-20 border-red-500 bg-red-950/20" : "w-full lg:w-1/2 z-10 border-red-900/20 bg-zinc-950"}
            ${activeBlock === "COURSERA" ? "lg:w-[15%] opacity-30" : "opacity-100"}`}
        >
          {/* IMAGE DE FOND THM */}
          <div
            className={`absolute inset-0 z-0 transition-all duration-1000 bg-cover bg-center
              ${activeBlock === "THM" ? "scale-105 opacity-20" : "scale-100 opacity-90 group-hover:opacity-40 group-hover:grayscale"}`}
            style={{ backgroundImage: `url(${THM_BG})` }}
          />

          <div className="relative z-10 p-8 h-full flex flex-col">
            <h3 className={`font-mono text-sm tracking-[0.3em] uppercase transition-colors 
              ${activeBlock === "THM" ? "text-red-500" : "text-white/90"}`}>
              01. PRACTICAL_LABS
            </h3>

            {/* Grille de certifications scrolable */}
            <div className={`mt-8 grid gap-4 overflow-y-auto pr-2 transition-all duration-500 custom-scrollbar
              grid-cols-1 sm:grid-cols-2 xl:grid-cols-3
              ${activeBlock === "THM" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
            >
              {certifs.filter((c) => c.cat === "THM").map((c, i) => (
                <CertifBadge key={i} {...c} />
              ))}
            </div>
          </div>
          <div className="absolute bottom-4 right-4 font-mono text-[8px] text-red-900/40 z-10 uppercase">
            TRYHACKME_DATABASE
          </div>
        </div>

        {/* BLOC 02 - COURSERA */}
        <div
          onClick={() => toggleBlock("COURSERA")}
          className={`group cursor-pointer overflow-hidden border transition-all duration-700 ease-in-out relative
            ${activeBlock === "COURSERA" ? "w-full lg:w-[85%] z-20 border-blue-500 bg-blue-950/20" : "w-full lg:w-1/2 z-10 border-blue-900/20 bg-zinc-950"}
            ${activeBlock === "THM" ? "lg:w-[15%] opacity-30" : "opacity-100"}`}
        >
          {/* IMAGE DE FOND COURSERA */}
          <div
            className={`absolute inset-0 z-0 transition-all duration-1000 bg-cover bg-center
              ${activeBlock === "COURSERA" ? "scale-105 opacity-20" : "scale-100 opacity-90 group-hover:opacity-40 group-hover:grayscale"}`}
            style={{ backgroundImage: `url(${COURSERA_BG})` }}
          />

          <div className="relative z-10 p-8 h-full flex flex-col">
            <h3 className={`font-mono text-sm tracking-[0.3em] uppercase transition-colors 
              ${activeBlock === "COURSERA" ? "text-blue-500" : "text-white/90"}`}>
              02. THEORETICAL_CURRICULUM
            </h3>

            <div className={`mt-8 grid gap-4 overflow-y-auto pr-2 transition-all duration-500 custom-scrollbar
              grid-cols-1 sm:grid-cols-2 xl:grid-cols-3
              ${activeBlock === "COURSERA" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
            >
              {certifs.filter((c) => c.cat === "COURSERA").map((c, i) => (
                <CertifBadge key={i} {...c} />
              ))}
            </div>
          </div>
          <div className="absolute bottom-4 right-4 font-mono text-[8px] text-blue-900/40 z-10 uppercase">
            COURSERA_ARCHIVE
          </div>
        </div>
      </div>

      {activeBlock && (
        <p
          className="text-center mt-8 font-mono text-[10px] text-cyber/40 animate-pulse uppercase tracking-widest cursor-pointer hover:text-white transition-colors"
          onClick={() => setActiveBlock(null)}
        >
          {">"} CLIQUEZ ICI POUR RÉINITIALISER L'AFFICHAGE {"<"}
        </p>
      )}
    </section>
  );
};

export default Certifications;