class Text {
  constructor() {
    this.raw_string =
      "with jack was a bad idea she had tried to move on after their breakup but found herself constantly drawn back to him the chemistry between them was undeniable but so was reality they both knew that getting back together would only lead to more pain down the road sarah couldnt ignore her feelings any longer though she wanted jack back with everything she had as she walked into his arms once again that night at the bar she knew she was taking a risk but she couldnt resist his touch their kiss was electric it was everything she remembered it being but also something new sarah felt alive again as they parted ways that night sarah knew that she couldnt keep ignoring reality she had to make a decision she couldnt keep playing with fire she couldnt keep putting herself through this pain but she also couldnt deny her feelings sarah knew that she loved jack she knew that she wanted him back but she also knew that it wouldnt be easy they both had baggage they both had wounds that needed to heal sarah didnt know how to fix things between them she didnt know how to make it work but she also knew that she couldnt keep living in limbo she had to make a choice as she walked into her apartment that night sarah couldnt help but feel lost she didnt know what to do she didnt know what to say she just knew that she couldnt keep living in this state of uncertainty any longer she needed closure she needed answers sarah knew that she had one last chance with jack she had one last chance at happiness with him but she also knew that it wouldnt be easy she had one last chance at love with him but also one last chance at heartbreak sarah took a deep breath and picked up her phone she dialed jacks number she didnt know what she was going to say but she knew that she had to say something she had to make a decision she had to take a chance as she waited for jack to answer the phone sarah couldnt help but feel a mix of emotions she felt hopeful but also scared she felt excited but also uncertain she felt alive but also vulnerable sarah knew that she was taking a risk but she also knew that she couldnt keep living in limbo any longer she had to make a choice she had to take a chance she had to be brave as she spoke to jack on the phone that night sarah knew that she was making the right decision she knew that she was taking a chance at love but also a chance at happiness she knew that she was being brave but also vulnerable she knew that she was taking a risk but also a chance at a future with jack sarah hung up the phone that night feeling a mix of emotions she felt hopeful but also scared she felt excited but also uncertain she felt alive but also vulnerable but she also felt something else she felt loved she felt wanted she felt appreciated sarah knew that she had made the right decision she had taken a chance at love with jack she had taken a chance at happiness and she knew that no matter what happened between them she would always cherish this moment this moment of bravery of vulnerability of love this moment that changed everything over the next few weeks sarah and jack spent every moment they could together they went on dates took long walks in the park and talked for hours on end sarah felt like she was living in a dream she felt like she had finally found her happy ending but she also knew that things werent perfect they both had their issues to work through sarah struggled with trusting jack again after their past breakup jack struggled with his own insecurities and fears about being vulnerable again but they both knew that they loved each other deeply and were willing to work through their issues for the sake of their relationship one night as they sat on sarahs couch watching a movie jack turned to her and took her hand in his sarah looked at him with a mix of emotions she felt love but also fear she knew that they still had a lot of work to do but she also knew that she loved him and was willing to take that chance jack leaned in and kissed her deeply sarah felt her heart race as she responded to his touch they both knew that they had taken a chance at love but they also knew that it was worth it as they lay in bed together that night sarah felt a sense of peace wash over her she felt like everything was finally falling into place she felt like she had finally found her happy ending but she also knew that there would be challenges ahead she knew that they would have to work through their issues together but she also knew that they had each others backs they had each others love they had each others trust and they had each others hope for a future together as sarah drifted off to sleep that night she felt a sense of contentment wash over her she felt like everything was finally falling into place she felt like she had finally found her happy ending and she knew that no matter what challenges lay ahead she would always cherish this moment this moment of bravery of vulnerability of love this moment that changed everything the next day sarah woke up feeling more hopeful than she had in months she knew that there would be challenges ahead but she also knew that she had jack by her side they spent the day together exploring the city trying new restaurants and just enjoying each others company as the sun began to set they found themselves in a quiet park watching the colors of the sky change as the day turned into night sarah felt a sense of peace wash over her as she looked into jacks eyes she knew that she loved him deeply but she also knew that she needed to trust him again jack could sense her hesitation and he took her hand in his once more sarah he said softly i know that i hurt you in the past but i want you to know that i am committed to making things right between us i love you more than anything in this world and i will do whatever it takes to earn back your trust sarah looked into jacks eyes seeing nothing but sincerity and love reflected back at her she knew that she still had doubts but she also knew that she wanted to believe in their love again they spent the rest of the evening talking laughing and just enjoying each others company as they walked back to sarahs apartment sarah felt a sense of hopefulness wash over her once more she knew that they still had a lot of work to do but she also knew that they had each others love and support as they said goodnight sarah felt a sense of contentment wash over her once more she knew that they still had a lot of work to do but she also knew that they had each others love and support she knew that they could face any challenge together as long as they had each others love and trust and she knew that no matter what the future held they would always cherish this moment  this moment of bravery of vulnerability of love  that changed everything for them both";
  }

  getText() {
    var text_list = this.raw_string.split(" ");
    var start = Math.floor(Math.random() * 1000 + 1);
    var end = start + 75;

    var text_block = text_list.slice(start, end).toString();
    text_block = text_block.replace(/,/g, " ");
    return text_block;
  }
}

var s1 = new Audio("6.mp3");
s1.preload = "auto";

document.querySelector("#textbox").addEventListener("input", function (event) {
  s1.currentTime = 0;
  s1.play();
});
document.querySelector("#textbox").focus();

document.querySelector("#textbox").addEventListener(
  "input",
  function () {
    startCountdown();
  },
  { once: true }
);

let time = 0;
function startCountdown() {
  let seconds = 15;
  const timerDisplay = document.querySelector(".seconds");

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

  document.querySelector("#restart").style.display = "inline-block";
}
function restart() {
  document.querySelector("#restart").style.display = "none";
  location.reload();
}

// var i = 0;
// p = 0;
// function startChecking() {
//   var input = document.querySelector("#textbox").value;
//   var p = document.querySelector("#random-text").textContent;
//   if (input[i] == p[i]) {
//     var span = document.createElement("span");
//     span.textContent = input[i];
//     span.style.color = "yellow";
//     document.querySelector("#answer").appendChild(span);
//   } else {
//     var span = document.createElement("span");
//     span.textContent = input[i];
//     span.style.color = "red";
//     span.style.backgroundColor = "black";
//     document.querySelector("#answer").appendChild(span);
//   }
//   i++;
//   p++;
// }
// function removeLastSpan() {
//   if (i > 0) {
//     i--;
//     p--;
//     var answer = document.querySelector("#answer");
//     answer.removeChild(answer.lastChild);
//   }
// }
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
  s1.play();
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
