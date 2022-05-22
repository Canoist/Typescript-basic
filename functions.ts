// Указываем тип параметра, также можно указать, какой тип возвращает функция
// Если функция ничего не возвращает, тогда тип void

function sayName(name: string): void {
    console.log("name");
}

// Если функция возвращается с ошибкой и никогда не заканчивает свое выполнение
// либо постоянно что-либо делает, тогда тип never

function throwError(message: string): never {
    throw new Error(message);
}

function infinit(): never {
    while (true) {}
}

// Перегрузка функций

function add(a: number, b: number): number {
    return a + b;
}

interface MyPosition {
    x: number | undefined;
    y: number | undefined;
}

interface MyPositionWithDefault extends MyPosition {
    default: string;
}

function position(): MyPosition;
function position(a: number): MyPositionWithDefault;
function position(a: number, b: number): MyPosition;

function position(a?: number, b?: number) {
    if (!a && !b) {
        return { x: undefined, y: undefined };
    }
    if (a && !b) {
        return { x: a, y: undefined, default: a.toString() };
    }
    return { x: a, y: b };
}

console.log("Empty ", position());
console.log("Only one param ", position(42));
console.log("Two params ", position(10, 15));

// Чтобы запустить, в консоли вбиваем "tsc .\functions.ts"
// Затем "node .\functions.js"
