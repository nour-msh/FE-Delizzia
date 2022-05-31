const users = document.getElementById("users");
users.addEventListener("click", function(){
  let data = new FormData();
      axios({
          method: 'get',
          url: 'http://Localhost/delizzia/APIs/get_users.php',
          data: data,
      })
      .then(function (response) {
          console.log(response);
          window.location.href="users.html"
          }
      )
});