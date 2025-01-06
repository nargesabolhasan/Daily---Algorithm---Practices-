console.log("Start");

setTimeout(() => {
  console.log("Macrotask: setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Microtask: Promise.then");
});

(async () => {
  console.log("Async block start");
  await Promise.resolve();
  console.log("Async block resume");
})();

console.log("End");
