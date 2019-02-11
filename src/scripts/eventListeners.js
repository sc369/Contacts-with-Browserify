import createContact from "./createContact"
import contactManager from "./contactManager"
import clearDOM from "./clearDOM";

const saveButton = document.querySelector("#save_button")
const loadButton = document.querySelector("#load_button")

const eventListeners = {
    saveListener: () => {
        saveButton.addEventListener("click", (event) => {
            const name = document.querySelector("name").value
            const address = document.querySelector("address").value
            const phoneNumber = document.querySelector("phoneNumber").value
            const newContact = createContact(name, address, phoneNumber)
            contactManager.postContact(newContact)
        })
    }
    ,
    loadListener: () => {
        loadButton.addEventListener("click", () => {
            contactManager.getContacts()
            document.createElement
        }
        )
    }
    ,
    deleteListener: () => {
        const deleteButton = document.querySelector("#delete_button")
        deleteButton.addEventListener("click", () => {
            clearDOM()
            const deleteButton = (document.querySelector("#delete_button"))
            const fieldset = document.querySelector("#fieldset")
            fieldset.removeChild(deleteButton)
        })
    },
    deleteContactListener: () => {
        const output = document.querySelector(".output")
        output.addEventListener("click", () => {
            const eventId = event.target.id.split("--")[1]
            console.log(eventId)
            const found = document.getElementById(`${eventId}`)
            console.log(found)

            // contactManager.deleteContacts
            // contactManager.getContacts
        })

    }
}
export default eventListeners
