const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION


// GET


// POST
app.post('/', (req, res) => {
    console.log('sending via POST', req.body);
    // expect koalaToSend {name, age, gender, readyForTransfer, notes }
    pool.query(`INSERT INTO "koalas" ("name", "age", "gender", "readyForTransfer", "notes") 
    VALUES ( $1, $2, $3, $4, $5 );`, [req.body.name, req.body.age, req.body.gender, req.body.readyForTransfer, req.body.notes])
        .then(() => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log('error with koalas insert', error);
            res.sendStatus(500);
        });
});

// PUT


// DELETE

module.exports = koalaRouter;