/* Функция для получения случайного числа из диапазона */
function getRandom(firstNumber, lastNumber) {
  return Math.round(Math.random() * (lastNumber - firstNumber) + firstNumber);
}

getRandom(100,1);

function checkWordsCount(wordsLine, maxSymbol) {
  return wordsLine.length <= maxSymbol;
}

checkWordsCount('Данная строка проверочная и в ней 44 символа', 44);
