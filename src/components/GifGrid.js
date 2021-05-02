//useEffect  permitira ejecutar el codigo de manera condicional
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({category}) => {
   
    
    //2. se importa aca esa funcion del HOOKS
    const {data:images,loading} = useFetchGifs(category);//desestrucutura el state y solo usa el loading
       
    return (

        <>
            <h3 className="animate__animated animate__rubberBand">{category}</h3>
                {loading && <p className="animate__animated animate__flash">Loading...</p>}
             <div className="card-grid">
                    {
                        images.map(img =>(
                        <GifGridItem 
                         key={img.id}
                        {...img}/>
                        ))
                    }
            
            
            </div>
        </>
    )
}
