const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body")

buttons.forEach(function (butt) {
    console.log(butt);
    butt.addEventListener('click', function (event) {
        console.log(event);
        console.log(event.target);

        if (event.target.id === 'grey') {
            body.style.backgroundColor = event.target.id;
        }

        if (event.target.id === 'White') {
            body.style.backgroundColor = event.target.id;
        }

        if (event.target.id === 'Blue') {
            body.style.backgroundColor = event.target.id;
        }

        if (event.target.id === 'Yellow') {
            body.style.backgroundColor = event.target.id;
        }
    });
});

// const buttons = document.querySelectorAll('.button');
// const body = document.querySelector("body");

// buttons.forEach(function(button) {
//     button.addEventListener('click', function(event) {
//         console.log(event);
//         console.log(event.target);

//         // Change background color to the id of the clicked button
//         body.style.backgroundColor = event.target.id;
//     });
// });