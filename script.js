function openGift(){

  const music = document.getElementById("music");
  if(music){
    music.play().catch(()=>{});
    startHearts();
  }

  const left = document.getElementById("curtain-left");
  const right = document.getElementById("curtain-right");

  // 🔥 نظهر الستارة
  left.style.display = "block";
  right.style.display = "block";

  // تغطية الشاشة
  left.style.transform = "translateX(0)";
  right.style.transform = "translateX(0)";

  setTimeout(()=>{

    document.getElementById("screen1").classList.remove("active");
    document.getElementById("screen2").classList.add("active");

    // فتح الستارة
    left.style.transform = "translateX(-100%)";
    right.style.transform = "translateX(100%)";

    typing();
    confetti();

  },500);
}

/* كتابة */
function typing(){
  const msg = "Happy Birthday 🎉";
  let i = 0;
  const el = document.getElementById("text");

  const interval = setInterval(()=>{
    el.innerHTML += msg[i];
    i++;
    if(i >= msg.length){
      clearInterval(interval);
    }
  },60);
}

/* confetti */
function confetti(){
  const c = document.getElementById("confetti");
  const ctx = c.getContext("2d");

  c.width = innerWidth;
  c.height = innerHeight;

  let arr = [];

  for(let i=0;i<100;i++){
    arr.push({
      x:Math.random()*c.width,
      y:Math.random()*c.height,
      size:Math.random()*5,
      speed:Math.random()*3+2
    });
  }

  function draw(){
    ctx.clearRect(0,0,c.width,c.height);

    arr.forEach(p=>{
      ctx.fillStyle="pink";
      ctx.fillRect(p.x,p.y,p.size,p.size);
      p.y+=p.speed;

      if(p.y>c.height){
        p.y=0;
      }
    });

    requestAnimationFrame(draw);
  }

  draw();
}
/* 💖 قلوب */
function startHearts(){

const container = document.getElementById("hearts-container");
  setInterval(()=>{
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤";

    heart.style.left = Math.random()*100 + "vw";
    heart.style.fontSize = (Math.random()*20 + 15) + "px";
    heart.style.animationDuration = (Math.random()*3 + 4) + "s";

    container.appendChild(heart);

    setTimeout(()=>{
      heart.remove();
    },7000);

  },400);
}