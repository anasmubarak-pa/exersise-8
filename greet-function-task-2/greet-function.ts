function greetPeople(name:string,greeting = 'Hello'):string
{
    return greeting+', '+name
}

console.log(greetPeople("Alice"))
console.log(greetPeople("Bob","Hi"))