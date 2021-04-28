import React from "react";
import { Switch, Route } from "react-router-dom";
import Category from "../screens/Category";
import { useState, useEffect } from "react";
import { getAllCategories } from "../services/category";
import { getAllItems } from "../services/items";
import Items from "../screens/Items";
import ItemDetails from "../screens/ItemDetails";
import CreateItem from "../screens/CreateItem";
import Edititem from "../screens/Edititem";
export default function MainContainer() {
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      const categoryData = await getAllCategories();
      setCategory(categoryData);
    };
    fetchCategory();
  }, []);
  useEffect(() => {
    const fetchItems = async () => {
      const itemData = await getAllItems();
      setItems(itemData);
    };
    fetchItems();
  }, []);

  // const handleEdit = (id, formData) => {
  //   const itemData = await putItem(id, formData);
  //   setItems(prevState => prevState.map(item => {
  //     return item.id === id ? itemData : item
  //   }))
  // }

  return (
    <div>
      <Switch>
        <Route path="/category">
          <Category category={category} />
        </Route>

        <Route path="/items/:id/edit">
          <Edititem items={items} />
        </Route>
        <Route path="/items/new">
          <CreateItem />
        </Route>
        <Route path="/items/:id">
          <h3>items id</h3>
          <ItemDetails />
        </Route>
        <Route path="/items">
          <Items items={items} />
        </Route>
      </Switch>
    </div>
  );
}
