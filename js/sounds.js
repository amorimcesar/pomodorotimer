export function Sounds() {

  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
  const bgAudioFlorest = new Audio('../projeto05/assets/Floresta.wav')
  const bgAudioRain = new Audio("../projeto05/assets/Chuva.wav")
  const bgAudioCoffe = new Audio("../projeto05/assets/Cafeteria.wav")
  const bgAudioFirePlace = new Audio("../projeto05/assets/Lareira.wav")

  bgAudioFlorest.loop = true;
  bgAudioRain.loop = true;
  bgAudioCoffe.loop = true;
  bgAudioFirePlace.loop = true;
 
  function pressButton () {
    buttonPressAudio.play()
  }

  function timeEnd() {
    kitchenTimer.play()
  }

  function bgAudioFlorestStart() {
    bgAudioFlorest.play()    
  }

  function bgAudioFlorestPause() {
    bgAudioFlorest.pause()
  }

  function bgAudioRainStart() {
    bgAudioRain.play()
  }

  function bgAudioRainPause() {
    bgAudioRain.pause()
  }

  function bgAudioCoffeStart() {
    bgAudioCoffe.play()
  }

  function bgAudioCoffePause() {
    bgAudioCoffe.pause()
  }

  function bgAudioFirePlaceStart() {
    bgAudioFirePlace.play()
  }
  
  function bgAudioFirePlacePause() {
    bgAudioFirePlace.pause()
  }

  return {
    pressButton,
    timeEnd,
    bgAudioFlorestStart,
    bgAudioFlorestPause,
    bgAudioRainStart,
    bgAudioRainPause,
    bgAudioCoffeStart,
    bgAudioCoffePause,
    bgAudioFirePlaceStart,
    bgAudioFirePlacePause
  }
}