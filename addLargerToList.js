const addLargerToList = (list, item) => {
  let isGreater = true;
  for (let i = 0; i < list.length; i++) {
    if (
      typeof item === "string" &&
      typeof list[i] === "string" &&
      item.toLowerCase() < list[i].toLowerCase()
    ) {
      isGreater = false;
      break;
    } else if (
      typeof item === "number" &&
      typeof list[i] === "number" &&
      item < list[i]
    ) {
      isGreater = false;
      break;
    } else {
      isGreater = false;
      break;
    }
  }
  if (isGreater) {
    list.push(item);
    return list;
  } else {
    return list;
  }
};
console.log(addLargerToList(["k", "n", "o"], "c"));
