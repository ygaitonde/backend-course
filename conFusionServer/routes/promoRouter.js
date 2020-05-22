const express = require('express');
const bodyParser = require('body-parser')

const promoRouter = express.Router();

promoRouter.use(bodyParser.json())

promoRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain')
    next();
})
.get((req,res,next) => {
    res.end('Will send all the promos to you!');
})
.post((req,res,next) => {
    res.end('Will add the promo: '+ req.body.name +
         ' with details ' + req.body.description)
})
.put((req,res,next) => {
    res.statusCode = 403;
    res.end('PUT not supported on /promotions')
})
.delete((req,res,next) => {
    res.end('Will delete all the promos!');
})

//promoId support
promoRouter.route('/:promoId')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain')
    next();
})
.get((req,res,next) => {
    res.end('Will send details of promo: ' + req.params.promoId);
})

.post((req,res,next) => {
    res.statusCode = 403;
    res.end('POST not supported on /promotions/'+req.params.promoId)
})

.put((req,res,next) => {
    res.write('Updating promo: ' + req.params.promoId + '\n')
    res.end('Will update the promo :' + req.body.name +
        ' with details: ' + req.body.description)
})

.delete((req,res,next) => {
    res.end('Deleting promo: '+req.params.promoId);
})

module.exports = promoRouter;

