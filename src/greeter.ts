// Import stylesheets
//import './style.css';

interface ClientsState {
  clients: Client[];
  currentClient: Client;
}

interface Client {
  id: string;
  firstName: string;
  lastName: string;
}

const client: Client = {
  id: '1',
  firstName: 'John',
  lastName: 'Wick'
}

const clients: Client[] = [
  client,
  {
    id: '2',
    firstName: 'Miles',
    lastName: 'Morales'
  }
]

const newClient = { id: '', firstName: '', lastName: ''};

const initialClientsState: ClientsState = {
  clients,
  currentClient: newClient
}

class Store {
  state: ClientsState; // defines the property

  constructor(state) {
    this.state = state; // sets a value to the property
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

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<pre>${JSON.stringify(currentClient, null, 2)}</pre>`;
