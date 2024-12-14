const selectElement = document.querySelector('.ice-cream');
const result = document.querySelector('.result');

selectElement.addEventListener('change', (e) => {
    result.textContent = `You like ${e.target.value}`;
})

