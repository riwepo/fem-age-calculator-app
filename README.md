# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Screenshot

![](./screenshot/screenshot1.png?raw=true)

### Links

- Solution URL: [solution URL](https://github.com/riwepo/fem-age-calculator-app)
- Live Site URL: [live site](https://riwepo.github.io/fem-age-calculator-app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Modules
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

I learned a lot about working with HTML Input elements.
Using them in 'number' mode.
Using 'onKeyDown' event to ignore non-numeric characters.
Setting the 'min' and 'max' values.
Understanding that 'maxLength' has no effect in 'number' mode.

I learned a lot about the JS Date object.
How to obtain the year, month and day.
Understanding that months are zero based.
Obtaining the difference in years, months and days between two dates, which is quite complex because of leap years.

I learned a lot about validating multiple inputs that depend on one another.

I learned how to animate a counter using useState and useEffect and a timer.

### Continued development

I just want to continue to build more complicated React apps.

### Useful resources

- [stack overflow ](https://stackoverflow.com/questions/17732897/difference-between-two-dates-in-years-months-days-in-javascript) - A nice function to get difference between two dates that accounts for leap years. Look for the post from [mordred](https://stackoverflow.com/users/911192/mordred).

- [stack overflow ](https://stackoverflow.com/questions/66490519/using-javascript-to-create-an-animated-counter-with-react-js) - Ideas to animate the counters.

## Author

- Frontend Mentor - [@riwepo](https://www.frontendmentor.io/profile/riwepo)

## Acknowledgments

Thanks to [mordred](https://stackoverflow.com/users/911192/mordred) on stack overflow for inspiration from his function to calculate difference between two dates.
