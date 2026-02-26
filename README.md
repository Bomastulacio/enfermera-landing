# 🏥 Licenciada en Enfermería Landing — Silvia Quiroz

Landing page profesional para servicios de licenciada en enfermería a domicilio en Resistencia, Chaco.

🌐 **Live:** [silviaquirozenfermera-web-app.web.app](https://silviaquirozenfermera-web-app.web.app)

---

## ✨ Features

- **Diseño minimalista y moderno** — tipografía Inter + Playfair Display, paleta verde médico, mucho whitespace
- **Efecto WOW en tarjetas** — imágenes en escala de grises que transicionan a color en hover con elevación suave
- **Animaciones fluidas** — Framer Motion en scroll y hover (entrada progresiva, fade-in, scale)
- **Formulario de contacto funcional** — conectado a Firebase Firestore, con estados de carga/éxito/error
- **Responsive** — mobile-first con menú hamburguesa animado
- **SEO optimizado** — meta tags, heading hierarchy, semantic HTML

## 🛠️ Tech Stack

| Tecnología | Uso |
|---|---|
| **React 19** | UI Components |
| **Vite 6** | Build tool + Dev server |
| **Tailwind CSS 4** | Estilos (plugin `@tailwindcss/vite`) |
| **Framer Motion** | Animaciones |
| **Firebase Firestore** | Base de datos para formulario de contacto |
| **Firebase Hosting** | Deploy |

## 📁 Estructura del Proyecto

```
enfermera-landing/
├── index.html              # Entry point HTML
├── vite.config.js          # Vite + plugins
├── firebase.json           # Firebase Hosting config
├── .env.example            # Template de variables de entorno
├── public/
│   ├── vite.svg
│   └── images/hero.png     # Foto de perfil
└── src/
    ├── main.jsx            # React entry
    ├── index.css           # Tailwind + design tokens
    ├── App.jsx             # Root layout
    ├── components/
    │   ├── Navbar.jsx      # Nav fija con glassmorphism
    │   ├── Hero.jsx        # Sección principal + CTA
    │   ├── Services.jsx    # Sección servicios (scroll horizontal)
    │   ├── ServiceCard.jsx # Tarjeta grayscale → color
    │   ├── About.jsx       # Biografía + credenciales
    │   ├── ContactForm.jsx # Formulario + estados UX
    │   └── Footer.jsx      # Footer con links y contacto
    └── firebase/
        ├── config.js       # Inicialización Firebase (usa .env)
        └── contactService.js # submitContactForm()
```

## 🚀 Setup Local

### 1. Clonar el repositorio

```bash
git clone https://github.com/Bomastulacio/enfermera-landing.git
cd enfermera-landing
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar Firebase

Copiá el archivo de ejemplo y completá con tus credenciales:

```bash
cp .env.example .env
```

Editá `.env` con tus keys de Firebase:

```env
VITE_FIREBASE_API_KEY=tu_api_key
VITE_FIREBASE_AUTH_DOMAIN=tu_proyecto.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=tu_project_id
VITE_FIREBASE_STORAGE_BUCKET=tu_proyecto.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=tu_sender_id
VITE_FIREBASE_APP_ID=tu_app_id
```

> Las credenciales se encuentran en: **Firebase Console → Configuración del Proyecto → General → Tu app web**

### 4. Iniciar servidor de desarrollo

```bash
npm run dev
```

Abrí [http://localhost:5173](http://localhost:5173) en tu navegador.

## 📦 Build & Deploy

```bash
# Build de producción
npm run build

# Deploy a Firebase Hosting
npx firebase-tools deploy --only hosting
```

## 🗄️ Base de Datos

El formulario de contacto guarda los datos en la colección `solicitudes_contacto` de Firestore:

```json
{
  "nombre": "María García",
  "telefono": "+54 9 362 1234567",
  "tipoServicio": "Control y Seguimiento",
  "mensaje": "Necesito atención para mi mamá...",
  "creadoEn": "2026-02-18T19:00:00Z"
}
```

## 📄 Licencia

Proyecto privado. Todos los derechos reservados.
