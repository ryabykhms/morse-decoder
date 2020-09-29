const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

const MORSE_SYMBOLS = {
  10: ".",
  11: "-",
};

function getChunks(str, size) {
  let length = Math.round(str.length / size);
  return Array.from({ length }, (_, i) => str.slice(i * size, i * size + size));
}

function decode(expr) {
  const exprArr = getChunks(expr, 10);
  let phrase = "";
  exprArr.forEach((letter) => {
    const letterCopy =
      letter.length < 10 ? "0".repeat(10 - letter.length) + letter : letter;
    const letterArr = getChunks(letterCopy, 2);
    let decodedLetter = "";
    if (letter === "**********") {
      decodedLetter = " ";
    } else {
      letterArr.forEach((char) => {
        if (char !== "00") {
          const charDecoded = MORSE_SYMBOLS[char];
          decodedLetter += charDecoded;
        }
      });
    }
    phrase +=
      MORSE_TABLE[decodedLetter] === undefined
        ? " "
        : MORSE_TABLE[decodedLetter];
  });
  return phrase;
}
module.exports = {
  decode,
};
