function wordCounter(sentence:string)
{
    return (sentence.split(' ')).length
}

console.log(wordCounter("Hello world"))
console.log(wordCounter("This is a sample sentence."))
console.log(wordCounter("Programming is fun!"))