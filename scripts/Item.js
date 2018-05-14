'use strict';
/* global cuid */

//Fix Error 
const Item = (function () {

  const item = {};
  function validateName(name) {
    if (!name) {
      alert('Please enter a valid item');
      throw new TypeError('Name does not exist.');
    }
  }

  function create(name) {
    return {
      id: cuid(),
      name,
      checked: false,
    };
  }

  return {
    item, validateName, create
  };
}());

//Item.validateName();