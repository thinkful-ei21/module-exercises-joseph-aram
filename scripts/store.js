'use strict';
/* global , cuid, Item */

// eslint-disable-next-line no-unused-vars
const store = (function () {

  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false },
  ];
  const hideCheckedItems = false;
  const searchTerm = '';

  function findById(id) {
    return items.find(item => item.id === id);
  }

  function addItem(name) {
    try {
      Item.validateName(name);
      items.push(Item.create(name));
    } catch (error) {
      console.log(`Cannot add item: ${error.message}`);
    }
  }

  function findAndToggleChecked(id) {
    const item = this.findById(id);
    item.checked = !item.checked;
  }

  function findAndUpdateName(id, newName) {
    try {
      Item.validateName(newName);
      findById(id).name = newName;
      
    } catch (error) {
      console.log(`Cannot update name: ${error.message}`);
    }
  }

  function findAndDelete(id) {
    const index = items.findIndex(item => item.id === id);
    items.splice(index, 1);
  }

  function toggleCheckedFilter(){
    this.hideCheckedItems = !this.hideCheckedItems;
  }

  function setSearchTerm(val){
    this.searchTerm = val;
  }
  
  return {
    items, 
    hideCheckedItems, 
    searchTerm, 
    findById, 
    addItem, 
    findAndToggleChecked, 
    findAndUpdateName, 
    findAndDelete, 
    toggleCheckedFilter, 
    setSearchTerm
  };
}());