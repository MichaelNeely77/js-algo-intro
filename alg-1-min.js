function getMin(numbers) {

    if (!numbers.length) {
        throw new Error('Should not be an empty array');
    }
    let currentMinimum = numbers[0];

    for(let i = 1; i < numbers.length; i++) {
        if (numbers[i] < currentMinimum) {
            currentMinimum = numbers[i];
        }
    }

    return currentMinimum;
}

function getMin2(numbers) {
    if (!numbers.length) {
        throw new Error('Should not be an empty array');
    }
    for(let i = 0; i < numbers.length; i++) {
        let outerElement = numbers[i];
        for (let j = i + 1; j < numbers.length; j++) {
        let innerElement = numbers[j];
            if (outerElement > innerElement) {
                numbers[i] = innerElement;
                numbers[j] = outerElement;

                outerElement = numbers[i];
                innerElement = numbers[j];
                console.log(numbers[i], numbers[j]);
            }
        }
    }

    return numbers[0];
}

const testNumbers = [20, 15, -5, 2, 30, -100];


const min = getMin2(testNumbers);
console.log(min);



