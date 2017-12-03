if(WebAssembly) { 

  fetch("operations.wasm")
    .then(res => res.arrayBuffer())
    .then(bytes => WebAssembly.instantiate(bytes))
    .then(({ instance }) => {
      const { add, addAllPositive, divide, mult, sub } = instance.exports;
      console.log(addAllPositive(10));
      console.log(add(1, 2));
    });

}
