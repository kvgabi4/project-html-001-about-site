function topFunction() {
    document.documentElement.scrollTop = 0;
}

/*  var name = "Amy";
  alert(name);

  let x = "név";
  alert(x);
  alert(x);*/

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


/*

  function sendFunction() {

    let x = document.querySelector("form#myForm input[name=name]");
    alert(x);
    let y = toString(x.value);


}
*/
/*alert(x);*/
/*  if( name.value == "" || name.lenght < 5 ) {
       alert( "Kérlek, hogy add meg a pontos neved (legalább 5 karakter hosszan)!" );
       document.myForm.name.focus() ;
       return false;
   }
       return( true );
       console.log(name);
}
   /*
   var x = document.forms["myForm"]["name"].value;
 if (x == "") {
   alert("Name must be filled out");
   return false;
 }
}*/

/*kinyerni az adatot egy beviteli mezőből:*/
/*document.querySelector("input[name='amount-input']")
/*megkérdezem, hogy mi van benne:*/
/*let amount-input
document.querySelector("input[name='amount-input']") /*ha kívül van idézőjel, akkor belül csak ' lehet*/
/*mennyi az értéke?:*/
/*amountInput.value*/