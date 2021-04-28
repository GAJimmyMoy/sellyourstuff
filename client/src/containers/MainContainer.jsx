import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Category from '../screens/Category'
import { useState, useEffect } from 'react'
import { getAllCategories } from '../services/category'
import { getAllItems } from '../services/items'
import Items from '../screens/Items'
export default function MainContainer() {
  const [items, setItems] = useState([])
  const [category, setCategory] = useState([])

  useEffect(() => {
    const fetchCategory = async () => {
      const categoryData = await getAllCategories();
    setCategory(categoryData)
    }
    fetchCategory()
  }, [])
  useEffect(() => {
    const fetchItems = async () => {
      const itemData = await getAllItems();
    setItems(itemData)
    }
    fetchItems()
  }, [])
  return (
    <div>
      <Switch>
        <Route path='/category'>
          <Category
          category={category}/>
        </Route>
        <Route path='/items'>
          <Items
          items={items}/>
        </Route>
      </Switch>
    </div>
  )
}
