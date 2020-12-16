// Объекты
/*const user = {
  firstName: "John",
  lastName: "Hek",
  age: 19,
  pet: {
    // Объект внутри объекта
    type: "Rabbit",
  },
};
console.log(user);
console.log(user.firstName);
console.log(user.lastName);
console.log(user.age);
console.log(user.pet.type);

const numbers = [1, 2, 3];
const numbersLength = [1, 2, 3].length;
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log("Length ", numbersLength);
*/

/* const numbers = [1, 2, 3];
numbers.push(4);
numbers.unshift(0);
console.log(numbers);
numbers.pop(); // удалить последний элемент
numbers.shift();
console.log(numbers);

const q = numbers.pop(); // вернуть элемент, чтобы с ним работать
console.log(q); 

for (let index = 0; index < numbers.length; index++) {
  console.log(numbers[index]); // в консоли все значения массива
}
*/

// ЗАДАЧА
// Поиск данных в массиве. Есть массив объектов (data). Есть 3 объекта. Сделать promt, в который вводится что-то и проверяется через for равен ли возраст значению объекта. Если равен, то вывожу объект в консоль, если нет - ошибка.
// Проверку на FirstName. Чтобы был вывод в любом регистре
const data = [
  {
    firstName: "Ashton",
    lastName: "Kutcher",
    age: 40,
  },
  {
    firstName: "Bradley",
    lastName: "Pitt",
    age: 54,
  },
  {
    firstName: "Hannah",
    lastName: "Dakota",
    age: 24,
  },
];

let flagUserAge = true;
const userAge = +prompt("Введите свой возраст", "");
let userLastName;

do {
  userLastName = prompt("Введите еще фамилию", "");
} while (!userLastName);

for (let i = 0; i < data.length; i++) {
  if (
    data[i].age === userAge &&
    data[i].lastName.toLowerCase() === userLastName.toLowerCase()
  ) {
    console.log("Вы - ", data[i]);
    flagUserAge = false;
    break;
  }
}
if (flagUserAge) {
  // если false, то не сработает
  console.log("You are loser - ", userLastName, " - ", userAge);
}
