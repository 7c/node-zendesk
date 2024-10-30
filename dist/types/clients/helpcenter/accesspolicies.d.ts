export class AccessPolicies extends Client {
    constructor(options: any);
    jsonAPINames: string[];
    show(sectionID: any): Promise<module>;
    update(sectionID: any, accessPolicy: any): Promise<module>;
}
import { Client } from "../client";
