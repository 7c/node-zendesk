export class Articles extends Client {
    constructor(options: any);
    jsonAPINames: string[];
    sideLoadMap: {
        field: string;
        name: string;
        dataset: string;
    }[];
    list(): Promise<any[]>;
    listByLocale(locale: any): Promise<any[]>;
    listBySection(sectionID: any): Promise<any[]>;
    listBySectionByLocale(locale: any, sectionID: any): Promise<any[]>;
    listByCategory(categoryID: any): Promise<any[]>;
    listByCategoryByLocale(locale: any, categoryID: any): Promise<any[]>;
    listByUser(userID: any): Promise<any[]>;
    listSinceStartTime(startTime: any): Promise<any[]>;
    listByLabelNames(labelNames: any): Promise<any[]>;
    show(articleID: any): Promise<module>;
    showWithLocale(locale: any, articleID: any): Promise<module>;
    create(sectionID: any, article: any): Promise<module>;
    createWithLocale(locale: any, sectionID: any, article: any): Promise<module>;
    update(articleID: any, article: any): Promise<module>;
    updateWithLocale(locale: any, articleID: any, article: any): Promise<module>;
    associateAttachmentsInBulk(articleID: any, attachmentIDsInBulk: any): Promise<module>;
    delete(articleID: any): Promise<any>;
}
import { Client } from "../client";
