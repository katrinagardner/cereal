var cereal=process.argv[2];
var random=(Math.floor(Math.random()*9))+1;
var array1=["Apple", "Cap'n", "Cinammon", "Cocoa", "Frosted", "Fruit", "Honey Bunches of", "Raisin", "Shredded","Toasted"]
var array2=["Bran", "Crunch", "Crisp", "Flakes", "Jacks", "Krispies", "Loops", "Pebbles", "Pops", "Puffs"]

for (i=0; i< cereal;i++){
  console.log(array1[i], array2[i])

}
