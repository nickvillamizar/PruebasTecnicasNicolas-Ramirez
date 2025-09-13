🖌️ Style Switcher – Proyecto Técnico con React + Vite + Redux Toolkit

Este proyecto es una prueba técnica construida con React + Vite + TypeScript que demuestra buenas prácticas de ingeniería frontend:
arquitectura limpia, Redux Toolkit para el estado global, tests unitarios e integración, ESLint + Prettier y un README claro para ejecución inmediata.

🚀 Características principales

React + Vite + TypeScript: Entorno moderno, rápido y tipado.

Redux Toolkit: Manejo del estado global para el estilo actual.

Componente interactivo StyleSwitcher:

Un cuadro de texto y un botón.

Al hacer clic, se ciclan 3 estilos diferentes (color, tamaño de texto, forma del botón, bordes, etc.).

Accesible con aria-label para cumplir buenas prácticas de accesibilidad.

CSS Modules: Separación clara de estilos, sin inline styles.

Tests con Vitest + Testing Library:

Test unitario para el reducer de Redux.

Test de integración para el componente StyleSwitcher.

ESLint + Prettier: Linter y formateador integrados.

Proyecto listo para ejecutar: npm install y npm run dev.

📂 Estructura del proyecto
style-switcher/
├─ public/
├─ src/
│  ├─ components/
│  │  ├─ StyleSwitcher.module.css
│  │  ├─ StyleSwitcher.tsx
│  │  └─ StyleSwitcher.test.tsx
│  ├─ store/
│  │  ├─ hooks.ts
│  │  ├─ store.ts
│  │  ├─ styleSlice.ts
│  │  └─ styleSlice.test.ts
│  ├─ App.tsx
│  ├─ main.tsx
│  └─ setupTests.ts
├─ package.json
├─ vite.config.ts
├─ vitest.config.ts
└─ README.md

🛠️ Requisitos previos

Node.js ≥ 18

npm ≥ 9

⚙️ Instalación y uso

Clona el repositorio y entra en la carpeta:

git clone <https://github.com/nickvillamizar/PruebasTecnicasNicolas-Ramirez.git>
cd style-switcher
npm install

Ejecutar en modo desarrollo
npm run dev


Abrir http://localhost:5173
 en el navegador.

Build de producción
npm run build

Preview del build
npm run preview

🧪 Tests

Este proyecto incluye pruebas unitarias y de integración con Vitest y Testing Library.

Para ejecutarlas:

npm run test


Para ejecutarlas con interfaz gráfica:

npm run test:ui

📝 Scripts disponibles
Comando	Descripción
npm run dev	Arranca el servidor de desarrollo
npm run build	Genera el build de producción
npm run preview	Vista previa del build
npm run lint	Ejecuta ESLint sobre los archivos del proyecto
npm run format	Formatea con Prettier
npm run test	Ejecuta las pruebas con Vitest
npm run test:ui	Ejecuta Vitest con interfaz gráfica
🏗️ Decisiones técnicas

Redux Toolkit: se eligió para manejar el estado global (ciclo de estilos) de forma escalable y tipada.

CSS Modules: evita colisiones de estilos y permite modularidad.

Testing Library: pruebas más cercanas al uso real por el usuario.

Accesibilidad: aria-label en el botón y estados de foco visibles.

Tipado estricto: TypeScript en todos los componentes y slices.

👁️ Vista del componente

El componente StyleSwitcher contiene:

Un <div> con texto que cambia color/tamaño.

Un <button> que cambia forma/bordes/color.

Cada clic cicla entre tres estilos:
estado 0 → estado 1 → estado 2 → estado 0….

🧩 Testeo del componente y reducer

Reducer (styleSlice): testea que el estado cicla correctamente 0 → 1 → 2 → 0.

Componente StyleSwitcher: testea que al hacer clic el texto cambia al estilo siguiente.

✅ Accesibilidad

aria-label en botón.

Componentes navegables con teclado.

Contrastes y tamaños adaptados en cada estilo.

🌐 Deploy (opcional)

Este proyecto puede desplegarse fácilmente en Vercel o Netlify.
Pasos sugeridos:

Subir este repositorio a GitHub.

Conectar el repositorio a Vercel/Netlify.

Elegir la carpeta raíz y el comando de build (npm run build).

Publicar.

🤝 Autor

Desarrollado por Nicolás Ramírez Villamizar
Estudiante de Ingeniería de Sistemas y Telecomunicaciones.
Prueba técnica para demostrar conocimientos en React + Redux + buenas prácticas frontend.