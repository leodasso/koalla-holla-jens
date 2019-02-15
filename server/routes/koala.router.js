const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION



// GET all koalas 
router.get('/', (req, res) => {
    console.log('GET /koala');
    // expect koalaToSend { name, age, gender, readyForTransfer, notes }
    pool.query(`SELECT * FROM "koalas" ORDER BY "id";`)
        .then((results) => {
            console.log('results from select', results.rows);
            res.send(results.rows);
        }).catch((error) => {
            console.log('error with koalas select', error);
            res.sendStatus(500);
        });
});


// POST



// PUT


// DELETE

module.exports = koalaRouter;