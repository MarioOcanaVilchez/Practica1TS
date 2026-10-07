import './style.css'

const params = new URLSearchParams(window.location.search);
const actividad = params.get("actividad");
const urlImagen = params.get("urlImagen");
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h1>${actividad != null ? actividad : ''}</h1>
${urlImagen != null ? `<img src="${urlImagen}">` : ''}
<button onclick="window.location.href='carga.html'">Generar actividad</button>
`
