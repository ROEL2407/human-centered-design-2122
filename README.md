# Human Centered Design @cmda-minor-web 2021 - 2022

### Table of contents

Assignment<br />
[Where is this repository for?](https://github.com/ROEL2407/real-time-web-2122#where-is-this-repository-for)<br />
[What's the goal of this repository?](https://github.com/ROEL2407/real-time-web-2122#whats-the-goal-of-this-repository)

Project<br />
[Usage](https://github.com/ROEL2407/real-time-web-2122#usage)<br />
[Test results](https://github.com/ROEL2407/real-time-web-2122#test-results)<br />
[Exclusive design principles](https://github.com/ROEL2407/real-time-web-2122#exclusive-design-principles)<br />
[Installation](https://github.com/ROEL2407/real-time-web-2122#installation)<br />
[Online version](https://github.com/ROEL2407/real-time-web-2122#online-version)<br />
[Rubric](https://github.com/ROEL2407/real-time-web-2122#rubric)<br />
[Commits](https://github.com/ROEL2407/real-time-web-2122#commits)<br />
[Resources](https://github.com/ROEL2407/real-time-web-2122#resources)<br />
[License](https://github.com/ROEL2407/real-time-web-2122#license)

## Where is this repository for?

This repository is for my lessons from the minor Web Development from the HvA.

## What's the goal of this repository?

This repository's goal is to let Marijn search for a train to get to or from work so that someone can help him with his wheelchair. With an option to make other trips with the train.

## Usage

This app is made for Marijn. Marijn has motor disorders. He uses his laptop different to me because of it. He has difficulties with fine motor skills. He uses his keyboard and touchpad to navigate. He has Sticky Keys activated.

With this info I have made an app for Marijn where he could look at which train he needs to get for getting to work or to home.

## Test results

For this project I'm going to test my app with Marijn. I will test 3 times with him.

### Test 1

This test was done in an online call. My teacher Vasilis went to Marijn and places his laptop so i could see what Marijn was doing.

New insights:

- The time of day can be retrieved on the current time instead of a random starting time. Preferably an hour before because of planning reasons.
- Marijn uses the keys H, J, K and L to navigate.
- Marijn doesn't use the tab key.
- Work or Home can't be the destination and the starting point of the trip at the same time.
- Is the sumbit button necessary.
- To work (Amsterdam), Marijn plans a day ahead of time.
- To home (Eindhoven), Marijn plans as soon as possibly can.
- Marijn has a trip to another destination maybe once in the month.

Updates before the test:
As this is the first test, there haven't been any updates yet

Working process after testing:

I firstly changed the select tags to buttons as they are easier to work with for Marijn. I also thought about using the H, J, K, L buttons for tabbing and tried to get the functions of tab to 2 of these buttons.

I also tried to get the NS API running so I could do recommendations. I've tried endlessly to connect the API but it kept saying my key wasn't right when that was the only key I got from them. With little time to the next test I changed the priority of this idea lower.

### Test 2

This test was done offline in class. I connected Marijn's laptop to a big screen so I could see what he was doing and also stood beside him so I could see him using his keyboard and touchpad.

New insights:

- The usage of the H, J, K and L keys comes from Vim
- Extra info like the depart platform and the traveling time are helpfull if you want to display the trips.

Updates before the test:

- Fixed that Work or Home can't be the destination and the starting point of the trip at the same time.

Working process after testing:

After this test I began to get the tab functions working on the J (backwards tab) and K (forwards tab) buttons. While testing myself, I noticed the fieldsets I had in my form prevented the user to go further as it isn't a tag which can be focused on. Because of this and endlessly trying to remove fieldsets using js form the form elements list I replaced them with div's.

After that I added nonsense to my app. I went with the overall theme and added a train which will appear on the press of the H key. I added the NS logo to it and the colors of NS.

### Test 3

This test was done offline in class. I connected Marijn's laptop to a big screen so I could see what he was doing and also stood beside him so I could see him using his keyboard and touchpad.

New Insights:

- J and K button are better to use for up and down
- The train animation is a bit childish, make it more morbit
- Marijn takes the train 9:30 am and late in the evening
- Marijn could take a trip to another place
- if clicked on the arrows, marijn expects to go to the time input

Updates before the test:

- Added the train animation
- Added tabbing on j and k

Working process after testing:

After the test I had a little bit of time to change some things based on the feedback from the last test.

I changed little things like the min and max of the time input that i had on 6:00 to 20:00. I changed that to 0:00 to 23:59 because Marijn could take later or earlier trains

I also changed the tab buttons and the button for the animation. I changed the tab buttons from J and K to H and L. Because H was the animation button, I changed this to M.

A thing I forgot to add in earlier tests was make it possible to travel to something else then home and work. I added this with another button for a different journey.

I also added they functionality to go to the time directly if you push the arrow keys.

In this little time I had, I couldn't add everything Marijn had as feedback. These are the things I couldn't add:

- Change the animation to something more Marijn like. Marijn said the animation of the train was a bit childish, which I agree with after a hard look. What I would've done on suggestion of Marijn was a disaster to happen. I thought when the animation button was clicked, a tied up person would fall from the sky and be tied to the tracks. when the train would drive over the person, blood spatters would go everywhere on the background.
- Marijn said J and K are more used for up and down. I wanted to add this functionality into my app but with this time I couldn't. I would've liked it for skipping to another part of the reservation like from the date buttons to the time input.
- Preferably I would've added that if the "Anders" journey was selected, the user then could enter their train stations. This actually bugged the tabbing through the item because the item was there in the html but not visible. The system would then stay on the last tabbed item and couldn't go to the next one because it kept trying to get to the input field.

The last look of my date picker:
<img src="https://github.com/ROEL2407/human-centered-design-2122/blob/main/readme-images/v1.png" alt="a black website, almost none to no styling done">

### Assesment of my teachers

In my assesment it was clear I head some work to do, the styling was not enough and I fully agreed with my teacher about this. That's why I had work to do for my resit. In this part, I will share with you what I've changed. In this picture you will see the new date picker:

<img src="https://github.com/ROEL2407/human-centered-design-2122/blob/main/readme-images/v2.png" alt="new look of the app">

As seen above, I changed the buttons to look like neon signs that are on in a dark pub or bar. I looked at what Marijn likes and tried to do what other classmates didn't already do for him. Marijn likes beer and in the last test he said that he used to go out and party in bars. That's why I choose to do this design and when you putt the lights on with the button "M", you can see the bartender and the bar.

The bartender is a replacement for the train idea I had. Marijn found the design of it too childish and after looking at it, he was totally correct.

The bartender plays a fun but maybe an important role. Based on the time that you look at te date picker, he gives feedback whether it's time to enjoy some beer or not.

<img src="https://github.com/ROEL2407/human-centered-design-2122/blob/main/readme-images/v2_bar.png">

I also made an attempt to fix the tabbing over disabled input fields. i needed this because Marijn could take another train route. This was really not an easy task. In my first version, the tabbing would stop because the sytsem wanted to go to an element in the form that didn't excist. It also wouldn't skip over it and would stay at the last focused element.

With lots of research and some changes in fixed that the disabled elements wouldn't be in the same list as the other usable elements. with this the system wouldn't use the disabled element to tab to. But the sad part is that the target, which is the indicator in the form that says which element needs to be focussed, still sees the disabled elements. Because this happens, the target will now skip 3 element in each tab forward and will neglect the tab backwards.

This is why I have chosen for the more simple and less user friendly option to not disable the input fields, so that the tabbing does what it needs to do.

As the input fields would be useless if Marijn comes from home or work, I added that if he clicks one of these routes using the buttons, the stations would be filled into the input fields. If "Anders" is selected, the field will go empty again. I specificly chose to make these empty and not add Eindhoven to the "Naar" input field as Marijn doesn't have to go to home when he comes from a different station other then Amsterdam Centraal.

<img src="https://github.com/ROEL2407/human-centered-design-2122/blob/main/readme-images/v2_inputs.png">

## Exclusive design principles

### Study situation

By studying your user with a disability, you can understand their needs for a good user experience. That's why these tests I've done with Marijn are so important. I need to make myself aware that not all people can use a website the way I use it.

### Ignore conventions

By ignoring conventions you can help your user with a disability. Mainstream functionality aren't always helpfull. That's why you need to ignore them and look at other ways for your user to achieve the same goal.

### Prioritize Identity

Studying the user with a disability is not enough, you need to get to know the person you're helping with your website or app. When you know your user, you can implement the things they like. This will help the user experience and make it more attractive.

### Add nonsense

By adding nonsense, you can make your website or app more attractive by the user. Websites don't have to be formal if the situation isn't made for it. You can let the user let off some steam by adding things that are fun. These things can also be helpfull for a developer like me. It can help understanding your user better, which can help you in producing a better website or app.

## Installation

Clone this repository to your own device:

```console
git clone https://github.com/ROEL2407/real-time-web-2122.git
```

Then, in the terminal do:

```console
npm install
```

This project uses Nodemon. Because of hosting problems you need to change the npm start script from "node" to "nodemon"

## Online version

If you don't want to download everything, there's an online version for you [here](https://date-picker-online.herokuapp.com/).

## Rubric

De opdracht wordt beoordeeld aan de hand van onderstaande rubric. Je moet slagen voor het criterium (middenkolom) om het vak te halen.

| Ontoereikend | Criteria                                                                                                                                                                                                                                                                                                                                | Verbetering |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|              | Readme - In de beschrijving van het project staat de opdracht uitgelegd, is het probleem duidelijk beschreven en hoe het probleem is opgelost.                                                                                                                                                                                          |             |
|              | Design Principles - Student laat zien hoe de Exclusive Design Principles zijn toegepast in het ontwerp. De principes study situation, prioritise identity, ignore conventions en add nonsense zijn goed uitgelegd. Aan de hand van de principes wordt duidelijk gemaakt hoe deze hebben bijgedragen aan het verbeteren van het ontwerp. |             |
|              | User Needs - Er is een user scenario geschreven dat aansluit bij de identiteit van de test persoon. Er is een duidelijk en volledig user scenario geschreven dat antwoord geeft op de 4 w-vragen: Who? What? How? en Why?                                                                                                               |             |
|              | Testen - Er is minimaal drie keer getest. Er is een verslaglegging van de tests gedaan waarin de test-opzet wordt behandeld en er is een duidelijke conclusie beschreven met do's en dont's over hoe je goed kan testen.                                                                                                                |             |
|              | Testresultaten - Aan de hand van de tests wordt duidelijk gemaakt hoe deze hebben bijgedragen aan het verbeteren van het ontwerp of hoe dit een volgende keer beter of anders kan.                                                                                                                                                      |             |

## Commits

In this repo I will commit my work. To make this more visible for myself and others I've added little headers to the commit titles:

- Created = a file is created
- Updated = updated a file or piece of code
- Delete = deleted a file

## Resources

### Credits

- Our teachers at the minor Web Development.
- My fellow students who've helped me resolving some problems and learning me new types of tricks.
- Stackoverflow for giving me the answer that I could tweak or that helped me understand my problem in the code better.
<hr />

## License

Usage is provided under the [MIT License](https://github.com/ROEL2407/human-centered-design-2122/blob/main/LICENSE). See LICENSE for the full details.
