import './carga.css'
import { pideImagen, seleccionaActividad } from './Actividad'


await setTimeout(async () => {
    let actividad:string = await seleccionaActividad();
    console.log(actividad);
    window.location.href=`index.html?actividad=${actividad}&urlImagen=${await pideImagen(actividad)}`;
}, 2000);
