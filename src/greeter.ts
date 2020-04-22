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
  id: "1",
  firstName: "John",
  lastName: "Wick"
};

const clients: Client[] = [
  client,
  {
    id: "2",
    firstName: "Miles",
    lastName: "Morales"
  }
];

const newClient = { id: "", firstName: "", lastName: "" };

const initialClientsState: ClientsState = {
  clients,
  currentClient: newClient
};

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
const currentClient = clientsStore.select("currentClient");

interface Action {
  type: string;
  payload?: any;
}

const loadClients = (state, payload) => {
  console.log("LOADING CLIENTS");
  return state;
};
const selectClient = (state, payload) => {
  console.log("SELECT CLIENT");
  return state;
};
const createClient = (state, payload) => {
  console.log("CREATE CLIENT");
  return state;
};
const updateClient = (state, payload) => {
  console.log("UPDATE CLIENT");
  return state;
};
const deleteClient = (state, payload) => {
  console.log("DELETE CLIENT");
  return state;
};

const CLIENTS_LOAD = '[CLIENT] Load Clients';
const CLIENT_SELECT = '[CLIENT] Select Client';
const CLIENT_CREATE = '[CLIENT] Create Client';
const CLIENT_UPDATE = '[CLIENT] Update Client';
const CLIENT_DELETE = '[CLIENT] Delete Client';


const reducer = (state: ClientsState, action: Action): ClientsState => {
  switch (action.type) {
    case CLIENTS_LOAD:
      return loadClients(state, action.payload);
    case CLIENT_SELECT:
      return selectClient(state, action.payload);
    case CLIENT_CREATE:
      return createClient(state, action.payload);
    case CLIENT_UPDATE:
      return updateClient(state, action.payload);
    case CLIENT_DELETE:
      return deleteClient(state, action.payload);
    default:
      return state;
  }
};



const result = reducer(initialClientsState, { type: CLIENT_SELECT, payload: {}});

console.log(result)
