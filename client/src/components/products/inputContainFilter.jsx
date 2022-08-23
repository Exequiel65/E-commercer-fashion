import React from "react";

const InputContainFilter = ({type, name, value, label, id, setStateOrder, setStateCategorie, stateCat, stateOrder}) => {
  const handleChange = (e)=>{
    
    if (e.target.type === 'radio') {
      setStateOrder(e.target.value)
    }
    if (e.target.type === 'checkbox') {
      if (e.target.checked) {
        if (!stateCat.includes(e.target.value)) {
          setStateCategorie([...stateCat, e.target.value])
          return
        }
      }else{
        let deleted = stateCat.filter(c => c !== e.target.value)
        setStateCategorie(deleted)
        
      }
      
    }
  }
  
  return (
    <div className="radio-order">
      <input type={type} value={value} name={name} id={id} onChange={handleChange} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default InputContainFilter;
