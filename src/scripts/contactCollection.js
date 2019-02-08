import createHTML from "./contactList"
import clearDOM from "./clearDOM"
import eventListeners from "./contactForm"
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
                                createHTML.addDeleteButton()
                                eventListeners.deleteListener()
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
        }
}
export default contactManager

