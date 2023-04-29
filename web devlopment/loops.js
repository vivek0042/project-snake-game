let animal={
    name : "elephent",
    legs : 4,
    ears : 2

}

for(let key in animal){
    console.log(key,animal[key]);
}

for(let animals of animal){
    console.log(animals)
}