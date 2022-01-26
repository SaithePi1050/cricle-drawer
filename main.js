var px;
var py;
var mousevent = "";
var color = "black";
var width = 1;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

canvas.addEventListener("mousedown",mymousedown);

function mymousedown(e)
{
    mousevent = "mousedown";
    color = document.getElementById("color").value; width = document.getElementById("width").value;
}

canvas.addEventListener("mouseup",mymouseup);

function mymouseup(e)
{
    mousevent = "mouseup";
}

canvas.addEventListener("mouseleave",mymouseleave);

function mymouseleave(e)
{
    mousevent = "mouseleave";
}

canvas.addEventListener("mousemove",mymousemove);

function mymousemove(e)
{
    var cx = e.clientX - canvas.offsetLeft;
    var cy = e.clientY - canvas.offsetTop;

    if (mousevent == "mousedown") 
    {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.arc (cx, cy, 40, 0, 10);
        ctx. stroke();
    }

    px = cx;
    py = cy;
}

function cleararea() 
{ 
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); 
}