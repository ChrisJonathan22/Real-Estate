const mongoose = require('mongoose');

mongoose.connect('mongodb://chris:chris22@ds211774.mlab.com:11774/realestate', { useUnifiedTopology: true });
 
export default async function connectToDB() {
    try {
        const connect = mongoose.connection; 
        return connect;
    } catch (error) {
      console.error(error);
    }
  }