var customerName = "bob"

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase()
    return customerName
}

var bestCustomer

function setBestCustomer() {
    bestCustomer = `not ${customerName.toLowerCase()}`
    return bestCustomer
}

function overwriteBestCustomer() {
    bestCustomer = `maybe ${customerName.toLowerCase()}`
}

const leastFavoriteCustomer = "Also Bob"

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "Bob's Uncle"
    return leastFavoriteCustomer
}