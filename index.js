// we need an event listener just attaches to an element (like a light switch) - in this case a DOM element, our button(s)!
// DOM elements = anything you see on the page on the document (divs, buttons, tables, links--any HTML element!divs, buttons, tables, links--any HTML element!)
// you can switch out "click" or be other types of DOM events (keydown, mouseover), any sort of event that a user can do, you can capture user actions using event listeners!

let overlay = document.getElementById('overlay');

let closeModal = document.getElementById('close-modal');

let openModal = document.getElementById('open-modal');


closeModal.addEventListener('click', function()
{
    overlay.style.display = 'none';
})


openModal.addEventListener('click', function()
{
    
    overlay.style.display = 'block';
})

