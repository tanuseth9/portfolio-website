console.log("Hi, I am Tanu! Welcome to my Portfolio Site")

function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}

 //Check that the userName, userEmail, and userMsg field will not be empty.
 //Check that the userName, userEmail field will not be more than 20 character.
function validate(userInput1,userInput2,userInput3){

  if(userInput1==""){
    window.alert("Name field cannot be empty");
    document.form1.user_name.focus();
		console.log("false");
		return false;
  }
  if(userInput1.length>18){
    window.alert("The name field can't be more than 18 chars");
		console.log("false");
		return false;username
  }
  if(userInput2==""){
    window.alert("E-mail field cannot be empty");
    document.form1.user_email.focus();
    console.log("false");
    return false;
  }
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(!userInput2.match(mailformat))
{
alert("You have entered an invalid email address!");
document.form1.user_email.focus();
return false;
}
  if(userInput3==""){
    window.alert("Message field cannot be empty");
    document.form1.user_message.focus();
    console.log("false");
    return false;
  }
  else {
    console.log(userInput1,userInput2,userInput3);
		console.log("true");
		return true;
  }
}




//Call the function of the user input that the field user name is filled

function submitFunction() {
  validate(document.getElementById("username").value, document.getElementById("useremail").value, document.getElementById("usermsg").value);
}

document.getElementById("submit-btn").addEventListener("click", function(event){
  event.preventDefault()
});
