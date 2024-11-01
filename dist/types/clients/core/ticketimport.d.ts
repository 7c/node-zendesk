/**
 * TicketImport: A class that provides methods to interact with Zendesk's Ticket Import API.
 * This is a thin wrapper around the Zendesk REST API for ticket imports.
 * @see {@link https://developer.zendesk.com/api-reference/ticketing/tickets/ticket_import/}
 */
export class TicketImport extends Client {
    constructor(options: any);
    jsonAPINames: string[];
    /**
     * Imports a ticket into Zendesk.
     * @param {object} ticket - The ticket data to be imported.
     * @param {number} ticket.assignee_id - The ID of the user to assign this ticket to.
     * @param {Array} ticket.comments - Array of comments associated with the ticket.
     * @param {string} ticket.description - The description of the ticket.
     * @param {number} ticket.requester_id - The ID of the user requesting the ticket.
     * @param {string} ticket.subject - The subject of the ticket.
     * @param {Array} ticket.tags - Array of tags associated with the ticket.
     * @returns {Promise<object>} The response from the Zendesk API.
     * @throws {Error} Throws an error if the request to the Zendesk API fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/tickets/ticket_import/#ticket-import}
     * @example
     * const ticketData = {
     *   assignee_id: 19,
     *   comments: [{ author_id: 19, value: "This is a comment" }],
     *   description: "A description",
     *   requester_id: 827,
     *   subject: "Help",
     *   tags: ["foo", "bar"]
     * };
     * const response = await client.ticketimport.import(ticketData);
     */
    import(ticket: {
        assignee_id: number;
        comments: any[];
        description: string;
        requester_id: number;
        subject: string;
        tags: any[];
    }): Promise<object>;
    /**
     * @param {number} ticketID - The ID of the ticket to fetch the audits for.
     * @returns {Promise<Array>} An array of ticket audits from the Zendesk API.
     * @throws {Error} Throws an error if the request to the Zendesk API fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/tickets/ticket_import/}
     * @example
     * const ticketID = 12345;
     * const audits = await client.ticketimport.exportAudit(ticketID);
     * @deprecated Use the `list` method from the `TicketAudits` class instead.
     * Exports the audits of a specific ticket.
     */
    exportAudit(ticketID: number): Promise<any[]>;
    /**
     * Bulk imports multiple tickets into Zendesk.
     * @param {Array<object>} tickets - An array containing ticket data to be imported. Each ticket should include the following fields:
     *   - `assignee_id` (number): The ID of the user to assign this ticket to.
     *   - `comments` (Array<Object>): Array of comments associated with the ticket.
     *   - `description` (string): The description of the ticket.
     *   - `requester_id` (number): The ID of the user requesting the ticket.
     *   - `subject` (string): The subject of the ticket.
     *   - `tags` (Array<string>): Array of tags associated with the ticket.
     * **Note**: While these fields are required for each ticket object, they are not directly accessed within this function. The entire array of tickets is passed to the Zendesk API.
     * @returns {Promise<object>} The response from the Zendesk API, including a job status object.
     * @throws {Error} Throws an error if the request to the Zendesk API fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/tickets/ticket_import/#ticket-bulk-import}
     * @example
     * const ticketDataArray = [{
     *   assignee_id: 19,
     *   comments: [{ author_id: 19, value: "This is a comment" }],
     *   description: "A description",
     *   requester_id: 827,
     *   subject: "Help",
     *   tags: ["foo", "bar"]
     * },
     * {
     *   assignee_id: 20,
     *   comments: [{ author_id: 20, value: "Another comment" }],
     *   description: "Another description",
     *   requester_id: 828,
     *   subject: "Help Again",
     *   tags: ["foo2", "bar2"]
     * }];
     * const response = await client.ticketimport.bulkImport(ticketDataArray);
     */
    bulkImport(tickets: Array<object>): Promise<object>;
}
import { Client } from "../client";
