import React from 'react'

export default function Category(props) {
  const { category } = props;
  return (
    <div>
      <h3>category</h3>
      {
        category.map(categ => (
          
          <p key={category.id}>{category.name}</p>
          
        ))}
    </div>
  )
}
