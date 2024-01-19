let sentence = "This is a test sentence.";

console.log(sortSentence(sentence));

function sortSentence(sentence)
{
    let letters = sentence.split("");
    letters.sort();
    return letters.join("");
}