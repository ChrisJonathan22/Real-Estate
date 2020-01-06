const ALLPROPENDPOINT = "http://localhost:5000/allProperties";
const PROPSENDPOINT = "http://localhost:5000/Properties";



// Do a fetch request
// Send parameters
// if parameter has a value of other than 0 or all use it in the DB request
// db.coll.find({name: 'montalto', 'users.username': 'ciccio'}).count();

module.export = {
    ALLPROPENDPOINT,
    PROPSENDPOINT
};