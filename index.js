document.onclick = userClicked;
function userClicked() {

  let w = window.innerWidth;
  let h = window.innerHeight;

  let x = event.clientX;
  let y = event.clientY;

  console.log(x)
  console.log(y)
  console.log(w)
  console.log(h)

  let usUpperLeftX = 0.1347
  let usUpperLeftY = 0.3219
  let usBottomRightX = 0.3014
  let usBottonRightY = 0.4853



  if (x / w > usUpperLeftX && x/w < usBottomRightX && y/h > usUpperLeftY && y/h < usBottonRightY) {
    {
      alert("You entered United States!")
    }
  }
}

//        document.getElementById("xCoord").innerHTML=x;
//        document.getElementById("snowballAppear").style.display = '';
