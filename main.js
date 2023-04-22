var canvas=new fabric.Canvas("c1");
px=100;
py=100;
bh=30;
bw=30;
var playerimg="";
var blockimg="";
function boyoncanvas(){
    fabric.Image.fromURL("player.png",function(Img){
        playerimg=Img;
        playerimg.scaleToWidth(150);
        playerimg.scaleToHeight(150);
        playerimg.set({
            top:py,left:px
        });canvas.add(playerimg);
    });
}

function blockoncanvas(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        blockimg=Img;
        blockimg.scaleToWidth(bw);
        blockimg.scaleToHeight(bh);
        blockimg.set({
            top:py,left:px
        });canvas.add(blockimg);
    });
}

window.addEventListener("keydown",mykeydown);
function mykeydown(e){
     kp=e.keyCode;
     if(kp=='38'){
        up();
        console.log("Soham just pressed the up key");
     }
     if(kp=='40'){
        down();
        console.log("Soham just pressed the down key");
     }
     if(kp=='37'){
        left();
        console.log("Soham just pressed the left key");
     }
     if(kp=='39'){
        right();
        console.log("Soham just pressed the right key");
     }
     if(kp=='87'){
        blockoncanvas('wall.jpg');
        console.log("Soham just pressed the W key");
     }
     if(kp=='71'){
        blockoncanvas('ground.png');
        console.log("Soham just pressed the G key");
     }
     if(kp=='76'){
        blockoncanvas('light_green.png');
        console.log("Soham just pressed the L key");
     }
     if(kp=='84'){
        blockoncanvas('trunk.jpg');
        console.log("Soham just pressed the T key");
     }
     if(kp=='82'){
        blockoncanvas('roof.jpg');
        console.log("Soham just pressed the R key");
     }
     if(kp=='89'){
        blockoncanvas('yellow_wall.png');
        console.log("Soham just pressed the Y key");
     }
     if(kp=='68'){
        blockoncanvas('dark_green.png');
        console.log("Soham just pressed the D key");
     }
     if(kp=='85'){
        blockoncanvas('unique.png');
        console.log("Soham just pressed the U key");
     }
     if(kp=='67'){
        blockoncanvas('cloud.jpg');
        console.log("Soham just pressed the C key");
     }




}

function up(){
    if(py>=0){
        py=py-10;
        canvas.remove(playerimg);
        boyoncanvas();
    }
}

function down(){
    if(py<=500){
        py=py+10;
        canvas.remove(playerimg);
        boyoncanvas();
    }
}

function left(){
    if(px>=0){
        px=px-10;
        canvas.remove(playerimg);
        boyoncanvas();
    }
}

function right(){
    if(px<=850){
        px=px+10;
        canvas.remove(playerimg);
        boyoncanvas();
    }
}