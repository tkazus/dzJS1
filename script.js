// 1
let students = ["Иван", "Анна", "Петр", "Мария", "Олег"];

for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}

console.log("Количество студентов:", students.length);
console.log("Первый студент:", students[0]);
console.log("Последний студент:", students[students.length - 1]);


// 2
let numbers = [10, 25, 7, 40, 15, 30];

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    sum += numbers[i];
}

console.log("Сумма:", sum);
console.log("Среднее:", sum / numbers.length);

console.log("Числа больше 20:");
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 20) {
        console.log(numbers[i]);
    }
}


// 3
let students = [
    { name: "Иван",  age: 20, group: "ппп", average: 4.5 },
    { name: "Анна",  age: 19, group: "ппп", average: 5.0 },
    { name: "Петр",  age: 21, group: "ппп", average: 3.2 },
    { name: "Мария", age: 20, group: "ппп", average: 4.0 },
    { name: "Олег",  age: 22, group: "ппп", average: 2.8 }
];

for (let i = 0; i < students.length; i++) {
    let s = students[i];
    console.log("Имя:", s.name);
    console.log("Возраст:", s.age);
    console.log("Группа:", s.group);
    console.log("Средний балл:", s.average);
    console.log("---");
}

console.log("Студенты со средним баллом 4 и выше:");
for (let i = 0; i < students.length; i++) {
    if (students[i].average >= 4) {
        console.log(students[i].name, "-", students[i].average);
    }
}


// 4
function sum(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { return a / b; }
function square(number) { return number * number; }

console.log(sum(2, 3));        // 5
console.log(sum(10, 15));      // 25

console.log(subtract(10, 4));  // 6
console.log(subtract(3, 7));   // -4

console.log(multiply(2, 5));   // 10
console.log(multiply(6, 6));   // 36

console.log(divide(10, 2));    // 5
console.log(divide(9, 3));     // 3

console.log(square(4));        // 16
console.log(square(7));        // 49



// 5
function getStudentStatus(average) {
    if (average === 5 || average >= 4.5) {
        return "Отличник";
    } else if (average === 4 || average >= 3.5) {
        return "Хорошист";
    } else if (average === 3 || average >= 2.5) {
        return "Удовлетворительно";
    } else {
        return "Неуспевает";
    }
}

console.log(getStudentStatus(4.8)); // Отличник
console.log(getStudentStatus(3.7)); // Хорошист
console.log(getStudentStatus(2.2)); // Неуспевает
console.log(getStudentStatus(3.0)); // Удовлетворительно
console.log(getStudentStatus(5));   // Отличник



// 6
let student = {
    name: "Иван",
    age: 20,
    group: "ИСП-21",
    average: 4.5
};

document.getElementById("name").textContent = "Имя: " + student.name;
document.getElementById("age").textContent = "Возраст: " + student.age;
document.getElementById("group").textContent = "Группа: " + student.group;
document.getElementById("average").textContent = "Средний балл: " + student.average;


// 7
let title = document.getElementById("title");
let text = document.getElementById("text");
let button = document.getElementById("button");

button.addEventListener("click", function () {
    title.textContent = "Заголовок изменён!";
    text.textContent = "Абзац тоже изменён!";
    title.style.color = "blue";
    title.style.fontSize = "40px";
});


// 8
let input = document.getElementById("name");
let button = document.getElementById("button");
let result = document.getElementById("result");

button.addEventListener("click", function () {
    let name = input.value.trim();

    if (name === "") {
        result.textContent = "Введите имя";
    } else {
        result.textContent = `Привет, ${name}!`;
    }
});


// 9
function getStudentStatus(average) {
    if (average === 5 || average >= 4.5) return "Отличник";
    if (average === 4 || average >= 3.5) return "Хорошист";
    if (average === 3 || average >= 2.5) return "Удовлетворительно";
    return "Неуспевает";
}

let form = document.getElementById("form");
let result = document.getElementById("result");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let age = document.getElementById("age").value.trim();
    let group = document.getElementById("group").value.trim();
    let average = document.getElementById("average").value.trim();

    if (!name || !age || !group || !average) {
        result.textContent = "Заполните все поля!";
        return;
    }

    if (Number(age) < 15 || Number(age) > 100) {
        result.textContent = "Некорректный возраст!";
        return;
    }

    let status = getStudentStatus(Number(average));

    result.innerHTML = `
        <h2>Студент зарегистрирован</h2>
        <p>Имя: ${name}</p>
        <p>Возраст: ${age}</p>
        <p>Группа: ${group}</p>
        <p>Средний балл: ${average}</p>
        <p><strong>Статус: ${status}</strong></p>
    `;
});