import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Github, ArrowUpRight, Layout, Server, Database, X, CheckCircle2, Award, Zap, PenTool, Code, Rocket, ChevronUp, Camera, Globe, Heart, Sparkles } from 'lucide-react';
import { misProyectos } from './data';

const Marquee = ({ text }) => {
  return (
    <div className="bg-[#FF007A] py-4 overflow-hidden whitespace-nowrap border-y-2 border-black flex relative z-40">
      <motion.div 
        animate={{ x: [0, -1000] }} 
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="flex"
      >
        <span className="text-black text-2xl md:text-4xl font-black uppercase tracking-tighter">
          {text} {text} {text} {text} {text}
        </span>
      </motion.div>
    </div>
  );
};

function App() {
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const workflow = [
    { step: "01", title: "Estrategia", icon: <Zap size={20} />, desc: "Analizo objetivos para crear una base sólida." },
    { step: "02", title: "Diseño", icon: <PenTool size={20} />, desc: "Prototipado visual enfocado en la experiencia de usuario." },
    { step: "03", title: "Código", icon: <Code size={20} />, desc: "Desarrollo limpio con tecnologías modernas." },
    { step: "04", title: "Lanzamiento", icon: <Rocket size={20} />, desc: "Optimización y despliegue del proyecto." }
  ];

  const services = [
    { title: "Desarrollo Frontend", desc: "Aplicaciones interactivas con React y Tailwind CSS." },
    { title: "Lógica Backend", desc: "Servidores robustos con PHP y Java, gestionando SQL." },
    { title: "Diseño de Interfaz", desc: "Estética brutalista enfocada en la facilidad de uso." },
    { title: "Diseño Gráfico", desc: "Menús, cartas, flyers y material listo para impresión." }
  ];

  const certifications = [
    { name: "IA - Intermediate", issuer: "U. Europea de Madrid" },
    { name: "Intro to Data Science", issuer: "Cisco Academy" },
    { name: "Domina la IA con Gemini", issuer: "Santander Open Academy" },
    { name: "Marketing Digital", issuer: "Santander Open Academy" },
    { name: "Automatización con n8n", issuer: "Udemy" }
  ];

  const skills = [
    { name: "Frontend", items: ["React", "JavaScript", "CSS", "HTML"], icon: <Layout className="w-5 h-5" /> },
    { name: "Backend", items: ["PHP", "Node.js", "Java", "Python"], icon: <Server className="w-5 h-5" /> },
    { name: "Sistemas", items: ["MySQL", "MongoDB", "Git"], icon: <Database className="w-5 h-5" /> }
  ];

  const mailtoLink = `mailto:sofiadaniele@hotmail.com?subject=Interés en tus servicios&body=HOLA ME GUSTARIA HABLAR SOBRE TUS SERVICIOS%0D%0A%0D%0ADATOS DE CONTACTO:%0D%0ANOMBRE:%0D%0AEMPRESA:%0D%0ANUMERO DE TELEFONO:`;

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E5E5E5] font-sans selection:bg-white selection:text-[#FF007A] overflow-x-hidden relative">
      
      {/* EFECTO DE RUIDO/TEXTURA */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* BOTÓN IR ARRIBA */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-10 right-10 z-[60] bg-[#FF007A] text-black p-4 border-2 border-black hover:bg-white transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            <ChevronUp size={24} strokeWidth={3} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* NAV */}
      <nav className="max-w-7xl mx-auto p-6 md:p-10 flex justify-between items-center relative z-50">
        <div className="text-xl font-black uppercase tracking-tighter">
          Sofía Daniele<span className="text-[#FF007A]">.</span>
        </div>
        <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em]">
          <a href="https://github.com/Sodaniele" target="_blank" rel="noreferrer" className="hover:text-[#FF007A] transition-colors">Github</a>
          <a href="https://www.instagram.com/proyectoveinticinco" target="_blank" rel="noreferrer" className="hover:text-[#FF007A] transition-colors">Instagram</a>
        </div>
      </nav>

      {/* HERO */}
      <header className="max-w-7xl mx-auto px-6 md:px-10 py-20 relative z-10 text-center md:text-left">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-[14vw] md:text-[9vw] font-black uppercase leading-[0.8] tracking-tighter mb-16">
            Creative <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF007A] to-[#FF4D94] italic">Developer</span>
          </h1>
        </motion.div>
      </header>

      <Marquee text=" • DISPONIBLE • ESTUDIANTE DAW • DISEÑO UI • FULLSTACK • CREATIVIDAD • " />

      {/* SECCIÓN ABOUT ME */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-32 border-b border-white/5 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4 text-[#FF007A] font-black uppercase tracking-widest text-sm italic">/ About Me</div>
          <div className="md:col-span-8 space-y-8">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
              Transformando ideas en <span className="text-[#FF007A]">experiencias</span> digitales.
            </h2>
            <p className="text-xl text-slate-300 font-light leading-relaxed">
              Hola, soy Sofía. Actualmente <span className="text-white font-bold italic underline decoration-[#FF007A]">Desarrolladora de Aplicaciones Web</span>. 
              Mi enfoque une la precisión técnica del código con una visión creativa. Me apasiona resolver problemas complejos y diseñar interfaces que no solo funcionen, sino que cuenten una historia visual impactante.
            </p>
          </div>
        </div>
      </section>

      {/* METODOLOGÍA */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-32 relative z-10">
        <h2 className="text-4xl font-black uppercase tracking-tighter mb-20 flex items-center gap-4">
           <span className="text-[#FF007A]">01/</span> Proceso
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {workflow.map((item, index) => (
            <div key={index} className="p-8 bg-[#111] border border-white/5 hover:border-[#FF007A]/30 transition-all">
              <span className="text-[10px] font-black text-[#FF007A] mb-4 block">{item.step}</span>
              <h3 className="text-xl font-black uppercase mb-4">{item.title}</h3>
              <p className="text-sm text-slate-500 font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICIOS + CREDENTIALS */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-32 border-t border-white/5 grid grid-cols-1 lg:grid-cols-12 gap-20 relative z-10">
        <div className="lg:col-span-8">
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-12 flex items-center gap-4">
             <span className="text-[#FF007A]">02/</span> Servicios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
            {services.map((service, index) => (
              <div key={index} className="space-y-3">
                <h3 className="text-[#FF007A] font-bold uppercase tracking-widest text-sm flex items-center gap-2">
                  <CheckCircle2 size={16} /> {service.title}
                </h3>
                <p className="text-slate-400 leading-relaxed font-light text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-4 bg-[#0F0F0F] p-8 border border-white/5">
          <h2 className="text-xl font-black uppercase tracking-tighter mb-8 text-[#FF007A]">Credentials</h2>
          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <div key={index} className="border-b border-white/5 pb-4 last:border-0">
                <h4 className="text-[11px] font-black uppercase text-white leading-tight">{cert.name}</h4>
                <p className="text-[9px] uppercase tracking-widest text-slate-500 mt-2 font-bold">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MÁS ALLÁ DEL CÓDIGO (MODIFICADO) */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-32 border-t border-white/5 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-8">
               <span className="text-[#FF007A]">03/</span> Inspiración
            </h2>
            <p className="text-slate-400 font-light leading-relaxed mb-6">
              Mi creatividad no termina en la terminal. Se alimenta del mundo real para volver al código con nuevas ideas. Entiendo la programación como una forma de <span className="text-white font-bold">arte funcional</span>, donde cada línea tiene el propósito de crear algo único.
            </p>
            <div className="flex gap-4">
               <Sparkles className="text-[#FF007A] animate-pulse" />
               <span className="text-[10px] uppercase font-black tracking-widest">Constant curiosity</span>
            </div>
          </div>
          <div className="space-y-4">
             <div className="p-6 bg-[#111] border-l-2 border-[#FF007A] flex gap-4 items-center uppercase text-[11px] font-bold">
                <Camera size={18} className="text-[#FF007A]" /> La fotografía como captura de detalles.
             </div>
             <div className="p-6 bg-[#111] border-l-2 border-[#FF007A] flex gap-4 items-center uppercase text-[11px] font-bold">
                <Globe size={18} className="text-[#FF007A]" /> Viajar para expandir la visión creativa.
             </div>
             <div className="p-6 bg-[#111] border-l-2 border-[#FF007A] flex gap-4 items-center uppercase text-[11px] font-bold">
                <Code size={18} className="text-[#FF007A]" /> Crear y solucionar a través del código.
             </div>
          </div>
        </div>
      </section>

      {/* STACK */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-32 border-t border-white/5 relative z-10">
        <h2 className="text-4xl font-black uppercase tracking-tighter mb-12 flex items-center gap-4">
             <span className="text-[#FF007A]">04/</span> Stack
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 border border-white/10">
          {skills.map((skill) => (
            <div key={skill.name} className="p-10 border-b md:border-b-0 md:border-r border-white/10 hover:bg-[#FF007A] transition-all duration-500 group">
              <div className="mb-8 group-hover:text-white text-[#FF007A] transition-colors">{skill.icon}</div>
              <h3 className="text-2xl font-black uppercase mb-6 tracking-tighter">{skill.name}</h3>
              <div className="flex flex-col gap-3 text-[10px] font-bold uppercase tracking-[0.2em] opacity-50 group-hover:opacity-100">
                {skill.items.map(item => <span key={item}>{item}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROYECTOS */}
      <main className="max-w-7xl mx-auto px-6 md:px-10 py-32 border-t border-white/5 relative z-10">
        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter italic mb-16">Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {misProyectos.map((proyecto) => (
            <motion.div key={proyecto.id} whileHover={{ y: -10 }} onClick={() => setProyectoSeleccionado(proyecto)} className="group cursor-pointer bg-[#111] border border-white/5 hover:border-[#FF007A]/50 transition-all overflow-hidden flex flex-col shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)]">
              <div className="aspect-[4/3] relative overflow-hidden bg-[#1A1A1A]">
                <img src={proyecto.imagen} alt={proyecto.titulo} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-black uppercase group-hover:text-[#FF007A] transition-colors tracking-tight">{proyecto.titulo}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* CONTACTO */}
      <section className="bg-[#FF007A] text-black px-6 md:px-10 py-32 relative z-40">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <h2 className="text-[12vw] md:text-[8vw] font-black uppercase leading-none tracking-tighter mb-12 italic">LET'S <br /> CONNECT</h2>
          <a href={mailtoLink} className="group text-xl md:text-5xl font-black uppercase tracking-tighter border-b-4 md:border-b-8 border-black hover:text-white hover:border-white transition-all flex items-center gap-4 pb-2 text-center">
            Sofiadaniele@hotmail.com <ArrowUpRight className="w-8 h-8 md:w-12 md:h-12 group-hover:rotate-45 transition-transform" />
          </a>
        </div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {proyectoSeleccionado && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setProyectoSeleccionado(null)} className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out">
            <button className="absolute top-8 right-8 text-white hover:text-[#FF007A] transition-colors"><X size={40} /></button>
            <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }} onClick={(e) => e.stopPropagation()} className="max-w-5xl w-full">
              <img src={proyectoSeleccionado.imagen} alt="" className="w-full h-auto max-h-[70vh] object-contain shadow-2xl" />
              <div className="mt-8 text-center bg-[#0A0A0A] p-8 border border-white/10">
                <h3 className="text-[#FF007A] text-4xl font-black uppercase italic leading-none">{proyectoSeleccionado.titulo}</h3>
                <p className="text-slate-400 mt-4 max-w-lg mx-auto font-light leading-relaxed">{proyectoSeleccionado.descripcion}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="p-10 text-center text-[9px] tracking-[0.4em] font-bold text-white/20 uppercase relative z-10 border-t border-white/5">
        © {new Date().getFullYear()} Sofía Daniele • Estudiante DAW
      </footer>
    </div>
  );
}

export default App;