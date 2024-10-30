export class Greetings extends Client {
    constructor(options: any);
    jsonAPINames: string[];
    list(): Promise<module>;
    show(greetingID: any): Promise<module>;
    create(greeting: any): Promise<module>;
    update(greeting: any, greetingID: any): Promise<module>;
    delete(greetingID: any): Promise<any>;
}
import { Client } from "../client";
