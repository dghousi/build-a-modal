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

