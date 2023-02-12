/** allowing buttons to be functional */
console.log("Here")
document.getElementById("move-to-top").addEventListener("click", function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});