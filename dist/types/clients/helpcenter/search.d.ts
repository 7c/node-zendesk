export class Search extends Client {
    constructor(options: any);
    jsonAPINames: string[];
    searchArticles(searchString: any): Promise<module>;
    searchArticlesInLocale(searchString: any, locale: any): Promise<module>;
    searchArticlesByLabels(labelNames: any): Promise<module>;
    searchQuestions(searchString: any): Promise<module>;
}
import { Client } from "../client";
