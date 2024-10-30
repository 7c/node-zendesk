export class Votes extends Client {
    constructor(options: any);
    jsonAPINames: string[];
    listByUser(userID: any): Promise<module>;
    listByArticle(articleID: any): Promise<module>;
    show(voteID: any): Promise<module>;
    createUpVoteForArticle(articleID: any): Promise<module>;
    createDownVoteForArticle(articleID: any): Promise<module>;
    createUpVoteForQuestion(questionID: any): Promise<module>;
    createDownVoteForQuestion(questionID: any): Promise<module>;
    createUpVoteForAnswer(answerID: any): Promise<module>;
    createDownVoteForAnswer(answerID: any): Promise<module>;
    delete(voteID: any): Promise<any>;
}
import { Client } from "../client";
