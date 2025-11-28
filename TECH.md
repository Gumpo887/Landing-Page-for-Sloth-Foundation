# Tecnologías del proyecto — Landing Page for Sloth Foundation

Resumen rápido:
- Proyecto frontend construido con React + Vite y estilado con Tailwind CSS.
- Orientado a una landing estática (componentes React, sin backend incluido).

**Lenguajes**
- JavaScript / TypeScript (`.ts` / `.tsx` archivos presentes)

**Framework / Librerías principales**
- React 18 (paquetes: `react`, `react-dom`)
- Vite (dev server / bundler)
- `@vitejs/plugin-react-swc` (SWC-based React transform para Vite)

**Estilos**
- Tailwind CSS (archivo `src/index.css` incluye encabezado de Tailwind v4.1.3)
- Uso extensivo de utilidades Tailwind en componentes

**Componentes / UI / Helpers**
- Radix UI (`@radix-ui/react-*`) — primitives accesibles (dialog, tooltip, popover, tabs, etc.)
- Lucide (`lucide-react`) — iconos
- Embla (`embla-carousel-react`) — carrusel
- Recharts (`recharts`) — gráficas
- Sonner (`sonner`) — notifications/toasts
- cmdk — command menu
- input-otp — campo OTP
- react-resizable-panels — paneles redimensionables

**Formularios / Validación**
- react-hook-form

**Theming / Utilities**
- next-themes — theme switching (dark/light)
- clsx — manejo de clases condicionales
- class-variance-authority — variantes de clases
- tailwind-merge — merge de clases Tailwind

**Tooling / Tipos / Dev**
- TypeScript (archivos `.ts`/`.tsx`) — `@types/node` en `devDependencies`
- Se añadieron `@types/react` y `@types/react-dom` como dependencias de desarrollo
- Vite configuración en `vite.config.ts` (aliases, target, servidor)
- Sin tests configurados (no se detecta Jest/Vitest en `package.json`)

**Scripts** (en `package.json`)
- `npm run dev` → inicia Vite (modo desarrollo)
- `npm run build` → `vite build`

**Notas sobre compatibilidad / ajustes realizados**
- Se añadió `text-size-adjust: 100%` junto a `-webkit-text-size-adjust: 100%` en `src/index.css` para mejorar comportamiento en navegadores modernos móviles.
- Si el editor muestra advertencias TS tras instalar `@types/*`, reinicia el TS server en VS Code: Command Palette → "TypeScript: Restart TS Server".

**Cómo ejecutar localmente**
1. Instalar dependencias:

```powershell
npm install
```

2. Levantar servidor de desarrollo:

```powershell
npm run dev
```

3. Compilar para producción:

```powershell
npm run build
```

**Dónde mirar**
- Código fuente: `src/`
- Punto de entrada React: `src/main.tsx`
- Componente raíz: `src/App.tsx`
- Configuración Vite: `vite.config.ts`
- Estilos globales / Tailwind: `src/index.css`

**Siguientes mejoras sugeridas (opcional)**
- Implementar manejadores para los CTAs (donar, voluntariado, apadrinar) y conectar la suscripción a un servicio (Mailchimp / API propia).
- Añadir `tsconfig.json` si aún no existe, o revisar opciones `jsx` (`react-jsx`) para eliminar warnings relacionados con `react/jsx-runtime`.
- Añadir pruebas (Vitest) y linters (ESLint + Prettier) si se desea estandarizar el códigobase.

Para el listado completo de dependencias con versiones, revisa `package.json`.
