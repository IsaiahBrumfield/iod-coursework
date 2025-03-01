// Create a new map to store names begining with DEF
const phoneBookDEF = new Map()

// Initialise the contents of phonebook by passing in an array of keys/values
const phoneBookDEF = new Map()
phoneBookDEF.set('Derrick', '3373950674')
phoneBookDEF.set('Elijah', '3375346789')
phoneBookDEF.set('Faith', '3189567234')

// update the number for Caroline
phoneBookABC.set('Caroline', '3375684453')

// write function that prints names and numbers in the map
function printPhoneBook(contacts) {
    contacts.foreach((phoneNumber, name) => {
        console.log('${name}: ${phoneNumber}');
});
}

// combine 2 maps into a single map
const phoneBook = new Map( [phoneBookABC, phoneBookDEF]);

// print out full list of names in combine phoneBook
console.log('full phone book:');
phoneBook.forEach((phoneNumber, name)=>{
    console.log(name);
});