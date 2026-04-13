function doGet(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const fulla = ss.getSheets()[0];
  const dades = fulla.getDataRange().getValues();
  
  const files = dades.slice(1);
  const json = files.map(fila => ({
    id: fila[0],
    frase: fila[1],
    autor: fila[2],
    data: fila[3] instanceof Date ? fila[3].toLocaleDateString('ca-ES') : fila[3]
  }));

  return ContentService.createTextOutput(JSON.stringify(json))
    .setMimeType(ContentService.MimeType.JSON);
}


function getFrasesJSON() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const fulla = ss.getSheets()[0]; // Agafa la primera pestanya
  const dades = fulla.getDataRange().getValues();
  
  // Definim les claus manualment ja que la columna B no té nom a la imatge
  const claus = ["id", "frase", "autor", "data"];
  const files = dades.slice(1); // Ignorem la fila 1 de capçaleres

  const json = files.map(fila => {
    let obj = {};
    obj[claus[0]] = fila[0]; // Id
    obj[claus[1]] = fila[1]; // Frase
    obj[claus[2]] = fila[2]; // AtribuidaA
    
    // Tractament de la data per a que sigui llegible en JSON
    const dataRaw = fila[3];
    obj[claus[3]] = dataRaw instanceof Date ? dataRaw.toLocaleDateString('ca-ES') : dataRaw;
    
    return obj;
  });

  console.log(JSON.stringify(json, null, 2));
  return json;
}


function enviarAlServidor() {
  const dadesJson = spreadsheetToJSON();
  const url = "http://85.214.40.240:3033/actualitzar-dades"; // Endpoint al teu servidor
  
  const opcions = {
    method: 'post',
    contentType: 'application/json',
    payload: dadesJson
  };
  
  UrlFetchApp.fetch(url, opcions);
}



function sincronitzarAmbServidor() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const fulla = ss.getSheets()[0];
  const dades = fulla.getDataRange().getValues();
  
  // Transformem a JSON (com hem fet abans)
  const files = dades.slice(1);
  const cosPeticio = files.map(fila => ({
    id: fila[0],
    frase: fila[1],
    autor: fila[2],
    data: fila[3] instanceof Date ? fila[3].toLocaleDateString('ca-ES') : fila[3]
  }));

  // URL del teu servidor (canvia la IP/Domini)
  const url = "http://85.214.40.240:3033/sync";

  const opcions = {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify(cosPeticio),
    muteHttpExceptions: true
  };

  try {
    const resposta = UrlFetchApp.fetch(url, opcions);
    const codi = resposta.getResponseCode();
    
    if (codi === 200) {
      SpreadsheetApp.getUi().alert("✅ Sincronització completada amb èxit!");
    } else {
      SpreadsheetApp.getUi().alert("❌ Error en la sincronització: " + resposta.getContentText());
    }
  } catch (e) {
    SpreadsheetApp.getUi().alert("❌ No s'ha pogut connectar amb el servidor: " + e.toString());
  }
}

// Opcional: Crear un menú a la barra superior del Full de Càlcul
function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('🚀 API REST')
      .addItem('Sincronitzar dades ara', 'sincronitzarAmbServidor')
      .addToUi();
}
