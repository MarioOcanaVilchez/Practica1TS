
import { type Actividad, type Imagen } from "./interfaces";
const URLBASE:string = 'https://opentdb.com/api.php?amount=1&type=multiple';
const URLBASEIMG1:string = 'https://pixabay.com/api/?key=57906343-7cb0800919b036b181d6f7252&q=';

export async function ejecutaPeticion<T>(url:String):Promise<T> {
    try{
        let response = await fetch(`${url}`);
        if (response.ok){
            return await response.json() as T;
        } else{ 
            console.log(response.status);
            return Promise.reject(`Error http ${response.status}`);
        } 
    }catch(error){
        throw error;
    }
}
export async function peticionesParalelo<T>(urls:string[]):Promise<T[]>{
    let promesas:Promise<T>[] = urls.map((url) => ejecutaPeticion<T>(url));
    return Promise.all(promesas);
}
export async function seleccionaActividad():Promise<string>{
    return (await ejecutaPeticion<Actividad>(URLBASE)).results[0]?.category ?? 'No hay categoria';
}
export async function pideImagen(url:string):Promise<string> {
    url = url.replaceAll(' ','+');
    url = URLBASEIMG1 + url;
    console.log(url);
    let imagen:Imagen =  await ejecutaPeticion<Imagen>(url);
    console.log(imagen.hits[0]?.webformatURL ?? '/Imagenes/no hay imagen.jpg');
    return imagen.hits[0]?.webformatURL ?? '/Imagenes/no hay imagen.jpg';
}
    
