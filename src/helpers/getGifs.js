

export const getGifs = async(category)=>{
    //encodeURI  quita espacio para queno vaya tener problemas al buscar la categoria
    const url=`https://api.giphy.com/v1/gifs/search?q=${encodeURI (category)}&limit=10&api_key=fPBkqMTwbBoYbE7wbOg19zwadCISEYSn`
    const resp=await fetch(url);
    const {data} =await resp.json();//la palabra data aparece en la API

    const gifs=data.map(img =>{
        return {
            id: img.id,
            title:img.title,
            url:img.images?.downsized_medium.url// el signo de interrogacion es para preguntar si trae imagenes haga lo del .down
        }
    })

    return gifs;
  

}
