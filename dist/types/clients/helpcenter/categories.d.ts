export class Categories extends Client {
    constructor(options: any);
    jsonAPINames: string[];
    list(): Promise<any[]>;
    listWithLocale(locale: any): Promise<any[]>;
    show(categoryID: any): Promise<module>;
    create(category: any): Promise<module>;
    update(categoryID: any, category: any): Promise<module>;
    updateWithLocale(locale: any, categoryID: any, category: any): Promise<module>;
    updateSourceLocale(categoryID: any, sourceLocale: any): Promise<module>;
    delete(categoryID: any): Promise<any>;
}
import { Client } from "../client";
