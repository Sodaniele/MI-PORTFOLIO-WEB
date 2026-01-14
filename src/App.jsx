import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Github, Mail, Code2, Database, Layout, Server, ArrowUpRight } from 'lucide-react';
import { misProyectos } from './data';

function App() {
  const skills = [
    { name: "Frontend", items: ["React", "Tailwind CSS", "JavaScript"], icon: <Layout className="w-5 h-5" /> },
    { name: "Backend", items: ["PHP", "Node.js", "Java"], icon: <Server className="w-5 h-5" /> },
    { name: "Sistemas", items: ["MySQL", "MongoDB", "Git"], icon: <Database className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E5E5E5] font-sans selection:bg-[#FF007A] selection:text-white">
      
      {/* --- NAV MINIMALISTA --- */}
      <nav className="max-w-7xl mx-auto p-6 md:p-10 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="text-xl font-black tracking-tighter uppercase">Sofía Daniele<span className="text-[#FF007A]">.</span></motion.div>
        <div className="flex gap-8 text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold">
          <a href="https://www.instagram.com/proyectoveinticinco?igsh=dWdxdGlwNW14dDdj&utm_source=qr" target="_blank" className="hover:text-[#FF007A] transition-colors">Instagram</a>
          <a href="https://github.com/Sodaniele" target="_blank" className="hover:text-[#FF007A] transition-colors">Github</a>
        </div>
      </nav>

      {/* --- HERO / SOBRE MÍ --- */}
      <header className="max-w-7xl mx-auto px-6 md:px-10 py-20">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-[14vw] md:text-[9vw] font-black uppercase leading-[0.8] tracking-tighter mb-16">
            Creative <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF007A] to-[#FF4D94] italic">Developer</span>
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-[#FF007A]"></div>
                <span className="text-[#FF007A] font-mono text-xs uppercase tracking-widest font-bold">Profile</span>
              </div>
              <p className="text-xl md:text-3xl font-light leading-tight text-slate-300">
                Como desarrolladora web en formación y apasionada del diseño visual, fusiono la estética con el rendimiento técnico. Mi paso por el ciclo de DAW me ha permitido transformar conceptos creativos en aplicaciones web reales y eficientes.
              </p>
            </div>
            <div className="flex md:justify-end items-end">
              <p className="text-white/20 uppercase text-[10px] tracking-[0.5em] leading-loose text-right">
                Base en España<br />Estudiante DAW<br />Fullstack 
              </p>
            </div>
          </div>
        </motion.div>
      </header>

      {/* --- HABILIDADES (DISEÑO GRID INDUSTRIAL) --- */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 border border-white/10">
          {skills.map((skill, index) => (
            <motion.div 
              key={skill.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="p-10 border-b md:border-b-0 md:border-r border-white/10 hover:bg-[#FF007A] hover:text-white transition-all duration-500 group"
            >
              <div className="mb-8 group-hover:text-white transition-colors">{skill.icon}</div>
              <h3 className="text-2xl font-black uppercase mb-6 tracking-tighter">{skill.name}</h3>
              <div className="flex flex-col gap-3">
                {skill.items.map(item => (
                  <span key={item} className="text-xs uppercase tracking-widest font-bold opacity-50 group-hover:opacity-100">{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- TRAYECTORIA --- */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-24">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <h2 className="text-4xl font-black uppercase tracking-tighter">Trayectoria</h2>
          <div className="max-w-xl border-t border-[#FF007A] pt-8">
            <span className="text-[#FF007A] font-mono text-xs font-bold">2024 / PRESENTE</span>
            <h3 className="text-2xl font-bold mt-4">Grado Superior en DAW</h3>
            <p className="text-slate-400 mt-4 text-lg">Especializándome en tecnologías modernas de frontend (React) y backend sólido con PHP, Java y SQL.</p>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN DE PROYECTOS --- */}
<main className="max-w-7xl mx-auto px-6 md:px-10 py-24">
  <div className="flex justify-between items-end mb-16">
    <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter italic text-white">Work</h2>
    <div className="text-right hidden md:block">
      <p className="text-[#FF007A] font-mono text-xs mb-2 font-bold">SELECTED WORKS</p>
      <p className="text-white/20 text-xs tracking-widest italic font-serif font-bold">Portfolio V.1</p>
    </div>
  </div>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
    {misProyectos.map((proyecto) => (
      <motion.div 
        key={proyecto.id}
        whileHover={{ scale: 0.98 }}
        className="group bg-[#111] border border-white/5 hover:border-[#FF007A]/50 transition-all overflow-hidden"
      >
        {/* El link envuelve TODO el proyecto */}
        <a 
          href={proyecto.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="block w-full h-full cursor-pointer"
        >
          <div className="aspect-video relative overflow-hidden bg-[#1A1A1A]">
            {/* Imagen del proyecto */}
            <img 
              src={proyecto.imagen} 
              alt={proyecto.titulo} 
              className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              onError={(e) => { e.target.style.display = 'none'; }} 
            />
            
            {/* Superposición estética si falla la imagen */}
            <div className="absolute inset-0 flex items-center justify-center -z-10">
              <span className="text-white/5 font-black text-8xl uppercase tracking-tighter">
                {proyecto.titulo.slice(0,2)}
              </span>
            </div>

            <div className="absolute top-6 right-6 bg-[#FF007A] p-2 opacity-0 group-hover:opacity-100 transition-all transform group-hover:rotate-12">
              <ArrowUpRight className="text-white" size={24} strokeWidth={3} />
            </div>
          </div>
          
          <div className="p-8">
            <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 group-hover:text-[#FF007A] transition-colors leading-none">
              {proyecto.titulo}
            </h3>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed font-medium">
              {proyecto.descripcion}
            </p>
            <div className="flex gap-4 flex-wrap">
              {proyecto.tecnologias.map(t => (
                <span key={t} className="text-[10px] font-mono uppercase text-[#FF007A]/70 tracking-[0.2em] font-black italic">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </a>
      </motion.div>
    ))}
  </div>
</main>

      {/* --- CONTACTO --- */}
      <section className="bg-[#FF007A] text-white px-6 md:px-10 py-32">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <motion.h2 
            initial={{ scale: 0.8 }} whileInView={{ scale: 1 }}
            className="text-[12vw] md:text-[8vw] font-black uppercase leading-none tracking-tighter mb-12"
          >
            LET'S <br /> CONNECT
          </motion.h2>
          <a 
            href="mailto:sofiadaniele@hotmail.com" 
            className="text-2xl md:text-5xl font-black uppercase tracking-tighter border-b-8 border-white hover:opacity-80 transition-all flex items-center gap-4"
          >
            Sofiadaniele@hotmail.com <ArrowUpRight size={48} strokeWidth={3} />
          </a>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="max-w-7xl mx-auto p-10 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-[0.3em] font-bold text-white/30 uppercase">
        <p>© {new Date().getFullYear()} Hecho con amor y con un café por Sofía Daniele</p>
        <p></p>
      </footer>
    </div>
  );
}

export default App;