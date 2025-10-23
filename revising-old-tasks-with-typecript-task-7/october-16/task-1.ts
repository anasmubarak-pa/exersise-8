function primeFinder(number:number)
{
    for(let i=2;i<=number/2;i++)
    {
        if(number%i==0)
        {
            return false
        }
    }
    return true
}

console.log(primeFinder(7))
console.log(primeFinder(10))
console.log(primeFinder(29))