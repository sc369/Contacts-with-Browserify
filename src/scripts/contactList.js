let counter = 0
const createContactHTML = (contact) => {
    const contactWrapper = document.createElement("DIV")
    contactWrapper.setAttribute("id", `${counter}`)
    counter++
    const h = document.createElement("h1")
    const text = document.createTextNode(contact.name)
    const numberP = document.createElement("P")
    const number = document.createTextNode(contact.phoneNumber)
    const addressP = document.createElement("P")
    const address = document.createTextNode(contact.address)
    h.appendChild(text)
    numberP.appendChild(number)
    addressP.appendChild(address)
    contactWrapper.appendChild(h)
    contactWrapper.appendChild(addressP)
    contactWrapper.appendChild(numberP)
    console.log(number)
    return contactWrapper
}

export default createContactHTML