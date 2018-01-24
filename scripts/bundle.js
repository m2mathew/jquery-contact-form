(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

// run this when the document is ready
$(document).ready(function () {

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

        if ($name.val() === '') {
            $nameErr.text('Name cannot be left empty');
            $name.css({ borderLeft: '4px solid red' });
            hasErr = 1;
        }
        if ($email.val().indexOf('@') === -1) {
            $emailErr.text('Email must contain @');
            $email.css({ borderLeft: '4px solid red' });
            hasErr = 1;
        }
        if ($website.val().substr(0, 7) !== 'http://') {
            $websiteErr.text('Website must start with http://');
            $website.css({ borderLeft: '4px solid red' });
            hasErr = 1;
        }
        if ($message.val() === '') {
            $messageErr.text('Message cannot be left empty');
            $message.css({ borderLeft: '4px solid red' });
            hasErr = 1;
        }

        if (hasErr === 0) {
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

},{}]},{},[1])

//# sourceMappingURL=bundle.js.map
