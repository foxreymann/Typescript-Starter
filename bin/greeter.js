var client = {
    id: '1',
    firstName: 'John',
    lastName: 'Wick'
};
var clients = [
    client,
    {
        id: '2',
        firstName: 'Miles',
        lastName: 'Morales'
    }
];
var newClient = { id: '', firstName: '', lastName: '' };
var initialClientsState = {
    clients: clients,
    currentClient: newClient
};
var Store = (function () {
    function Store(state) {
        this.state = state;
    }
    Store.prototype.getState = function () {
        return this.state;
    };
    Store.prototype.select = function (key) {
        return this.state[key];
    };
    return Store;
}());
var clientsStore = new Store(initialClientsState);
var currentClient = clientsStore.select('currentClient');
var appDiv = document.getElementById('app');
appDiv.innerHTML = "<pre>" + JSON.stringify(currentClient, null, 2) + "</pre>";
