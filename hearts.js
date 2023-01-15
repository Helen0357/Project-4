document.addEventListener("mousemove", function (e) {
    let body = document.querySelector("body");
    let heart = document.createElement("span");
    let x = e.offsetX;
    let y = e.offsetY;
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
   
  
    let size = Math.random() * 90;
    heart.style.width = 20 + size + "px";
    heart.style.height = 20 + size + "px";
    let transformVal = Math.random() * 360;
    heart.style.transform = 'rotate('+ transformVal +'deg)';

     body.appendChild(heart);
  setTimeout(() => {
        heart.remove();
    }, 1000);
})
