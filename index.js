var kittens = ["Milo","Otis","Garfield"] //define your array here

// Add your functions and code here


function destructivelyAppendKitten(name){
  kittens.push(name);
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
}

function destructiveRemoveLastKitten(){
  kittens.slice(0, kittens.lenght -1)
}
