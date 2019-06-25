// O functie care primeste 2 parametri(arr - array de nr intregi si x - numar) si verifica daca x exista in array
function search(numberList, nr1) {
    for (let i = 0; i < numberList.length, i++;) {
        if (numberList[i].nr1 === nr1) {
            return true;
        }
    }
    return false;
}
