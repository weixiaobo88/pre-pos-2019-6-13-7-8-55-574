"use strict";

function createUpdatedCollection(collectionA, objectB) {
  let result = [];
  for (const item of collectionA) {
    if (objectB.value.indexOf(item.key) > -1) {
      result.push({ ...item, count: item.count - 1 });
    } else {
      result.push({ ...item });
    }
  }
  return result;
}
