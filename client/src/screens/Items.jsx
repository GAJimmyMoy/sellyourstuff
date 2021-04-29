import React from 'react'
import { Link } from 'react-router-dom'

export default function Items(props) {
  const { items } = props;
  
 
  return (
    <div className="card_container">
     
      {
        items.map(item => (
          <Link to={`/items/${item.id}`}> <div className="card" key={item.id}>
            <img src={item.img_url} alt="" className="item_img"/>
            <p >{item.title}</p>
            <p>${ item.price}</p>
            </div></Link>
         
          
        ))
      }
    </div>
  )
}
