function myFunction() {
  document.getElementById("changeUp").style.fontSize = "35px"; 
  document.getElementById("changeUp").style.color = "yellow";
  document.getElementById("changeUp").style.backgroundColor = "red";        
}

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

let count = 0;
const button = document.getElementById('counterButton, counterButton1, counterButton2, counterButton3, counterButton4, counterButton5');
const countDisplay = document.getElementById('count');

button.addEventListener('click', () => {
  count++;
  countDisplay.textContent = count;
});

function checkAge() {
    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value, 10);

    const result1Div = document.getElementById('result1');
    result1Div.style.display = 'block';

    if (age >= 18) {
      result1Div.innerHTML = `<p>Welcome, ${name}! You are ${age} years old and eligible for the application.</p>`;
    } else {
      result1Div.innerHTML = `<p>Sorry, ${name}. You are ${age} years old and not eligible for the application.</p>`;
    }
  }

