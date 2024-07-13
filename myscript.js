function myFunction() {
  document.getElementById("changeUp").style.fontSize = "35px"; 
  document.getElementById("changeUp").style.color = "yellow";
  document.getElementById("changeUp").style.backgroundColor = "red";        
}
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))