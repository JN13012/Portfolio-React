import React from "react";

const FormationStep = ({ id, diplome, ecole, date, details, status, percent }) => (
  <div className="relative pl-10 md:pl-16 pb-12 md:pb-16 group">
    {/* Ligne verticale - s'affine sur mobile */}
    <div className="absolute left-[19px] md:left-[23px] top-0 h-full w-[2px] md:w-[3px] bg-gradient-to-b from-cyber/60 via-cyber/10 to-transparent group-last:bg-transparent"></div>

    {/* Indicateur d'index - Taille équilibrée */}
    <div className="absolute left-0 top-1 z-10">
      <div className={`relative w-10 h-10 flex items-center justify-center border ${
        status === "current" ? "border-cyber animate-pulse shadow-[0_0_15px_rgba(74,222,128,0.3)]" : "border-zinc-700 opacity-60"
      } bg-black rotate-45 group-hover:rotate-180 transition-all duration-700`}>
        <span className={`-rotate-45 group-hover:-rotate-180 transition-all duration-700 font-mono text-[10px] md:text-xs font-bold ${
          status === "current" ? "text-cyber" : "text-zinc-500"
        }`}>
          {id}
        </span>
      </div>
    </div>

    <div className="font-mono">
      {/* Header : Titre & Date - Responsive Font */}
      <div className="flex flex-col sm:flex-row sm:items-baseline gap-x-4 mb-2 ml-4 md:ml-6">
        <h3 className={`text-base md:text-lg font-bold uppercase tracking-wide transition-colors duration-300 ${
          status === "current" ? "text-cyber" : "text-zinc-100 group-hover:text-cyber"
        }`}>
          {diplome}
        </h3>
        <span className="text-zinc-500 text-[10px] md:text-xs font-medium whitespace-nowrap">
          // {date}
        </span>
      </div>

      <div className="text-zinc-400 text-[10px] md:text-xs mb-4 uppercase tracking-[0.2em] ml-4 md:ml-6 font-semibold">
        <span className="opacity-50 text-cyber pr-2">▶</span> {ecole}
      </div>

      {/* Barre de progression - Équilibrée */}
      <div className="ml-4 md:ml-6 mb-6 max-w-xl">
        <div className="flex justify-between items-end mb-1 text-[9px] md:text-[10px] font-bold uppercase tracking-widest">
          <span className={status === "current" ? "text-cyber animate-pulse" : "text-zinc-600"}>
            {status === "current" ? "System_Syncing" : "Archive_Loaded"}
          </span>
          <span className="text-zinc-400">{percent}%</span>
        </div>
        
        <div className="h-[4px] w-full bg-zinc-900 border border-white/5 relative overflow-hidden">
          <div 
            className={`absolute top-0 left-0 h-full transition-all duration-[2000ms] ease-out ${
              status === "current" 
              ? "bg-cyber shadow-[0_0_10px_#4ade80]" 
              : "bg-zinc-600"
            }`}
            style={{ width: `${percent}%` }}
          ></div>
        </div>
      </div>

      {/* Console Box : Plus lisible mais compacte */}
      <div className="ml-4 md:ml-6 relative">
        <div className="absolute left-0 top-0 w-[2px] h-full bg-cyber/40 group-hover:bg-cyber transition-colors shadow-[0_0_8px_#4ade80]"></div>
        <pre className="text-[11px] md:text-sm leading-relaxed text-zinc-300 bg-zinc-900/40 p-4 md:p-5 border border-white/5 backdrop-blur-sm whitespace-pre-wrap group-hover:bg-zinc-900/60 transition-all">
          <span className="text-cyber/60 font-bold">root@arch:~$</span> {details}
        </pre>
      </div>
    </div>
  </div>
);

const Formations = () => {
  const etudes = [
    {
      id: "01",
      diplome: "MSc Architecte SI (Cybersécurité)",
      ecole: "EPITECH - MARSEILLE",
      date: "2025 - 2028",
      percent: 15,
      details: "Analyse de vulnérabilités, Pentesting et sécurité des infrastructures critiques.",
      status: "current",
    },
    {
      id: "02",
      diplome: "Dev. Véhicules de Compétition",
      ecole: "École de la Performance - NOGARO",
      date: "2024 - 2025",
      percent: 100,
      details: "Optimisation des systèmes embarqués et acquisition de données haute performance.",
      status: "completed",
    },
    {
      id: "03",
      diplome: "BTS Moteurs à Combustion Interne",
      ecole: "Lycée Albert Claveille - Périgueux",
      date: "2011 - 2013",
      percent: 100,
      details: "Ingénierie mécanique et développement thermodynamique moteur.",
      status: "completed",
    },
  ];

  return (
    <section id="formations" className="py-20 relative px-4 md:px-0">
      <div className="w-full mb-20">
        <h2 className="text-xl md:text-2xl font-bold flex items-center gap-6">
          <span className="text-cyber opacity-40 font-mono text-sm">02.</span>
          <span className="text-zinc-100 tracking-widest uppercase font-mono">Educational_Timeline</span>
          <div className="h-px bg-cyber/20 flex-1"></div>
        </h2>
      </div>

      <div className="max-w-4xl mx-auto">
        {etudes.map((item, index) => (
          <FormationStep key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Formations;