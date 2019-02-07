import contactManager from "./contactCollection"
import createContactHTML from "./contactList.js"
import eventListener from "./contactForm.js"
const loadButton = document.querySelector("#load_button")
loadButton.addEventListener("click", () => {
    contactManager.getContacts()
}

)