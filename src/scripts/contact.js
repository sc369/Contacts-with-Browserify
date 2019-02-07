const createContact = (name, phoneNumber, address) => {
    const newContact = {
        "name": name,
        "phoneNumber": phoneNumber,
        "address": address,
    }
    console.log(newContact)
    return newContact
}


export default createContact
