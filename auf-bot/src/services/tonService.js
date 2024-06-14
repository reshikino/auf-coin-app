const client = require('../config/tonConfig');

async function getBalance(address) {
    try {
        const response = await client.net.query_collection({
            collection: 'accounts',
            filter: { id: { eq: address } },
            result: 'balance',
        });
        const balance = response.result[0].balance;
        return `Balance: ${balance}`;
    } catch (error) {
        return `Error: ${error.message}`;
    }
}

module.exports = {
    getBalance,
};
