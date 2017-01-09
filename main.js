// import 'source-map-support/register'
// import 'babel-polyfill';
const fs                   = require('fs');
const fetch                = require('node-fetch');

// Node-specific backend modules
const NodeCliAuthBackend   = require('./lib/node-backend/node-cli-auth-request-backend');
const NodeFsStorageBackend = require ('./lib/node-backend/node-fs-storage-backend');

// generic behavior classes
const SpreadsheetBudget    = require('./lib/spreadsheet-interface');
const AccessTokenManager   = require('./lib/access-token-manager');
const SheetsApi            = require('./lib/sheets-api')
const AuthAccessManager    = require('./lib/auth-access-manager');

// Read the client secret
const CLIENT_SECRET_PATH = './client_secret.json';
const clientSecret = JSON.parse(fs.readFileSync(CLIENT_SECRET_PATH));

// Construct the components needed to talk to the sheets API
const authAccessManager = new AuthAccessManager({
    clientSecret: clientSecret.installed,
    authBackend: new NodeCliAuthBackend(),
    accessRequest: new AccessTokenManager({
        fetchBackend: require('node-fetch')
    }),
    storageBackend: new NodeFsStorageBackend('./state.json'),    
    fetch: fetch,
});

const api = new SheetsApi({
    accessManager: authAccessManager,
    fetch: fetch,
});

const sheet = new SpreadsheetBudget({
    api: api
});


// create some state object
let state = {
    income: [],
    expenses: []
}

// authenticate with the api and then
// push an pull a state from it
authAccessManager.auth()
    .then(() => {
        return sheet.fetchState();
    })
    .then((currentState) => {
        state = currentState;
        state.income.push({
            date: '6/5/2015',
            amount: '$1',
            description: 'test',
            category: 'Other',
        });

        return sheet.pushState(currentState);
    })
    .then(() => { console.log('state has been pushed'); })
    .catch((err) => { console.error('quitting because of error', err); });

