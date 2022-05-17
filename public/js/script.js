
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
let van = document.querySelector(".anders-inputs #van");
let naar = document.querySelector(".anders-inputs #naar"); 

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
            })
            van.value = "Eindhoven Strijp-S";
            naar.value = "Amsterdam Centraal";

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
            van.value = "Amsterdam Centraal";
            naar.value = "Eindhoven Strijp-S";
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
            van.value = "";
            naar.value = "";
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
    var formElements = form.elements;
    var index = Array.prototype.indexOf.call(form, e.target);
    var usableElements = [];

    for (let i = 0; i < formElements.length; i++) {
        if(!formElements[i].hasAttribute('disabled', true)) {
            usableElements.push(formElements[i]);
        }
    }

    // On click 'h' to tab back
    if (keyCode === 72) {
        formElements[index - 1].focus();
        e.preventDefault();
    }

    // On click 'l' to tab forward
    if (keyCode === 76) {
        formElements[index + 1].focus();
        e.preventDefault();
    }
    // if clicked go to time
    if (keyCode === 0x25 || keyCode === 0x26 || keyCode === 0x27 || keyCode === 0x28 ){
        index = 13;
        formElements[index].focus();
    }

    
    var pub = document.querySelector("#pub");
    var body = document.querySelector("body");
    // On click 'm' to activate animation
    if (keyCode === 77) {
        if(pub.classList.contains("hidden")) {
            pub.classList.remove("hidden");
            pub.classList.add("active");
            body.classList.add("pubtime");
        }
        else if (pub.classList.contains("active")) {
            pub.classList.remove("active");
            pub.classList.add("hidden");
            body.classList.remove("pubtime");
        }
    }
})
let inAnHour = new Date(Date.now() + 1 * (60 * 60 * 1000)); 
 document.getElementById("time").value = inAnHour.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
});

let now = new Date(Date.now());
let timeHolder = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
});
let textTime = document.querySelector("#textTime");
let textMSG = document.querySelector("#textMSG");
textTime.innerHTML = "Het is nu: " + timeHolder;
if (now.getHours() > 9 && (now.getHours() < 17)) {
    textMSG.innerHTML = "Het is te vroeg voor bier, alhoewel..."
}
else if (now.getHours() > 17 && (now.getHours() < 24) ) {
    textMSG.innerHTML = "We gaan kruipennnnn."
}
else if (now.getHours() >= 0 && (now.getHours() < 3) ) {
    textMSG.innerHTML = "We gaan kruipennnnn."
}
else if (now.getHours() > 3 && (now.getHours() < 9)) {
    textMSG.innerHTML = "Ga naar huis joh je bent straalbezopen."
}