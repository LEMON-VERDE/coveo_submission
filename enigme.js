module.exports = function (shapes)
{
    if (!Array.isArray(shapes))
        return 0;

    var nbOfShapes = 0;

    for (let straws of shapes) {
        if (shapeIsValid(straws))
            ++nbOfShapes;
    }

    return nbOfShapes;
}

function shapeIsValid(straws){
    if(!Array.isArray(straws) || straws.length < 3)
        return false;

    let longest = 0;
    let sum = 0;

    for (let currentStraw of straws) {
        if (currentStraw > longest) {
            sum += longest;
            longest = currentStraw;
        }
        else {
            sum += currentStraw;
        }
    }

    if (longest > sum)
        return false;
    else
        return true;
}
