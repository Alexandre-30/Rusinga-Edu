function MyFunction() {
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var password = document.getElementById("password").value;
var YrGroup= document.getElementById("class").value;
//Save the data to local storage
window.localStorage.setItem("name", name);
window.localStorage.setItem("email", email);
window.localStorage.setItem("password", password);
window.localStorage.setItem("YrGroup", YrGroup);
document.getElementById("output").innerHTML = "Name : "+ name + "<br>Email : " + email + "<br>Password : " + password + "<br>Year Group : " + YrGroup;
if (YrGroup >= 9.5) {
    window.location.href='subject-selection.html';
    window.alert("Welcome, " + name + "!");
    window.alert("Please select your subjects for the next year group!");
} else {
    window.location.href='Main2.html';
    window.alert("Welcome, " + name + "!");
}}