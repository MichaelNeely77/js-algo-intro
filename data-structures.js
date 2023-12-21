const name = 'Michael';

const ages = [30, 49, 74, 57];

ages.push(60); // => Constant Time Comlexity: 0(1)
ages.unshift(60); // => Linear Time Complexity: 0(n)
const myAge = ages[3];

const namePopularity = [
    {name: 'Michael', usaqes: 5},
    {name: 'Patsy', usages: 37}
];

const michaelUsages = namePopularity.find(pers=> pers.name === 'Michael').usages; // BEST CASE: Const time Complexity

const nameMap = {
    'Michael': 5,
    'Patsy': 37
}

const michaelUsages2 = nameMap['Michael'];