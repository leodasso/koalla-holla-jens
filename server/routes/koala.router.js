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


// GET


// POST


// PUT - modifying data
koalaRouter.put('/:id', (req, resp) => {

    // get ID from params
    let id = params.id;
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