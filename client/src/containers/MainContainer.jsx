import React from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Category from "../screens/Category";
import { useState, useEffect } from "react";
import { getAllCategories } from "../services/category";
import { getAllItems, putItem,postItem,deleteItem } from "../services/items";
import Items from "../screens/Items";
import ItemDetails from "../screens/ItemDetails";
import CreateItem from "../screens/CreateItem";
import Edititem from "../screens/Edititem";
import Homepage from "../screens/Homepage"
export default function MainContainer(props) {
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState([]);
  const history = useHistory();
  const { currentUser } = props;
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

  const handleCreate = async(formData) => {
    const itemData = await postItem(formData);
    setItems(prevState=> [...prevState, itemData])
    history.push('/items')
}

  const handleEdit = async (id, formData) => {
    const itemData = await putItem(id, formData);
    setItems(prevState => prevState.map(item => {
      return item.id === Number(id) ? itemData : item
    }))
    history.push('/items')
  }
  const handleDelete = async (id) => {
    await deleteItem(id);
    setItems(prevState => prevState.filter(item => item.id !== id))
    history.push('/items')
  }
  console.log(category)
  console.log(currentUser)
  return (
    <div>
      <Switch>
        <Route path="/category">
          <Category category={category} currentUser={currentUser}/>
        </Route>

        <Route path="/items/:id/edit">
          <Edititem items={items} handleEdit={handleEdit} category={category } currentUser={currentUser}/>
        </Route>
        <Route path="/items/new">
          <CreateItem handleCreate={handleCreate} category={category }/>
        </Route>
        <Route path="/items/:id">
          
          <ItemDetails items={items} handleDelete={handleDelete} currentUser={currentUser}/>
        </Route>
        <Route path="/items">
          <Items items={items} />
        </Route>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </div>
  );
}
