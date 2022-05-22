type Login = string;
const login: Login = "admin";

// const login2: Login = 2; --- Typescript ругается

type ID = string | number;
const id1: ID = 1234;
const id2: ID = "12345";

// INTERFACE
// В основном служат для объектов и классов

interface Rect {
    readonly id: string;
    color?: string;
    // Знак ? перед : озночает что параметр необязятелен
    size: {
        width: number;
        height: number;
    };
}

const rect1: Rect = {
    id: "1234",
    size: {
        width: 20,
        height: 30,
    },
};

const rect2 = {} as Rect;
const rect3 = <Rect>{};

// Наследование Interface'ов

interface RectWithArea extends Rect {
    getArea: () => number;
}

const rect4: RectWithArea = {
    id: "123",
    size: {
        width: 20,
        height: 20,
    },
    getArea(): number {
        return this.size.width * this.size.height;
    },
};

// ================

interface IClock {
    time: Date;
    setTime(date: Date): void;
}

class Clock implements IClock {
    time: Date = new Date();
    setTime(date: Date): void {
        this.time = date;
    }
}

// ================

interface Styles {
    [key: string]: string;
}

const css: Styles = {
    border: "1px solid black",
    marginTop: "2px",
    borderRadius: "5px",
};
