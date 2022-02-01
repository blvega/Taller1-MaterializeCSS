const conexion = require ('../database/db');

exports.save = (req, res)=>{

   const nombre =  req.body.Nombre;
   const apellido =  req.body.Apellido;
   const correo =  req.body.Correo;
   const telefono =  req.body.Telefono;

   conexion.query('INSERT INTO estudiantes SET ?', {Nombre:nombre, Apellido:apellido, Correo:correo, Telefono:telefono }, (error, results)=>{
       if(error){
           console.log(error);
       }else{
           res.redirect('/');
       }
   })

}