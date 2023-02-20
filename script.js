const student = "Шайтанов Максим Сергеевич"; // Очевидно, что здесь ваши личные Фамилия, Имя и Отчество

document.getElementById("student").innerHTML = student;

// Отсюда и ниже идет ваш код решения домашнего задания
// ...
let n1 = prompt ('Введите реальный результат первой команды') // ввод данных счета
let n2 = prompt ('Введите реальный результат второй команды') // ввод данных счета
let n3 = prompt ('Введите предпологаемый результат первой команды') // ввод данных счета
let n4 = prompt ('Введите предпологаемый результат второй команды') // ввод данных счет
let score_real = [n1,n2];
let score_expected = [n3,n4];
if
(n1>n2) {score_real=0} //cравнение результата
else if
(n1==n2) {score_real=1}
else
score_real=2
if
(n3>n4) {score_expected=0} // cравнение результата
else if
(n3==n4){score_expected=1}
else
score_expected=2
if (n2==n4,n1==n3)
{
    alert ('Счет и результат верны')
}
else if (score_real==score_expected)
{
    alert ('Счет не угадан, но результат угадали')
}
else
{
    alert ('Счет и результат не угдали')
}