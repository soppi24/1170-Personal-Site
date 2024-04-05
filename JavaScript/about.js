function validateForm() {
  const submitButton = document.getElementById("submit-button");
  const message = document.getElementById("message-panel");


  submitButton.addEventListener("click", function validate(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    let emailPattern = /@/;
    let phonePattern = /^[0-9]+$/;
    const phone = document.getElementById("phone").value;
    const topicOfInterest = document.getElementById("topicOfInterest").value;
    const boxMessage = document.getElementById("boxMessage").value;

    //Options for selectiong affiliation
    const option1 = document.getElementById("option1")
    const option2 = document.getElementById("option2")
    const option3 = document.getElementById("option3")

    function validateAffiliation() {
      if (option1.checked || option2.checked || option3.checked){
        return true;
      }
      return false;
    }

    if (!name || !email || !phone || !topicOfInterest || !boxMessage) {
      message.style.backgroundColor = "#ff6961";
      message.style.color = "white";
      message.innerHTML = "Please fill in all fields";

    } else if (!emailPattern.test(email)){
      message.style.backgroundColor = "#ff6961";
      message.style.color = "white";
      message.innerHTML = "Email is not a valid one";

    } else if (!(10 == phone.length || phone.length == 11) || !phonePattern.test(phone)) {
      message.style.backgroundColor = "#ff6961";
      message.style.color = "white";
      message.innerHTML = "Not a valid Phone Number";

    } else if (!validateAffiliation()) {
      message.style.backgroundColor = "#ff6961";
      message.style.color = "white";
      message.innerHTML = "Please select your affiliation";

    } else if (topicOfInterest == " ") {
      message.style.backgroundColor = "#ff6961";
      message.style.color = "white";
      message.innerHTML = "Please pick a topic of interest";
      
    } else if (boxMessage == "") {
      message.style.backgroundColor = "#ff6961";
      message.style.color = "white";
      message.innerHTML = "There's no message, please write one";
      
    } else {
      message.style.backgroundColor = "#77dd77";
      message.style.color = "white";
      message.innerHTML = "Submit successful";
    }
    
  });
}

validateForm();


