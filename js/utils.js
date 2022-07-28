const checkWordsCount = (wordsLine, maxSymbol) => wordsLine.length < maxSymbol;
const checkEscapeEnter = (evt) => evt.key === 'Escape';

export {checkWordsCount, checkEscapeEnter};
