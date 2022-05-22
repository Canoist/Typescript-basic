interface Person {
    name: string;
    age: number;
}

type PersonKeys = keyof Person; // 'name' | 'age'

// Можем присвоить значение для key из ключей класса Person
let key: PersonKeys = "name";

type User = {
    _id: number;
    name: string;
    email: string;
    createdAt: Date;
};

// Исключаем некоторые параметры
type UserKeysNoMeta1 = Exclude<keyof User, "_id" | "createdAt">;
// Забираем некоторые параметры
type UserKeysNoMeta2 = Pick<User, "name" | "email">;
let userKey: UserKeysNoMeta1 = "email";
