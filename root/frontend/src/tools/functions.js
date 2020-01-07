import axios from 'axios';

export async function getAllProperties (endpoint) {
    // let result = await axios.get(endpoint);
    // console.log(result);
    console.log('Test');

    async function getUser() {
        try {
        let result = await axios.get(endpoint);
          console.log(result);
        } catch (error) {
          console.error(error);
        }
      }
}

// axios.get('/user', {
//     params: {
//       ID: 12345
//     }
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .finally(function () {
//     // always executed
//   });  