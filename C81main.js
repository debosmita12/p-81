canvas = document.getElementById("myCanvas");
color="red";

ctx=canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle="grey";
ctx.LineWidth=4;
ctx.rect(150, 143, 430, 200);
ctx.stroke();

ctx.beginPath();
    ctx.strokeStyle="blue";
    ctx.LineWidth=5;
    ctx.arc(200 , 210 ,40 , 0, 2*Math.PI );
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle="black";
    ctx.LineWidth=5;
    ctx.arc(300 , 210 ,40 , 0, 2*Math.PI );
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle="pink";
    ctx.LineWidth=5;
    ctx.arc(400 , 210 ,40 , 0, 2*Math.PI );
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle="yellow";
    ctx.LineWidth=5;
    ctx.arc(500 , 210 ,40 , 0, 2*Math.PI );
    ctx.stroke();





