//find-second-largest-number-in-an-array-js


let randomLength = Math.floor(Math.random() * 10) + 2; //random length of tha randomArray (max 10 of length  -  min 2 of length)

let randomArrayElements = Array.from({ length: randomLength }, () => Math.floor(Math.random() * 10) + 2);//generated random arry

console.log(randomArrayElements);

function secondLargestNumber(e) {

    const uniqueSet = new Set(e); // remove any duplicates array

    const backToArray = [...uniqueSet]; // convert elements back again to array

    backToArray.sort((a, b) => {     // sort elements from bigest one to smallest one 
        return b - a;
    });

    console.log(backToArray[1]);  //print second largest element
}

secondLargestNumber(randomArrayElements) // function call with random parameters








