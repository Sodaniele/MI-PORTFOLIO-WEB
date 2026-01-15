import React from 'react';
import './Servicios.css';

const Servicios = () => {
  const packs = [
    {
      titulo: "Identidad Social",
      precio: "60 - 80 USD",
      descripcion: "Ideal para renovar tu imagen en redes.",
      caracteristicas: [
        "Menú/Carta Digital QR",
        "6 Flyers para Instagram",
        "10 Plantillas de Stories"
      ],
      destacado: false,
      link: "https://wa.me/TUNUMERO"
    },
    {
      titulo: "Web Pro + IA",
      precio: "150 - 250 USD",
      descripcion: "Tu negocio abierto 24/7 con IA.",
      caracteristicas: [
        "Web Diseño a Medida",
        "Asistente Virtual (IA)",
        "Dominio y Hosting (1 año)",
        "Optimizado para Móvil"
      ],
      destacado: true,
      link: "https://wa.me/TUNUMERO"
    },
    {
      titulo: "Mantenimiento",
      precio: "20 - 30 USD/mes",
      descripcion: "Tu tranquilidad técnica garantizada.",
      caracteristicas: [
        "Actualización de Precios/Fotos",
        "Copias de Seguridad",
        "Soporte Prioritario"
      ],
      destacado: false,
      link: "https://wa.me/TUNUMERO"
    }
  ];

  return (
    <section className="pricing-section">
      <h2 className="section-title">Inversiones que hacen crecer tu negocio</h2>
      <p className="section-subtitle">Precios transparentes para emprendedores de San Nicolás.</p>
      
      <div className="pricing-container">
        {packs.map((pack, index) => (
          <div key={index} className={`card ${pack.destacado ? 'popular' : ''}`}>
            {pack.destacado && <div className="badge">Más Vendido</div>}
            <h3>{pack.titulo}</h3>
            <div className="price">{pack.precio}</div>
            <p className="card-desc">{pack.descripcion}</p>
            <ul>
              {pack.caracteristicas.map((item, i) => (
                <li key={i}>✅ {item}</li>
              ))}
            </ul>
            <a href={pack.link} className={`btn ${pack.destacado ? 'btn-primary' : ''}`}>
              {pack.destacado ? 'Empezar Proyecto' : 'Lo quiero'}
            </a>
          </div>
        ))}
      </div>
      <p className="disclaimer">*Pagos en pesos argentinos al valor Dólar Blue del día.</p>
    </section>
  );
};

export default Servicios;