"use strict";

function countSameElements(collection) {
  let result = {};
  for (let index = 0; index < collection.length; index++) {
    const element = collection[index];

    if (findElementInObejct(result, element)) {
      result = { ...result, [element]: result[element] + 1 };
    } else {
      result[element] = 1;
    }
  }
  return mapObjectToCollection(removeSingleElement(result));
}

function findElementInObejct(object, element) {
  return object[element];
}

function mapObjectToCollection(object) {
  return Object.keys(object).map(item => ({ key: item, count: object[item] }));
}

function removeSingleElement(object) {
  const keys = Object.keys(object);
  for (let index = 0; index < keys.length; index++) {
    const element = keys[index];
    if (object[element].count === 1) {
      delete object[element];
    }
  }
  return object;
}
