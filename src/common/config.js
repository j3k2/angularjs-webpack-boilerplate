export default {
  appName: 'app',
  api: {
    base: 'https://jsonplaceholder.typicode.com/',
    resources: {
      users: 'users/'
    }
  },
  stateUrls: {
    // keys should match view component names
    users: '/users',
    home: '/'
  }
};
