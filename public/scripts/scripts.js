function processForm(e) {
  e.preventDefault()
  console.log('hi')
  return false
}

const form = document.getElementById("chatForm")
if (form.attachEvent) {
  form.attachEvent("submit", processForm)
} else {
  form.addEventListener("submit", processForm)
}

const chat = document.getElementById("chat")
chat.scrollTop = chat.scrollHeight;

