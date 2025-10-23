var Directions;
(function (Directions) {
    Directions["up"] = "up";
    Directions["right"] = "right";
    Directions["down"] = "down";
    Directions["left"] = "left";
})(Directions || (Directions = {}));
function direction(dir) {
    // console.log('You moved', dir);
    switch(dir){
        case Directions.up: console.log(Directions.up)
        break
        case Directions.right: console.log(Directions.right)
        break
        case Directions.down: console.log(Directions.down)
        break
        case Directions.left: console.log(Directions.left)
        break
        default:console.log('invalid Direction')
    }
}
direction('up');
direction('left');
direction('down');
direction('right');
direction('up');
direction('up');
direction('up');
direction('up');
