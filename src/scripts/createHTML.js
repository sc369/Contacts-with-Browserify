import eventListeners from "./eventListeners"

const createHTML = {
    createContactHTML: (contact) => {
        const contactWrapper = document.createElement("DIV")
        contactWrapper.setAttribute("id", `${contact.id}`)
        const h = document.createElement("h1")
        const text = document.createTextNode(contact.name)
        const numberP = document.createElement("P")
        const number = document.createTextNode(contact.phoneNumber)
        const addressP = document.createElement("P")
        const address = document.createTextNode(contact.address)
        const deleteContactButton = document.createElement("button")
        const buttonText = document.createTextNode(`delete ${contact.name}`)
        deleteContactButton.appendChild(buttonText)
        deleteContactButton.setAttribute("id", `deleteButton--${contact.id}`)
        h.appendChild(text)
        numberP.appendChild(number)
        addressP.appendChild(address)
        contactWrapper.appendChild(h)
        contactWrapper.appendChild(addressP)
        contactWrapper.appendChild(numberP)
        contactWrapper.appendChild(deleteContactButton)
        // console.log(number)
        return contactWrapper
    }
    ,
    addDeleteButton: () => {
        const newButton = document.createElement("BUTTON")
        newButton.setAttribute("id", "delete_button")
        newButton.innerHTML = "Delete"
        document.querySelector("fieldset").appendChild(newButton)
    }
}
export default createHTML