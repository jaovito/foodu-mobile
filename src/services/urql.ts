import {
  cacheExchange,
  createClient,
  dedupExchange,
  fetchExchange,
  subscriptionExchange,
} from 'urql';
import {store} from '../store/index';
import {SubscriptionClient} from 'subscriptions-transport-ws';
import env from '../../.env.json';

function getToken() {
  const token = store.token;
  return `Bearer ${token}`;
}

const subscriptionClient = new SubscriptionClient(env.GRAPHQL_URL_WS, {
  reconnect: true,
  connectionParams: {
    Authorization: getToken(),
  },
});

export const client = createClient({
  url: env.GRAPHQL_URL,
  fetchOptions: () => {
    const token = getToken();

    return {
      headers: {Authorization: token ? token : ''},
    };
  },
  exchanges: [
    dedupExchange,
    cacheExchange,
    fetchExchange,
    subscriptionExchange({
      forwardSubscription: operation => subscriptionClient.request(operation),
    }),
  ],
});
