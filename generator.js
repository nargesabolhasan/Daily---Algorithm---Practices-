function* catGenerator(cats) {
  for (const cat of cats) {
    yield cat;
  }
}

const cats = [
  { id: "1", name: "Abyssinian" },
  { id: "2", name: "Bengal" },
  { id: "3", name: "Birman" },
];

const generator = catGenerator(cats);
console.log([...generator]);

function processCats() {
  let result = [];
  do {
    result = generator.next();
    if (!result.done) {
      console.log("result:", result.value);
    }
  } while (!result.done);
}

processCats();
