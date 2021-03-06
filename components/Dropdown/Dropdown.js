class Dropdown {
  constructor(element) {
    
    // Assign this.element to the dropdown element
    this.element = element;
    
    // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    this.button = this.element.querySelector(".dropdown-button");
    
    // assign the reference to the ".dropdown-content" class found in the dropdown element
    // this.content = document.querySelector(".dropdown-content");
    this.content = this.element.querySelector(".dropdown-content");
    
    // Add a click handler to the button reference and call the toggleContent method.
    // Read --->Instructor note, the reason we must wrap the toggleContent method in an anonymous function is that 'this' in toggleContent
    // would refer to the button, NOT the current instance of the class. 
    this.button.addEventListener('click', () => { this.toggleContent() })
    
    // Toggle the ".dropdown-hidden" class off and on
    //this commented out code below was wrong. Pay attention to what you are selecting.
    // this.element.classList.toggle('dropdown-hidden');
    this.content.classList.toggle('dropdown-hidden');
  }
}

// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown');
dropdowns = Array.from(dropdowns).map( dropdown => new Dropdown(dropdown));

