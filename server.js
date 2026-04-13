const express = require('express');
const swaggerUi = require('swagger-ui-express');
const axios = require('axios');
const swaggerJsdoc = require('swagger-jsdoc');
const cors = require('cors');

const app = express();
const port = 3033;

app.use(cors());
app.use(express.json({ limit: '50mb' }));

let frases = [];
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwkXblokGp-N24eeeBsTBpMQaMeWw4xD_cE4yTFY6roTpd6OQ1d6iCSJpziZuTfNuaE/exec";

// --- Funció de Sincronització Inicial ---
async function syncFromGoogle() {
  try {
    console.log("🔄 Sincronitzant amb Google Sheets...");
    // Nota: axios gestiona bé les redireccions de Google Scripts
    const response = await axios.get(GOOGLE_SCRIPT_URL);
    if (Array.isArray(response.data)) {
      frases = response.data;
      console.log(`✅ Sincronització inicial amb èxit: ${frases.length} frases.`);
    }
  } catch (error) {
    console.error("❌ Error en la sincronització inicial:", error.message);
  }
}

// Configuració de Swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Frases Cèlebres',
      version: '1.0.0',
      description: 'API amb propòsit docent feta per Xavier Sastre 042026'
    },
    servers: [{ url: `http://85.214.40.240:${port}` }]
  },
  apis: ['./server.js'],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// --- Endpoints ---

/**
 * @openapi
 * /frases:
 *   get:
 *     summary: Retorna la llista completa de frases
 *     responses:
 *       200:
 *         description: Succés
 */
app.get('/frases', (req, res) => res.json(frases));

/**
 * @openapi
 * /frases/total:
 *   get:
 *     summary: Retorna el nombre total de frases
 *     responses:
 *       200:
 *         description: El nombre total
 */
app.get('/frases/total', (req, res) => res.json({ total: frases.length }));

/**
 * @openapi
 * /frases/random:
 *   get:
 *     summary: Retorna una frase aleatòria
 *     responses:
 *       200:
 *         description: Una frase aleatòria.
 *       404:
 *         description: No hi ha frases.
 */
app.get('/frases/random', (req, res) => {
  if (frases.length === 0) return res.status(404).json({ error: "Llista buida" });
  const indexAleatori = Math.floor(Math.random() * frases.length);
  res.json(frases[indexAleatori]);
});

/**
 * @openapi
 * /sync:
 *   post:
 *     summary: Actualitza la llista manualment
 */
app.post('/sync', (req, res) => {
  if (Array.isArray(req.body)) {
    frases = req.body;
    console.log("📥 Sincronització manual rebuda.");
    return res.json({ missatge: "Sincronitzat manualment", total: frases.length });
  }
  res.status(400).json({ error: "Format no vàlid" });
});

// --- Inici del servidor ---
// Utilitzem una sola crida a listen
app.listen(port, async () => {
  console.log(`🚀 Servidor corrent a http://localhost:${port}`);
  console.log(`📖 Documentació a http://85.214.40.240:${port}/api-docs`);

  // Fem la sincronització just després d'engegar
  await syncFromGoogle();
});