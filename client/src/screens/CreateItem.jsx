// import React from 'react'
// import {useState} from 'react'
// export default function CreateItem() {
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     category: '',
//     price: '',
//     image:''
//   })


//   const { title, description, category, price, image } = formData;
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }))
//   }

//   return (
//     <div>
//       <h3>create Item</h3>
//       <label>Title:
//        <input
//           type="text"
//           name='title'
//           value={title}
//           onChange={handleChange}
//         >
//         </input>
//       </label>
//       <br/>
//       <label>description:
//        <input
//           type="text"
//           name='description'
//           value={description}
//           onChange={handleChange}
//         >
//         </input>
//       </label>
//       <br/>
//       <label>Category:
//        <input
//           type="text"
//           name='category'
//           value={category}
//           onChange={handleChange}
//         >
//         </input>
//       </label>
//       <br/>
//       <label>price:
//        <input
//           type="text"
//           name='price'
//           value={price}
//           onChange={handleChange}
//         >
//         </input>
//       </label>
//       <br/>
//       <label>image_url:
//        <input
//           type="text"
//           name='image'
//           value={image}
//           onChange={handleChange}
//         >
//         </input>
//       </label>
//       <br/>
//       <button>Submit</button>
//     </div>
//   )
// }
import React from 'react'
import { useState} from 'react'

export default function CreateItem(props) {
 
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    image: '',
    category: ''
  })

  const { title, description, category, price, image } = formData;
  const { handleCreate } = props;


  
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
        handleCreate(formData);
      }
    }>
      <h3>Create Item</h3>
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
