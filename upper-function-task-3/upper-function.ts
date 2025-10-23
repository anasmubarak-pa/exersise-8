function lowerUpper(string_array:Array<string>):void
{
    string_array.forEach(element => {
        console.log(element.toUpperCase())
    });   
}

lowerUpper(['hello','world!'])