import React from "react";
import { filterGender } from "../../../helpers/filterGender";
import style from "./FilterGender.module.css";

function FilterGender() {


const handelSelect = (event)=>{
    event.preventDefault()
    console.log(event.target.value)
}

  return (
    <select onChange={handelSelect} className={style.containerFilter}>
      {filterGender.map((e) => (
        <option value={e}>{e}</option>
      ))}
    </select>
  );
}

export default FilterGender;
