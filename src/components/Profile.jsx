import React from "react";
import ProfilImg from "../assets/Profil.png";

const Profile = () => {
  const personalData = [
    { label: "Localisation", value: "Marseille, FR", color: "text-white" },
    { label: "Statut", value: "Alternance Recherche", color: "text-white" },
    { label: "Spécialité", value: "Cybersécurité", color: "text-cyber" },
    { label: "Niveau", value: "Master of Science", color: "text-white" },
  ];

  const socTools = ["GITHUB", "LINKDIN", "...", "....", "..."];

  const monitoringLogs = [
    { msg: "Investissement personnel / Presentation SIEM", level: "HIGH", color: "text-red-500" },
    { msg: "Port scan detected", level: "MEDIUM", color: "text-yellow-400" },
    { msg: "New device connected", level: "LOW", color: "text-green-400" },
    { msg: "Suspicious traffic", level: "HIGH", color: "text-red-500" },
  ];

  return (
    <section className="py-12 md:py-20 lg:py-32 border-y border-cyber/20 bg-black/40 backdrop-blur-sm w-full relative overflow-hidden group/section">
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyber/5 rounded-full blur-3xl -z-10 animate-pulse"></div>

      <div className="container mx-auto px-6">
        <h2 className="text-xl md:text-2xl font-bold mb-16 flex items-center gap-6">
          <span className="text-cyber opacity-40 font-mono text-sm">01.</span>
          <span className="text-zinc-100 tracking-widest uppercase font-mono">
            Profile_Analysis
          </span>
          <div className="h-px bg-cyber/10 flex-1"></div>
          <div className="hidden sm:flex items-center gap-3 border border-red-500/30 px-3 py-1 bg-red-500/5">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
            <span className="text-red-500 font-mono text-[10px] uppercase tracking-tighter">
              Threat: High
            </span>
          </div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
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

          {/* COL 2: CORE INTEL (Effets Fill conservés) */}
          <div className="space-y-10">
            <div>
              {/* EFFET FILL SUR PERSONNEL_DATA CONSERVÉ */}
              <div className="relative inline-block overflow-hidden group/title mb-6 cursor-default">
                <div className="absolute inset-0 w-0 bg-cyber group-hover/title:w-full transition-all duration-1000 ease-in-out -z-10"></div>
                <h3 className="text-sm font-bold border border-cyber text-cyber group-hover/title:text-black px-3 py-1 tracking-[0.2em] uppercase transition-colors duration-300 font-mono">
                  Personnel_Data
                </h3>
              </div>

              <ul className="space-y-4 font-mono">
                {personalData.map((item, i) => (
                  <li
                    key={i}
                    className="flex justify-between border-b border-white/5 pb-2 group/item relative z-10"
                  >
                    <span className="text-xs text-white/40 uppercase group-hover/item:text-cyber transition-colors">
                      {item.label}
                    </span>
                    <span className={`text-xs uppercase ${item.color}`}>
                      {item.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              {/* EFFET FILL SUR SOFT_SKILLS CONSERVÉ */}
              <div className="relative inline-block overflow-hidden group/soft cursor-default">
                <div className="absolute inset-0 w-0 bg-cyber group-hover/soft:w-full transition-all duration-500 ease-in-out -z-10"></div>
                <h3 className="text-sm font-bold border border-cyber text-cyber group-hover/soft:text-black px-3 py-1 tracking-[0.2em] uppercase transition-colors duration-300 font-mono">
                  Soft_Skills
                </h3>
              </div>

              <div className="space-y-4 relative z-10">
                <SkillBar label="Esprit critique" progress="90%" />
                <SkillBar label="Curiosité technique" progress="85%" />
                <SkillBar label="Polyvalence" progress="80%" />
                <SkillBar label="Communication" progress="75%" />
              </div>
            </div>
          </div>

          {/* COL 3: SOC OPERATIONS (Inchangé) */}
          <div className="space-y-6 flex flex-col h-full relative z-10">
            <div className="bg-black/40 border border-cyber/20 p-4">
              <p className="text-[10px] text-cyber/60 font-mono uppercase mb-3">
                SOC_Toolkit_v2.0
              </p>
              <div className="flex flex-wrap gap-2">
                {socTools.map((tool) => (
                  <span
                    key={tool}
                    className="text-[10px] font-mono border border-cyber/20 px-2 py-1 text-white/70 hover:border-cyber hover:text-cyber transition-all cursor-crosshair"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex-1 min-h-[250px] bg-black/60 border border-cyber/20 flex flex-col">
              <div className="bg-cyber/10 px-3 py-1 flex justify-between items-center border-b border-cyber/20">
                <span className="text-[9px] font-mono text-cyber uppercase">
                  Active_Monitoring_Console
                </span>
                <span className="text-[9px] font-mono text-red-400 animate-pulse">
                  REC ●
                </span>
              </div>
              <div className="p-3 font-mono text-[10px] space-y-3 overflow-y-auto max-h-[220px] scrollbar-hide">
                {monitoringLogs.map((log, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-start gap-4 border-l border-white/10 pl-2"
                  >
                    <span className="text-white/60">{log.msg}</span>
                    <span className={`font-bold ${log.color}`}>
                      {log.level}
                    </span>
                  </div>
                ))}
                <div className="pt-2 text-blue-400/60 animate-pulse">
                  {">"} INITIALIZING_REMOTE_SCAN...
                  <br />
                  {">"} ENCRYPTING_SESSION_PATH...
                </div>
              </div>
            </div>

            <a
              href="/mon-cv.pdf"
              className="w-full relative px-6 py-3 bg-black text-cyber border border-cyber font-mono text-xs uppercase tracking-widest hover:bg-cyber/10 hover:shadow-[0_0_15px_#4ade8033] hover:animate-flicker transition-all text-center"
            >
              Download_CV.exe
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillBar = ({ label, progress }) => (
  <div className="space-y-1.5 group/bar cursor-default">
    <div className="flex justify-between text-[10px] font-mono text-white/40 uppercase group-hover/bar:text-white transition-colors">
      <span>{label}</span>
      <span className="text-cyber">{progress}</span>
    </div>
    <div className="h-[3px] w-full bg-white/5 relative overflow-hidden">
      <div
        className="absolute top-0 left-0 h-full bg-cyber transition-all duration-1000 ease-out shadow-[0_0_8px_#4ade80]"
        style={{ width: progress }}
      ></div>
    </div>
  </div>
);

export default Profile;
