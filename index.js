// typy proste i operacje arytmetyczne
let a = 5;
let b = 10;

const sum = a + b;

console.log("a + b = ");
console.log(a + b);

console.log("Sum function result:")
console.log(sum)

// tablica
const arrayNumbers = [1, 2, 3, 5];

// deklaracja funkcji nazwanej
function mapperFunction(item) {
    return item * 2;
}

// mapowanie na tablicach
const mapperResult = arrayNumbers.map(mapperFunction);
console.log(arrayNumbers);
console.log("mapper as named function:");
console.log(mapperResult);

// zadanie - mapperFunction jako funkcja nienazwana
console.log("mapper as lambda function:");
console.log(arrayNumbers.map(item => item * 2));

// funkcja lambda (anonimowa) () => {}
const filtered = mapperResult.filter(item => item > 5)
console.log(filtered);

// obiekty
const bawara = {
    power: {
        value: 190,
        label: 'Horse power',
        units: 'hP'
    },
    avgConsumption: 8,
    lastErrors: ["error1", "error2", "error 501"],
    detailedErrors: [
        {
            status: "error",
            code: "501",
            message: "Unable to connect with engine module"
        },
        {
            status: "warning",
            code: "301",
            message: "..."
        }
    ],
    drive: () => {
        // TODO: implement drive
    }
};