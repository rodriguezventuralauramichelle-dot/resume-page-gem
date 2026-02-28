import { useState } from "react";
import { motion } from "framer-motion";
import foto from "@/assets/foto.jpg";
import {
  User, Briefcase, GraduationCap, Code, Heart, Shield, Star, Phone, Mail, IdCard, ChevronDown,
} from "lucide-react";

const NAV_ITEMS = [
  { id: "info", label: "Info Personal", icon: User },
  { id: "perfil", label: "Perfil", icon: Star },
  { id: "formacion", label: "Formación", icon: GraduationCap },
  { id: "practicas", label: "Prácticas", icon: Briefcase },
  { id: "habilidades", label: "Habilidades", icon: Code },
  { id: "referencias", label: "Referencias", icon: Heart },
  { id: "contacto", label: "Contacto", icon: Phone },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Index = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(160deg, #0a0a0f 0%, #131320 40%, #1a1008 100%)" }}>
      {/* NAV */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl border-b border-border"
        style={{ background: "rgba(10,10,15,0.88)" }}>
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-center gap-2 flex-wrap">
          {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                activeSection === id
                  ? "text-primary-foreground shadow-lg shadow-primary/30"
                  : "text-foreground/70 hover:text-foreground bg-muted/50 hover:bg-muted"
              }`}
              style={activeSection === id ? { background: "linear-gradient(135deg, #ff7b00, #e6a800)" } : {}}
            >
              <Icon size={14} />
              <span className="hidden sm:inline">{label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center pt-16 pb-12 px-4"
      >
        <div className="relative inline-block mb-6">
          <div className="absolute -inset-2 rounded-full blur-xl opacity-50"
            style={{ background: "linear-gradient(135deg, #ff7b00, #e6a800)" }} />
          <img
            src={foto}
            alt="Michelle Rodriguez"
            className="relative w-48 h-48 rounded-full object-cover border-4"
            style={{ borderColor: "#ff7b00" }}
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-2" style={{ color: "#ff7b00" }}>
          Michelle Rodriguez
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Técnico en Plataformas Tecnológicas y Aplicaciones
        </p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mt-8 text-muted-foreground"
        >
          <ChevronDown size={28} className="mx-auto" />
        </motion.div>
      </motion.header>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto px-4 pb-20 space-y-10">

        {/* INFO PERSONAL */}
        <Section id="info" title="Información Personal" icon={User}>
          <div className="grid sm:grid-cols-2 gap-3">
            <InfoItem icon={User} label="Nombre" value="Laura Michelle Rodriguez Ventura" />
            <InfoItem icon={IdCard} label="Documento" value="1000271405" />
            <InfoItem icon={Phone} label="Teléfono" value="3044867231" />
            <InfoItem icon={Mail} label="Correo" value="Rodriguezventuralauramichelle@gmail.com" />
          </div>
        </Section>

        {/* PERFIL */}
        <Section id="perfil" title="Perfil Profesional" icon={Star}>
          <p className="text-foreground/85 leading-relaxed">
            Estudiante del programa Técnico Laboral en Plataformas Tecnológicas y Aplicaciones SG,
            con conocimientos básicos en Word y Excel, con habilidades como adaptabilidad al cambio,
            atención al detalle, aprendizaje autónomo, trabajo en equipo, manejo efectivo del tiempo
            y resolución de problemas. Me encuentro en formación continua con intereses de desarrollarme
            profesionalmente, motivada por aprender, adquirir experiencia y aportar soluciones y
            estrategias que beneficien el entorno laboral.
          </p>
        </Section>

        {/* FORMACIÓN */}
        <Section id="formacion" title="Formación Académica" icon={GraduationCap}>
          <div className="space-y-5">
            <div className="p-4 rounded-xl bg-muted/30 border border-border">
              <span className="text-xs font-bold px-3 py-1 rounded-full"
                style={{ background: "linear-gradient(135deg, #ff7b00, #e6a800)", color: "#0a0a0f" }}>
                PREGRADO
              </span>
              <h4 className="font-semibold mt-3 text-foreground">Convenio Fundación Siigo – Instituto I3</h4>
              <p className="text-sm text-muted-foreground mt-1">En curso · Inicio: 12 abril 2025 · Culmina: 25 abril 2026</p>
            </div>
            <div className="p-4 rounded-xl bg-muted/30 border border-border">
              <span className="text-xs font-bold px-3 py-1 rounded-full"
                style={{ background: "linear-gradient(135deg, #ff7b00, #e6a800)", color: "#0a0a0f" }}>
                SECUNDARIA
              </span>
              <h4 className="font-semibold mt-3 text-foreground">Kimy Pernía Domicó IED</h4>
              <p className="text-sm text-muted-foreground mt-1">Bachiller · Graduación: 30 noviembre 2018</p>
            </div>
          </div>
        </Section>

        {/* PRÁCTICAS */}
        <Section id="practicas" title="Prácticas y Proyectos" icon={Briefcase}>
          <div className="p-4 rounded-xl bg-muted/30 border border-border">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl font-extrabold" style={{ color: "#ff7b00" }}>adidas</span>
              <span className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground">Practicante</span>
            </div>
            <p className="text-sm text-muted-foreground mb-3">Agosto 2025 – Abril 2025</p>
            <ul className="space-y-2">
              {[
                "Soporte básico a usuarios en equipos y software.",
                "Instalación y configuración de programas.",
                "Diagnóstico y solución de fallas técnicas básicas.",
                "Apoyo en mantenimiento preventivo de equipos.",
                "Documentación de procesos o incidencias.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-foreground/85 text-sm">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#ff7b00" }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* HABILIDADES */}
        <Section id="habilidades" title="Habilidades" icon={Code}>
          <div className="grid sm:grid-cols-3 gap-6">
            <SkillGroup title="Técnicas" items={[
              "Soporte técnico básico",
              "Herramientas ofimáticas (Word, Excel, PowerPoint)",
              "Gestión básica de incidentes",
              "Administración de dispositivos móviles",
            ]} />
            <SkillGroup title="Blandas" items={[
              "Responsabilidad",
              "Trabajo en equipo",
              "Aprendizaje rápido",
              "Organización",
              "Resolución de problemas",
              "Actitud de servicio",
            ]} />
            <SkillGroup title="Fortalezas Profesionales" items={[
              "Alta disposición para aprender",
              "Interés en soporte TI",
              "Compromiso con la calidad",
              "Buena actitud frente a retos tecnológicos",
            ]} />
          </div>
        </Section>

        {/* REFERENCIAS */}
        <Section id="referencias" title="Referencias Personales" icon={Shield}>
          <div className="grid sm:grid-cols-2 gap-4">
            <ReferenceCard name="Carlos Andrés Rodríguez" cargo="Pintor" tel="3505678651" />
            <ReferenceCard name="Laura Rodríguez León" cargo="IT Specialist" tel="3142023550" />
          </div>
        </Section>
      </div>

      {/* FOOTER CONTACTO */}
      <footer id="contacto" className="text-center py-10"
        style={{ background: "linear-gradient(90deg, #ff7b00, #d0d328)" }}>
        <h3 className="text-2xl font-bold mb-3" style={{ color: "#0a0a0f" }}>¿Interesada en trabajar conmigo?</h3>
        <p style={{ color: "#0a0a0f" }}>Rodriguezventuralauramichelle@gmail.com</p>
        <p style={{ color: "#0a0a0f" }}>Teléfono: 3044867231</p>
        <a
          href="mailto:Rodriguezventuralauramichelle@gmail.com"
          className="inline-block mt-4 px-8 py-3 rounded-full font-bold transition-transform hover:scale-105"
          style={{ background: "#0a0a0f", color: "#ff7b00" }}
        >
          Contáctame
        </a>
      </footer>
      <div className="text-center py-4" style={{ background: "#0a0a0f" }}>
        <p className="text-muted-foreground text-sm">© 2026 Michelle Rodriguez</p>
      </div>
    </div>
  );
};

/* --- Sub-components --- */

const Section = ({ id, title, icon: Icon, children }: {
  id: string; title: string; icon: React.ElementType; children: React.ReactNode;
}) => (
  <motion.section
    id={id}
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    className="p-6 md:p-8 rounded-2xl border border-border"
    style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(10px)" }}
  >
    <div className="flex items-center gap-3 mb-5">
      <div className="p-2 rounded-xl" style={{ background: "linear-gradient(135deg, #ff7b00, #e6a800)" }}>
        <Icon size={20} style={{ color: "#0a0a0f" }} />
      </div>
      <h2 className="text-xl font-bold" style={{ color: "#ff7b00" }}>{title}</h2>
    </div>
    {children}
  </motion.section>
);

const InfoItem = ({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) => (
  <div className="flex items-start gap-3 p-3 rounded-xl bg-muted/30">
    <Icon size={16} className="mt-0.5 flex-shrink-0" style={{ color: "#ff7b00" }} />
    <div>
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="text-sm font-medium text-foreground break-all">{value}</p>
    </div>
  </div>
);

const SkillGroup = ({ title, items }: { title: string; items: string[] }) => (
  <div>
    <h4 className="font-semibold text-sm mb-3" style={{ color: "#e6a800" }}>{title}</h4>
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 text-foreground/80 text-sm">
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#ff7b00" }} />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const ReferenceCard = ({ name, cargo, tel }: { name: string; cargo: string; tel: string }) => (
  <div className="p-4 rounded-xl bg-muted/30 border border-border">
    <h4 className="font-semibold text-foreground">{name}</h4>
    <p className="text-sm text-muted-foreground">{cargo}</p>
    <p className="text-sm mt-2" style={{ color: "#ff7b00" }}>Tel: {tel}</p>
  </div>
);

export default Index;
