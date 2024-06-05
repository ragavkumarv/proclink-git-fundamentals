console.log("It works 😊🎊");

function splitting(names) {
  return names.split(",");
}

const input = "Bhanu, Sumana, Akhila";
console.log(splitting(input));

const rev = splitting(input).reverse();
console.log(rev);
