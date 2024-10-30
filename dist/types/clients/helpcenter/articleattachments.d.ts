export class ArticleAttachments extends Client {
    constructor(options: any);
    jsonAPINames: string[];
    list(articleID: any): Promise<module>;
    listInline(articleID: any): Promise<module>;
    listBlock(articleID: any): Promise<module>;
    show(attachmentID: any): Promise<module>;
    create(): Promise<Error>;
    createUnassociated(): Promise<Error>;
    delete(attachmentID: any): Promise<any>;
}
import { Client } from "../client";
