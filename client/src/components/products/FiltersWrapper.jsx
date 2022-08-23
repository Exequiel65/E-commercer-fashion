import React from "react";
import '../../styles/filters.css'
import Filter from "./filter";
const FiltersWrapper = () => {

  return (
    <div className="filter-products-all">
      <p className="title">Filtrar:</p>
      <Filter title='Ordenar :' type='radio' name='order' values={["relevant","min-price","max-price", "name-ASC", "name-DESC"]} ids={["relevant","min", "max", "ASC", "DESC"]} label={['Mas relevantes','Menor Precio', 'Mayor Precio', 'A a Z', 'Z a A']} idForm='form-order' idType='order' />
      <Filter title='Categorias :' type='checkbox' name='categorie' ids={['cat1', 'cat2', 'cat3', 'cat4']} values={['cat1', 'cat2', 'cat3', 'cat4']} label={['cat1', 'cat2', 'cat3', 'cat4']} idForm='form-cat' idType='cat'/>
    </div>
  );
};

export default FiltersWrapper;
