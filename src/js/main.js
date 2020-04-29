const movies = {
  crime: ["Побега из Шоушенка"],
  drama: ["Зелёная миля", "Форест Гамп", "Список Шилдера"],
  comedy: ["1+1"]
};

function myKeys(object) {
  let result = [];

  for (let key in object) {
    result.push(key);
  }

  return result;
}

function myValues(object) {
  let result = [];

  for (let key in object) {
    result.push(object[key]);
  }

  return result;
}

function myEntries(object) {
  let result = [];

  for (let key in object) {
    const arr = [];
    arr.push(key);
    arr.push(object[key]);
    result.push(arr);
  }

  return result;
}

console.log(myKeys(movies));
console.log(myValues(movies));
console.log(myEntries(movies));