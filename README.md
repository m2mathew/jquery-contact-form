# jQuery Contact Form

Assignment from The Iron Yard-Austin

Week 4 - day 14

## Description

jQuery Contact Form


## Objectives

### Learning Objectives

After completing this assignment, you should…

* Understand how to do form validation using jQuery.


### Performance Objectives

After completing this assignment, you be able to effectively use

* $.val()
* $.html()
* $.on()
* $.css()
* $.show()
* $.hide()

## Details

### Deliverables

* A repo containing at least:
  * `index.html`
  * `scripts/main.js`
  * `images/bg.jpg`
  * `package.json`

### Requirements

* No JSHint warnings or errors


## Normal Mode

Create a contact form with the following fields: name, email, website and message. The form should also have a submit button. When the submit button is clicked (or the enter key is presses) it should validate all of the form fields and show *all* errors in the form data. Use CSS to style the form to be responsive. When you mouse over the submit button the background color should fade to a green color (#88C470) over the course of 0.5 seconds. If a user tries to submit the form and two or more fields are invalid, and then proceeds to fix one of the errors but not both, the error message should disappear for the field that was fixed.

### Resources

* [Background Image](https://github.com/TIY-Austin-Front-End-Engineering/jquery-contact-form/blob/master/bg.jpg)

### Errors

* Name cannot be left empty
* Email cannot be left empty
* Email must contain an '@'
* Website cannot be left empty
* Website must start with http://
* Message cannot be left empty

### Mobile

![Mobile](https://github.com/TIY-Austin-Front-End-Engineering/jquery-contact-form/blob/master/mobile.png)

### Desktop

![Desktop](https://github.com/TIY-Austin-Front-End-Engineering/jquery-contact-form/blob/master/desktop.png)

### Error example

![Error](https://github.com/TIY-Austin-Front-End-Engineering/jquery-contact-form/blob/master/error.png)

### Success page

![Success](https://github.com/TIY-Austin-Front-End-Engineering/jquery-contact-form/blob/master/success.png)

## Hard Mode

Use a keyup event to validate the form as a user is typing in content. The form should show a red left border on the input element (but not any error text) if the input is invalid as the user is typing. Only after they click the submit button should it actually show the error messages.

## Additional Resources

* [validator-js](https://github.com/chriso/validator.js)
