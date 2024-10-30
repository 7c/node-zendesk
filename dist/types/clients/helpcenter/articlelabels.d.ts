export class ArticleLabels extends Client {
    constructor(options: any);
    jsonAPINames: string[];
    list(): Promise<module>;
    listByArticle(articleID: any): Promise<module>;
    show(labelID: any): Promise<module>;
    create(articleID: any, label: any): Promise<module>;
    delete(articleID: any, labelID: any): Promise<any>;
}
import { Client } from "../client";
