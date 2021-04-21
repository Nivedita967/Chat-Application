// client javascript
const socket = io('http://localhost:8000');

const messageContainer = document.querySelector(".message_container")
const messageForm = document.getElementById('send_container')
const messageInput = document.getElementById('messageInp')

const name = prompt('What is your name?');
socket.emit('new-user', name);

socket.on('user-connected', name => {
  appendMessage(`${name} connected`, 'left', false);
})

socket.on('chat-message', data => {
  appendMessage(`${data.name}: ${data.message}`, 'left', false)
})

socket.on('img-msg', data => {
  appendMessage(data, 'left', true)
})

socket.on('user-disconnected', name => {
  appendMessage(`${name} disconnected`, 'left', false)
})

messageForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const message = messageInput.value;
  appendMessage(`You: ${message}`, 'right', false);
  socket.emit('send-chat-message', message);
  messageInput.value = ''
})

const appendMessage = (message, position, isItImage) => {
  if (isItImage == false) {
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messageContainer.append(messageElement);
  } else {
    var imageElement = document.createElement('div');
    var imgElemental = document.createElement('img');
    imageElement.appendChild(imgElemental);
    imgElemental.src = message;
    imgElemental.style.width = "350px";
    imgElemental.style.height = "270px";
    imageElement.classList.add('message');
    imageElement.classList.add(position);
    messageContainer.append(imageElement);
  }

}

// Upload image option function
function ChooseImage() {
  document.getElementById('imagefile').click();
}

var pre = ''
function previewFile() {
  const preview = document.getElementById('imga');
  const file = document.querySelector('input[type=file]').files[0];
  const reader = new FileReader();

  reader.addEventListener("load", function () {
    // convert image file to base64 string
    pre = reader.result;
    appendMessage(pre, 'right', true);
    socket.emit('send-img-msg', pre);

  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
}

// Copy Paste Suggestions
function CopyPaste1() {
  let copyArea = document.querySelector('.copy1');
  navigator.clipboard.writeText(copyArea.textContent);

  let pasteArea = document.getElementById('messageInp');
  pasteArea.value = '';

  navigator.clipboard.readText()
    .then((text) => {
      pasteArea.value = text;
    });
}
function CopyPaste2() {
  let copyArea = document.querySelector('.copy2');
  navigator.clipboard.writeText(copyArea.textContent);

  let pasteArea = document.getElementById('messageInp');
  pasteArea.value = '';

  navigator.clipboard.readText()
    .then((text) => {
      pasteArea.value = text;
    });
}
function CopyPaste3() {
  let copyArea = document.querySelector('.copy3');
  navigator.clipboard.writeText(copyArea.textContent);

  let pasteArea = document.getElementById('messageInp');
  pasteArea.value = '';

  navigator.clipboard.readText()
    .then((text) => {
      pasteArea.value = text;
    });
}
function CopyPaste4() {
  let copyArea = document.querySelector('.copy4');
  navigator.clipboard.writeText(copyArea.textContent);

  let pasteArea = document.getElementById('messageInp');
  pasteArea.value = '';

  navigator.clipboard.readText()
    .then((text) => {
      pasteArea.value = text;
    });
}
function CopyPaste5() {
  let copyArea = document.querySelector('.copy5');
  navigator.clipboard.writeText(copyArea.textContent);

  let pasteArea = document.getElementById('messageInp');
  pasteArea.value = '';

  navigator.clipboard.readText()
    .then((text) => {
      pasteArea.value = text;
    });
}
function CopyPaste6() {
  let copyArea = document.querySelector('.copy6');
  navigator.clipboard.writeText(copyArea.textContent);

  let pasteArea = document.getElementById('messageInp');
  pasteArea.value = '';

  navigator.clipboard.readText()
    .then((text) => {
      pasteArea.value = text;
    });
}
function CopyPaste7() {
  let copyArea = document.querySelector('.copy7');
  navigator.clipboard.writeText(copyArea.textContent);

  let pasteArea = document.getElementById('messageInp');
  pasteArea.value = '';

  navigator.clipboard.readText()
    .then((text) => {
      pasteArea.value = text;
    });
}
function CopyPaste8() {
  let copyArea = document.querySelector('.copy8');
  navigator.clipboard.writeText(copyArea.textContent);

  let pasteArea = document.getElementById('messageInp');
  pasteArea.value = '';

  navigator.clipboard.readText()
    .then((text) => {
      pasteArea.value = text;
    });
}
