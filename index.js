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
  let usBottomRightY = 0.4853

  let chinaUpperLeftX = 0.6917
  let chinaUpperLeftY = 0.32198
  let chinaBottomRightX = 0.8417
  let chinaBottomRightY = 0.5469

  let japanUpperLeftX = 0.8722
  let japanUpperLeftY = 0.2803
  let japanBottomRightX = 0.8889
  let japanBottomRightY = 0.45397

  if (x / w > usUpperLeftX && x / w < usBottomRightX && y / h > usUpperLeftY
      && y / h < usBottomRightY) {
    {
      alert("You entered United States!")
    }
  } else if (x / w > chinaUpperLeftX && x / w < chinaBottomRightX && y / h
      > chinaUpperLeftY && y / h < chinaBottomRightY) {
    alert("You entered China!")

  }else if (x / w > japanUpperLeftX && x / w < japanBottomRightX && y / h
      > japanUpperLeftY && y / h < japanBottomRightY) {
    alert("You entered Japan!")

  }
}

//        document.getElementById("xCoord").innerHTML=x;
//        document.getElementById("snowballAppear").style.display = '';
