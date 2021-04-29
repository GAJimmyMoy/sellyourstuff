import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
export default function ItemDetails(props) {
  const { id } = useParams();
  const { items } = props;
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
          <img className="item_details_img" src={item.img_url} />
          
          </div>
          <div className="details_container_b">
            <h3>id:{ item.id}</h3>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <p>${item.price}</p>
            <button onClick={() => { }}>Delete</button>
            </div>
        </div>
      )}
    </div>
  );
}
