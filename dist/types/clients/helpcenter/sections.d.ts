export class Sections extends Client {
    constructor(options: any);
    jsonAPINames: string[];
    sideLoadMap: {
        field: string;
        name: string;
        dataset: string;
    }[];
    list(): Promise<any[]>;
    listByCategory(categoryID: any): Promise<any[]>;
    listWithLocale(locale: any): Promise<any[]>;
    listByCategoryByLocale(locale: any, categoryID: any): Promise<any[]>;
    show(sectionID: any): Promise<module>;
    showWithLocale(locale: any, sectionID: any): Promise<module>;
    create(categoryId: any, section: any): Promise<module>;
    createWithLocale(locale: any, categoryId: any, section: any): Promise<module>;
    update(sectionID: any, section: any): Promise<module>;
    updateWithLocale(locale: any, sectionID: any, section: any): Promise<module>;
    updateSourceLocale(sectionID: any, sourceLocale: any): Promise<module>;
    delete(sectionID: any): Promise<any>;
}
import { Client } from "../client";
