import React from "react";
import { useState } from "react";

export default function CreateItem(props) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    img_url: "",
    category_id: "",
  });

  const { title, description, category_id, price, image } = formData;
  const { handleCreate , category} = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleCreate(formData);
      }}
    >
      <h3>Create Item</h3>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
        ></input>
      </label>
      <br />
      <label>
        description:
        <input
          type="text"
          name="description"
          value={description}
          onChange={handleChange}
        ></input>
      </label>
      <br />
      {/* <label>Category:
       <input
          type="text"
          name='category_id'
          value={category}
          onChange={handleChange}
        >
        </input>
      </label> */}

      <label for="categories">
        Category:
        <select onChange={handleChange} name="category_id" id="categories" defaultValue='default'>
          <option disabled value='default'>--Select a flavor--</option>
          {
            category.map((cat) => (
              <option value={cat.id}>{ cat.name}</option>

            ))
          }
         
        </select>
      </label>

      <br />
      <label>
        price:
        <input
          type="text"
          name="price"
          value={price}
          onChange={handleChange}
        ></input>
      </label>
      <br />
      <label>
        image_url:
        <input
          type="text"
          name="img_url"
          value={image}
          onChange={handleChange}
        ></input>
      </label>
      <br />
      <button>Submit</button>
    </form>
  );
}
