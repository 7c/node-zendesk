export class Translations extends Client {
    constructor(options: any);
    jsonAPINames: string[];
    show(articleID: any, locale: any): Promise<module>;
    listByArticle(articleID: any, filterParameters: any): Promise<any[]>;
    listBySection(sectionID: any): Promise<any[]>;
    listByCategory(categoryID: any): Promise<any[]>;
    listMissingLocalesByArticle(articleID: any): Promise<module>;
    listMissingLocalesBySection(sectionID: any): Promise<module>;
    listMissingLocalesByCategory(categoryID: any): Promise<module>;
    createForArticle(articleID: any, translation: any): Promise<module>;
    createForSection(sectionID: any, translation: any): Promise<module>;
    createForCategory(categoryID: any, translation: any): Promise<module>;
    updateForArticle(articleID: any, locale: any, translation: any): Promise<module>;
    updateForSection(sectionID: any, locale: any, translation: any): Promise<module>;
    updateForCategory(categoryID: any, locale: any, translation: any): Promise<module>;
    delete(translationID: any): Promise<any>;
    listLocales(): Promise<module>;
}
import { Client } from "../client";
