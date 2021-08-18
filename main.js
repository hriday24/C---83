var canvas,color,width,ctx,lastx,lasty,newx,newy,mouseevent,new_width,new_height;
mouseevent = "";
/**************************************************************/
new_width = screen.width - 70;
new_height = screen.height - 300;
canvas = document.getElementById("MyCanvas");
if(screen.width < 992){
    canvas.width = new_width;
    canvas.height = new_height;
    document.body.style.overflow = "hidden";
}
ctx = canvas.getContext("2d");
color = "DarkBlue";
width = 1;
/**************************************************************/
canvas.addEventListener("mousedown",MouseDown);
canvas.addEventListener("mouseup",MouseUp);
canvas.addEventListener("mouseleave",MouseLeave);
canvas.addEventListener("mousemove",MouseMove);
canvas.addEventListener("touchstart",TouchStart);
canvas.addEventListener("touchmove",TouchMove);
/**************************************************************/
function MouseDown(e){
    color = document.getElementById("input").value;
    width = document.getElementById("input_width").value;
    mouseevent = "mousedown";
}
/**************************************************************/
function MouseUp(e){
    color = document.getElementById("input").value;
    width = document.getElementById("input_width").value;
    
    mouseevent = "mouseup";
}
/**************************************************************/
function MouseLeave(e){
    color = document.getElementById("input").value;
    width = document.getElementById("input_width").value;
    mouseevent = "mouseleave";
}
/**************************************************************/
function MouseMove(e){
    newx = e.clientX - canvas.offsetLeft;
    newy = e.clientY - canvas.offsetTop;
    if(mouseevent == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        width = document.getElementById("input_width").value;
        ctx.lineWidth = width;
        console.log("Last X = " + lastx + "& Last Y = " + lasty);
        ctx.moveTo(lastx,lasty);
        console.log("New X = " + newx + "& New Y = " + newy);
        ctx.lineTo(newx,newy);
        ctx.stroke();
    }
    lastx = newx;
    lasty = newy;
}
/**************************************************************/
function TouchStart(e){
    color = document.getElementById("input").value;
    width = document.getElementById("input_width").value;
    console.log("Touch Start");
    lastx = e.touches[0].clientX - canvas.offsetLeft;
    lasty = e.touches[0].clientY - canvas.offsetTop;
}
/**************************************************************/
function TouchMove(e){
    newx = e.touches[0].clientX - canvas.offsetLeft;
    newy = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = color;
    width = document.getElementById("input_width").value;
    ctx.lineWidth = width;
    console.log("Last X = " + lastx + "& Last Y = " + lasty);
    ctx.moveTo(lastx,lasty);
    console.log("New X = " + newx + "& New Y = " + newy);
    ctx.lineTo(newx,newy);
    ctx.stroke();
    lastx = newx;
    lasty = newy;
}
/**************************************************************/
function ClearAll(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}