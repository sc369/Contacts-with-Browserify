const createContact = (name, phoneNumber, address, id) => {
    const newContact = {
        "name": name,
        "phoneNumber": phoneNumber,
        "address": address,
        "id": id
    }
    // console.log(newContact)
    return newContact
}


export default createContact
