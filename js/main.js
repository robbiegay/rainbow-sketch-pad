for(var i = 1; i <= 5000; i++) { // Loops 5000 times (creates 5000 squares), each loop iteration creates a small square (div) and appends it to the parent
    let myDiv = document.createElement('div');
    document.body.appendChild(myDiv);
  }

  function random(number) {
    return Math.floor(Math.random() * number);
  }

  function bgChange() { // Creates and returns a random rgb color value
    let rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    return rndCol;
  }

  let divs = document.querySelectorAll('div'); // Creates a variable "divs" that selects all div elements (i.e. selects all 5000 squares)

  for(let i = 0; i < divs.length; i++) { // For each target of the event mouseover, changes the style to the random rgb value generated earlier
    divs[i].onmouseover = function(e) {
      e.target.style.backgroundColor = bgChange();
    }
    divs[i].touchmove = function(e) { // Attempting to make it work on touchscreens
      e.target.style.backgroundColor = bgChange();
    }
    divs[i].onclick = function() { // If any square on the page is clicked, refreshes that page, allowing the user to create a new drawing
      location.reload();
    }
  }