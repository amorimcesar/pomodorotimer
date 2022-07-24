import { Sounds } from "./sounds.js"
import { Timer } from "./timer.js"
import { Controls } from "./controls.js"
import { elements } from "./elements.js"

const {buttonPlay,
  buttonPause,
  buttonStop,
  buttonAddTime,
  buttonSubTime,
  buttonFlorest,
  buttonRain,
  buttonCoffe,
  buttonFireplace,
  minutesDisplay,
  secondsDisplay
} = elements

const controls = Controls({
  buttonStop,
  buttonPlay,
  buttonFlorest,
  buttonRain,
  buttonCoffe,
  buttonFireplace,
  minutesDisplay
})

const sound = Sounds()
const timer = Timer({
  minutesDisplay, 
  secondsDisplay,
  resetControls: controls.reset
})

buttonPlay.addEventListener('click', function () {
  controls.play()
  timer.countdown()
  sound.pressButton()
})

buttonStop.addEventListener('click', function (){
  controls.reset()
  timer.reset()
  sound.pressButton()
})

buttonFlorest.addEventListener('click', function(){
  controls.startFlorestSong()
  sound.pressButton()
  sound.bgAudioFlorestStart()
  sound.bgAudioRainPause()
  sound.bgAudioCoffePause()
  sound.bgAudioFirePlacePause()
})

buttonRain.addEventListener('click', function(){
  controls.startRainSong()
  sound.pressButton()
  sound.bgAudioFlorestPause()
  sound.bgAudioRainStart()
  sound.bgAudioCoffePause()
  sound.bgAudioFirePlacePause() 
})

buttonCoffe.addEventListener('click', function(){
  controls.startCoffeSong()
  sound.pressButton()
  sound.bgAudioFlorestPause()
  sound.bgAudioRainPause()
  sound.bgAudioCoffeStart()
  sound.bgAudioFirePlacePause() 
})

buttonFireplace.addEventListener('click', function(){
  controls.startFirePlaceSong()
  sound.pressButton()
  sound.bgAudioFlorestPause()
  sound.bgAudioRainPause()
  sound.bgAudioCoffePause()
  sound.bgAudioFirePlaceStart() 
})

buttonAddTime.addEventListener('click', function(){
  controls.addTime()
  sound.pressButton()
})

buttonSubTime.addEventListener('click', function(){
  controls.subTime()
  sound.pressButton()
})


