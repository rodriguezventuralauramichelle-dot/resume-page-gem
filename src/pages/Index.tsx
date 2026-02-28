import foto from "@/assets/foto.jpg";

const Index = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      {/* NAV */}
      <nav
        style={{
          background: "rgba(0,0,0,0.85)",
          backdropFilter: "blur(10px)",
          padding: "12px 20px",
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          flexWrap: "wrap",
          position: "sticky",
          top: 0,
          zIndex: 50,
          borderBottom: "2px solid #ff7b00",
        }}
      >
        {["perfil", "habilidades", "proyectos", "contacto"].map((id) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            style={{
              background: "linear-gradient(135deg, #ff7b00, #d0a020)",
              color: "#080808",
              border: "none",
              padding: "8px 20px",
              borderRadius: "8px",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: "14px",
              textTransform: "capitalize",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            {id}
          </button>
        ))}
      </nav>

      {/* HEADER */}
      <header style={{ textAlign: "center", padding: "30px" }}>
        <h1
          style={{
            fontSize: "30px",
            marginBottom: "10px",
            color: "#ff7b00",
            letterSpacing: "1px",
            fontWeight: "bold",
          }}
        >
          Tecnico en Plataformas Tecnologicas y Aplicaciones
        </h1>
        <div>
          <img
            src={foto}
            alt="Michelle Rodriguez"
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "4px solid #ff7b00",
              boxShadow: "0 0 20px rgba(255,123,0,0.6)",
              margin: "20px 0",
            }}
          />
        </div>
        <h2 style={{ fontWeight: "normal", color: "#f18e13", fontStyle: "italic" }}>
          Michelle Rodriguez
        </h2>
      </header>

      {/* MAIN */}
      <main
        style={{
          background: "rgba(0,0,0,0.75)",
          backdropFilter: "blur(10px)",
          maxWidth: "900px",
          margin: "40px auto",
          padding: "35px",
          borderRadius: "20px",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 0 25px rgba(255,123,0,0.25)",
        }}
      >
        {/* Perfil */}
        <section id="perfil" style={sectionStyle}>
          <h2 style={h2Style}>
            <i>Perfil Profesional</i>
          </h2>
          <p>
            Estudiante del programa tecnico laboral en plataformas tecnologicas y
            aplicaciones con conocimientos basicos en herramientas ofimaticas,
            administracion y configuracion de dispositivos corporativos y soporte
            basico al usuario. Me encuentro en formacion continua con interes de
            desarrollarme profesionalmente, motivada por aprender, adquirir
            experiencia y aportar soluciones y estrategias que beneficien el
            entorno laboral.
          </p>
        </section>

        {/* Habilidades */}
        <section id="habilidades" style={sectionStyle}>
          <h2 style={h2Style}>
            <i>Habilidades</i>
          </h2>
          <ul style={{ paddingLeft: "20px" }}>
            <li style={liStyle}>Soporte tecnico basico</li>
            <li style={liStyle}>Herramientas ofimaticas</li>
            <li style={liStyle}>Gestion de incidentes</li>
            <li style={liStyle}>Administracion y configuracion de dispositivos moviles</li>
            <li style={liStyle}>Documentacion de procesos de incidencias</li>
          </ul>
        </section>

        {/* Proyectos */}
        <section id="proyectos" style={sectionStyle}>
          <h2 style={h2Style}>
            <i>Proyectos</i>
          </h2>
          <ol style={{ paddingLeft: "20px" }}>
            <li style={liStyle}>
              Proyecto de Soporte Tecnico Basico: Implementacion de un sistema de
              ticketing para gestionar incidencias y solicitudes de soporte
              tecnico, mejorando la eficiencia y la satisfaccion del cliente.
            </li>
            <li style={liStyle}>
              Proyecto de Herramientas Ofimaticas: Creacion de una plantilla
              personalizada en Microsoft Excel para el seguimiento de tareas y
              proyectos, optimizando la organizacion y la productividad del
              equipo.
            </li>
            <li style={liStyle}>
              Proyecto de Administracion y Configuracion de Dispositivos Moviles:
              Implementacion de una politica de seguridad para dispositivos
              moviles en una empresa, incluyendo configuracion de contraseñas,
              actualizaciones regulares y gestion de aplicaciones, garantizando la
              proteccion de datos corporativos.
            </li>
          </ol>
        </section>
      </main>

      {/* FOOTER CONTACTO */}
      <footer id="contacto" style={footerStyle}>
        <h3>
          <i>Contacto</i>
        </h3>
        <p>Correo: Rodriguezventuralauramichelle@gmail.com</p>
        <p>Telefono: 3044867231</p>
      </footer>

      {/* FOOTER COPYRIGHT */}
      <footer style={{ ...footerStyle, marginTop: "0", borderRadius: "0" }}>
        <p>© 2026 Michelle Rodriguez</p>
      </footer>
    </div>
  );
};

const sectionStyle: React.CSSProperties = {
  marginTop: "25px",
  padding: "22px",
  borderRadius: "15px",
  background: "rgba(255,255,255,0.05)",
  borderLeft: "4px solid #ff7b00",
  transition: "0.3s",
};

const h2Style: React.CSSProperties = {
  color: "#ff7b00",
  marginBottom: "12px",
  borderBottom: "1px solid rgba(255,255,255,0.2)",
  paddingBottom: "5px",
};

const liStyle: React.CSSProperties = {
  margin: "8px 0",
  color: "#e0e0e0",
};

const footerStyle: React.CSSProperties = {
  background: "linear-gradient(90deg, #ff7b00, #d0d328)",
  color: "rgb(8, 8, 8)",
  textAlign: "center",
  padding: "15px",
  marginTop: "20px",
};

export default Index;
