export function insertFuction(element, content) {
  if (!element.classList.contains("msg-form__msg-content-container")) {
    console.error("Incorrect element passed")
    return
  }

  const editableDiv = element.querySelector(".msg-form__contenteditable")
  if (editableDiv) {
    editableDiv.setAttribute("spellcheck", "true")

    editableDiv.innerHTML = `<p>${content}</p>`
  } else {
    console.error("Editable div not found")
  }

  const placeholderDiv = element.querySelector(".msg-form__placeholder")
  if (placeholderDiv) {
    placeholderDiv.removeAttribute("aria-hidden")
    placeholderDiv.classList.remove("msg-form__placeholder")
  } else {
    console.error("Placeholder div not found")
  }

  const sendButton = element.querySelector(".msg-form__send-btn")
  if (sendButton) {
    sendButton.removeAttribute("disabled")
  } else {
    console.error("Send button not found")
  }
}
