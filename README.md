# 🧠 Dervian Blueprint Scraper API

Microservicio en Node.js con Express + Puppeteer + Stealth plugin, diseñado para reemplazar el antiguo `proxy.php` en el proyecto **Dervian Blueprint SEO Tool**.

Esta API permite renderizar y obtener el contenido HTML completo de páginas web que requieren ejecución de JavaScript (por ejemplo, aquellas protegidas con Cloudflare), para su análisis SEO dentro del sistema.

---

## 🚀 Instalación local

### 1. Clona el repositorio

```bash
git clone https://github.com/josuedevx/api_puppeteer.git
cd api_puppeteer
```

### 2. Instala dependencias

```bash
npm install
```

### 3. Ejecuta la app localmente

```bash
node index.js
```

---

## 🔗 Endpoints

### `GET /scrape?url=TU_URL`
Devuelve el HTML renderizado de una página (ejecuta JavaScript como un navegador real).

**Ejemplo:**
```
GET /scrape?url=https://example.com
```

---

## ✅ Estado

Cuando visitas la raíz (`/`), responde con:
```
🚀 Puppeteer API is running!
```

---

## 🛠 Requisitos del sistema

- Node.js 20+
- Dependencias del sistema si se despliega en servidor Linux:
  - `libnss3`, `libx11-xcb1`, `libasound2`, `fonts-liberation`, entre otras.

---

## 📄 Licencia

Este proyecto es propiedad privada de Link Socially. No está disponible para uso, distribución ni modificación sin autorización expresa. Consulta el archivo LICENSE para más detalles
