const process = require('node:process');
const zd = require('../lib/client');
const exampleConfig = require('./exampleConfig');

const client = zd.createClient({
  username: process.env.ZENDESK_TEST_USERNAME || exampleConfig.auth.username,
  token: process.env.ZENDESK_TEST_TOKEN || exampleConfig.auth.token,
  remoteUri: process.env.ZENDESK_TEST_REMOTEURI || exampleConfig.auth.remoteUri,
});

/**
 *
 */
async function listTicketAudits() {
  try {
    const tickets = await client.tickets.list();
    const ticket = tickets[0];

    if (!ticket) {
      console.log('No tickets found.');
      return;
    }

    const audits = await client.ticketaudits.list(ticket.id);
    console.log(JSON.stringify(audits));
  } catch (error) {
    console.error('Error fetching ticket audits:', error);
  }
}

listTicketAudits();
