import React from 'react'
import {useParams} from 'react-router-dom'
export default function ItemDetails(props) {
  const { id } = useParams;
  console.log(id)
  return (
    <div>
      <button>edit</button>
      <button>delete</button>
    </div>
  )
}
