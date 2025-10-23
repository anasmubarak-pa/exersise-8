function sumsFunction(...args:Array<number>)
{
    return args.reduce((a,b)=>a+b)
}

console.log(sumsFunction(1,2,3,4))