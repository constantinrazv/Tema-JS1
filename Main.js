

// O functie care primeste 2 parametri(arr - array de nr intregi si x - numar) si verifica daca x exista in array

function search(numberList, nr1){
    
    for(let i = 0; i <= numberList.length; i++) {
        if(numberList[i] === nr1){
            return true;  
        }        
    } 
    return false;
}
console.log(search([1, 2, 4, 6], 6));

// O functie care intoarce maximul dintr-un array primit ca parametru

function searchMax(numberList){
    
    for(let i = 0; i < numberList.length; i++) {
        var biggestNum = 0;
        if(numberList[i] > biggestNum){
            biggestNum = numberList[i];       
        }
          
    } 
    return biggestNum;
}
console.log(searchMax([1, 2, 4, 6, 20]));


// O functie care intoarce suma dintre max si min, dintr-un array primit ca parametru

function sumMinMax(numberList){
    var biggestNum = numberList[0];
    var smallestNum = numberList[0];
    
    
    for(let i = 0; i < numberList.length; i++) {
        if(numberList[i] > biggestNum){
            biggestNum = numberList[i];     
        }  
       else if (numberList[i] < smallestNum){
            smallestNum = numberList[i];
            } 
    } 
    return smallestNum+biggestNum;
}
console.log(sumMinMax([1,2,3,5,6]));


// O functie care verifica daca exista duplicate intr-un array primit ca parametru

function duplicNum(numberList){
    var count = [];
    for(var i = 0; i <= numberList.length; i++) {
        if (count[numberList[i]] === undefined) {
            count[numberList[i]] = 1;
        } else {
            return true;
        } 
    }
    return false;
}
console.log(duplicNum([1,2,5,7,9]));

// O functie care intoarce produsul numerelor pozitive intr-un array primit ca parametru

function prodPozitive(numberList){
    var p = 1;
    for(var i = 0; i<numberList.length; i++){
        if (numberList[i]>0){
            p*=numberList[i];
        }
    }
    return p;
}
console.log(prodPozitive([-1, -2, 3, -3]));

// O functie care verifica daca un string primit ca parametru este palindrom (inversul == originalul, ex: abcba == abcba, abca != acba

function polidrom(text) {
    let textReverse = "";
    for(i=text.length-1; i>=0; i--) {
        textReverse+=text[i];
    } if (textReverse.toLowerCase==text.toLowerCase) {
        return true;
    }
    return false;
}

console.log(polidrom("Lupul"));

function strPalindrom(str) {
    for (i = 0; i < str.length / 2; i++) {
        if (str[i].toLowerCase !== str[str.length - i - 1].toLowerCase) {
            return str + " is not a palindrom"
        }
    }
    return str + " is a palindrom"
}
console.log(strPalindrom("Laura"));
console.log(strPalindrom("acd"));