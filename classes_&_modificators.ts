class TS {
    version: string;
    constructor(version: string) {
        this.version = version;
    }
    info(name: string) {
        return `[${name}]: Typescript version is ${this.version}`;
    }
}

class Car {
    readonly model: string;
    readonly numberOfWheels: number = 4;

    constructor(theModel: string) {
        this.model = theModel;
    }
}

// Аналогичнно
// class Car {
//     readonly numberOfWheels: number = 4;
//     constructor(readonly model: string) {}
//   }

// --- Модификаторы

class Animal {
    protected voice: string = "";
    public color: string = "black"; // Можно не писать явно public для публичных св-в

    constructor() {
        this.go();
    }

    private go() {
        console.log("Go");
    }
}

class Cat extends Animal {
    setVoice(voice: string): void {
        this.voice = voice;
    }
}

const cat = new Cat();
// cat.voice - не вызовется, т.к. св-во voice имеет модификатор protected
// Но можно вызвать через setVoice
cat.setVoice("Mew");
console.log(cat.color);

// --- Абстрактные классы

// От абстрвктных классов можно наследоваться, но при этом этот класс не компилируется (в js)

abstract class Component {
    abstract render(): void;
    abstract info(): string;
}

class AppComponent extends Component {
    render(): void {
        console.log("Component on render");
    }
    info(): string {
        return "This is info";
    }
}
