const mysql = require ('mysql');

const  conexion = mysql.createConnection({
    host: 'tiusr7pl.cuc-carrera-ti.ac.cr',
    user: 'blvega',
    password: 'BlVc84673270_',
    database: 'tiusr7pl_taller1'
})

conexion.connect((error)=>{

if(error){
    console.error('Error en la conexión es: ' +error);
    return
}
console.log('Conectado con exito');
})

module.exports = conexion;