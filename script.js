// global constants
const clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

/* Light and Sound Game, logic
 * 
 * The light and sound game is a pattern guessing game. In the game, there are N=[numButtons]
 * buttons that are each associated with a unique and distinct sound, and "light up"
 * when pressed. 
 * 
 * A random sequence, with length [sequenceLength], represented by the [pattern] variable
 * is pseudorandomly generated at the start of the game. It ranges from integers 0 to 
 * [numButtons]-1, and represents the sequence that the player is supposed to guess. 
 * 
 * This sequence is revealed to the player incrementally through "clues" by lighting
 * up the according buttons (see function: playClueSequence). After starting the game,
 * ONLY the first element (clue) of the sequence is revealed. Then, if the player correctly
 * clicks/"guesses" the first element, two elements of the sequence are revealed. f the player 
 * correctly repeats the two-element subsequence, then three elements are revealed, etcetera,
 * etcetera, ... until the last element, then they win. 
 * 
 * The current clue/subsequence length is kept track of in [currSubseqLen], and the number of guesses 
 * the player makes per clue is accrued in the [guessesMade] variable */

// Global Variables
var numButtons = 4; //default number of buttons
var seqLength = 8;
var pattern = Array.from({length: seqLength}, () => (Math.floor(Math.random() * numButtons)) + 1); 

var currSubseqLen = 0; 
var guessesMade = 0; // number of guesses the player has made in a current round
var numStrikes = 0;

var gamePlaying = false;
var volume = 0.5;
var tonePlaying = false;

function startGame(){
   // swap the Start and Stop buttons
   document.getElementById("startBtn").classList.add("hidden");
   document.getElementById("stopBtn").classList.remove("hidden");

   //initialize game variables
   currSubseqLen = 0;
   gamePlaying = true;
   pattern = Array.from({length: seqLength}, 
                              () => (Math.floor(Math.random() * numButtons)) + 1); //generates random sequence

   playClueSequence();
}

function stopGame(){
   // swap the Start and Stop buttons
   gamePlaying = false;
   document.getElementById("startBtn").classList.remove("hidden");
   document.getElementById("stopBtn").classList.add("hidden");
}

function lightButton(btn){
   document.getElementById("button"+btn).classList.add("lit");
}

function clearButton(btn){
   document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
   if(gamePlaying){
      lightButton(btn);
      playTone(btn,clueHoldTime);
      setTimeout(clearButton,clueHoldTime,btn);
   }
}

function playClueSequence(){
   let delay = nextClueWaitTime; //set delay to initial wait time
   guessesMade =0;

   // todo: now that I look at this function I hate it more and more, but 
   // as this is SITE-given code, does that mean this was done for an optimization 
   // reason?
   for(let i=0;i<=currSubseqLen;i++){ // for each clue that is revealed so far
      console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
      setTimeout(playSingleClue,delay,pattern[i]); // set a timeout to play that clue
      delay += clueHoldTime;
      delay += cluePauseTime;
   }
}

function loseGame(){
   stopGame();
   alert("Game Over. You lost.");
}

function winGame(){
   startGame();
   alert("You win!");
}

function guess(btn){
   console.log("user guessed: " + btn + ", pattern no.: " + pattern[currSubseqLen-1]);
   if(!gamePlaying){
      return;
   }else if(pattern[guessesMade] == btn){
      if (guessesMade < currSubseqLen) {
         guessesMade++;
      } else {
         if (currSubseqLen+1 == pattern.length) {
            winGame();
         } else {
            currSubseqLen++;
            playClueSequence();
         }
      }
   }else{
      loseGame();
   }
}

// game settings 
function changeNumButtons() {
   newNumButtons = parseInt(document.getElementById("numButtons").value);
   
   var a = [];
   for (var i=5 ; i <= newNumButtons; i++) {
      //onclick="guess(4)" onmousedown="startTone(4)" onmouseup="stopTone()
       a.push("<button class='gameBtn' id='button"+ i + "' onclick='guess("
               + i + ")' onmousedown='startTone("+ i + ")' onmouseup='stopTone()'></button>");
   }
   document.getElementById('optionalBtns').innerHTML = a.join("");

   numButtons=newNumButtons;
}

function toggleSettingsPanel() {
   document.getElementById("settingsPanel").classList.toggle("hidden");
}


// Sound Synthesis Functions (helper functions)
const freqMap = {
   1: 261.6,
   2: 329.6,
   3: 392,
   4: 466.2,
   5: 466.2,
   6: 466.2,
   7: 466.2,
   8: 466.2,
   9: 466.2,
   10: 466.2
}

function playTone(btn,len){ 
   o.frequency.value = freqMap[btn]
   g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
   tonePlaying = true

   setTimeout(function(){
      stopTone()
   },len)
}

function startTone(btn){
   if(!tonePlaying){
      o.frequency.value = freqMap[btn]
      g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
      tonePlaying = true
   }
}

function stopTone(){
   g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
   tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)
