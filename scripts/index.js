/* global shoppingList, $, store */
'use strict';

$(document).ready(function () {
  shoppingList.bindEventListeners();
  shoppingList.render();
});

console.log(store);
