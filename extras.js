document.addEventListener('DOMContentLoaded', function() {
  var audio = document.getElementById('audioFondo');
  var playButton = document.getElementById('playAudioBtn');
  var stopButton = document.getElementById('stopAudioBtn');
  var volumeControl = document.getElementById('volumeControl');
  var volumeValue = document.getElementById('volumeValue');

  if (!audio || !playButton || !stopButton || !volumeControl || !volumeValue) {
    return;
  }

  audio.volume = parseFloat(volumeControl.value);
  volumeValue.textContent = Math.round(audio.volume * 100) + '%';

  playButton.addEventListener('click', function() {
    audio.play().catch(function(error) {
      console.log('No se pudo iniciar el audio:', error);
    });
  });

  stopButton.addEventListener('click', function() {
    audio.pause();
    audio.currentTime = 0;
  });

  volumeControl.addEventListener('input', function() {
    audio.volume = parseFloat(this.value);
    volumeValue.textContent = Math.round(audio.volume * 100) + '%';
  });
  // --- EmailJS dynamic loader and form handling ---
  var contactForm = document.getElementById('contactForm');
  var formStatus = document.getElementById('formStatus');

  var EMAILJS_SERVICE_ID = 'service_8ld2dza';
  var EMAILJS_TEMPLATE_ID = 'template_edqhqer';
  var EMAILJS_PUBLIC_KEY = 'M6JqcVIOC53XL-_vI';

  function updateFormStatus(message, color) {
    if (!formStatus) return;
    formStatus.textContent = message;
    formStatus.style.color = color || 'black';
  }

  function loadScript(url) {
    return new Promise(function(resolve, reject) {
      var script = document.createElement('script');
      script.src = url;
      script.onload = function() { resolve(); };
      script.onerror = function() { reject(new Error('Error cargando ' + url)); };
      document.head.appendChild(script);
    });
  }

  function setupEmailJS() {
    if (!window.emailjs) {
      updateFormStatus('EmailJS no se cargó correctamente. Comprueba la conexión a internet.', 'red');
      return;
    }

    if (EMAILJS_PUBLIC_KEY.indexOf('YOUR_') !== -1 || EMAILJS_SERVICE_ID.indexOf('YOUR_') !== -1 || EMAILJS_TEMPLATE_ID.indexOf('YOUR_') !== -1) {
      updateFormStatus('Configura tus IDs de EmailJS en extras.js antes de enviar.', 'orange');
      return;
    }

    emailjs.init(EMAILJS_PUBLIC_KEY);
    updateFormStatus('Email listo. Puedes enviar mensajes.', 'green');

    if (!contactForm) return;

    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
      updateFormStatus('Enviando mensaje...', 'black');
      emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, contactForm)
        .then(function() {
          contactForm.reset();
          updateFormStatus('Mensaje enviado correctamente. Te contactaré pronto.', 'green');
        }, function(error) {
          var errorMessage = error && error.text ? error.text : 'No se pudo enviar el mensaje. Intenta de nuevo.';
          updateFormStatus('Error al enviar: ' + errorMessage, 'red');
        });
    });
  }

  // Load EmailJS SDK dynamically from jsDelivr and then initialize
  loadScript('https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js')
    .then(function() {
      setupEmailJS();
    }).catch(function(err) {
      updateFormStatus('No se pudo cargar EmailJS: ' + err.message, 'red');
    });
});
