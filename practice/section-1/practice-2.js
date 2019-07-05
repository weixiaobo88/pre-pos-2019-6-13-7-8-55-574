"use strict";

function collectSameElements(collectionA, collectionB) {
  let result = [];

  for (let index = 0; index < collectionA.length; index++) {
    const element = collectionA[index];
    for (let index = 0; index < collectionB.length; index++) {
      const elementOfCollectionB = collectionB[index];
      if (isElementInCollection(elementOfCollectionB, element)) {
        result.push(element);
      }
    }
  }
  return result;
}

function isElementInCollection(collection, element) {
  return collection.indexOf(element) > -1;
}
