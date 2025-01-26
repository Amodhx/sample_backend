class CustomerModel{
    customer_id:string
    first_name:string
    last_name:string
    address:string
    contact_number:string

    constructor(customer_id:string, first_name:string, last_name:string, address:string, contact_number:string) {
        this.customer_id = customer_id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.address = address;
        this.contact_number = contact_number;
    }
}
export default CustomerModel