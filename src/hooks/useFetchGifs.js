import {useState,useEffect} from 'react';
import {getGifs} from '../helpers/getGifs';


//1 se adiciona esta HOOKS 
export const useFetchGifs = (category) => {


    //para informar  antes de los 3 minutos cuando aun no ha cargado
    const [state, setstate] = useState({
            data:[],
            loading:true
  
    });

     //cuando se carga el componente por primera vez lance la peticion para obtener los gifs y los coloca en las imagenes
     useEffect( () =>{
         getGifs(category)//se jejecute solo cuando el componente es renderizado por primera vez
             .then(imgs =>{
                setTimeout(()=>{
                    setstate({
                        data:imgs,
                        loading:false
                    });
            
                },3000);
             })
        },[category])//este es component default

    

    return state; //{data:[], loading:true};
            
}
