/*
Name: Elizabeth Rodriguez
Assignment: Coding04 
Purpose: Contact Form / add error or success message once validated.  
Notes: J-SCRIPT
*/

"use strict";

function validEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("remail1").value = "";
    document.getElementById("remail2").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
}

function validate() {
    var errorMessage = "";

    //get all the elements into the function
    var nameInput = document.getElementById("name");
    var remail1Input = document.getElementById("remail1");
    var remail2Input = document.getElementById("remail2");
    var subjectInput = document.getElementById("subject");
    var messageInput = document.getElementById("message");

    //get all the strings in the elements
    var name = nameInput.value.trim();
    var remail1 = remail1Input.value.trim();
    var remail2 = remail2Input.value.trim();
    var subject = subjectInput.value.trim();
    var message = messageInput.value.trim();

    //put the trimmed versions back into the form
    nameInput.value = name;
    remail1Input.value = remail1;
    remail2Input.value = remail2;
    subjectInput.value = subject;
    messageInput.value = message;

    if (name === "") {
        errorMessage += "Name cannot be empty.<br>";
    }

    if (!validEmail(remail1)) {
        errorMessage += "First email is not valid.<br>";
    }

    if (!validEmail(remail2)) {
        errorMessage += "Second email is not valid.<br>";
    }

    if (remail1 !== remail2) {
        errorMessage += "Emails must match.<br>";
    }

    if (subject === "") {
        errorMessage += "Subject cannot be empty.<br>";
    }

    if (message === "") {
        errorMessage += "Message cannot be empty.<br>";
    }

    return errorMessage;

}

//handler for contact-send button
var sendBtn = document.getElementById("contact-send");
sendBtn.onclick = function () {
    var msgArea = document.getElementById("msg");
    var msg = validate();
    if (msg === "") {
        document.forms["email-form"].submit();
    } else {
        msgArea.innerHTML = msg;
    }
};

//handler for contact-clear button
var clearBtn = document.getElementById("contact-clear");
clearBtn.onclick = function () {
    clearForm();
};