
// show selected date
let dates = document.querySelectorAll(".date");

dates.forEach(date => {
    date.addEventListener('click', event => {
        event.preventDefault();
        dates.forEach(button => {
            button.classList.remove("clicked");
        })
        date.classList.add("clicked");
      })
})

// show selected route 
let routeButtons = document.querySelectorAll("form div:first-of-type button");
let home = document.querySelectorAll(".thuis-route");
let work = document.querySelectorAll(".werk-route");

routeButtons.forEach(place => {
    place.addEventListener('click', event => {
        event.preventDefault();
        if (place.classList.contains("thuis-route") ) {
            work.forEach( e => {
                e.classList.remove("clicked");
            })
            home.forEach( e => {
                e.classList.add("clicked");
                e.value
            })
        }
        else if (place.classList.contains("werk-route") ) {
            home.forEach( e => {
                e.classList.remove("clicked");
            })
            work.forEach( e => {
                e.classList.add("clicked");
            })
        }
      })
})


// check button press to execute function
window.addEventListener('keydown', e => {
    const keyCode = e.keyCode;
    var form = e.target.form;
    var buttons = document.querySelectorAll("form button");
    var index = 1;

    // On click 'j'
    if (keyCode === 74) {
        index = Array.prototype.indexOf.call(form, e.target);
        form.elements[index - 1].focus();
        e.preventDefault();
    }

    // On click 'k'
    if (keyCode === 75) {
        index = Array.prototype.indexOf.call(form, e.target);
        form.elements[index + 1].focus();
        e.preventDefault();
    }

    
    var train = document.querySelector("#train");
    var body = document.querySelector("body");
    // On click 'h'
    if (keyCode === 72) {
        console.log("h");
        if(train.classList.contains("hidden")) {
            train.classList.remove("hidden");
            train.classList.add("active");
            body.classList.add("trainride");
        }
        else if (train.classList.contains("active")) {
            train.classList.remove("active");
            train.classList.add("hidden");
            body.classList.remove("trainride");
        }
    }
})