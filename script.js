class Text {
  constructor() {
    this.raw_string =
      "with jack was a bad idea she had tried to move on after their breakup but found herself constantly drawn back to him the chemistry between them was undeniable but so was reality they both knew that getting back together would only lead to more pain down the road sarah couldnt ignore her feelings any longer though she wanted jack back with everything she had as she walked into his arms once again that night at the bar she knew she was taking a risk but she couldnt resist his touch their kiss was electric it was everything she remembered it being but also something new sarah felt alive again as they parted ways that night sarah knew that she couldnt keep ignoring reality she had to make a decision she couldnt keep playing with fire she couldnt keep putting herself through this pain but she also couldnt deny her feelings sarah knew that she loved jack she knew that she wanted him back but she also knew that it wouldnt be easy they both had baggage they both had wounds that needed to heal sarah didnt know how to fix things between them she didnt know how to make it work but she also knew that she couldnt keep living in limbo she had to make a choice as she walked into her apartment that night sarah couldnt help but feel lost she didnt know what to do she didnt know what to say she just knew that she couldnt keep living in this state of uncertainty any longer she needed closure she needed answers sarah knew that she had one last chance with jack she had one last chance at happiness with him but she also knew that it wouldnt be easy she had one last chance at love with him but also one last chance at heartbreak sarah took a deep breath and picked up her phone she dialed jacks number she didnt know what she was going to say but she knew that she had to say something she had to make a decision she had to take a chance as she waited for jack to answer the phone sarah couldnt help but feel a mix of emotions she felt hopeful but also scared she felt excited but also uncertain she felt alive but also vulnerable sarah knew that she was taking a risk but she also knew that she couldnt keep living in limbo any longer she had to make a choice she had to take a chance she had to be brave as she spoke to jack on the phone that night sarah knew that she was making the right decision she knew that she was taking a chance at love but also a chance at happiness she knew that she was being brave but also vulnerable she knew that she was taking a risk but also a chance at a future with jack sarah hung up the phone that night feeling a mix of emotions she felt hopeful but also scared she felt excited but also uncertain she felt alive but also vulnerable but she also felt something else she felt loved she felt wanted she felt appreciated sarah knew that she had made the right decision she had taken a chance at love with jack she had taken a chance at happiness and she knew that no matter what happened between them she would always cherish this moment this moment of bravery of vulnerability of love this moment that changed everything over the next few weeks sarah and jack spent every moment they could together they went on dates took long walks in the park and talked for hours on end sarah felt like she was living in a dream she felt like she had finally found her happy ending but she also knew that things werent perfect they both had their issues to work through sarah struggled with trusting jack again after their past breakup jack struggled with his own insecurities and fears about being vulnerable again but they both knew that they loved each other deeply and were willing to work through their issues for the sake of their relationship one night as they sat on sarahs couch watching a movie jack turned to her and took her hand in his sarah looked at him with a mix of emotions she felt love but also fear she knew that they still had a lot of work to do but she also knew that she loved him and was willing to take that chance jack leaned in and kissed her deeply sarah felt her heart race as she responded to his touch they both knew that they had taken a chance at love but they also knew that it was worth it as they lay in bed together that night sarah felt a sense of peace wash over her she felt like everything was finally falling into place she felt like she had finally found her happy ending but she also knew that there would be challenges ahead she knew that they would have to work through their issues together but she also knew that they had each others backs they had each others love they had each others trust and they had each others hope for a future together as sarah drifted off to sleep that night she felt a sense of contentment wash over her she felt like everything was finally falling into place she felt like she had finally found her happy ending and she knew that no matter what challenges lay ahead she would always cherish this moment this moment of bravery of vulnerability of love this moment that changed everything the next day sarah woke up feeling more hopeful than she had in months she knew that there would be challenges ahead but she also knew that she had jack by her side they spent the day together exploring the city trying new restaurants and just enjoying each others company as the sun began to set they found themselves in a quiet park watching the colors of the sky change as the day turned into night sarah felt a sense of peace wash over her as she looked into jacks eyes she knew that she loved him deeply but she also knew that she needed to trust him again jack could sense her hesitation and he took her hand in his once more sarah he said softly i know that i hurt you in the past but i want you to know that i am committed to making things right between us i love you more than anything in this world and i will do whatever it takes to earn back your trust sarah looked into jacks eyes seeing nothing but sincerity and love reflected back at her she knew that she still had doubts but she also knew that she wanted to believe in their love again they spent the rest of the evening talking laughing and just enjoying each others company as they walked back to sarahs apartment sarah felt a sense of hopefulness wash over her once more she knew that they still had a lot of work to do but she also knew that they had each others love and support as they said goodnight sarah felt a sense of contentment wash over her once more she knew that they still had a lot of work to do but she also knew that they had each others love and support she knew that they could face any challenge together as long as they had each others love and trust and she knew that no matter what the future held they would always cherish this moment  this moment of bravery of vulnerability of love  that changed everything for them both";
  }

  getText() {
    var text_list = this.raw_string.split(" ");
    var start = Math.floor(Math.random() * 1000 + 1);
    var end = start + 100;

    var text_block = text_list.slice(start, end).toString();
    text_block = text_block.replace(/,/g, " ");
    return text_block;
  }
}

var switches = "mxbrown";
var backSpace = new Audio("audio/" + switches + "/press/BACKSPACE.mp3");
var enter = new Audio("audio/" + switches + "/press/ENTER.mp3");
var space = new Audio("audio/" + switches + "/press/SPACE.mp3");
var key = new Audio("audio/" + switches + "/press/GENERIC_R0.mp3");

var backSpace_release = new Audio(
  "audio/" + switches + "/release/BACKSPACE.mp3"
);
var enter_release = new Audio("audio/" + switches + "/release/ENTER.mp3");
var space_release = new Audio("audio/" + switches + "/release/SPACE.mp3");
var key_release = new Audio("audio/" + switches + "/release/GENERIC.mp3");

function changeSwitch() {
  switches = document.querySelector("#switches").value;
  backSpace = new Audio("audio/" + switches + "/press/BACKSPACE.mp3");
  enter = new Audio("audio/" + switches + "/press/ENTER.mp3");
  space = new Audio("audio/" + switches + "/press/SPACE.mp3");
  key = new Audio("audio/" + switches + "/press/GENERIC_R0.mp3");

  backSpace_release = new Audio("audio/" + switches + "/release/BACKSPACE.mp3");
  enter_release = new Audio("audio/" + switches + "/release/ENTER.mp3");
  space_release = new Audio("audio/" + switches + "/release/SPACE.mp3");
  key_release = new Audio("audio/" + switches + "/release/GENERIC.mp3");
}

document
  .querySelector("#textbox")
  .addEventListener("keydown", function (event) {
    backSpace.preload = "auto";
    enter.preload = "auto";
    space.preload = "auto";
    key.preload = "auto";
    switch (event.key) {
      case "Backspace":
        backSpace.currentTime = 0;
        backSpace.play();
      case " ":
        space.currentTime = 0;
        space.play();
      case "Enter":
        enter.currentTime = 0;
        enter.play();
      default:
        key.currentTime = 0;
        key.play();
    }
  });

document.querySelector("#textbox").addEventListener("keyup", function (event) {
  backSpace.preload = "auto";
  enter.preload = "auto";
  space.preload = "auto";
  key.preload = "auto";
  switch (event.key) {
    case "Backspace":
      backSpace_release.currentTime = 0;
      backSpace_release.play();
    case " ":
      space_release.currentTime = 0;
      space_release.play();
    case "Enter":
      enter_release.currentTime = 0;
      enter_release.play();
    default:
      key_release.currentTime = 0;
      key_release.play();
  }
});

document.querySelector("#textbox").focus();

document.querySelector("#textbox").addEventListener(
  "input",
  function () {
    startCountdown();
    handelDisable(seconds);
  },
  { once: true }
);

let time = 0;
let seconds = 15;
var t1 = document.querySelector("#seconds-15");
var t2 = document.querySelector("#seconds-60");
function handelDisable(s) {
  if (s == 14) {
    t1.classList.remove("disable-hover");
    t1.setAttribute("disabled", "true");
    t2.classList.add("disable-hover");
    t2.setAttribute("disabled", "true");
  } else if (s == 59) {
    t1.classList.add("disable-hover");
    t1.setAttribute("disabled", "true");
    t2.classList.remove("disable-hover");
    t2.setAttribute("disabled", "true");
  } else {
    console.log(s);
  }
}
function toggleTime() {
  if (t1.classList.contains("active")) {
    t1.classList.remove("active", "seconds");
    t2.classList.add("active", "seconds");
    seconds = 60;
  } else if (t2.classList.contains("active")) {
    t1.classList.add("active", "seconds");
    t2.classList.remove("active", "seconds");
    seconds = 15;
  }
}
function startCountdown() {
  var timerDisplay = document.querySelector(".seconds");
  function updateTimer() {
    timerDisplay.textContent = seconds + "s";

    if (seconds === 0) {
      clearInterval(timerInterval);
      timerDisplay.textContent = "Time's up!";
      displaySpeed();
      document.querySelector("#restart").style.display = "inline-block";
      document.querySelector("#textbox").value = "Time is up!";
      document.querySelector("#textbox").setAttribute("disabled", true);
    } else {
      time++;
      seconds--;
      displaySpeed();
    }
  }

  updateTimer();

  const timerInterval = setInterval(updateTimer, 1000);
}

function displaySpeed() {
  var total = correct - wrong;
  var speed = Math.floor(total / ((time / 60) * 5));
  if (speed < 0) {
    speed = 0;
  }
  document.querySelector("#speed").innerHTML = speed + "WPM";
  document.querySelector("#correct").innerHTML = correct;
  document.querySelector("#wrong").innerHTML = wrong;
}
function restart() {
  document.querySelector("#restart").style.display = "none";
  location.reload();
}

var t = new Text();
var spanText = t.getText();
spanText = spanText.split("");
spanText.forEach((letter) => {
  var spanLetter = "<span>" + letter + "</span>";
  document.querySelector("#random-text").innerHTML += spanLetter;
});

var cursor = 0;
var correct = 0;
var wrong = 0;
document.querySelector("#textbox").addEventListener("input", function (event) {
  if (
    event.inputType === "deleteContentBackward" ||
    event.inputType === "deleteContentForward"
  ) {
    cursor--;
    handelDelete(cursor);
  } else if (event.inputType === "deleteWordBackward") {
    var cLength = document.querySelector("#textbox").value.length;
    for (var i = cLength; i < cursor; i++) {
      handelDelete(i);
    }
    cursor = cLength;
  } else {
    startChecking();
    cursor++;
  }
});
function handelDelete(i) {
  if (
    document
      .querySelector("#random-text")
      .childNodes[i].classList.contains("wrong")
  ) {
    document
      .querySelector("#random-text")
      .childNodes[i].classList.remove("wrong");
    wrong--;
  } else if (
    document
      .querySelector("#random-text")
      .childNodes[i].classList.contains("correct")
  ) {
    document
      .querySelector("#random-text")
      .childNodes[i].classList.remove("correct");
    correct--;
  } else {
    return;
  }
}
function startChecking() {
  var a = document.querySelector("#textbox").value;
  var b = document.querySelector("#random-text");
  if (a[cursor] == b.childNodes[cursor].textContent) {
    b.childNodes[cursor].classList.add("correct");
    correct++;
  } else if (a[cursor] != b.childNodes[cursor].textContent) {
    b.childNodes[cursor].classList.add("wrong");
    wrong++;
  }
}

const starsContainer = document.getElementById("stars");
const selectedRatingElement = document.getElementById("selectedRating");
let selectedRating = 0;

function createStars() {
  for (let i = 1; i <= 5; i++) {
    const star = document.createElement("span");
    star.className = "star";
    star.innerHTML = "★";
    star.setAttribute("data-rating", i);
    star.addEventListener("click", handleStarClick);
    starsContainer.appendChild(star);
  }
}

function handleStarClick(event) {
  const clickedRating = parseInt(event.target.getAttribute("data-rating"));
  selectedRating = clickedRating;

  // Remove 'active' class from all stars
  const stars = document.querySelectorAll(".star");
  stars.forEach((star) => star.classList.remove("active"));

  // Add 'active' class to selected stars
  for (let i = 0; i < clickedRating; i++) {
    stars[i].classList.add("active");
  }

  selectedRatingElement.textContent = `You rated ${selectedRating} stars.`;
}

// Initialize the stars
createStars();

document.addEventListener("mousemove", (e) => {
  const cursor = document.querySelector(".cursor");
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

document.addEventListener("mousedown", () => {
  const cursor = document.querySelector(".cursor");
  cursor.style.width = "40px";
  cursor.style.height = "40px";
});

document.addEventListener("mouseup", () => {
  const cursor = document.querySelector(".cursor");
  cursor.style.width = "60px";
  cursor.style.height = "60px";
});
