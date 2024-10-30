export class PhoneNumbers extends Client {
    constructor(options: any);
    jsonAPINames: string[];
    search(searchTerm: any): Promise<module>;
    list(): Promise<module>;
    create(phone_number: any): Promise<module>;
    update(phoneID: any, phone_number: any): Promise<module>;
    show(phoneID: any): Promise<module>;
    delete(phoneID: any): Promise<any>;
}
import { Client } from "../client";
