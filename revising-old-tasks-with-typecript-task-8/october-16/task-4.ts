function anagramChecker(word1:string,word2:string)
{
    let wordmap = new Map()
    for(let letter of word1)
    {
        wordmap.set(letter,((wordmap.get(letter)||0)+1))
    }
    for(let letter of word2)
    {
        if(wordmap.get(letter))
        {
            if(wordmap.get(letter))
            {
                wordmap.delete(letter)
            }
        }
        else
        {
            return false
        }
    }
    return true
}

console.log(anagramChecker("listen", "silent"))
console.log(anagramChecker("restful", "fluster"))
console.log(anagramChecker("hello", "World!"))