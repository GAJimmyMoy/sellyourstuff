import React from 'react'
import { Link } from 'react-router-dom'

export default function Items(props) {
  const { items } = props;
  console.log(items)
 
  return (
    <div className="homepage">
    <div className="card_container">
     
      {
        items.map(item => (
          <Link key={item.id } to={`/items/${item.id}`}> <div className="card" key={item.id}>
            <img src={item.img_url} alt="" className="item_img" />
            <div className="card_text">
            <p >{item.title}</p>
              <p>${item.price}</p>
              </div>
            </div></Link>
         
          
        ))
      }
      </div>
      </div>
  )
}
