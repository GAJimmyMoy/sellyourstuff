import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
export default function ItemDetails(props) {
  const { id } = useParams();
  const { items,handleDelete } = props;
  const [item, setItem] = useState(null);
  // console.log(id);
  // console.log(items);

  useEffect(() => {
    if (items.length) {
      const oneItem = items.find((item) => item.id === Number(id));
      setItem(oneItem);
    }
  }, [items, id]);
  // console.log(item);
  return (
    <div>
      {item && (
        <div className="details_container">
          <div className="details_container_a">
          <img className="item_details_img" src={item.img_url} alt="" />
          
          </div>
          <div className="details_container_b">
            <h3>Product id:{ item.id}</h3>
            <h3>{item.title}</h3>
            <h3>category id:{item.category_id} </h3>
            <h3>user id:{item.user_id} </h3>
          <p>{item.description}</p>
            <p>${item.price}</p>
            
            <button className="btn" onClick={() => handleDelete(item.id)}>delete</button>
            <Link to={`/items/${item.id}/edit`}><button className="btn">Update</button></Link>
            
            </div>
        </div>
      )}
    </div>
  );
}
