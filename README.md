# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Rachel** "Rei"

Time spent: **2.5** hours spent in total (so far, including documentation) 

Link to project: https://github.com/heylookitsme/SITE-pre-work

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ ] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [ ] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:

    Gif(s): 
    * winning condition: https://github.com/heylookitsme/SITE-pre-work/win-cond.gif
    * abberant conditions (failing to win, pressing too many buttons at once, starting/stopping without having completed a turn): https://github.com/heylookitsme/SITE-pre-work/abberant-cond.gif
    * resizing the window/style: https://github.com/heylookitsme/SITE-pre-work/flow-layout.gif
        * hey, resizing the window is *always* cool. 

EDIT: I realized the frame rate for my gifs is so low that when I double click somewhat quickly, it almost looks like I am single clicking. I promise I am double clicking. 
    Video coming soon.


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
    I used duckduckgo to get bootstrap and style buttons(https://www.bootstrapcdn.com/, https://getbootstrap.com/docs/4.0/components/buttons/). I also used https://stackoverflow.com for editor/shortcut key help. 

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
    A challenge that I encounted creating this submission was an off by one error pertaining to the guessCount/progress for each "turn". I believe I had trouble with this portion in part because I sped read the description too fast, but also because the variable names were a bit nondescript (?). I had to take a minute to really Digest what I was doing after weaning off pretty linear HTML/CSS. 
    My issue in particular was that I was checking the win condition to be when the "progress" variable was *exactly* equal to the pattern length, instead of checking if "*progress+1* == pattern.length" (because that is just how the offset of the game makes that occur). 
    I overcame this particular error by, frankly, just debugging really hard in the console. I "played" the game (set progress=6 and went from there) a couple of times, printed all the variables that were relevant to the guess() segment of code (gamePlaying, guessCounter, pattern.length) until I realised "oh, the progress variable is not equivocal to the pattern.length variable when it is supposed to be". 
    Another hiccup I had was that some of the "lit" buttons were not lighting, etc. This was because I duplicated lines too hard and forgot to increment each line (button1.lit --> button2.lit). I overcame this by inspecting element really hard and realising "oh, this red button has the lit class, but is not lighting after the light() function" --> looking back at the css and realizing that I had misnamed the active portion of the class. 

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
    Is it not better to render the different button and button states with a framework like React? especially if you have to scale with, say, >10 buttons. 

    Isn't it also really expensive to do so much work in the DOM? I suppose its unavoidable, and for such a small game it doesn't really matter, but some stuff that was asked of the project (changing button colors upon "lit"/start stop button toggle) can be done with local cookies or other "css hacks" I belive. Would it be worth it to do that for such a small game? On a larger scale?

    Was it deliberate to have buttons be pressable regardless of the game state? (gamePlaying = true/false)
    Why were we asked to use glitch? Would... we actually be writing code in this? 


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
    I do have a few more hours on this project and I will probably work on this in a bit. 

    However, to answer the question: 

    **In terms of style** I would really try to search up the best practices for style/dynamic components like the buttons in the game/the start stop/any additional features I would implement. Of course, it is not like performance would drastically alter the experience of such a simple game, but when you can have good performance and experience, you might as well develop it. 
    I think I will also consider the additional optional recommendations as I work on this a bit more in the coming week. Personally, I think the style is a little bland, and I think changing the flow layout/layout of the buttons to be centered, as well as optimizing for mobile is a good idea. ease-in animations for the lighting buttons is also pretty contemporary and cute too, so I would probably look to implement this. 

    **In terms of logic**
    I really Don't Like the lightButton() functions + editing the DOM for the start/stop toggle because I don't know if they can be... done better, and the functions are messy. I'm probably going to refactor the guessCounter/progress variables to something more... descriptive. I would *like* to also shuffle away the AudioContext functions into another file of helper functions. I would also like to change the alerts for winning and losing to just be HTML/CSS elements because I don't like alerts. 


    **In terms of game design**
    I think it would be nice to add additional buttons, like the optional recommendations suggest, but also I would like to add different game modes or difficulties (change speed, number of buttons). I think this is nice for a user because when you play a game sometimes a game gets boring if you don't have the repotoire of bajillions of levels like a lot of modern games. Moreover, I would like to implement some random pattern generation, so that the pattern is not fixed, not monotonus. 



## License

    Copyright: Rachel "Rei"

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
