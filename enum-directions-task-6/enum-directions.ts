enum Directions {
    up = 'up',
    right = 'right',
    down = 'down',
    left = 'left'
}

function direction(dir:string)
{
    console.log('You moved',dir)
    if(dir==Directions.up)
    {
        console.log('You moved',Directions.up)
    }
    else if(dir==Directions.right)
    {
        console.log('You moved',Directions.right)
    }
    else if(dir==Directions.down)
    {
        console.log('You moved',Directions.left)
    }
    else if(dir==Directions.left)
    {
        console.log('You moved',Directions.up)
    }
}

direction('up')