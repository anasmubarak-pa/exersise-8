function groupAnagram(anagramList:Array<string>):Array<Array<string>>
{
    let angramMap = new Map()
    let i:number = 0

    type Lookupmap = {
        [key:string]:number
    }
    
    let lookupmap:Lookupmap = {
        'a':1,'b':2,'c':3,'d':4,'e':5,'f':6,'g':7,'h':8,'i':9,'j':10,'k':11,'l':12,'m':13,'n':14,'o':15,'p':16,'q':17,'r':18,'s':19,'t':20,'u':21,'v':22,'w':23,'x':24,'y':25,'z':26
    }
    for(let word of anagramList)
    {
        let lookuparray:Array<number> = new Array(26).fill(0)
        for(let letter of word)
        {
            lookuparray[lookupmap[letter]]++
        }
        if(angramMap.get(String(lookuparray)))
        {
            angramMap.get(String(lookuparray)).push(i)
        }
        else
        {
            angramMap.set(String(lookuparray),[i])
        }
        i++
    }

    let returnarray:Array<Array<string>> = []

    angramMap.forEach((e)=>{
        let innerarray:Array<string> = []
        e.forEach((element:number) => {
            innerarray.push(anagramList[element])
        });
        returnarray.push(innerarray)
    })
    return returnarray
}

console.log(groupAnagram(["care", "race", "acre", "dog", "god", "cat"]))