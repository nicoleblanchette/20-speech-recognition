
const SpeechRecognition = window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
let p = document.createElement('p');
const words = document.querySelector('.words');
words.append(p);

recognition.addEventListener('result', e => {
  const transcript = [...e.results].map(result => result[0].transcript).join('');
  p.textContent = (transcript);
  if (e.results[0].isFinal) {
    p = document.createElement('p');
    words.append(p);
  }
  
  if (transcript.includes('can you hear me')) {
    const affirm = document.createElement('p');
    affirm.textContent = 'Yes I can!';
    words.append(affirm);
  }
});


recognition.addEventListener('end', recognition.start);

recognition.start();