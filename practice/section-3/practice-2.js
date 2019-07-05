"use strict";

function createUpdatedCollection(collectionA, objectB) {
  let result = [];
  for (const item of collectionA) {
    if (objectB.value.indexOf(item.key) > -1) {
      result.push({ ...item, count: calculateCount(item.count) });
    } else {
      result.push({ ...item });
    }
  }
  return result;
}

function calculateCount(count) {
  return (count -= Math.floor(count / 3));
}
