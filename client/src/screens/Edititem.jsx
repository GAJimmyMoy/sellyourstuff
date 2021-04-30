import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
export default function Edititem(props) {
  const { items, handleEdit } = props;
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category_id: '',
    price: '',
    img_url:''
  })
  const { id } = useParams();
  const { title, description, category_id, price, image } = formData;
  const { category} = props;

  useEffect(() => {
    const prefillFormData = () => {
      
      const item = items.find(itemOne => itemOne.id === Number(id))
      setFormData({
        title: item.title,
        description: item.description,
        category: item.category,
        price: item.price,
        image: item.image
      })
    }
    if (items.length) {
      prefillFormData();
    }
    
  }, [id,items])
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
<div className="container">
    <form onSubmit={
      (e) => {
        e.preventDefault();
        handleEdit(id, formData);
      }
    }>
        <h3>Edit Item</h3>
        <div className="form-group">
      <label>Title:
       <input
              className="form-control"
          type="text"
          name='title'
          value={title}
          onChange={handleChange}
        >
        </input>
          </label>
          </div>
          <div className="form-group">
      <label>description:
       <input
              className="form-control"
          type="text"
          name='description'
          value={description}
          onChange={handleChange}
        >
        </input>
          </label>
          </div>
      
          <div className="form-group">
      <label htmlFor="categories">
        Category:
        <select className="form-control" onChange={handleChange} name="category_id" id="categories" defaultValue='default'>
          <option disabled value='default'>--Select a flavor--</option>
          {
            category.map((cat) => (
              <option key={cat.id } value={cat.id}>{ cat.name}</option>

            ))
          }
         
        </select>
          </label>
          </div>
      
          <div className="form-group">
      <label>price:
       <input
              className="form-control"
          type="text"
          name='price'
          value={price}
          onChange={handleChange}
        >
        </input>
          </label>
          </div>
          <div className="form-group">
      <label>image_url:
       <input
              className="form-control"
          type="text"
          name='img_url'
          value={image}
          onChange={handleChange}
        >
        </input>
          </label>
          </div>
      
      <button className="btn">Submit</button>
      </form>
      </div>
  )
}
