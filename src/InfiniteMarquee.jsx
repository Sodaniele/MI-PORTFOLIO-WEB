import React from 'react';
import { motion } from 'framer-motion';

const InfiniteMarquee = ({ items }) => {
  // Duplicamos los items para que el loop sea infinito y fluido
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className="relative w-full h-full overflow-hidden bg-[#0A0A0A] flex items-center">
      <motion.div
        className="flex flex-col gap-8 py-10"
        animate={{
          y: ["0%", "-50%"], // Se mueve hacia arriba
        }}
        transition={{
          duration: 20, // Velocidad del movimiento
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div key={index} className="flex flex-col items-center group cursor-pointer px-10">
            <div className="relative overflow-hidden border-2 border-white/5 group-hover:border-[#FF007A] transition-colors duration-500">
                <img 
                  src={item.imagen} 
                  alt={item.titulo} 
                  className="w-[300px] h-[200px] md:w-[450px] md:h-[300px] object-cover opacity-50 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
                />
            </div>
            <h3 className="text-[#FF007A] text-4xl md:text-6xl font-black uppercase mt-4 tracking-tighter italic opacity-80 group-hover:opacity-100 transition-all">
              {item.titulo}
            </h3>
          </div>
        ))}
      </motion.div>
      
      {/* Gradientes para suavizar la entrada y salida (arriba y abajo) */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
    </div>
  );
};

export default InfiniteMarquee;