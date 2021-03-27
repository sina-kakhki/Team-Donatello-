const chat = document.getElementById("chat")
const form = document.getElementById("chatForm")
const messageBox = document.getElementById('chat-box')


form.addEventListener("submit", processForm)

function processForm(e) {
  e.preventDefault()
  const message = messageBox.value.toString()
  const id = document.getElementById('message-id').value.toString()
  const date = new Date().toLocaleDateString('en-NZ')

  const newMessage = `<container class='m-10 max-w-xl justify-around'>` +
    `<p class='rounded-sm text-sm bg-yellow-300 text-black-600 ml-10 max-w-xs'>${date}</p>` +
    `<p class='rounded-sm text-3xl bg-yellow-300 text-yellow-600 ml-10 max-w-xl'>${message}</p>` +
    `</container>`

  const msgElement = document.createElement('div')
  msgElement.innerHTML = newMessage

  chat.prepend(msgElement.childNodes[0])
  const params = `id=${id}&message=${message}`

  postFormData('/duck/handleMessage', params)

  chat.scrollTop = chat.scrollHeight;

  return false
}

function postFormData(url, content) {
  const http = new XMLHttpRequest()
  http.open('POST', url, true)
  http.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
  http.send(content)
}

chat.scrollTop = chat.scrollHeight;

