import createHTML from "./createHTML"
import clearDOM from "./clearDOM"
import eventListeners from "./eventListeners"
const addToDOM = (HTML, DOMlocation) => {
        DOMlocation.appendChild(HTML)
}
const contactManager = {

        getContacts: () => {
                return fetch("http://127.0.0.1:8088/contacts")
                        .then(res => res.json())
                        .then(parsedContacts => {
                                clearDOM()
                                parsedContacts.forEach(element => {
                                        const contactWrapper = createHTML.createContactHTML(element)
                                        addToDOM(contactWrapper, document.querySelector(".output"))
                                })
                                // if delete all button dosen't exist, create it and also listener to delete individual contacts
                                const deleteAllButton = document.getElementById("delete_button")
                                if (deleteAllButton) {
                                } else {
                                        createHTML.addDeleteButton()
                                        eventListeners.deleteListener()
                                        eventListeners.deleteContactListener()
                                }
                                // createContactHTML(parsedContacts)
                        })
        },
        postContact: (contactObject) => {
                return fetch("http://127.0.0.1:8088/contacts", {
                        method: "POST",
                        headers: {
                                "Content-Type": "application/json"
                        },
                        body: JSON.stringify(contactObject)
                })
                        .then(res => res.json())
        },

        deleteContact: (contactId) => {
                return fetch(`http://127.0.0.1:8088/${contactId}`, {
                        method: "DELETE",
                        headers: {
                                "Content-Type": "application/json"
                        },
                        body: JSON.stringify(contactObject)
                })
                        .then(res => res.json())
        }
}
export default contactManager

