function once(fn) {
  let called = false;
  let result;
  return function (...args) {
    if (!called) {
      result = fn.apply(this, args);
      called = true;
    }
    return result;
  };
}
once(() => {
  console.log("Hello");
})();

let x = "123";
console.log(x, typeof x);
//x=Number(x);
x=parseInt(x);
console.log(x, typeof x);