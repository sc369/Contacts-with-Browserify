import createContact from "./contact"
import contactManager from "./contactCollection"

const saveButton = document.querySelector("#save_button")
const eventListener = saveButton.addEventListener("click", (event) => {
    const name = document.querySelector("#input_1").value
    const address = document.querySelector("#input_2").value
    const phoneNumber = document.querySelector("#input_3").value
    const newContact = createContact(name, address, phoneNumber)
    contactManager.postContact(newContact)
})

export default eventListener


