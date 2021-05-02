import React from 'react'

export default function Category(props) {
  const { category, currentUser } = props;
  console.log(category)
  return (
    <div>
      <h3>Categories </h3>
      {
         currentUser && category.map(categ => (
          
          <p key={categ.id}>{categ.name}</p>
          
        ))
      }
    </div>
  )
}
