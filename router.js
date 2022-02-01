const express = require('express');
const { restart } = require('nodemon');
const router = express.Router();

const conexion = require('./database/db');

//Ruta para mostrar registros
router.get('/', (req, res) => {
   conexion.query('SELECT * from estudiantes', (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('index',{results:results});
        }
    })

}) 

//Ruta para crear registros
router.get('/create',(req, res)=> {
res.render('create');

})

const crud = require('./controllers/crud');

router.post('/save',crud.save);



module.exports = router;