const arrOfNumbers: Array<number> = [1, 1, 2, 3, 5];
const arrOfStrings: Array<string> = ["Hello", "Dude"];

function reverse<T>(array: T[]): T[] {
    return array.reverse();
}
// Данная функция будет подстраиваться под тип 

reverse(arrOfNumbers);
reverse(arrOfStrings);
