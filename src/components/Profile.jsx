import React, { memo } from "react";
import ProfilImg from "../assets/Profil.png";
import {
  Plane,
  Dumbbell,
  Globe,
  Landmark,
  Terminal,
  User,
  Cpu,
  MessageSquare,
  Shield,
  Database,
} from "lucide-react";

/* ===================== SUB-COMPONENTS ===================== */

const SectionTitle = ({ icon: Icon, title, duration = 700, hasAnimate = true }) => (
  <div className={`relative inline-block overflow-hidden mb-6 border border-cyber/20 ${hasAnimate ? 'group/title cursor-help' : ''}`}>
    {hasAnimate && (
      <div 
        className="absolute inset-y-0 left-0 w-0 bg-cyber group-hover/title:w-full transition-all ease-in-out z-0"
        style={{ transitionDuration: `${duration}ms` }}
      />
    )}
    <div className="relative z-10 flex items-center gap-2 px-3 py-1.5">
      <Icon
        size={14}
        className={`transition-colors duration-300 ${hasAnimate ? 'text-cyber group-hover/title:text-black' : 'text-cyber'}`}
      />
      <h3 className={`text-[10px] font-mono uppercase tracking-[0.25em] transition-colors duration-300 ${hasAnimate ? 'text-cyber group-hover/title:text-black' : 'text-cyber'}`}>
        {title}
      </h3>
    </div>
  </div>
);

const SkillBar = memo(({ label, progress }) => (
  <div className="space-y-1 group cursor-default">
    <div className="flex justify-between text-[9px] font-mono text-zinc-500 uppercase group-hover:text-zinc-200 transition-colors">
      <span>{label}</span>
      <span className="text-cyber/60">{progress}%</span>
    </div>
    <div className="h-[2px] w-full bg-white/5 relative overflow-hidden">
      <div
        className="h-full bg-cyber shadow-[0_0_8px_#4ade80] transition-all duration-1000 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  </div>
));

const InterestCell = memo(({ icon: Icon, label, sub }) => (
  <div className="group p-3 border border-white/5 bg-zinc-900/10 flex flex-col items-center justify-center gap-1 hover:border-cyber/40 hover:bg-cyber/5 transition-all duration-500 relative overflow-hidden">
    <Icon
      size={16}
      className="text-zinc-600 group-hover:text-cyber transition-all group-hover:scale-110"
    />
    <div className="text-[9px] font-mono text-zinc-500 group-hover:text-zinc-200 uppercase text-center">
      {label}
    </div>
    <div className="text-[7px] text-zinc-700 font-mono uppercase tracking-tighter italic text-center">
      {sub}
    </div>
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber/5 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-1000"></div>
  </div>
));

/* ===================== DATA ===================== */

const personalData = [
  { id: "loc", label: "Localisation", value: "Marseille, FR", color: "text-white" },
  { id: "status", label: "Statut", value: "Alternance Recherche", color: "text-white" },
  { id: "spec", label: "Spécialité", value: "Cybersécurité", color: "text-cyber" },
  { id: "level", label: "Niveau", value: "Master of Science", color: "text-white" },
];

const languages = [
  { id: "en", lang: "Anglais", level: "Courant", code: "C1", progress: 90 },
  { id: "es", lang: "Espagnol", level: "Courant", code: "C1", progress: 85 },
  { id: "ar", lang: "Arabe", level: "Courant", code: "C1", progress: 95 },
  { id: "de", lang: "Allemand", level: "Basique", code: "A1", progress: 25 },
];

const monitoringLogs = [
  { id: 1, msg: "Investissement personnel / Presentation SIEM", level: "HIGH", color: "text-red-500" },
  { id: 2, msg: "Port scan detected", level: "MEDIUM", color: "text-yellow-400" },
  { id: 3, msg: "New device connected", level: "LOW", color: "text-green-400" },
];

const socTools = ["GITHUB", "LINKDIN", "HTB", "ROOT-ME", "TRYHACKME"];

const interests = [
  { id: "travel", icon: Plane, label: "Voyages", sub: "Global_Roaming" },
  { id: "sport", icon: Dumbbell, label: "Sport", sub: "Physical_Hardening" },
  { id: "geo", icon: Globe, label: "Géopolitique", sub: "Strategic_Intel" },
  { id: "finance", icon: Landmark, label: "Finance", sub: "Asset_Mgmt" },
];

/* ===================== MAIN COMPONENT ===================== */

const Profile = () => {
  return (
    <section className="py-20 bg-[#020202] text-white relative overflow-hidden border-y border-cyber/10">
      <div className="container mx-auto px-6">
        <h2 className="text-xl md:text-2xl font-bold mb-16 flex items-center gap-6">
          <span className="text-cyber opacity-40 font-mono text-sm">01.</span>
          <span className="text-zinc-100 tracking-widest uppercase font-mono">Profile_Analysis</span>
          <div className="h-px bg-cyber/10 flex-1"></div>
          <div className="hidden sm:flex items-center gap-3 border border-red-500/30 px-3 py-1 bg-red-500/5">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
            <span className="text-red-500 font-mono text-[10px] uppercase tracking-tighter">Threat: High</span>
          </div>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-3 space-y-8">
            <div className="relative group mx-auto lg:mx-0 w-72 h-72 lg:w-full lg:h-auto">
              <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-cyber z-20"></div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-cyber z-20"></div>
              <div className="absolute inset-0 w-full h-[2px] bg-cyber/60 z-30 shadow-[0_0_15px_#4ade80] animate-scan opacity-0 group-hover:opacity-100"></div>
              <div className="relative border border-cyber/20 p-2 bg-zinc-900/50 overflow-hidden">
                <img src={ProfilImg} alt="Profile" className="w-full grayscale contrast-110 group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" />
                <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md border border-cyber/20 p-2 z-20 text-center">
                  <p className="text-[9px] font-mono text-cyber animate-pulse tracking-widest uppercase">Biometric_Match: Stable</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-12">
            <div>
              <SectionTitle icon={Database} title="Personnel_Data" duration={1800}/>
              <ul className="space-y-4 font-mono px-2">
                {personalData.map((item, i) => (
                  <li key={i} className="flex justify-between border-b border-white/5 pb-2 group/item relative z-10">
                    <span className="text-xs text-white/40 uppercase group-hover/item:text-cyber transition-colors">{item.label}</span>
                    <span className={`text-xs uppercase ${item.color}`}>{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <SectionTitle icon={Cpu} title="Soft_Skills_Processing" duration={1000}/>
              <div className="space-y-7 px-2">
                <SkillBar label="Esprit critique" progress={90} />
                <SkillBar label="Curiosité technique" progress={85} />
                <SkillBar label="Polyvalence" progress={80} />
                <SkillBar label="Communication" progress={75} />
              </div>
            </div>

            <div>
              <SectionTitle icon={MessageSquare} title="Language_Protocols" duration={500}/>
              <div className="grid grid-cols-2 gap-4 px-2">
                {languages.map((l) => (
                  <div key={l.id} className="p-3 border border-white/5 bg-zinc-900/10 hover:border-cyber/40 transition-all group">
                    <div className="flex justify-between text-[10px] font-mono mb-2">
                      <span className="text-zinc-500 group-hover:text-white">{l.lang}</span>
                      <span className="text-cyber">{l.code}</span>
                    </div>
                    <div className="h-[1px] w-full bg-white/5">
                      <div className="h-full bg-cyber/40 group-hover:bg-cyber transition-all duration-1000" style={{ width: `${l.progress}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-8">
            <div className="bg-zinc-900/20 border border-white/5 p-4">
              <div className="flex items-center gap-2 mb-4">
                <Shield size={12} className="text-cyber/60" />
                <p className="text-[10px] text-zinc-400 font-mono uppercase tracking-widest">SOC_Toolkit_v2.0</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {socTools.map((tool) => (
                  <span key={tool} className="text-[9px] font-mono border border-cyber/20 px-2 py-1 text-zinc-500 hover:border-cyber hover:text-cyber transition-all cursor-crosshair">{tool}</span>
                ))}
              </div>
            </div>

            <div className="bg-black border border-cyber/30 rounded-sm overflow-hidden flex flex-col shadow-2xl shadow-cyber/5">
              <div className="bg-cyber/10 px-3 py-2 flex justify-between items-center border-b border-cyber/20">
                <div className="flex items-center gap-2">
                  <Terminal size={12} className="text-cyber" />
                  <span className="text-[9px] font-mono text-cyber uppercase font-bold tracking-wider">Live_Ops_Console</span>
                </div>
                <div className="text-[8px] text-red-500 animate-pulse font-bold">REC ●</div>
              </div>
              <div className="p-4 h-36 overflow-y-auto space-y-3 font-mono scrollbar-hide text-[9px]">
                {monitoringLogs.map((log) => (
                  <div key={log.id} className="flex justify-between border-l border-white/10 pl-3 py-0.5 hover:bg-white/5 transition-colors">
                    <span className="text-zinc-500 uppercase">{log.msg}</span>
                    <span className={`${log.color} font-bold`}>{log.level}</span>
                  </div>
                ))}
                <div className="text-blue-400/40 italic pt-2 border-t border-white/5">{">"} WAITING_FOR_INPUT...</div>
              </div>
            </div>

            <div>
              {/* TITRE SANS EFFET DE CHARGEMENT */}
              <SectionTitle icon={User} title="Interest_Nodes" hasAnimate={false} />
              <div className="grid grid-cols-4 gap-2">
                {interests.map((item) => (
                  <InterestCell key={item.id} {...item} />
                ))}
              </div>
            </div>

            {/* BOUTON DOWNLOAD : EFFET CHARGEMENT SUPPRIMÉ, FLICKER CONSERVÉ */}
            <a
              href="/mon-cv.pdf"
              className="w-full relative px-6 py-4 bg-black text-cyber border border-cyber font-mono text-[10px] uppercase tracking-[0.5em] hover:bg-cyber/10 hover:shadow-[0_0_15px_#4ade8033] hover:animate-flicker transition-all text-center flex items-center justify-center overflow-hidden"
            >
              <span className="relative z-10 font-bold">
                Download_CV.exe
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;