import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(["One Punch"])
    console.log(categories);
    const onAddCategory=(newCategory)=>{
        if(categories.includes(newCategory)) return
        console.log(newCategory);
        setCategories([newCategory,...categories])
        console.log("hola");
    }
    return (
        <>
            <h1>Gif Expert App</h1>
            <AddCategory 
                onNewCategory={e=>onAddCategory(e)}
            />
            {categories.map((category)=>{
                return (
                    <GifGrid key={category} category={category}/>
                )
            })}
        </>
    )
}
