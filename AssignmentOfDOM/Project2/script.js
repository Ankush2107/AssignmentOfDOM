  // OnClick
  const seeChange = () => {
    document.getElementById("btn").innerText = "Namaste";
    document.getElementById("btn").style.color = "red"
    document.getElementById("btn").style.background = "black";
    document.getElementById("btn").style.padding = "12px"
  }

  // DoubleClick
  
  function DoubleClick() {
      document.getElementById("secondBtn").innerText = "Welcome";
      document.getElementById("secondBtn").style.background = "yellow";
      document.getElementById("secondBtn").style.color = "blue";
      document.getElementById("secondBtn").style.padding = "12px";
  }

  // MouseOver

  document.getElementById("heading").addEventListener("mouseover", () => {
      let enterValue = prompt("Tell me Ankush's birthday date");
      if(enterValue == 21) {
          alert("Yes you Right!!!");
      }
      else {
          alert("Try Again");
      }
  });

//   MouseOut
 document.getElementById("heading2").addEventListener("mouseout", () => {
    alert("Today is Karan's Birthday");
 });

//  OnKeyPress
 function ClickMe() {
    document.getElementById("thirdBtn").innerText = "You had pressed any key";
 }