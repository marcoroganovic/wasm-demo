if(WebAssembly) { 

  fetch("add.wasm")
    .then(res => res.arrayBuffer())
    .then(bytes => WebAssembly.instantiate(bytes))
    .then(({ instance }) => {
      const add = instance.exports.add;
      console.log(add(10));
    });

}
