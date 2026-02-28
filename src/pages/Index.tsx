import profilePhoto from "@/assets/profile-photo.png";

const sections = [
  {
    title: "Perfil Profesional",
    content: (
      <p>
        Estudiante del programa técnico laboral en plataformas tecnológicas y
        aplicaciones con conocimientos básicos en herramientas ofimáticas,
        administración y configuración de dispositivos corporativos y soporte
        básico al usuario. Me encuentro en formación continua con interés de
        desarrollarme profesionalmente, motivada por aprender, adquirir
        experiencia y aportar soluciones y estrategias que beneficien el entorno
        laboral.
      </p>
    ),
  },
  {
    title: "Habilidades",
    content: (
      <ul className="list-disc list-inside space-y-1">
        <li>Soporte técnico básico</li>
        <li>Herramientas ofimáticas</li>
        <li>Gestión de incidentes</li>
        <li>Administración y configuración de dispositivos móviles</li>
        <li>Documentación de procesos de incidencias</li>
      </ul>
    ),
  },
  {
    title: "Proyectos",
    content: (
      <ol className="list-decimal list-inside space-y-3">
        <li>
          <strong>Proyecto de Soporte Técnico Básico:</strong> Implementación de
          un sistema de ticketing para gestionar incidencias y solicitudes de
          soporte técnico, mejorando la eficiencia y la satisfacción del cliente.
        </li>
        <li>
          <strong>Proyecto de Herramientas Ofimáticas:</strong> Creación de una
          plantilla personalizada en Microsoft Excel para el seguimiento de
          tareas y proyectos, optimizando la organización y la productividad del
          equipo.
        </li>
        <li>
          <strong>Proyecto de Administración y Configuración de Dispositivos
          Móviles:</strong> Implementación de una política de seguridad para
          dispositivos móviles en una empresa, incluyendo configuración de
          contraseñas, actualizaciones regulares y gestión de aplicaciones,
          garantizando la protección de datos corporativos.
        </li>
      </ol>
    ),
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="py-10 text-center">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
          Técnico en Plataformas Tecnológicas y Aplicaciones
        </h1>
        <div className="w-40 h-40 mx-auto rounded-full border-4 border-primary overflow-hidden mb-4">
          <img
            src={profilePhoto}
            alt="Michelle Rodriguez"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-xl font-display italic text-primary">
          Michelle Rodriguez
        </p>
      </header>

      {/* Sections */}
      <main className="max-w-3xl mx-auto px-4 pb-16 space-y-8">
        {sections.map((section) => (
          <section
            key={section.title}
            className="bg-card rounded-lg p-6 border-l-4 border-primary shadow-lg"
          >
            <h2 className="text-xl font-display italic font-bold text-primary mb-4">
              {section.title}
            </h2>
            <div className="text-foreground/90 leading-relaxed">
              {section.content}
            </div>
          </section>
        ))}
      </main>

      {/* CTA Section */}
      <section className="max-w-3xl mx-auto px-4 pb-16 text-center">
        <div className="bg-card rounded-lg p-8 border border-primary/30 shadow-lg">
          <h2 className="text-2xl font-display font-bold text-primary mb-3">
            ¿Interesado en trabajar conmigo?
          </h2>
          <p className="text-foreground/80 mb-6">
            Estoy disponible para prácticas profesionales y oportunidades laborales en soporte técnico y administración de plataformas tecnológicas.
          </p>
          <a
            href="mailto:Rodriguezventuralauramichelle@gmail.com"
            className="inline-block px-8 py-3 rounded-lg font-semibold text-primary-foreground transition-transform hover:scale-105"
            style={{ background: "var(--gradient-warm)" }}
          >
            Contáctame
          </a>
        </div>
      </section>

      {/* Contact Footer */}
      <footer
        className="text-center py-8"
        style={{ background: "var(--gradient-footer)" }}
      >
        <h3 className="text-xl font-display font-bold text-primary-foreground mb-2">
          Contacto
        </h3>
        <p className="text-primary-foreground/90">
          Correo: Rodriguezventuralauramichelle@gmail.com
        </p>
        <p className="text-primary-foreground/90">Teléfono: 3044867231</p>
      </footer>

      {/* Copyright */}
      <div
        className="text-center py-4"
        style={{
          background: "linear-gradient(135deg, hsl(50,90%,55%), hsl(60,70%,50%))",
        }}
      >
        <p className="text-primary-foreground text-sm">
          © 2026 Michelle Rodriguez
        </p>
      </div>
    </div>
  );
};

export default Index;
