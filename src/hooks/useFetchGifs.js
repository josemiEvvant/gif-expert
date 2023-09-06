import {useState,useEffect} from 'react'
import {getGifs} from '../helpers/getGifs'

export const useFetchGifs = (category) => {
    const [gifs, setGifs] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        console.log("hola");
        getGifs(category)
            .then(newImages =>{
                setGifs(newImages)
                setIsLoading(false)
            } )
    }, [category])
    return {
        gifs:gifs,
        isLoading:isLoading
    }
}


