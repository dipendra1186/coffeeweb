document.getElementById("mybtn").addEventListener("click", function() {
    let username = document.getElementById("uname").value;
    console.log(username);
    let age = parseInt(document.getElementById("age").value); // Parse age as an integer
    if (age >= 18) {
      document.getElementById("page").innerHTML = age + " you can vote.";
    } else {
      document.getElementById("page").innerHTML = age + " you cannot vote.";
    }
  });
  
  function changeParagraphColor() {
    var p = document.getElementsByTagName("p");
    for (var i = 0; i < p.length; i++) {
      p[i].style.color = "red";
    }
  }
  
  changeParagraphColor(); // Call the function to change the color of all paragraphs on page load
  