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
  return mapObjectToCollection(handleSpecialCount(result));
}

function findElementInObejct(object, element) {
  return object[element];
}

function mapObjectToCollection(object) {
  return Object.keys(object).map(item => ({ key: item, count: object[item] }));
}

function handleSpecialCount(object) {
  const keys = Object.keys(object);
  for (let index = 0; index < keys.length; index++) {
    const element = keys[index];
    if (element.indexOf("-") > -1) {
      const splitResult = element.split("-");
      delete object[element];
      object = { ...object, [splitResult[0]]: parseInt(splitResult[1]) };
    } else if (object[element] === 1) {
      delete object[element];
    }
  }
  return object;
}
