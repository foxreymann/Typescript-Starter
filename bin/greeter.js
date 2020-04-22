const client = {
    id: '1',
    firstName: 'John',
    lastName: 'Wick'
};
const clients = [
    client,
    {
        id: '2',
        firstName: 'Miles',
        lastName: 'Morales'
    }
];
const newClient = { id: '', firstName: '', lastName: '' };
const initialClientsState = {
    clients,
    currentClient: newClient
};
class Store {
    constructor(state) {
        this.state = state;
    }
    getState() {
        return this.state;
    }
    select(key) {
        return this.state[key];
    }
}
const clientsStore = new Store(initialClientsState);
const currentClient = clientsStore.select('currentClient');
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<pre>${JSON.stringify(currentClient, null, 2)}</pre>`;
