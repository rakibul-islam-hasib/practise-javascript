function toWords(number) {
    const ones = [
      "zero",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen",
      "seventeen",
      "eighteen",
      "nineteen"
    ];
    const tens = [
      "",
      "",
      "twenty",
      "thirty",
      "forty",
      "fifty",
      "sixty",
      "seventy",
      "eighty",
      "ninety"
    ];
  
    if (number < 20) return ones[number];
    if (number < 100)
      return tens[Math.floor(number / 10)] + (number % 10 !== 0 ? " " + ones[number % 10] : "");
    if (number < 1000)
      return (
        ones[Math.floor(number / 100)] +
        " hundred " +
        (number % 100 !== 0 ? toWords(number % 100) : "")
      );
  
    return number;
  }
  
  const inputNumber = 12;
  const outputWords = toWords(inputNumber);
  
  console.log(outputWords); // Output: "one hundred twenty three"
  