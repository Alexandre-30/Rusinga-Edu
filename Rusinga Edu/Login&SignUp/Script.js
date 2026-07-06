function CheckEmail() {
    var email=document.getElementById("email").ariaValueMax;
    if (email.includes("@student.rusinga.ac.ke")){
        document.getElementById("email_check").innerHTML=""
    }
