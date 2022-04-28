
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

