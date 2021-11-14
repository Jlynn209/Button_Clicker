// START OF LIKE BUTTONS

var likesArrays = [];
var buttonArray = [];

// gets called at the bottom loop to create a new item in likes array
function createLikes(name, likes) {
  document.getElementById(name).innerHTML = likes + " likes";
  var isLiked = false;

  return {
    name,
    likes,
    isLiked,
  };
}

// button call

changeColor = "rgb(" + 147 + ", " + 196 + "," + 125 + ")";
changeBackColor = "rgb(" + 255 + ", " + 217 + "," + 102 + ")";

function likeButton(idName) {
  for (var i = 0; i < likesArrays.length; i++) {
    if (idName.id == likesArrays[i].name) {
      console.log("names are true");
      if (likesArrays[i].isLiked == false) {
        console.log("is like is showing false");
        likesArrays[i].likes++;
        console.log(likesArrays[i].likes);
        idName.innerHTML = likesArrays[i].likes + " likes";
        document.getElementById(likesArrays[i].name).style.backgroundColor =
          changeColor;
        alert("Ninja was liked");
        likesArrays[i].isLiked = true;
        return;
      }

      if (likesArrays[i].isLiked == true) {
        console.log("is like is showing true");
        likesArrays[i].likes--;
        console.log(likesArrays[i].likes);
        idName.innerHTML = likesArrays[i].likes + " likes";
        document.getElementById(likesArrays[i].name).style.backgroundColor =
          changeBackColor;
        likesArrays[i].isLiked = false;
        return;
      }
    }
  }
}

// Finds all buttons in the document and store this in a temporary variable.
var buttons = document.getElementsByTagName("BUTTON");

// loop through the temporary variable and adds the id to the buttonArray.
// REMINDER, NEED IF STATEMENTS TO EXCLUDE THE OTHER BUTTONS NOT USING THIS!!!
for (var i = 0; i < buttons.length; i++) {
  if (buttons[i].id == "logButton") {
    continue;
  } else if (buttons[i].id == "dojonary") {
    continue;
  } else if (buttons[i].id != "") {
    buttonArray.push(buttons[i].id);
  }
}

// loop through the names in the buttonArray and finds the elements
// with those names.
// Use createLike to be able to store the names and value in likesArray

for (var i = 0; i < buttonArray.length; i++) {
  var tempName = document.getElementById(buttonArray[i]).id;
  var tempValue = document.getElementById(buttonArray[i]).value;
  var newItem = createLikes(tempName, tempValue);
  likesArrays.push(newItem);
}

// END OF LIKE BUTTONS

//Login and Logout toggle button

var isLogOut = false;

function logButton(yourButton) {
  var toggleButton = document.getElementById(yourButton.id);

  if (isLogOut == false) {
    toggleButton.innerHTML = "Logout";
    isLogOut = true;
    return;
  }

  if (isLogOut == true) {
    toggleButton.innerHTML = "Log in";
    isLogOut = false;
  }
}

// END OF LOGIN BUTTON

// Definition button

function removeButton(yourButton) {
  var button = document.getElementById(yourButton.id);

  button.remove();
  var myElement = document.querySelector(".right .text");
  myElement.style.marginTop = "-50px";
}

//end of Definition button
