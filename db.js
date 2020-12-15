const Sequelize = require('sequelize');
const opinion = require('./models/opinion');
const comarca = require('./models/comarca');
const ubicacion = require('./models/ubicacion');
const user = require('./models/users');
const comarca_real= require('./models/comarca2')



const sequelize = new Sequelize('mapa','root','admin1234', {
    host : 'localhost',
    dialect: 'mysql'
})

const opinionTable = opinion(sequelize,Sequelize);
const comarcaTable = comarca(sequelize,Sequelize);
const ubicacionTable = ubicacion(sequelize,Sequelize);
const users = user(sequelize,Sequelize);
const comarca2 = comarca_real(sequelize,Sequelize);


sequelize.sync()
.then((db) => {
    console.log("Conectado con db mapa");
}).catch((err) => {
    console.log("Error al crear base de datos" + err);
});


module.exports = {sequelize, opinionTable, comarcaTable, ubicacionTable,users,comarca2};