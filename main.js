var affirmationOption = document.querySelector("#affirmation");
var mantraOption = document.querySelector("#mantra");
var receiveMessageButton = document.querySelector(".receive-message");
var bellIcon = document.querySelector(".image");
var showMessage = document.querySelector(".random-message");
var userId = document.querySelector(".user-id-input");
var loginButton = document.querySelector(".login-button");
var welcomeMessage = document.querySelector(".welcome-user");
var loginFeature = document.querySelector(".login-feature");
var messageFeature = document.querySelector(".message-feature");

var affirmations = [
  "I forgive myself and set myself free.",
  "I believe I can be all that I want to be.",
  "I am in the process of becoming the best version of myself.",
  "I have the freedom & power to create the life I desire.",
  "I choose to be kind to myself and love myself unconditionally.",
  "My possibilities are endless.",
  "I am worthy of my dreams.",
  "I am enough.",
  "I deserve to be healthy and feel good.",
  "I am full of energy and vitality and my mind is calm and peaceful.",
  "Every day I am getting healthier and stronger.",
  "I honor my body by trusting the signals that it sends me.",
  "I manifest perfect health by making smart choices.",
];

var mantras = [
  "Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
  "Don’t let yesterday take up too much of today.",
  "Every day is a second chance.",
  "Tell the truth and love everyone.",
  "I am free from sadness.",
  "I am enough.",
  "In the beginning it is you, in the middle it is you and in the end it is you.",
  "I love myself.",
  "I am present now.",
  "Inhale the future, exhale the past.",
  "This too shall pass.",
  "Yesterday is not today.",
  "The only constant is change.",
  "Onward and upward.",
  "I am the sky, the rest is weather.",
];

var meditateImages = []

receiveMessageButton.addEventListener("click", selectOption);
loginButton.addEventListener("click", loginUser);

function selectOption() {
  if(document.getElementById("affirmation").checked) {
    //capute affirmation has been selected
    var randomAffirmation = randomizeSelection(affirmations)
    viewMessage(randomAffirmation)
  } else {
    //captue mantra is selected
    var randomMantra = randomizeSelection(mantras)
    viewMessage(randomMantra)
  }
};

function randomizeSelection(array) {
  // this produces random index number
  var randomIndex = Math.floor(Math.random() * array.length);
  //want to return value at index number from array
  return array[randomIndex]
};

function viewMessage(randomMessage) {
  //display random message
  showMessage.innerText = randomMessage
  // show random array Message
  showMessage.classList.remove("hidden")
  // hide bell icon
  bellIcon.classList.add("hidden");
}
//
function loginUser() {
// capture input value
  var userValue = userId.value;
  console.log(userValue);
  loginFeature.classList.add("hidden");
  messageFeature.classList.remove("hidden");
  // replace text with userValue
  welcomeMessage.innerText = `Welcome, ${userValue}!`;
}


// ON LOGIN CLICK:
//  - take user input from user id input field
//  - page hides login feature
//  - page displays the message feature
//  - page displays welcome Message:Welcome, ${userInput}

// var userId = document.querySelector(".user-id-input");
// var loginButton = document.querySelector(".login-button");
// var welcomeMessage = document.querySelector(".welcome-user");
