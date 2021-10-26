var rect=require('./rectangle');

function solveRect(l,b)
{
    console.log("Solving for Rectangle with L="+l+" and B= "+b);
    if(l<0 || b<0)
    {
        console.log("Rectangle dimensions should be greater than zero");
    }
    else
    {
        console.log("Area ="+rect.area(l,b));
        console.log("Perimeter= "+rect.perimeter(l,b));
    }
}

solveRect(5,2);