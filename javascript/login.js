
const btn = document.getElementById("loginButton");
const email= document.getElementById("email");
const password= document.getElementById("password");
btn.addEventListener("click", function(){
    let data = new FormData();
        data.append('email', email.value);
        data.append('password', password.value);
        axios({
            method: 'post',
            url: 'http://Localhost/delizzia/APIs/login.php',
            data: data,
        })
        .then(function (response) {
            console.log(response);
            let result=response.data;
            if (result.response=="Logged in"){
                if(email.value =="admin@gmail.com" & password.value == "pizza_admin"){
                    window.location.href="file:///C:/Users/user/Desktop/frontEnd_Delizzia/adminPage.html"
                }
                else{
                window.location.href="file:///C:/Users/user/Desktop/frontEnd_Delizzia/profile.html";
            }
            }})
        });