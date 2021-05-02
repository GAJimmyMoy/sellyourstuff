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
    <div className="container">
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleCreate(formData);
      }}
    >
        <h3>Create Item</h3>
        <div className="form-group">
        <label>
            Title:
        <input
              className="form-control"
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
        ></input>
      </label>
        </div>

        <div className="form-group">
        <label>
            description:
        <input
              className="form-control"
          type="text"
          name="description"
          value={description}
          onChange={handleChange}
        ></input>
      </label>
        </div>

       <div className="form-group">
       <label htmlFor="categories_id">
        Category:
        <select onChange={handleChange} name="category_id" id="categories_id" className="form-control" defaultValue='default'>
          <option disabled value='default'>--Select a category--</option>
          {
            category.map((cat) => (
              <option key={ cat.id} value={cat.id}>{ cat.name}</option>

            ))
          }
         
        </select>
      </label>
        </div>

        <div className="form-group">
        <label>
            price:
        <input
              className="form-control"
          type="text"
          name="price"
          value={price}
          onChange={handleChange}
        ></input>
      </label>
        </div>

        <div className="form-group">
        <label>
            image_url:
        <input
              className="form-control"
          type="text"
          name="img_url"
          value={image}
          onChange={handleChange}
        ></input>
      </label>
          </div>
      
       <div className="form-group">
          
          </div>
      
      
      
      <br />
      <button className="btn">Submit</button>
      </form>
      </div>
  );
}
