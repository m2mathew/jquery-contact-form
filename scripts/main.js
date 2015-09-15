'use strict';

// run this when the document is ready
$(document).ready(function() {

    // target elements
    var $name = $('#name');
    var $email = $('#email');
    var $website = $('#website');
    var $message = $('#message');
    var $nameErr = $('#name-error');
    var $emailErr = $('#email-error');
    var $websiteErr = $('#website-error');
    var $messageErr = $('#message-error');
    var $button = $('#button');

    // create functions
    function onButtonClick(e) {
        resetValues();
        e.preventDefault();
        var hasErr = 0;

        if($name.val() === '') {
            $nameErr.text('Name cannot be left empty');
            $name.css({ borderLeft: '4px solid red' });
            hasErr = 1;
        }
        if($email.val().indexOf('@') === -1) {
            $emailErr.text('Email must contain @');
            $email.css({ borderLeft: '4px solid red' });
            hasErr = 1;
        }
        if($website.val().substr(0,7) !== 'http://') {
            $websiteErr.text('Website must start with http://');
            $website.css({ borderLeft: '4px solid red' });
            hasErr = 1;
        }
        if($message.val() === '') {
            $messageErr.text('Message cannot be left empty');
            $message.css({ borderLeft: '4px solid red' });
            hasErr = 1;
        }

        if(hasErr === 0) {
            $('.big-box').hide();
            $('#success').show();
        }
    }

    function resetValues() {
        $nameErr.text('');
        $emailErr.text('');
        $websiteErr.text('');
        $messageErr.text('');
    }

    // add event listeners
    $('.sm-box').submit(onButtonClick);
});
