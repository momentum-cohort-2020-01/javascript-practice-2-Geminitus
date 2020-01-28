// 1. Create a function called "remove" that takes an array and a potential
// member of the array, and returns a new array with that member removed.
// For example, `remove(['Cadence', 'Ordel', 'Marion'], 'Marion')` results
// in `['Cadence', 'Ordel']`.
//
// If the potential member is not in the array, return the array unchanged.
// If the potential member is in the array, remove all instances of it from the array.
function remove(arr, rm) {
    let newArray = [];
    console.log(arr)
    for (let i = 0; i < arr.length;) {
        if (arr[i] !== rm) {
            newArray.push(arr[i])
            console.log("This is the new array [" + newArray + "]. Amount of times Looped " + i)
            i++
        }
        else i++ 
    }
    console.log("this is the finished array [" + newArray + "].")
    return newArray
}
remove(['Cadence', 'Ordel', 'Marion'], 'Marion')
// 2. Revisit your "remove" function. Make sure that it does not change the original
// array but instead returns a new array.

// 3. Create a function called "sum" that takes an array of numbers and
// returns the sum of those numbers.
function sum(set) {
    let tot = 0
    console.log (set)
    for (let i = 0; i < set.length; i++){
        tot = tot + set[i];
        console.log(tot,i)
    }
    console.log (tot)
    return tot
}
// 4. Create a function called "average" that takes an array of numbers
// and returns the average of those numbers.
function average(arr) {
    let a = 0
    let b = 0
    let tot = 0
    let un
    if (arr.length > 0) {
        for (let i = 0; i < arr.length; i++) {
            tot = tot + arr[i];
        }
        b = arr.length
        a = tot / b
        console.log(a)
        return a;
    }
    else un
}
// 5. Create a function called "minimum" that takes an array of numbers and
// returns the smallest number in that array.
function minimum(arr) {
    let a = arr[0];
    for (let i = 0; i < arr.length;){
        if (a > arr[i]) {
            a = arr[i]
            i++
        }
        else i++
    }
    return a
}
// 6. There are many techniques to sort arrays in programming. Your programming
// language will likely include the ability to do this. We are going to
// implement sorting ourselves, however.
//
// A "selection sort" is one of the most simple sorting algorithms. To implement it,
// you start with an unsorted array of numbers. You search the array and find the
// smallest number in the array. You then insert that into a new array as the first
// element and remove it from the original array. You continue doing this until
// there are no numbers left in the original array.
//
// Create a function called selectionSort that takes an array of numbers and returns
// a sorted array using the above technique.
//
// Note 1: You do not actually want to delete things from the original array. You
// should copy it first. To copy an array, use the following code:
//
// var arrayCopy = array.slice(0);
//
// Think about why this works.
//
// Note 2: Selection sort can be implemented using one array. Read the explanation at
// https://courses.cs.vt.edu/csonline/Algorithms/Lessons/SelectionSort/index.html
// to see how. This may make more sense to you.
function selectionSort(arr) {
    let a = arr[0];
    let newArray = [];
    for (let i = 0; i < arr.length;) {
        for (let b = i; b <= arr.length;) {
            if (a > arr[b]) {
                a = arr[b]
                b++
            }
            else b++
        }
        newArray.push(a)
        i++
    }
    return newArray
}
// 7. Create a function called `textList` that takes an array and joins its elements
// into a string separated by commas.
//
// For example, `textList(['Cadence', 'Ordel', 'Marion'])` results in the string
// `"Cadence,Ordel,Marion"`.
