export const getCategories = elements => {
  let categoryList = [];

  elements.map(element => {
    if (categoryList.indexOf(element.category) === -1) {
      //We can also use .inclues() to find the element is in the array or not.

      categoryList.push(element.category);
    }
    return element;
  });
  return categoryList;
};
