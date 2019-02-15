const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION
const pg = require('pg');
const pool = pg.Pool({

    host: 'localHost',          // location of database
    port: 5432,
    database: 'koalas',
    max: 10,                    // max connections at a time
    idleTimeoutMillis: 30000    // 30 seconds to connect
});

// callback for when postgress connection is established
pool.on('connect', () => {
    console.log('PostgreSQL connected!');
});

// callback for postgress error
pool.on('error', (error) => {
    console.log('Error with postgres pool', error);
});



// GET all koalas 
koalaRouter.get('/', (req, res) => {
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
koalaRouter.post('/', (req, res) => {
    console.log('sending via POST', req.body);
    // expect koalaToSend {name, age, gender, readyForTransfer, notes }
    pool.query(`INSERT INTO "koalas" ("name", "age", "gender", "ready_to_transfer", "notes") 
    VALUES ( $1, $2, $3, $4, $5 );`, [req.body.name, req.body.age, req.body.gender, req.body.readyForTransfer, req.body.notes])
        .then(() => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log('error with koalas insert', error);
            res.sendStatus(500);
        });
});


// PUT - modifying data
koalaRouter.put('/:id', (req, resp) => {

    // get ID from params
    let id = req.params.id;
    // get 'isReady' from req.body
    let isReady = req.body.isReady;

    pool.query(`
        UPDATE "koalas"
        SET "ready_to_transfer" = '$1'
        WHERE "id" = $2;`,
        [isReady, id]
    )
    .then(
        result => {
            resp.sendStatus(204);
        }
    )
    .catch(
        error => {
            console.log('error putting koala', error);
            resp.sendStatus(500);
        }
    )
});

// DELETE

module.exports = koalaRouter;