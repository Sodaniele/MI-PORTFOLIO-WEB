import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, RefreshCw, CheckCircle, Map, Clock, 
  Music, Palette, Globe, LayoutTemplate, Leaf, Euro, Smartphone
} from 'lucide-react';

const features = [
  { icon: <CheckCircle size={24}/>, title: "Confirmación (RSVP)", desc: "Los invitados confirman asistencia y restricciones alimentarias directamente desde el móvil." },
  { icon: <Map size={24}/>, title: "Mapa Interactivo", desc: "Integración con Google Maps para que nadie se pierda de camino a la ceremonia o banquete." },
  { icon: <Clock size={24}/>, title: "Cuenta Atrás", desc: "Un contador en vivo creando expectación hasta el momento exacto del gran día." },
  { icon: <Music size={24}/>, title: "Música de Fondo", desc: "La canción de los novios sonando mientras los invitados descubren los detalles." },
  { icon: <Palette size={24}/>, title: "Colores a Medida", desc: "Diseño 100% adaptado a la paleta de colores temática del evento." },
  { icon: <Globe size={24}/>, title: "Multi-Idioma", desc: "¿Invitados extranjeros? La invitación puede estar en cualquier idioma que necesites." },
  { icon: <LayoutTemplate size={24}/>, title: "Secciones Flexibles", desc: "Tú decides qué poner: mesa de regalos, código de vestimenta, hoteles recomendados..." },
  { icon: <RefreshCw size={24}/>, title: "Actualización en Vivo", desc: "¿Cambia un horario a última hora? Se actualiza al instante para todos sin reenviar nada." }
];

export default function Invitaciones() {
  
  // Hacer scroll al principio al cargar la página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const mailtoLink = `mailto:sofiadaniele@hotmail.com?subject=${encodeURIComponent("Me interesa una Invitación Digital")}&body=${encodeURIComponent("Hola Sofía,\n\nMe ha encantado el sistema de invitaciones interactivas. Me gustaría recibir más información para mi evento.\n\nFecha del evento:\nTipo de evento:\nTeléfono:")}`;

  return (
    <div className="min-h-screen bg-[#EAE8E4] text-[#262626] font-sans selection:bg-[#262626] selection:text-[#EAE8E4]">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-12 md:py-8 flex justify-between items-center backdrop-blur-md bg-[#EAE8E4]/80">
        <a href="/" className="flex items-center gap-3 hover:text-[#262626]/60 transition-colors">
            <ArrowLeft size={20} />
            <span className="text-xs font-bold uppercase tracking-[0.2em]">Volver al Portfolio</span>
        </a>
      </nav>

      {/* HERO SECTION */}
      <header className="pt-40 pb-20 px-6 md:px-20 max-w-[1200px] mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 border border-[#262626]/20 rounded-full bg-[#262626]/5">
                <span className="text-[10px] uppercase tracking-widest font-mono text-[#262626]">Servicio Exclusivo</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-light text-[#262626] mb-8 tracking-tight leading-tight">
                El fin de las invitaciones <br className="hidden md:block" />
                <span className="italic font-medium">de papel.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-[#262626]/70 font-light max-w-2xl mx-auto leading-relaxed">
                Una experiencia digital completa en el bolsillo de tus invitados. 
                Más ecológica, más económica y cien veces más funcional que la imprenta tradicional.
            </p>
        </motion.div>
      </header>

      {/* PRICING & BENEFIT COMPARISON */}
      <section className="py-20 px-6 md:px-20 max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
            
            {/* Tarjeta de Precio */}
            <motion.div 
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                className="w-full lg:w-1/3 bg-[#262626] text-[#EAE8E4] p-10 md:p-12 rounded-[2.5rem] shadow-2xl flex flex-col justify-between"
            >
                <div>
                    <h3 className="text-sm font-mono uppercase tracking-widest text-[#EAE8E4]/60 mb-6">Inversión Única</h3>
                    <div className="flex items-baseline gap-2 mb-4">
                        <span className="text-7xl font-light">150</span>
                        <span className="text-2xl">€</span>
                    </div>
                    <p className="text-[#EAE8E4]/80 font-light mb-10">Enlace funcional y permanente para enviar a tantos invitados como quieras. Sin costes ocultos ni límites.</p>
                </div>
                
                <a href={mailtoLink} className="block w-full text-center py-4 bg-[#EAE8E4] text-[#262626] rounded-full font-mono uppercase tracking-widest text-xs hover:scale-105 transition-transform duration-300">
                    Reservar Fecha
                </a>
            </motion.div>

            {/* Comparativa Beneficios */}
            <motion.div 
                initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                className="w-full lg:w-2/3 border border-[#262626]/20 rounded-[2.5rem] p-10 md:p-12 bg-[#F5F5F4]"
            >
                <h3 className="text-2xl font-light mb-10 text-[#262626]">¿Por qué elegir el formato digital?</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="flex flex-col gap-4">
                        <div className="w-12 h-12 rounded-full bg-[#262626]/10 flex items-center justify-center text-[#262626]">
                            <Euro size={24} />
                        </div>
                        <h4 className="text-lg font-medium">Ahorro radical</h4>
                        <p className="text-sm text-[#262626]/70 leading-relaxed">Las invitaciones de papel + envíos postales superan fácilmente los 400€. Con este sistema pagas una sola vez, sin importar si tienes 50 o 500 invitados.</p>
                    </div>
                    
                    <div className="flex flex-col gap-4">
                        <div className="w-12 h-12 rounded-full bg-[#262626]/10 flex items-center justify-center text-[#262626]">
                            <Smartphone size={24} />
                        </div>
                        <h4 className="text-lg font-medium">Cero pérdidas</h4>
                        <p className="text-sm text-[#262626]/70 leading-relaxed">Nadie olvida o pierde la invitación. La llevan siempre en su móvil (WhatsApp). Las confirmaciones llegan directamente a ti, sin perseguir a la gente.</p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="w-12 h-12 rounded-full bg-[#262626]/10 flex items-center justify-center text-[#262626]">
                            <Leaf size={24} />
                        </div>
                        <h4 className="text-lg font-medium">Sostenibilidad</h4>
                        <p className="text-sm text-[#262626]/70 leading-relaxed">Cero desperdicio de papel y tintas. Una opción moderna y respetuosa con el medio ambiente que refleja los valores de tu evento.</p>
                    </div>
                </div>
            </motion.div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="py-32 px-6 md:px-20 max-w-[1400px] mx-auto border-t border-[#262626]/10 mt-20">
        <div className="mb-20 text-center">
            <h2 className="text-sm font-mono text-[#262626]/60 uppercase tracking-widest mb-4">Funcionalidades</h2>
            <h3 className="text-4xl font-light text-[#262626]">Todo lo que tu evento necesita</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feat, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-8 border border-[#262626]/10 rounded-3xl hover:bg-[#262626]/5 transition-colors duration-300"
                >
                    <div className="text-[#262626] mb-6">{feat.icon}</div>
                    <h4 className="text-lg font-medium text-[#262626] mb-3">{feat.title}</h4>
                    <p className="text-sm text-[#262626]/60 leading-relaxed">{feat.desc}</p>
                </motion.div>
            ))}
        </div>
      </section>

      {/* CALL TO ACTION BOTTOM */}
      <footer className="py-32 px-6 bg-[#262626] text-[#EAE8E4] text-center rounded-t-[3rem] mt-20">
        <h2 className="text-4xl md:text-6xl font-light mb-8">¿Listo para modernizar tu evento?</h2>
        <p className="text-[#EAE8E4]/70 mb-12 max-w-xl mx-auto">Escríbeme contándome la fecha y tipo de evento. Diseñaremos algo único que tus invitados no dejarán de mirar.</p>
        <a 
            href={mailtoLink} 
            className="inline-block bg-[#EAE8E4] text-[#262626] px-10 py-5 rounded-full font-mono uppercase tracking-widest text-sm hover:scale-105 transition-transform duration-300"
        >
            Contactar ahora
        </a>
      </footer>

    </div>
  );
}