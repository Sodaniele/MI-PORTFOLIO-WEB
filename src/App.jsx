import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowUpRight, MoveRight, ArrowDown, Github, Instagram, Linkedin, Mail, MapPin 
} from 'lucide-react';
import { misProyectos } from './data';

// --- CURSOR (Invertido para fondo claro - Desactivado en móvil) ---
const CustomCursor = () => {
  const cursorRef = useRef(null);
  
  useEffect(() => {
    // Detectar si es dispositivo táctil para no renderizar cursor custom
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  // Ocultar en móvil mediante CSS (hidden md:block)
  return (
    <div 
        ref={cursorRef} 
        className="hidden md:block fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[100] mix-blend-difference -mt-1.5 -ml-1.5"
    />
  );
};

// --- DATA SERVICIOS ---
const services = [
  { title: "Frontend Architecture", desc: "React, Next.js, Tailwind CSS" },
  { title: "Backend Architecture", desc: "Node.js, Python, PHP, MySQL, MongoDB" },
  { title: "Creative Development", desc: "Custom website design" },
  { title: "UI/UX Design Systems", desc: "Figma, Tokens, Accessibility" },
  { title: "Automation", desc: "N8N, Agentes IA" },
];

// --- RUEDA VERTICAL (Responsive) ---
const ExpertiseWheel = () => {
  return (
    <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden bg-[#262626] flex items-center justify-center rounded-3xl">
       <div className="absolute top-0 left-0 w-full h-24 md:h-32 bg-gradient-to-b from-[#262626] to-transparent z-20 pointer-events-none"></div>
       <div className="absolute bottom-0 left-0 w-full h-24 md:h-32 bg-gradient-to-t from-[#262626] to-transparent z-20 pointer-events-none"></div>

       <div className="flex flex-col items-center group cursor-default z-10 w-full px-4">
          <div className="animate-wheel flex flex-col items-center gap-12 md:gap-16 group-hover:[animation-play-state:paused]">
             {[...services, ...services, ...services, ...services].map((item, index) => (
                <div key={index} className="text-center opacity-40 hover:opacity-100 transition-opacity duration-300 transform hover:scale-105 md:hover:scale-110">
                   <h3 className="text-3xl md:text-6xl font-light text-[#DBD4D3] mb-2 tracking-tight leading-tight">
                      {item.title}
                   </h3>
                   <p className="text-xs md:text-sm font-mono text-[#DBD4D3]/60 uppercase tracking-widest">
                      {item.desc}
                   </p>
                </div>
             ))}
          </div>
       </div>
       <style>{`
         @keyframes wheelScroll {
           0% { transform: translateY(0); }
           100% { transform: translateY(-50%); } 
         }
         .animate-wheel {
           animation: wheelScroll 40s linear infinite;
         }
       `}</style>
    </div>
  );
};

function App() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  const emailSubject = "Consulta sobre tus servicios";
  const emailBody = `Hola! Estoy buscando informacion sobre tus servicios, me gustaria contactar una cita o una call por teams, te dejo mi contact:

nombre:
telefono:
correo:
idea:`;

  const mailtoLink = `mailto:sofiadaniele@hotmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  return (
    <div ref={ref} className="min-h-screen bg-[#DBD4D3] text-[#262626] font-sans selection:bg-[#262626] selection:text-[#DBD4D3] cursor-default md:cursor-none overflow-x-hidden">
      
      <CustomCursor />

      {/* RUIDO */}
      <div className="fixed inset-0 z-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-8 md:py-8 flex justify-between items-start backdrop-blur-sm md:backdrop-blur-none bg-[#DBD4D3]/80 md:bg-transparent">
        <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#262626]">
          proyecto 25<span className="text-[#262626]/50"> — Sofia Daniele</span>
        </div>
        <div className="flex flex-col items-end gap-1 md:gap-2 text-[10px] uppercase tracking-widest font-mono text-[#262626]/70">
            <a href="#work" className="hover:text-[#262626] font-bold transition-all p-1">Selected Work</a>
            <a href="#services" className="hover:text-[#262626] font-bold transition-all p-1">Services</a>
            <a href={mailtoLink} className="hover:text-[#262626] font-bold transition-all p-1">Contact</a>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="relative min-h-screen flex flex-col justify-center px-6 md:px-20 max-w-[1600px] mx-auto pt-24 md:pt-20 pb-12">
        <div className="relative z-10 w-full">
            {/* Línea divisoria */}
            <motion.div 
                initial={{ width: 0 }} 
                animate={{ width: "100px" }} 
                transition={{ duration: 1, delay: 0.5 }}
                className="h-px bg-[#262626] mb-8"
            />
            
            {/* TÍTULO PRINCIPAL */}
            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-12 mb-12">
                <motion.h1 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-[13vw] md:text-[8vw] leading-[0.9] md:leading-none tracking-tight font-light text-[#262626]"
                >
                    Creative
                </motion.h1>
                
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="hidden md:flex items-center justify-center w-16 h-16 rounded-full border border-[#262626]/30 text-[#262626]"
                >
                    <MoveRight size={24} />
                </motion.div>

                <motion.h1 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-[13vw] md:text-[8vw] leading-[0.9] md:leading-none tracking-tight font-light text-[#262626]/50 italic"
                >
                   Developer
                </motion.h1>
            </div>

            {/* BIO / DESCRIPCIÓN CON FOTO INTEGRADA */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-l-2 border-[#262626]/20 pl-6 md:pl-0 md:border-l-0"
            >
                {/* BLOQUE FOTO + TEXTO */}
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center md:ml-auto md:mr-12 max-w-4xl">
                    
                    {/* --- FOTO MAS GRANDE --- */}
                    <div className="w-32 h-32 md:w-48 md:h-48 shrink-0 rounded-2xl overflow-hidden border border-[#262626]/10 shadow-lg">
                        <img 
                            src="/sofia.png" 
                            alt="Sofia Daniele" 
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
                        />
                    </div>
                    {/* ------------------------- */}

                    <div className="max-w-lg">
                        <p className="text-lg md:text-xl font-light leading-relaxed text-[#262626]">
                           Fusionando la lógica del código con la sensibilidad del diseño. Construyo experiencias digitales que no solo funcionan, sino que se <span className="italic font-medium">sienten.</span>
                        </p>
                        <p className="mt-4 text-xs md:text-sm font-mono text-[#262626]/60 uppercase tracking-wider leading-relaxed">
                           Front End Developer | React.js Specialist | JavaScript (ES6+) | TypeScript | Tailwind CSS | Responsive Design | UI/UX
                        </p>
                    </div>
                </div>

                {/* Badge Status */}
                <div className="inline-flex items-center gap-3 border border-[#262626]/20 px-4 py-2 rounded-full bg-[#262626]/5 backdrop-blur-sm self-start md:self-end">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#262626] opacity-30"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#262626]"></span>
                    </span>
                    <span className="text-[10px] uppercase tracking-widest font-mono text-[#262626]">
                        Open to work • Madrid / Remoto
                    </span>
                </div>
            </motion.div>

        </div>

        <div className="absolute bottom-6 left-6 md:bottom-12 md:left-20 flex items-center gap-4 text-[#262626]/60">
            <ArrowDown size={20} className="animate-bounce" />
            <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        </div>
      </header>

      {/* --- WORK SECTION --- */}
      <section id="work" className="py-20 md:py-32 px-6 md:px-20 max-w-[1600px] mx-auto z-20 relative border-t border-[#262626]/10">
        
        {/* PARTE 1: PROYECTO DESTACADO (AccesoBarrio) */}
        <div className="mb-24 md:mb-32">
            <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#262626] animate-pulse"></span>
                <span className="text-xs font-mono text-[#262626]/60 uppercase tracking-widest">
                    (01) — Featured Project
                </span>
            </div>

            <motion.a 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                href="https://accesobarrio.onrender.com/"
                target="_blank" 
                rel="noreferrer"
                className="group block relative w-full border border-[#262626]/20 hover:border-[#262626] transition-all duration-500 bg-[#E5E0DF] p-6 md:p-12 overflow-hidden"
            >
                <div className="relative z-10 flex flex-col md:flex-row justify-between gap-8 md:gap-12">
                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                           <MapPin className="text-[#262626]" size={20}/>
                           <span className="text-xs font-mono uppercase tracking-widest text-[#262626]/60">Social Impact Web App</span>
                        </div>
                        
                        <h3 className="text-4xl md:text-8xl font-light text-[#262626] mb-6 md:mb-8 group-hover:underline decoration-1 underline-offset-8 transition-all">
                            AccesoBarrio
                        </h3>
                        
                        <p className="text-base md:text-xl text-[#262626]/80 font-light leading-relaxed max-w-2xl mb-8 md:mb-10">
                            Una plataforma con geolocalización en tiempo real para facilitar la movilidad urbana. 
                            Permite a personas con discapacidad encontrar rutas accesibles y barreras arquitectónicas en su entorno.
                        </p>
                        
                        <div className="flex flex-wrap gap-2 md:gap-3">
                            {['React', 'Leaflet Maps', 'Geolocation API', 'Node.js', 'Accessibility'].map(tag => (
                                <span key={tag} className="px-3 py-1 border border-[#262626]/20 rounded-full text-[10px] md:text-xs font-mono uppercase text-[#262626]/70">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-row md:flex-col justify-between items-end">
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#262626] text-[#DBD4D3] flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                             <ArrowUpRight size={32} md:size={40} />
                        </div>
                        <span className="block text-xs font-mono uppercase tracking-widest text-[#262626]/40 mt-auto">
                            Visit Live Site
                        </span>
                    </div>
                </div>
            </motion.a>
        </div>

        {/* PARTE 2: RESTO DE PROYECTOS (LISTA) */}
        <div className="flex justify-between items-baseline mb-12 border-b border-[#262626]/10 pb-4">
            <h2 className="text-sm font-mono text-[#262626]/60 uppercase tracking-widest">(02) — More Selected Work</h2>
        </div>

        <div className="flex flex-col">
           {misProyectos && misProyectos.map((proyecto, index) => (
             <motion.div 
                key={proyecto.id || index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative border-b border-[#262626]/10 py-10 md:py-12 flex flex-col md:flex-row justify-between items-baseline md:items-center cursor-pointer transition-colors hover:border-[#262626]/40"
             >
                <div className="relative z-10 w-full md:w-1/2">
                    <h3 className="text-2xl md:text-4xl font-light text-[#262626] group-hover:translate-x-4 transition-transform duration-300">
                        {proyecto.titulo}
                    </h3>
                    <p className="mt-2 text-xs md:text-sm text-[#262626]/60 font-mono opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 transform translate-y-0 md:translate-y-2 md:group-hover:translate-y-0 pl-0 md:pl-4">
                        SEE PROJECT DETAILS
                    </p>
                </div>
                
                {/* Imagen Preview (Solo Desktop) */}
                <div className="hidden md:block w-48 h-32 opacity-0 group-hover:opacity-100 transition-all duration-500 absolute right-20 top-1/2 -translate-y-1/2 grayscale group-hover:grayscale-0 pointer-events-none rounded-lg overflow-hidden border border-[#262626]/10 shadow-xl">
                    <img src={proyecto.imagen} alt="" className="w-full h-full object-cover" />
                </div>
                
                <div className="mt-4 md:mt-0 p-3 border border-[#262626]/20 rounded-full text-[#262626] group-hover:bg-[#262626] group-hover:text-[#DBD4D3] transition-all self-end md:self-auto">
                    <ArrowUpRight size={18} />
                </div>
             </motion.div>
           ))}
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="py-20 z-20 relative border-t border-[#262626]/10">
        <div className="px-6 md:px-20 max-w-[1600px] mx-auto flex justify-between items-baseline mb-16">
            <h2 className="text-sm font-mono text-[#262626]/60 uppercase tracking-widest">(03) — Expertise</h2>
            <div className="hidden md:block text-[10px] font-mono text-[#262626]/60 uppercase">
                Hover to stop
            </div>
        </div>

        <div className="px-4 md:px-20 max-w-[1600px] mx-auto">
            <ExpertiseWheel />
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer id="contact" className="py-20 md:py-32 px-6 md:px-20 bg-[#262626] text-[#DBD4D3]">
         <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
            
            <div className="flex-1 w-full">
                <p className="text-[#DBD4D3]/60 font-mono text-sm mb-8 uppercase tracking-widest">¿Creamos algo único?</p>
                {/* --- AQUÍ ESTÁ EL LINK CON LA PLANTILLA PREDISEÑADA --- */}
                <a 
                    href={mailtoLink} 
                    className="text-[15vw] md:text-[6vw] leading-none font-light tracking-tight text-[#DBD4D3] hover:text-[#DBD4D3]/70 transition-colors block break-words"
                >
                    Hablemos.
                </a>
            </div>

            <div className="flex gap-4 flex-wrap">
                <a 
                  href="https://www.instagram.com/proyectoveinticinco" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-12 h-12 rounded-full border border-[#DBD4D3]/20 flex items-center justify-center text-[#DBD4D3] hover:bg-[#DBD4D3] hover:text-[#262626] transition-all duration-300 hover:scale-110"
                >
                    <Instagram size={20} />
                </a>
                
                <a 
                  href="https://github.com/Sodaniele" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-12 h-12 rounded-full border border-[#DBD4D3]/20 flex items-center justify-center text-[#DBD4D3] hover:bg-[#DBD4D3] hover:text-[#262626] transition-all duration-300 hover:scale-110"
                >
                    <Github size={20} />
                </a>
                
                <a 
                  href="https://linkedin.com/in/sodaniele" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-12 h-12 rounded-full border border-[#DBD4D3]/20 flex items-center justify-center text-[#DBD4D3] hover:bg-[#DBD4D3] hover:text-[#262626] transition-all duration-300 hover:scale-110"
                >
                    <Linkedin size={20} />
                </a>

                <a 
                  href={mailtoLink}
                  className="w-12 h-12 rounded-full border border-[#DBD4D3]/20 flex items-center justify-center text-[#DBD4D3] hover:bg-[#DBD4D3] hover:text-[#262626] transition-all duration-300 hover:scale-110"
                >
                    <Mail size={20} />
                </a>
            </div>
         </div>
         
         <div className="max-w-[1600px] mx-auto mt-20 pt-8 border-t border-[#DBD4D3]/10 flex flex-col md:flex-row gap-4 justify-between text-[10px] text-[#DBD4D3]/60 uppercase tracking-widest font-mono">
            <p>Madrid, Spain</p>
            <p>© 2025 PROYECTO 25.</p>
         </div>
      </footer>
    </div>
  );
}

export default App;