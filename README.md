# Resume Page – Portafolio Digital Personal

---

## 1. Información General

| Campo | Detalle |
|-------|---------|
| **Nombre del proyecto** | Resume Page – Portafolio Digital |
| **Estudiante** | Laura Michelle Rodriguez Ventura |
| **Documento** | 1000271405 |
| **Correo** | Rodriguezventuralauramichelle@gmail.com |
| **Fecha** | Abril 2025 |
| **Curso** | Técnico Laboral en Plataformas Tecnológicas y Aplicaciones SG |
| **Institución** | Convenio Fundación Siigo – Instituto I3 |
| **Repositorio** | [github.com/rodriguezventuralauramichelle-dot/resume-page-gem](https://github.com/rodriguezventuralauramichelle-dot/resume-page-gem) |

---

## 2. Descripción del Proyecto

### ¿Qué hace el proyecto?
Es un sitio web personal tipo portafolio que presenta mi hoja de vida de forma digital, moderna e interactiva. Incluye mi información personal, perfil profesional, formación académica, experiencia práctica en Adidas, habilidades técnicas y blandas, y mis datos de contacto.

### ¿Qué problema soluciona?
Reemplaza la hoja de vida tradicional en papel por una versión web accesible desde cualquier dispositivo. Permite compartir mi perfil profesional con un solo enlace y mantenerlo actualizado fácilmente.

### ¿Para quién está pensado?
Para reclutadores y empresas del sector TI que buscan practicantes o personal de soporte técnico, y para cualquier persona interesada en conocer mi perfil profesional.

---

## 3. Tecnologías Utilizadas

- ⚛️ **React** – Librería JavaScript para construir la interfaz de usuario por componentes
- 🎨 **Tailwind CSS** – Framework de estilos utilitarios para el diseño visual y responsivo
- ⚡ **Vite** – Herramienta de construcción y servidor de desarrollo rápido
- 🟦 **TypeScript** – Superset de JavaScript con tipado estático
- 🛠 **Lovable** – Plataforma de desarrollo con IA para construir la aplicación
- 🔧 **Git & GitHub** – Control de versiones y repositorio en la nube

---

## 4. Estructura del Proyecto

```
/resume-page-gem
│
├── README.md                  → Documentación del proyecto
├── index.html                 → Punto de entrada HTML
├── package.json               → Dependencias del proyecto
├── vite.config.ts             → Configuración de Vite
├── tailwind.config.ts         → Configuración de Tailwind CSS
│
└── src/
    ├── main.tsx               → Punto de entrada de React
    ├── App.tsx                → Componente principal de la aplicación
    │
    ├── components/            → Componentes reutilizables de la UI
    │
    ├── pages/                 → Páginas de la aplicación
    │
    └── assets/                → Imágenes y recursos estáticos
        ├── foto.jpg           → Imagen principal del portafolio
        ├── profile-photo.png  → Foto de perfil
        └── profile-reference.png → Imagen de referencia
```

### Descripción de carpetas:
- **`src/`** – Contiene todo el código fuente de la aplicación React
- **`src/components/`** – Componentes reutilizables como la navbar, tarjetas de habilidades, sección de contacto
- **`src/pages/`** – Páginas completas de la aplicación
- **`src/assets/`** – Imágenes y recursos que usa la aplicación
- **`vite.config.ts`** – Configuración del servidor de desarrollo
- **`tailwind.config.ts`** – Personalización de colores, fuentes y estilos del proyecto

---

## 5. Funcionalidades

### ✅ 1. Navegación entre secciones
Menú de navegación que permite moverse entre las secciones del portafolio con scroll suave y diseño responsivo para móvil y escritorio.

### ✅ 2. Sección de perfil profesional
Muestra la foto de perfil, nombre completo, cargo objetivo y descripción personal. Primera impresión visual para reclutadores.

### ✅ 3. Visualización de habilidades
Presenta habilidades técnicas (soporte básico, ofimática, gestión de incidentes, administración de dispositivos) y blandas (responsabilidad, trabajo en equipo, aprendizaje rápido) en un formato visual claro.

### ✅ 4. Sección de experiencia y formación académica
Muestra la experiencia práctica en **Adidas** y la formación en el **Instituto I3**, organizados cronológicamente.

### ✅ 5. Sección de contacto
Incluye los datos de contacto (teléfono y correo) con íconos visuales y enlaces directos para facilitar la comunicación.

### ✅ 6. Diseño responsivo
El sitio se adapta automáticamente a pantallas de celular, tablet y computador gracias a las clases utilitarias de Tailwind CSS.

### ✅ 7. Componentes React reutilizables
El proyecto está construido con componentes independientes que se pueden actualizar fácilmente sin afectar el resto del sitio.

---

## 6. Capturas de Pantalla

### Foto principal del portafolio
![inicio](src/assets/captura-inicio.png)

### Sección de perfil profesional
![habilidades](src/assets/captura-habilidades.png)

![Contacto](src/assets/captura-contacto.png)

## 7. Cómo Ejecutar el Proyecto

### Requisitos previos
- Tener instalado **Node.js** (versión 18 o superior)
- Tener instalado **Git**

### Pasos para ejecutar localmente

```bash
# 1. Clonar el repositorio
git clone https://github.com/rodriguezventuralauramichelle-dot/resume-page-gem.git

# 2. Entrar a la carpeta del proyecto
cd resume-page-gem

# 3. Instalar dependencias
npm install

# 4. Iniciar el servidor de desarrollo
npm run dev

# 5. Abrir en el navegador
# Ir a: http://localhost:5173
```

### Opción alternativa – Ver en Lovable
El proyecto también se puede ver directamente desde la plataforma Lovable sin necesidad de instalación local.

---

## 8. Mejoras Futuras

- 🌐 **Publicar con dominio propio** usando Vercel o Netlify para tener una URL profesional
- 🌙 **Modo oscuro** con un botón de alternancia
- 🌍 **Versión en inglés** para aplicar a empresas internacionales
- 📧 **Formulario de contacto funcional** integrado con EmailJS
- 🎨 **Animaciones** al hacer scroll con la librería Framer Motion
- 📊 **Sección de proyectos** donde pueda mostrar trabajos adicionales del curso

---

## 9. Uso de Inteligencia Artificial

Durante el desarrollo de este proyecto usé herramientas de IA de forma responsable:

| Herramienta | Cómo la usé |
|-------------|-------------|
| **Lovable** | Plataforma principal para construir la interfaz del portafolio con asistencia de IA |
| **Claude (Anthropic)** | Generé la estructura del README.md, organicé el contenido y preparé la sustentación |

> ✅ En todos los casos revisé, modifiqué y entendí el resultado antes de usarlo.
> ✅ Puedo explicar cada parte del proyecto durante la sustentación.

---

## 10. Autora

**Laura Michelle Rodriguez Ventura**
📞 3044867231
📧 Rodriguezventuralauramichelle@gmail.com
🎓 Técnico Laboral en Plataformas Tecnológicas y Aplicaciones SG – Instituto I3

---
*Proyecto Final – 2025*