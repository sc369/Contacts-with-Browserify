import createContact from "./contact"
import contactManager from "./contactCollection"
import clearDOM from "./clearDOM";

const saveButton = document.querySelector("#save_button")
const loadButton = document.querySelector("#load_button")

const eventListeners = {
    saveListener: () => {
        saveButton.addEventListener("click", (event) => {
            const name = document.querySelector("#input_1").value
            const address = document.querySelector("#input_2").value
            const phoneNumber = document.querySelector("#input_3").value
            const newContact = createContact(name, address, phoneNumber)
            contactManager.postContact(newContact)
        })
    }
    ,
    loadListener: () => {
        loadButton.addEventListener("click", (event) => {
            // console.log(event)
            contactManager.getContacts()
            document.createElement
        }
        )
    }
    ,
    deleteListener: () => {
        const deleteButton = document.querySelector("#delete_button")
        deleteButton.addEventListener("click", (event) => {
            // console.log(event)
            clearDOM()
            const deleteButton = (document.querySelector("#delete_button"))
            const fieldset = document.querySelector("#fieldset")
            fieldset.removeChild(deleteButton)
        })
    }
}



export default eventListeners
