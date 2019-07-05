"use strict";

function createUpdatedCollection(collectionA, objectB) {
  const collectionC = handleSpecialCount(countSameElements(collectionA));
  return collectionC.map(item => {
    if (objectB.value.indexOf(item.key) > -1) {
      return { ...item, count: calculateCount(item.count) };
    }
    return { ...item };
  });
}

function handleSpecialCount(collection) {
  for (let index = 0; index < collection.length; index++) {
    const element = collection[index].key;
    if (element.indexOf("-") > -1) {
      const splitResult = element.split("-");
      collection[index] = { key: splitResult[0], count: splitResult[1] };
    }
  }
  return collection;
}

function countSameElements(collectionA) {
  let result = [];
  for (let index = 0; index < collectionA.length; index++) {
    const element = collectionA[index];
    if (findElement(result, element)) {
      result = result.map(item =>
        item.key === element ? { ...item, count: item.count + 1 } : { ...item }
      );
    } else {
      result.push({ key: element, count: 1 });
    }
  }

  return result;
}

function findElement(result, element) {
  return result.find(item => item.key === element);
}

function calculateCount(count) {
  return (count -= Math.floor(count / 3));
}
