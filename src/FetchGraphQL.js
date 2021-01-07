import { Environment, Network, RecordSource, Store } from 'relay-runtime'

async function fetchGraphQL(operation, variables) {
    const URL = 'http://localhost:8080/graphql';

    const response = await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query: operation.text,
            variables
        })
    });

    return await response.json();
}

export default fetchGraphQL;
const environment = new Environment({
    network: Network.create(fetchQuery),
    store: new Store(new RecordSource()),
  })
  
  export default environment