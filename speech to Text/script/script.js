
function startSpeechRecognition() {
    var recognition = new webkitSpeechRecognition();
    
    recognition.onresult = function(event) {
        var result = event.results[0][0].transcript;
        var result1 = event
        console.log(result1)
        document.querySelector("textarea").value = result;
    }

    recognition.start();
}
///// text to speak
let speech = new SpeechSynthesisUtterance();

    let voices = []
    let voiceSelect = document.querySelector("select")
    window.speechSynthesis.onvoiceschanged = () =>{
        voices = window.speechSynthesis.getVoices();
        speech.voice = voices[0];
        voices.forEach((voice, index) => voiceSelect.options[index] = new Option (voice.name,index));
    };
    voiceSelect.addEventListener( 'click', ()=>{
        speech.voice = voices[voiceSelect.value]
    })

    ////////////////////
    document.querySelector(".speak").addEventListener('click', ()=> {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech)
})

