import React from 'react'
import { useState } from 'react';
import { addCategory } from '../services/category'
export default function Category(props) {
  const { category, currentUser } = props;
 
  const [formData, setFormData] = useState({
    name: ""
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const { name} = formData;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newCategory = await addCategory(formData)
    
}
  return (
    <div>
      <h3>Categories </h3>
      {
         currentUser && category.map(categ => (
          
          <p key={categ.id}>{categ.name}</p>
          
        ))
      }
      <form onSubmit={handleSubmit}>
        <input value={name}
          name="name"
          onChange={handleChange}></input>
        <button>add</button>
      </form>
    </div>
  )
}
