# Human Centered Design @cmda-minor-web 2021 - 2022

### Table of contents

Assignment<br />
[Where is this repository for?](https://github.com/ROEL2407/real-time-web-2122#where-is-this-repository-for)<br />
[What's the goal of this repository?](https://github.com/ROEL2407/real-time-web-2122#whats-the-goal-of-this-repository)

Project<br />
[Usage](https://github.com/ROEL2407/real-time-web-2122#usage)<br />
[Example images](https://github.com/ROEL2407/real-time-web-2122#example-images)<br />
[Installation](https://github.com/ROEL2407/real-time-web-2122#installation)<br />
[Online version](https://github.com/ROEL2407/real-time-web-2122#online-version)<br />
[Activity Diagram](https://github.com/ROEL2407/real-time-web-2122#activity-diagrams)<br />
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

New insights:

- The time of day can be retrieved on the current time instead of a random starting time. Preferably an hour before because of planning reasons.
- Marijn uses the keys H, J, K and L to navigate.
- Marijn doesn't use the tab key.
- Work or Home can't be the destination and the starting point of the trip at the same time.
- Is the sumbit button necessary.
- To work (Amsterdam), Marijn plans a day ahead of time.
- To home (Eindhoven), Marijn plans as soon as possibly can.
- Marijn has a trip to another destination maybe once in the month.

Updates:
As this is the first test, there haven't been any updates yet

### Test 2

New insights:

- The usage of the H, J, K and L keys comes from Vim
- Extra info like the depart platform and the traveling time are helpfull to be added.

Updates:

- Fixed that Work or Home can't be the destination and the starting point of the trip at the same time.

Working process after testing:

After this test I began to get the tab functions working on the J (backwards tab) and K (forwards tab) buttons. While testing I noticed the fieldsets I had in my form prevented the user to go further as it isn't a tag which can be focused on using tab or something sortlike. Because of this and endlessly trying to remove fieldsets using js form the form elements list I replaced them with div's.

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

If you don't want to download everything, there's an online version for you [here](https://pwa-rijksmuseum-roel.herokuapp.com/).

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
