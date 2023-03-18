const number = prompt('Введите номер числа Фибоначчи:');
let fibonacci = [];
fibonacci[0] = 0;
fibonacci[1] = 1;

for (let i = 2; i <= number; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  if (fibonacci[i] > number) {
    break;
  }
  console.log(fibonacci[i]);
}
