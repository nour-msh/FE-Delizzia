const profButton = document.getElementById("profButton");
const hide= document.getElementById("closeBtn");
const saveBtn= document.getElementById("saveBtn");
const fname= document.getElementById("fname");
const lname= document.getElementById("lname");
const email= document.getElementById("email");
const password= document.getElementById("password");
const number= document.getElementById("number");


profButton.addEventListener("click", openForm());
    function openForm(){
        document.getElementById("myForm").style.display = "block";
    }

hide.addEventListener("click", closeForm());
    function closeForm(){
        document.getElementById("myForm").style.display = "none";
    }
saveBtn.addEventListener("click", function(){
    let data = new FormData();
        data.append('firstname', fname.value);
        data.append('lastname', lname.value);
        data.append('email', email.value);
        data.append('password', password.value);
        data.append('number', number.value);
        axios({
          method: 'post',
          url: 'http://Localhost/delizzia/APIs/profile.php',
          data: data,
      })
        .then(function (response) {
          console.log(response);
          }
      )})



// var coloredButton = document.getElementById("activities").addEventListener("click", turnRed);
// function turnRed(){
//     document.getElementById("activities").style.color="#d31515fd"
// }