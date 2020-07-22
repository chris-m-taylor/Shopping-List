
// Get all variables
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");




//create a helper function to recieve a list element and add an event listener to toggle on and off done when clicked
function assignDoneToggle(li){
	li.addEventListener("click", function(){
		li.classList.toggle("done");
	})

}

// helper function to return length of input field
function inputLength() {
	return input.value.length;
}

//Create a list element from the input field
function createListElement() {
	var li = document.createElement("li"); // create an li
	li.appendChild(document.createTextNode(input.value)); //append a child with the value of input
	assignDoneToggle(li); // assign an event listener 
	ul.appendChild(li); // append the li to the ul
	addDeleteButton(li); //item has delete button
	input.value = ""; // reset the input field to empty

}

// create a function to add the list item in input field
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

// create a function to add the list item 
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

// add event listeners to button and input
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);


// Iterate through all existing list elements
li.forEach(function(li){ // iterate through all li
	assignDoneToggle(li); // item clickable 
	addDeleteButton(li); //item has delete button
})


// add delete buttons and when clicked on, they delete the corresponding items
function addDeleteButton(li){
	//create a button with delete in it
	button = document.createElement("button");
	button.appendChild(document.createTextNode("delete"));

	
	// insert button after each li
	li.parentNode.insertBefore(button, li.nextSibling);

	// Add event listener when clicked
	button.addEventListener("click", function(){
		//Delete li item and the button
		console.log(li);
		console.log(button);
		li.remove();
		button.remove();

	
	})

	
	
	

	




	// add that element directly after the list item with class name delete
}










