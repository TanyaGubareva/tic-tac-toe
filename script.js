let player = "X";
document.getElementById("player").textContent = player;
function play(element) {
  if (element.textContent.trim().length) {
    return;
  }
  element.textContent = player;
  player = player === "X" ? "0" : "X";
  document.getElementById("player").textContent = player;

  let p1 = document.getElementById("1").textContent;
  let p2 = document.getElementById("2").textContent;
  let p3 = document.getElementById("3").textContent;
  let p4 = document.getElementById("4").textContent;
  let p5 = document.getElementById("5").textContent;
  let p6 = document.getElementById("6").textContent;
  let p7 = document.getElementById("7").textContent;
  let p8 = document.getElementById("8").textContent;
  let p9 = document.getElementById("9").textContent;

  function winner() {
    setTimeout(() => alert("Ты победитель!"));
  }
  function draw() {
    setTimeout(() => alert("Ничья!"));
  }

  if (p1 === "X" && p2 === "X" && p3 === "X") {
    winner();
  } else if (p1 === "0" && p2 === "0" && p3 === "0") {
    winner();
  } else if (p4 === "0" && p5 === "0" && p6 === "0") {
    winner();
  } else if (p4 === "X" && p5 === "X" && p6 === "X") {
    winner();
  } else if (p7 === "X" && p8 === "X" && p9 === "X") {
    winner();
  } else if (p7 === "0" && p8 === "0" && p9 === "0") {
    winner();
  } else if (p1 === "0" && p5 === "0" && p9 === "0") {
    winner();
  } else if (p1 === "X" && p5 === "X" && p9 === "X") {
    winner();
  } else if (p3 === "X" && p5 === "X" && p7 === "X") {
    winner();
  } else if (p3 === "0" && p5 === "0" && p7 === "0") {
    winner();
  } else if (p1 === "0" && p4 === "0" && p7 === "0") {
    winner();
  } else if (p1 === "X" && p4 === "X" && p7 === "X") {
    winner();
  } else if (p3 === "X" && p6 === "X" && p9 === "X") {
    winner();
  } else if (p3 === "0" && p6 === "0" && p9 === "0") {
    winner();
  } else if (p2 === "0" && p5 === "0" && p8 === "0") {
    winner();
  } else if (p2 === "X" && p5 === "X" && p8 === "X") {
    winner();
  } else if (
    !(
      !p1.trim() ||
      !p2.trim() ||
      !p3.trim() ||
      !p4.trim() ||
      !p5.trim() ||
      !p7.trim() ||
      !p8.trim() ||
      !p9.trim()
    )
  ) {
    draw();
  }
}

function refreshPage() {
  window.location.reload();
}
