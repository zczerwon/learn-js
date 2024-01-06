// typy proste i operacje arytmetyczne
let a = 5;
let b = 10;

const sum = a+b;

console.log("a + b = ");
console.log(a + b);

console.log("Sum function result:")
console.log(sum)

// tablica
const arrayNumbers = [1, 2, 3, 5];

// deklaracja funkcji nazwanej
function mapperFunction( item ) {
    return item * 2;
}

// mapowanie na tablicach
const mapperResult = arrayNumbers.map(mapperFunction);
console.log(arrayNumbers);
console.log("mapper as named function:");
console.log(mapperResult);

// zadanie - mapperFunction jako funkcja nienazwana
console.log("mapper as lambda function:");
console.log(arrayNumbers.map(item => item *2));

// funkcja lambda (anonimowa) () => {}
const filtered = mapperResult.filter( item => item > 5 )
console.log(filtered);