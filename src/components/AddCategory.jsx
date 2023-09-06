import { useState } from "react"


export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState("")
    const handleInput=(e)=>{
        setInputValue(e.target.value)
        console.log(e.target.value);
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(inputValue.trim().length <=1) return
        onNewCategory(inputValue.trim())
        setInputValue("")
    }
    return (
        <form onSubmit={e=>handleSubmit(e)}>
            <input onChange={(value)=>handleInput(value)} type="text" placeholder="Buscar gifs" value={inputValue} />

        </form>
    )
}
