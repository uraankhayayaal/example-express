const Portfolio = require('../models').Portfolio;

module.exports = {
    create(req, res, next){
        console.log(req.body); 
        return Portfolio.create({
            title: req.body.title,
            description: req.body.description,
            photo: req.body.photo,
            isPublic: req.body.isPublic,
        })
        .then(portfolio => res.status(201).send(portfolio))
        .catch(error => res.status(400).send(error));
    },
    index(req, res){
        Portfolio.findAll().then(portfolios => {
            res.send(JSON.stringify(portfolios));
        })
    }
};