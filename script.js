    const form = document.getElementById('numberForm')
    
    const containerSuccessMessage = document.querySelector('.successMessage');
    const containerErrorMessage = document.querySelector('.errorMessage');

    const campoAInput = document.getElementById('campoA');
    const campoBInput = document.getElementById('campoB');

    campoAInput.addEventListener('input', hideMessages);
    campoBInput.addEventListener('input', hideMessages);

    function hideMessages() {
        containerSuccessMessage.style.display = 'none';
        containerErrorMessage.style.display = 'none';
    }

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const campoA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);
    const successMessage = 'Número B é maior que Número A.';
    const errorMessage = 'O número B deve ser maior que o número A.';

    if (campoB > campoA) {
        containerSuccessMessage.innerHTML = successMessage;
        containerSuccessMessage.style.display = 'block';
    }else {
        containerErrorMessage.innerHTML = errorMessage;
        containerErrorMessage.style.display = 'block';
    }
})