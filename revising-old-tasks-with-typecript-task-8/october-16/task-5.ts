function frequncyCounter(word1:string)
{
    interface Wordmap{
       [key:string]:number
    }

    let wordmap:Wordmap = {}
    for(let letter of word1)
    {
        wordmap[letter] = (wordmap[letter]||0)+1
    }
    return wordmap
}

console.log(frequncyCounter("hello"))
console.log(frequncyCounter("programming"))