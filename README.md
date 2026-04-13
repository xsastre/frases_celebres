<p style="text-align:center;">
  <img src="https://xsastre.github.io/imatges/logosxs/header_tasca_tassa_1024x293_amb_logo_sencer_v2.webp" style="width:75%; height:auto; display:block; margin:0 auto;" alt="imatge">
</p>

![CIFP Borja Moll Xavier Sastre 2525](https://img.shields.io/badge/CIFP_Borja_Moll-Xavier_Sastre_2526-blau?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABJCAIAAABEshTrAAAAAXNSR0IB2cksfwAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAAd0SU1FB+oCFQsTI6nRuYgAAAQvSURBVHja7dxLSDJRFADgxrLRRdBroT0XBUHUKswigoggaNGqdQ+ICmoRYYtQCiKiTRm1iHYFWVBBBVaLgqCgkp46QUQvH/goy8DMcmbUf/Fvgr8/neuMmZ6zHs6599OZe+8ZEfP7/XEQwQUPCAALsAALsAALsIAAsAALsAArOiPhl46boiiz2Wy1Ws1ms8PheHp6oigKx3GRSJSUlJSdnS0WizMyMuLj49ms6v9V8f7+rtFoRkdHRSJRwKnl5uYqlcqDgwO3281K9V+D9fr6ury8XFpaivCFKCoqUqlUj4+P0Y9F0/T29nZZWVmI95BAIJibm3O5XFGL9fz8LJPJWHzsVFVVnZ+fRyHW9fV1RUUFF+vD7OwsRVFMx8Pyauj3+202m9lsNplMTqdTr9dTFBUXF5eSkpKZmSkWi7OysnJycvh8fsBUZ2dntbW1drudC6ympiaDwSCTyYRCYbhXQ4qiCIKYmpqqrKwMWDE/P39ycpIgCK/X+7+El5eX6enpXO8/uru7397ewncbulyutbW1mpoahLE2NjYeHx//m9NqtUql0vDs1wYGBkiS5ByLJMnNzc2SkpIQhyuXy+12++e0bW1t4dzfTk9Pc4t1e3vb0tLC1nClUunp6enfzEtLS+E/D+zv73OC5fP5NjY2MAxjfcRqtdpms/F4P3BclUgkDoeDZSyKoiYmJrgbdHV19U8dNpVKJZtYJEkODw9HcVPh/v6eHSyapkdGRqK7AzM4OMgO1sLCQix0rCwWS6hYJycnMdLeW1xcDAnr5eWlvLw8RrDq6up8Ph861vj4eCRPLzk5uaenR6FQdHV1sbKh+eYxHwDr5uYmYpkUCsXFxcXnw4rH49HpdL29vaGk3draQsTq7++PQCaRSLS3t/fNsHd2dhITE9GSj42NoWAZjcYIlMIwTKfTBXx6HB0doeVvaGhAwZqZmYlALLVaHeR2R6VSIb86YoZFkmTY+iTBR319ffAdFbfbLZFIEKo8PDww65Te3d1pNJrQl6rW1laBQOD1eufn5w0GQ4gJ29vbg+my/g2hUNjZ2dnc3My0is/nY9YpXVlZCWVWfX19BEF8/hbQNH11dTU0NBRKWr1ez+jkr9VqEaqYTCZmtyHyOpiamrq7u/vNBA4PD/Py8tCSezweRlgWiwWhitFoZIZVUFCAUIbH42m12oBzIAgCYQOJYRjT7pvNZuMcy+l0on3y6+vrQU5jdXU1SrCsVivXS9XHxwfTVt+PY33dw6VpGqFGR0dH8EsVjuNhfjERenyNRZIkQq7CwkJG1xcXF0cDFvKRjdH1aWlpsYuF4zij64O/Z6MQK+oDsAALsAALsAALArAAC7AAC7AACwKwGMTX7w1xHJfL5ZzXTkjgugqfz0co8b/fSWDwxz1wGwIWYAEWYAEWEAAWYAEWYAFWzMcfiJCug71TKOIAAAAASUVORK5CYII=)
[![Desenvolupat amb Angular](https://img.shields.io/badge/Desenvolupat%20amb-Angular-339933?style=flat&logo=Angular&logoColor=white)](https://github.com/xsastre)
![Release v1.1](https://img.shields.io/badge/release-v1.1-blue)
![License: MIT](https://img.shields.io/badge/license-MIT-green)


# 📚 API de Frases Cèlebres (Propòsit Docent)

Aquesta és una API REST construïda amb **Node.js** i **Express** dissenyada per ser utilitzada com a eina educativa. Permet als alumnes practicar peticions HTTP (GET/POST) i consumir dades en format JSON.

Les dades es gestionen de forma dinàmica des d'un **Google Sheet** i es sincronitzen automàticament amb el servidor.

## 🚀 Característiques

- **Sincronització en temps real:** Les frases s'editen en un full de càlcul i s'actualitzen al servidor via Webhook o petició inicial.
- **Documentació Automàtica:** Swagger UI integrat per provar els endpoints.
- **Persistència:** Gestió de processos amb PM2 per garantir que l'API estigui sempre activa.

## 🛠️ Requisits

- Node.js (v14 o superior)
- npm
- Un servidor Linux (Ubuntu recomanat)
- Google Spreadsheet amb Apps Script configurat

## 📦 Instal·lació

1. Clona el repositori:
   ```bash
   git clone [https://github.com/el-teu-usuari/api-frases-celebres.git](https://github.com/el-teu-usuari/api-frases-celebres.git)
   cd api-frases-celebres
   ```
   
2. Instal·la les dependències:
   ```bash
   npm install
   ```

3. Configura l'URL de la teva Web App de Google Scripts dins de `server.js`:
   ```javascript
   const GOOGLE_SCRIPT_URL = "LA_TEVA_URL_AQUÍ";
   ```

## 🚦 Execució

### Mode desenvolupament
```bash
node server.js
```

### Mode producció (amb PM2)
```bash
pm2 start server.js --name api-frases
pm2 save
```

## 📖 Documentació de l'API

Un cop el servidor estigui funcionant, pots accedir a la documentació interactiva a:
`http://LA_TEVA_IP:3033/api-docs`

### Endpoints principals:
- `GET /frases`: Retorna el llistat complet.
- `GET /frases/random`: Retorna una frase a l'atzar.
- `GET /frases/total`: Retorna el recompte de frases.
- `POST /sync`: Endpoint per rebre actualitzacions des de Google Sheets.

## ✍️ Autor
Feta per **Xavier Sastre** (Abril 2026)

