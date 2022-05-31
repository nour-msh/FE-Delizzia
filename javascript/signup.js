const btn = document.getElementById("signupButton");
const fname= document.getElementById("fname");
const lname= document.getElementById("lname");
const number= document.getElementById("number");
const email= document.getElementById("email");
const password= document.getElementById("password");
btn.addEventListener("click", function(){
  let data = new FormData();
      data.append('firstname', fname.value);
      data.append('lastname', lname.value);
      data.append('number', number.value);
      data.append('email', email.value);
      data.append('password', password.value);

      axios({
          method: 'post',
          url: 'http://Localhost/delizzia/APIs/signup.php',
          data: data,
      })
        .then(function (response) {
            console.log(response);
            console.log("hi");
            window.location.href="file:///C:/Users/user/Desktop/frontEnd_Delizzia/profile.html";
          }
          
      )
});