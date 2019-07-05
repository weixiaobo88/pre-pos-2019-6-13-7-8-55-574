"use strict";

function countSameElements(collection) {
  let result = [];
  for (let index = 0; index < collection.length; index++) {
    const element = collection[index];

    if (findElement(result, element)) {
      result = result.map(item =>
        item.name === element ? { ...item, summary: item.summary + 1 } : item
      );
    } else {
      result.push({ name: element, summary: 1 });
    }
  }

  return handleSpecialCount(result);
}

function findElement(array, element) {
  return array.find(item => item.name === element);
}

function handleSpecialCount(collection) {
  let result = [...collection];

  for (let index = 0; index < collection.length; index++) {
    const element = collection[index];
    result = handleSpecialElement(result, element);
  }
  return result;
}

function handleSpecialElement(result, element) {
  const matchDefinedTypeResult = matchDefinedType(element.name);

  if (matchDefinedTypeResult) {
    const character = matchDefinedTypeResult.key;
    const count = matchDefinedTypeResult.count;
    const existedElement = result.find(item => item.name === character);

    if (existedElement) {
      result = removeElement(result, element);
      result = addCountToExistedElement(result, matchDefinedTypeResult);
    } else {
      const curerntElementIndex = result.findIndex(
        item => item.name === element.name
      );

      result[curerntElementIndex] = { name: character, summary: count };
    }
  } else if (element.summary === 1) {
    result = removeElement(result, element);
  }

  return result;
}

function addCountToExistedElement(array, elmentWithNewCount) {
  const { key, count } = elmentWithNewCount;
  return array.map(item =>
    item.name === key ? { ...item, summary: item.summary + count } : item
  );
}

function removeElement(array, element) {
  return array.filter(item => item.name !== element.name);
}

function matchDefinedType(element) {
  const ARRAY_TYPE = /^(\w)\[(\d+)\]$/;
  const DASH_TYPE = /^(\w)-(\d+)$/;
  const COLON_TYPE = /^(\w):(\d+)$/;
  const definedTypes = [ARRAY_TYPE, DASH_TYPE, COLON_TYPE];
  for (let index = 0; index < definedTypes.length; index++) {
    const type = definedTypes[index];
    const matchResult = element.match(type);
    if (matchResult) {
      const character = matchResult[1];
      const count = parseInt(matchResult[2]);

      return { key: character, count };
    }
  }
  return null;
}
