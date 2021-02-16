const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const apiRouter = require('./api/apiRouter');
const cookieParser = require('cookie-parser');

app.prepare()
    .then(() => {
        const server = express();
        server.use(cookieParser());

        server.use('/api',apiRouter)
        server.get('*', (req, res) => {
            return handle(req, res)
        })

        /* starting server */
        server.listen(port, (err) => {
            if (err) throw err;
            console.log(`> Ready on http://localhost:${port}`)
        })
    });