import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import InputContainFilter from "./inputContainFilter";

const Filter = ({title, type, name, values, ids, label, idForm, idType}) => {
  const [OrderFilter, setOrderFilter] = useState(null);
  const [CategorieFilter, setCategorieFilter] = useState([]);

  const handleClick = (e) => {
    let orderDrop = document.querySelector("#order");
    let catDrop = document.querySelector("#cat");
    let formOrder = document.querySelector("#form-order");
    let formCat = document.querySelector("#form-cat");
    switch (true) {
      case e.target.innerText === "Ordenar :":
        if (window.innerWidth >= 820) {
          if (formOrder.offsetTop < 30) {
            formOrder.style.top = "30px";
            orderDrop.style.overflow = "visible";
          } else {
            formOrder.style.top = "-145px";
            orderDrop.style.overflow = "hidden";
          }
        } else {
          orderDrop.classList.toggle("ds-down");
        }
        break;
      case e.target.innerText === "Categorias :":
        if (window.innerWidth >= 820) {
          if (formCat.offsetTop < 30) {
            formCat.style.top = "30px";
            catDrop.style.overflow = "visible";
          } else {
            formCat.style.top = "-130px";
            catDrop.style.overflow = "hidden";
          }
        } else {
          catDrop.classList.toggle("ds-down");
        }
        break;

      default:
        break;
    }
  };

  const handleClickClosed = (e)=>{
    console.log(e)
    let inputChecked = document.querySelectorAll('input')
    
    if (e.target.parentElement.innerText === `${layoutSpan()} x`) {
      setOrderFilter(null)
    }
   
    let indiceX = e.target.parentElement.innerText.indexOf('x')
    let stringRecor = e.target.parentElement.innerText.slice(0,indiceX -1)

    if (CategorieFilter.includes(stringRecor)) {
      setCategorieFilter(CategorieFilter.filter(cat => cat !== stringRecor))
      inputChecked.forEach(input=>{
        if (input.value === stringRecor) {
          input.checked = false
        }
      })
    }
  }

  const layoutSpan = ()=>{
    let value = values.indexOf(OrderFilter)
    return value >= 0 && label[value]
  }
  
  return (
    <div className="filter-order" id={idType}>
      <div className="order-title">
        <p onClick={handleClick}>{title}</p>
        <span className="select-filter">
          {layoutSpan() && layoutSpan()}
          {layoutSpan() && <span className="botton-close" onClick={handleClickClosed} > x</span>}
        </span>
        {CategorieFilter.map((c, i)=>(
          <span key={i+c} style={{paddingLeft:'8px'}}>{c}<span key={i+c} className="botton-close" onClick={handleClickClosed}> x</span></span>
        ))}
        
      </div>
      <form className="form-order" id={idForm}>
        {label.map((lab, i)=>(
            <InputContainFilter key={lab + i} type={type} name={name} value={values[i]} label={lab} id={ids[i]} setStateOrder={setOrderFilter} setStateCategorie={setCategorieFilter} stateOrder={OrderFilter} stateCat={CategorieFilter}/>
        ))}
      </form>
    </div>
  );
};

export default Filter;
