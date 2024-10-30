export class Availabilities extends Client {
    constructor(options: any);
    jsonAPINames: string[];
    update(agentID: any, availability: any): Promise<module>;
    show(agentID: any): Promise<module>;
}
import { Client } from "../client";
