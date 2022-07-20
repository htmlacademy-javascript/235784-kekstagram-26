const getRandom = (firstNumber, lastNumber) => Math.round(Math.random() * (lastNumber - firstNumber) + firstNumber);
const checkWordsCount = (wordsLine, maxSymbol) => wordsLine.length < maxSymbol;
const checkEscapeEnter = (evt) => evt.key === 'Escape';

export {getRandom, checkWordsCount, checkEscapeEnter};
