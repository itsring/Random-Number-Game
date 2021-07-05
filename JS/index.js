const GNInput = document.querySelector(".GenerateNumber input");
const UNInput = document.querySelector(".userNumber input");
const PB = document.querySelector(".userNumber button");
const YouChose = document.querySelector(".youChose span");
const winOrLose = document.querySelector(".loseOrWin span");
function moreOrLess() {
  const ParseIntUN = parseInt(UNInput.value);
  let MN = Math.floor(Math.random() * GNInput.value);
  if (isNaN(ParseIntUN)) {
    alert("please, enter your number");
  } else {
    YouChose.innerText =
      "you chose :" + ParseIntUN + " the machine chose :  " + MN;
    if (ParseIntUN === MN) {
      winOrLose.innerText = " You Win!";
    } else {
      winOrLose.innerText = " You Lost!";
    }
  }
}

PB.addEventListener("click", moreOrLess);
