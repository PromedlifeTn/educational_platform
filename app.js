let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let timeDom = document.querySelector('.carousel .time');

//cursor
const cursor = document.querySelector(".cursor");
let runTimeOut;


//follow
document.addEventListener("mousemove",(e) =>
{
    let x = e.pageX;
    let y = e.pageY;

    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    cursor.style.display = "block";
    //effect on mouse stopped
    function mouseStopped(){
        cursor.style.display = "none";
    }
    clearTimeout(timeout);
    timeout = setTimeout(mouseStopped, 1000)
}
);

document.addEventListener("mouseout",()=>{
    cursor.style.display = "none";
})
