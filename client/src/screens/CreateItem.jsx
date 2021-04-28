import React from 'react'
import {useState} from 'react'
export default function CreateItem() {
  const [formData, setFormData] = useState({
    name: ''
  })

  const { name } = formData;

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
