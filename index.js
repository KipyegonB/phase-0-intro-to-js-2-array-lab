// Write your solution here!
const cats=["Milo", "Otis", "Garfield"]
//appends a cat to the end of the cats array
function destructivelyAppendCat(name){
    cats.push('Ralph')
}
function destructivelyPrependCat(name){
    cats.unshift('Bob')
}
function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
function appendCat(name){
    return [...cats, name]
}
function prependCat(name){
    return [name, ...cats]
}
function removeLastCat(name){
   return cats.slice(0,-1)
}
function removeFirstCat(){
    return cats.slice(1)
}