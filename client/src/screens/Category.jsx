import React from 'react'

export default function Category(props) {
  const { category } = props;
  console.log(category)
  return (
    <div>
      <h3>category</h3>
      {
        category.map(categ => (
          
          <p key={categ.id}>{categ.name}</p>
          
        ))}
    </div>
  )
}
