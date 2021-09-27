// xx . push(Math.floor(Math.random() * 6 + 1) + Math.floor(Math.random() * 6 + 1))

let arr1000rols = function () {
    let arr = []
    for (let i = 0; i < 1000; i++) {
        arr.push(Math.floor(Math.random() * 6 + 1) + Math.floor(Math.random() * 6 + 1))
    }
    return arr
}

let splitter = function () {
 
    let array = []
    let arr = arr1000rols()
    for (i = 1; i <= 12; i++) {
        for (j = 0; j < arr.length; j++) {
        if (arr[j] == i){array.push(i)}
        }
    }return array
}

let contador = function(x,y){
    let counter = 0
    for(let i = 0; i < x.length;i++){
    if (x[i] == y){counter++}
}return  y + ' : ' + counter
}



let rolandoDados = function(){
    let split = splitter()
    let result = [contador(split,2),contador(split,3),contador(split,4),contador(split,5),
        contador(split,6),contador(split,7),contador(split,8),contador(split,9),
        contador(split,10),contador(split,11),contador(split,12)]
        return result
}

let getNumber = function(){
    let arr = rolandoDados()
    let split = []
    let churrus = []
    let result = []
        for(i = 0; i < arr.length; i++){
            split.push(arr[i].split(' '))
        }
        for(i = 0; i < split.length; i++){
            churrus.push((split[i])[2])
        }
        for(i = 0; i < churrus.length; i++){
            result.push(parseInt(churrus[i]))
        } return result
}

let getElement = function(x){
    let arr = getNumber()
    return arr[x]
}



function crateBar (x,y){
    const newdiv = document.createElement("div");
    const newContent = document.createTextNode(x);
    newdiv.style.width = `${y * 1.8}px`;
    // newdiv.style.height = `${y}px`;
    newdiv.appendChild(newContent);
    const bodyy = document.querySelector(".divMother");
    bodyy.appendChild(newdiv)
}

// crateBar(rolandoDados()[0])
// crateBar(rolandoDados()[1])
// crateBar(rolandoDados()[2])
// crateBar(rolandoDados()[3])
// crateBar(rolandoDados()[4])
// crateBar(rolandoDados()[5])
// crateBar(rolandoDados()[6])
// crateBar(rolandoDados()[7])
// crateBar(rolandoDados()[8])
// crateBar(rolandoDados()[9])
// crateBar(rolandoDados()[10])


crateBar(rolandoDados()[0],getElement(0))
crateBar(rolandoDados()[1],getElement(1))
crateBar(rolandoDados()[2],getElement(2))
crateBar(rolandoDados()[3],getElement(3))
crateBar(rolandoDados()[4],getElement(4))
crateBar(rolandoDados()[5],getElement(5))
crateBar(rolandoDados()[6],getElement(6))
crateBar(rolandoDados()[7],getElement(7))
crateBar(rolandoDados()[8],getElement(8))
crateBar(rolandoDados()[9],getElement(9))
crateBar(rolandoDados()[10],getElement(10))


