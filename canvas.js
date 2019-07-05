var canvas = document.getElementById('canvas');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

var c= canvas.getContext('2d');

var height= 200;
var width= 200;
var x= Math.random()*(window.innerWidth-width);
var y= Math.random()*(window.innerHeight-height);
var incx= 1;
var incy= 1;
if(Math.random()>0.5){incx=-incx;}
if(Math.random()>0.5){incy=-incy;}



var image = new Image; 
image.src='https://png2.kisspng.com/sh/dca92d56b2e29c1fee5d8b9467c7538c/L0KzQYm3WME3N5p6kJH0aYP2gLBuTfR3bF5xh9l4LXLvhX75ggkubJp4e59ybXHqdX7qjCB6NaF3hAZuY4Tsf7A0VfI4PWZpS9g5NnW5dIS1UsYzP2E8SqM6NUO3RIKBUsM6OGM9S5D5bne=/kisspng-dvd-logo-blu-ray-disc-image-copy-protection-5b755d3f06e6d3.2627072115344182390283.png';
var color= "#"+((1<<24)*Math.random()|0).toString(16);

function animate()
{
    
    requestAnimationFrame(animate);
     
    c.stroke();
    c.fillStyle="blue";
    
    c.fillRect(0,0,innerWidth,innerHeight);
    x+=incx;
    y+=incy;
    c.fillStyle= color;
    c.fillRect(x,y,height,width);
    c.drawImage(image, x, y,height,width);
    c.stroke;
    
    if(x+width>window.innerWidth||x<0)
    {
        incx=-incx;
        color= "#"+((1<<24)*Math.random()|0).toString(16);
    }
    
    if(y+height>window.innerHeight||y<0)
    {
        incy=-incy;
        color= "#"+((1<<24)*Math.random()|0).toString(16);
    }
    

}
c.fillStyle= "#"+((1<<24)*Math.random()|0).toString(16);
animate();
