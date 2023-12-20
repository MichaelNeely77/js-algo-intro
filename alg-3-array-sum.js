// Create a function that sums up numbers in an array

function sumUp(numbers) {
    let sum = 0;

    for( let i = 0; i < numbers.length; i++) {

        sum += numbers[i];
    }
    return sum;
}

const array = [15, 20, 28];
console.log(sumUp(array));