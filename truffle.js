module.exports = {
 networks: {
   development: {
     host: "localhost",
     port: 8080,
     network_id: "*"  
   },
   integration: {
     host: "test.sanjayparmar.com",
     port: 80,
     network_id: "*"
   }
 }
};
