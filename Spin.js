document.getElementById("myButton").addEventListener("click", function() {
  for (let i = 0; i < 10; i++) {
    document.getElementById("myButton").style.transform = `rotate(${i * 36}deg)`;
  }
});
