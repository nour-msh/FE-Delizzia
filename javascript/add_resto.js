const addResto = document.getElementById("addResto");
const hide = document.getElementById("closeBtn");
const saveButton = document.getElementById("saveBtn");
const restoName= document.getElementById("resto");
const bio = document.getElementById("bio");
const menu = document.getElementById("menu");

addResto.addEventListener("click", openForm());
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

hide.addEventListener("click", closeForm());
function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
saveButton.addEventListener("click",function (event) {
    event.preventDefault()
    // console.log("hi")})
  let data = new FormData();
  data.append("resto_name", restoName.value);
  data.append("bio", bio.value);
  data.append("pizza_menu", menu.value);
  axios({
    method: "post",
    url: "http://Localhost/delizzia/APIs/add_restaurants.php",
    data: data,
  }).then(function (response) {
    console.log(response);
  })
})
