const resto = document.getElementById("restos");
resto.addEventListener("click", function(){
  let data = new FormData();
      axios({
          method: 'get',
          url: 'http://Localhost/delizzia/APIs/get_restaurants.php',
          data: data,
      })
      .then(function (response) {
          console.log(response);
          }
      )
});