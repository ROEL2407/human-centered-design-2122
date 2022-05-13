
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
let anders = document.querySelectorAll(".anders");

routeButtons.forEach(place => {
    place.addEventListener('click', event => {
        event.preventDefault();
        if (place.classList.contains("thuis-route") ) {
            work.forEach( e => {
                e.classList.remove("clicked");
            })
            anders.forEach( e => {
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
            anders.forEach( e => {
                e.classList.remove("clicked");
            })
            work.forEach( e => {
                e.classList.add("clicked");
            })
        }
        else if (place.classList.contains("anders") ) {
            home.forEach( e => {
                e.classList.remove("clicked");
            })
            anders.forEach( e => {
                e.classList.add("clicked");
            })
            work.forEach( e => {
                e.classList.remove("clicked");
            })
        }

            
    let anders_input = document.querySelectorAll(".anders-input");
    
    anders.forEach( e => {
        if (e.classList.contains("clicked")) {
            anders_input.forEach( input => {
                input.classList.remove("hidden");
            })
        }
        else if (!e.classList.contains("clicked")) {
            anders_input.forEach( input => {
                input.classList.add("hidden");
            })
        }
    })
      })
})




// check button press to execute function
window.addEventListener('keydown', e => {
    const keyCode = e.keyCode;
    var form = e.target.form;
    var buttons = document.querySelectorAll("form button");
    var index = 1;

    // On click 'h' to tab back
    if (keyCode === 72) {
        index = Array.prototype.indexOf.call(form, e.target);
        form.elements[index - 1].focus();
        e.preventDefault();
    }

    // On click 'l' to tab forward
    if (keyCode === 76) {
        index = Array.prototype.indexOf.call(form, e.target);
        form.elements[index + 1].focus();
        e.preventDefault();
    }
    
    // if clicked go to time
    if (keyCode === 0x25 || keyCode === 0x26 || keyCode === 0x27 || keyCode === 0x28 ){
        index = 14;
        form.elements[index].focus();
    }

    
    var train = document.querySelector("#train");
    var body = document.querySelector("body");
    // On click 'm' to activate animation
    if (keyCode === 77) {
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

