import React from "react";

const FormationStep = ({ diplome, ecole, date, details, status }) => (
  <div className="relative pl-10 pb-16 group">
    {/* Ligne verticale */}
    <div className="absolute left-0 top-0 h-full w-px bg-cyber/20 group-last:bg-transparent"></div>

    {/* Point indicateur */}
    <div
      className={`absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full border border-cyber ${
        status === "current"
          ? "bg-cyber animate-pulse shadow-[0_0_10px_#4ade80]"
          : "bg-black"
      }`}
    ></div>

    <div className="font-mono">
      <div className="flex flex-wrap items-center gap-x-4 mb-2">
        <h3 className="text-cyber text-sm md:text-base font-bold uppercase tracking-tight">
          {diplome}
        </h3>
        <span className="text-gray-600 text-[10px] md:text-xs">[{date}]</span>
      </div>

      <div className="text-white/60 text-xs mb-4 uppercase tracking-widest">
        {ecole}
      </div>

      <p className="text-gray-500 text-xs leading-relaxed max-w-3xl border-l-2 border-cyber/10 pl-4 py-1">
        {details}
      </p>
    </div>
  </div>
);

const Formations = () => {
  const etudes = [
    {
      diplome:
        "Master of Science - Architecte Systèmes d'Information (Spé. Cybersécurité)",
      ecole: "EPITECH - MARSEILLE",
      date: "09/2025 - 10/2028",
      details: `Expertise en audit de sécurité (Pentest), conformité ISO/RGPD et protection des SI.
      Maîtrise des techniques d’attaque/défense et sécurisation des infrastructures numériques modernes`,

      status: "current",
    },
    {
      diplome: "Préparateur et Développeur de Véhicules de Compétition",
      ecole: "École de la Performance - NOGARO",
      date: "2024 - 2025",
      details: `Formation Bac+2 préparant aux métiers de technicien dans le sport automobile.`,
      status: "completed",
    },
    {
      diplome: "BTS Moteurs à Combustion Interne",
      ecole: "Lycée Albert Claveille - Périgueux",
      date: "2011 - 2013",
      details: `Enseignements en thermodynamique, développement moteur et construction mécanique.`,
      status: "completed",
    },
  ];

  return (
    <section id="formations" className="py-24">
      {/* On utilise w-full pour laisser App.jsx gérer la largeur max */}
      <div className="w-full">
        <h2 className="text-xl md:text-2xl font-bold mb-16 flex items-center gap-6">
          <span className="text-cyber opacity-40 font-mono text-sm">02.</span>
          <span className="text-zinc-100 tracking-widest uppercase">
            Formation
          </span>
          <div className="h-px bg-cyber/10 flex-1"></div>
        </h2>

        <div className="mt-8">
          {etudes.map((item, index) => (
            <FormationStep key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Formations;
