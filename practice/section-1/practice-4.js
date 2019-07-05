"use strict";

function collectSameElements(collectionA, objectB) {
  let result = [];

  for (let index = 0; index < collectionA.length; index++) {
    const element = collectionA[index].key;
    const value = objectB.value;
    if (isElementInCollection(value, element)) {
      result.push(element);
    }
  }
  return result;
}

function isElementInCollection(collection, element) {
  return collection.indexOf(element) > -1;
}
