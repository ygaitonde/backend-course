var rect = require('./rectangle');

function solveRect(l,b) {
    console.log("Solving for rectangle with l = " +l+" and b = "+b)
    rect(l,b, (err,rectangle) => {
        if(err) {
            console.log("Error: " + err.message)
        }
        else{
            console.log("l is "+l+" b is "+b+" area: " + rectangle.area())
            console.log("l is "+l+" b is "+b+" perimeter: " + rectangle.perimeter())
        }
    })
    console.log("test")
 }



solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,5);