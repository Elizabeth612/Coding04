<?php

//Acept the location of a web page for redirect
function redirect($url) {
    header('Location: '.$url);
    exit();
}


//Driver function
function main() {
    //Put each value from $_POST in its own variable. Must input validation on each one.
    
    //For each value except email addresses input validation will be to trim and strip.
    $name = substr(strip_tags(trim($_POST['name'])),0,64);

    //For email input validation use the buit in PHP email validation like:
    $from = filter_var($_POST['remail1'], FILTER_VALIDATE_EMAIL);

    //For non-email values 1)Trimming the white space before and after the values. 
    //2)Remove any HTML tags to prevent HTML injection
    //3)Sizing the value down to our form's maxlenght value. use literals
    $subject = substr(strip_tags(trim($_POST['subject'])),0,64);
    $message = substr(strip_tags(trim($_POST['message'])),0,1000);
    
    /* if name AND from_email AND subject AND message are valid
        create email headers
        send email
        if send email == to success
           redirec to to sucess page
        else
           redirecto to error page
        else redirecto to error page
    */
    //Test for empty values.
    //function empty()
    
    // if name from message and subject are not empty then they have been validated
    if (!empty($name) and !empty($from) and !empty($subject) and !empty($message)) {
        //Create email headers 
        $headers = "From: $from\r\n";
        $headers .= "Reply-to: $from\r\n";
        $headers .= "MINE-Version: 1.0\r\n";
        
        //Email - you have to modify your php.ini file to be able to send email
        $send = mail('elyokumura@yahoo.com', $subject.':'.$name, $message, $headers);
        
        //To redirecto use the redirect function
        if ($send == TRUE) {
            redirect('email-success.html');
        }
        else {
            redirect('email-error.html');
        }
    }
    else {
        echo 'Invalid form inputs';
    }
}

main();

?>
