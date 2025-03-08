function changeColor() {
    // Access the h2 element by its ID
    var heading = document.getElementById("heading");
    
    // Generate random color
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    
    // Change the text color
    heading.style.color = randomColor;
}
