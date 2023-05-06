var player = document.querySelector(".player");

var fps = 60;
var gravity = 9;
var jumpHeight = 9;
var height = screen.availHeight;
var rotateRender = 0;

isJumping = false;
jumpTime = 200;

isPause = false;


function render_gravity()
{  

  if (isPause == true){
    return false;
  }

  if (isJumping == true){
    redner = Math.abs(player.offsetTop-jumpHeight)
    if (rotateRender < 35){
      rotateRender+=2;
    }
  
    if (redner < (height-250))
    {
      player.style.top = (redner)+`px`;
      player.style.transform = `rotate(-${rotateRender}deg)`;
    }
  }else{
    redner = Math.abs(player.offsetTop+gravity)
    if (rotateRender < 35){
      rotateRender+=2;
    }
  
    if (redner < (height-250))
    {
      player.style.top = (redner)+`px`;
      player.style.transform = `rotate(${rotateRender}deg)`;
    }
  }

  move_pipe();
}


function move_pipe (){
  const pipe = document.querySelectorAll(".pipe");
  
  for (let i = 0; i< pipe.length; i++){
    var left = pipe[i].offsetLeft;
    pipe[i].style.left = (left-5)+'px';
  }
  
}

function jump(e){
  if (e.key == 'w' && isJumping == false){
    isJumping = true;
    setTimeout(()=>{
      isJumping = false;
    }, jumpTime)
  }
}

window.addEventListener("keyup", jump)


setInterval(render_gravity, 1000/fps)