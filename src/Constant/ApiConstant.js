const DOMAIN_NAME = "https://localhost:1234/"

export const CUSTOMER_API = {
    "InsertCustomerApi": DOMAIN_NAME + "customer/insertCustomer",
    "DeleteCustomer": (userId) => DOMAIN_NAME + "customer/deleteCustomer/"+userId,
    "ViewCustomer":(userId) => DOMAIN_NAME + "customer/viewCustomer/"+userId

}