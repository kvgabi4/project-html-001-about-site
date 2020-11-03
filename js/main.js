function topFunction() {
    document.documentElement.scrollTop = 0;
}

function sendFunction() {

    let myName = document.myForm.name.value;
    /*   alert(myName);*/
    if (myName == "" || myName.length < 5) {
        alert("Kérlek, hogy add meg a pontos neved (legalább 5 karakter hosszan)!");
        document.myForm.name.focus();
    }

    let myEmail = document.myForm.email.value;
    /*   alert(myEmail);*/
    var atposition = myEmail.indexOf("@");
    var dotposition = myEmail.lastIndexOf(".");
    if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= myEmail.length) {
        alert("Kérlek, hogy add meg a pontos e-mail címed!");

    }

    let myComment = document.myForm.comment.value;
    /*   alert(myComment);*/
    if (myComment == "" || myComment.length < 20) {
        alert("Kérlek, hogy írj megjegyzést (legalább 20 karakter hosszan)!");
        document.myForm.comment.focus();
        return false;
    }

}


