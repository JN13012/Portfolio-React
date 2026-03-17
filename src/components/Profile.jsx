import React from "react";
import ProfilImg from "../assets/Profil.png";

const Profile = () => {
  return (
    <section className="py-12 md:py-20 lg:py-32 border-y border-cyber/20 bg-black/40 backdrop-blur-sm w-full relative overflow-hidden">
      {/* Éléments de design en arrière-plan */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-cyber/5 rounded-full blur-3xl"></div>

      <h2 className="text-xl md:text-2xl font-bold mb-16 flex items-center gap-6 container mx-auto px-6">
        <span className="text-cyber opacity-40 font-mono text-sm">01.</span>
        <span className="text-zinc-100 tracking-widest uppercase font-mono">
          Profile_Analysis
        </span>
        <div className="h-px bg-cyber/10 flex-1"></div>
      </h2>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* COLONNE 1 : AVATAR AVEC SCANNER */}
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-72 h-72 border border-cyber/50 p-2 bg-zinc-900/50 group">
              {/* Coins décoratifs style HUD */}
              <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-cyber"></div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-cyber"></div>

              {/* Ligne de scan animation */}
              <div className="absolute inset-0 w-full h-[2px] bg-cyber/50 z-10 shadow-[0_0_15px_rgba(74,222,128,0.5)] animate-scan opacity-0 group-hover:opacity-100"></div>

              <div className="w-full h-full overflow-hidden bg-black">
                <img
                  src={ProfilImg}
                  alt="Subject Profile"
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-110 group-hover:scale-100"
                />
              </div>
            </div>
            <div className="text-sm font-mono text-cyber animate-pulse uppercase tracking-[0.3em]">
              Status: Biometric_Active
            </div>
          </div>

          {/* COLONNE 2 : DATA & CORE SKILLS */}
          <div className="space-y-8">
            <div>
              {/* EFFET ÉCHANGÉ : Personnel_Data avec remplissage progressif */}
              <div className="relative inline-block overflow-hidden group/title mb-10 cursor-default">
                <div className="absolute inset-0 w-0 bg-cyber group-hover/title:w-full transition-all duration-700 ease-in-out -z-10"></div>
                <h3 className="text-base font-bold border border-cyber text-cyber group-hover/title:text-black px-3 py-1 tracking-[0.2em] uppercase transition-colors duration-300">
                  Personnel_Data
                </h3>
              </div>

              <ul className="space-y-4 font-mono">
                {[
                  {
                    label: "Localisation",
                    value: "Marseille, FR",
                    color: "text-white",
                  },
                  {
                    label: "Statut",
                    value: "En recherche d'alternance",
                    color: "text-white",
                  },
                  {
                    label: "Spécialité",
                    value: "Cybersécurité",
                    color: "text-cyber",
                  },
                  {
                    label: "Niveau",
                    value: "Master of Science",
                    color: "text-white",
                  },
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex border-b border-white/5 pb-2 group/item transition-all duration-300 hover:border-cyber/30"
                  >
                    <span className="text-base text-cyber/50 uppercase font-bold min-w-[120px] group-hover/item:text-cyber transition-all duration-300">
                      {item.label}:
                    </span>
                    <span
                      className={`text-base uppercase tracking-wider ${item.color} group-hover/item:text-white transition-colors duration-300`}
                    >
                      {item.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* SECTION SOFT SKILLS */}
            <div className="space-y-3">
              <div className="group/soft inline-block cursor-default">
                <p className="text-base text-cyber/65 group-hover/soft:text-cyber uppercase font-bold tracking-widest transition-all duration-300">
                  Soft Skills
                </p>
                <div className="h-[2px] w-0 group-hover/soft:w-full bg-cyber transition-all duration-500 shadow-[0_0_10px_#4ade80]"></div>
              </div>

              <div className="space-y-4 pt-2">
                <SkillBar label="Esprit critique" progress="90%" />
                <SkillBar label="Curiosité technique" progress="85%" />
                <SkillBar label="Polyvalence" progress="80%" />
                <SkillBar label="Communication" progress="75%" />
              </div>
            </div>
          </div>

          {/* COLONNE 3 : COMMUNICATIONS & ACTION */}
          <div className="flex flex-col h-full justify-between gap-8">
            <div className="space-y-6">
              <h3
                className="text-base font-bold border-l-2 border-cyber/50 pl-3 py-1 tracking-[0.2em] uppercase text-white/70 
                 hover:text-cyber hover:border-cyber hover:tracking-[0.4em] hover:pl-5 
                 transition-all duration-500 ease-in-out cursor-default"
              >
                Comm_Link
              </h3>
              <div className="flex flex-col gap-3">
                {[
                  { name: "GITHUB", url: "https://github.com/JN13012" },
                  {
                    name: "LINKEDIN",
                    url: "https://www.linkedin.com/in/jn13012/",
                  },
                  { name: "TRYHACKME", url: "https://tryhackme.com/p/JN13" },
                  {
                    name: "COURSERA",
                    url: "https://www.coursera.org/account-profile",
                  },
                  {
                    name: "SALESFORCE",
                    url: "https://www.salesforce.com/trailblazer/yfqjerhp8yqpaobh7v",
                  },
                ].map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-mono text-gray-400 hover:text-cyber transition-all flex items-center gap-3 group"
                  >
                    <span className="h-px w-4 bg-cyber/30 group-hover:w-8 group-hover:bg-cyber transition-all"></span>
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* BOUTON DOWNLOAD : Effet Flicker (ancien effet titre) */}
            <div className="pt-8">
              <a
                href="/mon-cv.pdf"
                download="CV_Nom_Prenom.pdf"
                className="w-full relative px-6 py-3 bg-black text-cyber border border-cyber font-mono text-xs uppercase tracking-widest hover:bg-cyber/70 hover:text-black hover:animate-flicker transition-all duration-300 text-center inline-block"
              >
                Download_CV.pdf
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillBar = ({ label, progress }) => (
  <div className="space-y-2 group/bar cursor-default">
    <div className="flex justify-between text-xs font-mono text-white/50 uppercase group-hover/bar:text-white transition-colors duration-300">
      <span>{label}</span>
      <span className="text-cyber opacity-70 group-hover/bar:opacity-100">
        {progress}
      </span>
    </div>
    <div className="h-[4px] w-full bg-white/5 relative border border-white/5 p-[1px]">
      <div
        className="absolute top-0 left-0 h-full bg-cyber shadow-[0_0_10px_rgba(74,222,128,0.4)] transition-all duration-1000 ease-out"
        style={{ width: progress }}
      ></div>
    </div>
  </div>
);

export default Profile;
