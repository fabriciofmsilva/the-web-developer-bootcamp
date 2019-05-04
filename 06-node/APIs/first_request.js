const request = require('request-promise');

request('https://jsonplaceholder.typicode.com/users/1')
  .then((htmlstring) => {
    const parsedData = JSON.parse(htmlstring);
    console.log(`${parsedData.name} lives in ${parsedData.address.city}`);
  })
  .catch((error) => {
    console.log('Error!', error);
  });
