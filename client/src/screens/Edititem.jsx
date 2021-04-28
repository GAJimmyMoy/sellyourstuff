import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
export default function Edititem(props) {
  const { items } = props;
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    price: '',
    image:''
  })
  const { id } = useParams;
  const { name } = formData;
  

  useEffect(() => {
    const prefillFormData = () => {
      const items = items.find(item => item.id === Number(id))
      setFormData({
        title: items.name
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
    <div>
      <h3>edit Item</h3>
      <label>Title:
       <input
          type="text"
          name='title'
          value={name}
          onChange={handleChange}
        >
        </input>
      </label>
      <br/>
      <label>description:
       <input
          type="text"
          name='description'
          value={name}
          onChange={handleChange}
        >
        </input>
      </label>
      <br/>
      <label>Category:
       <input
          type="text"
          name='category'
          value={name}
          onChange={handleChange}
        >
        </input>
      </label>
      <br/>
      <label>price:
       <input
          type="text"
          name='price'
          value={name}
          onChange={handleChange}
        >
        </input>
      </label>
      <br/>
      <label>image_url:
       <input
          type="text"
          name='image'
          value={name}
          onChange={handleChange}
        >
        </input>
      </label>
      <br/>
      <button>Submit</button>
    </div>
  )
}
