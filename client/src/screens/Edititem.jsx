import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
export default function Edititem(props) {
  const { items, handleEdit } = props;
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    price: '',
    image:''
  })
  const { id } = useParams();
  const { title, description, category, price, image } = formData;
  

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
    
  }, [items])
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (

    <form onSubmit={
      (e) => {
        e.preventDefault();
        handleEdit(id, formData);
      }
    }>
      <h3>edit Item</h3>
      <label>Title:
       <input
          type="text"
          name='title'
          value={title}
          onChange={handleChange}
        >
        </input>
      </label>
      <br/>
      <label>description:
       <input
          type="text"
          name='description'
          value={description}
          onChange={handleChange}
        >
        </input>
      </label>
      <br/>
      <label>Category:
       <input
          type="text"
          name='category'
          value={category}
          onChange={handleChange}
        >
        </input>
      </label>
      <br/>
      <label>price:
       <input
          type="text"
          name='price'
          value={price}
          onChange={handleChange}
        >
        </input>
      </label>
      <br/>
      <label>image_url:
       <input
          type="text"
          name='image'
          value={image}
          onChange={handleChange}
        >
        </input>
      </label>
      <br/>
      <button>Submit</button>
    </form>
  )
}
