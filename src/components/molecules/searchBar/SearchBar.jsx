import React, { useState } from 'react'
import style from "./SearchBar.module.css"

function SearchBar({onSearch}) {

    const [idPersonaje, setIdPersonaje] = useState()

const handelInput = (evento)=>{
    setIdPersonaje(evento.target.value)
}

  return (
    <div className={style.searchBarContainer}>
        <input onChange={handelInput} type="text" placeholder='ingrese el ID del personaje' required/>
        <button onClick={()=> onSearch(idPersonaje)} > Search
        </button>
    </div>
  )
}

export default SearchBar