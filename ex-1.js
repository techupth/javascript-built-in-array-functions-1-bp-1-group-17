let words = ["hello", "world"];

function getWordLengths(words) {
  // Start coding here
  function totalwords(word){
    return word.length
  }
  return words.map(totalwords)
}

const result = getWordLengths(words);

console.log(result); // Output: [5, 5]
