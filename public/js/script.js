
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
let routeButtons = document.querySelectorAll("fieldset:first-of-type button");
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
    var removeItem = ["fieldset"];

    // On click 'j'
    if (keyCode === 74) {
        index = Array.prototype.indexOf.call(form, e.target);
        if (e.target.nodeName === "FIELDSET") {
            
            form.elements[index - 2].focus();
        }
        else {
            form.elements[index - 1].focus();
        }
            e.preventDefault();
        console.log(buttons);
        console.log(form.elements);
    }
    // On click 'k'
    if (keyCode === 75) {
        index = Array.prototype.indexOf.call(form, e.target);
        form.elements[index + 1].focus();
        e.preventDefault();
        console.log(buttons);
        console.log(form.elements);
    }
})