const users = document.getElementById("users");
users.addEventListener("click", function () {
  let data = new FormData();
  axios({
    method: "get",
    url: "http://Localhost/delizzia/APIs/get_users.php",
    data: data,
  }).then(function (res) {
    console.log(res.data);
    localStorage.setItem("users", JSON.stringify(res.data));
    window.location.href = "users.html";
  });
});

// const userFromlocal = localStorage.getItem("users");
// const allUsers = JSON.parse(userFromlocal);
// console.log(allUsers);
// var ul = document.createElement("ul");
// ul.setAttribute("id", "ulID");
// document.body.appendChild(ul);

// for (var i = 0; i < allUsers.length; i++) {
//   var li = document.createElement("li");
//   d1 = document.createDocumentFragment();
//   d1.appendChild(li);
//   var text1 = document.createTextNode(allUsers[i].firstname + " ");
//   var text2 = document.createTextNode(allUsers[i].lastname + " ");
//   var text3 = document.createTextNode(allUsers[i].email + " ");
//   var text4 = document.createTextNode(allUsers[i].number);
//   li.appendChild(text1);
//   li.appendChild(text2);
//   li.appendChild(text3);
//   li.appendChild(text4);
  
//   elm = document.getElementById("ul");
//   elm.appendChild(d1);

// //   ul.appendChild(li);
// }
// var element = document.getElementById("new");
// element.appendChild(ul);
