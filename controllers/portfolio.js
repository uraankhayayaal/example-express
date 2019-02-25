const Portfolio = require('../models').Portfolio;
const User = require('../models').User;
const Sequelize = require('sequelize');
const Op = Sequelize.Op

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
        Portfolio.findAll({
            include: [User]
        }).then(portfolios => {
            res.send(JSON.stringify(portfolios));
        })
    },
    view(req, res){
        Portfolio.findById(req.params.id).then(portfolio => {
            res.send(JSON.stringify(portfolio));
        })
    },
    edit(req, res){
        var isOk = Portfolio.update({
            title: req.body.title,
            description: req.body.description,
            photo: req.body.photo,
            isPublic: req.body.isPublic,
          }, {
            where: {
                id: req.params.id
            }
        });
        
        if(isOk)
            Portfolio.findById(req.params.id).then(portfolio => {
                res.send(JSON.stringify(portfolio));
            });
        else
            res.status(400).send("404 Not found");
    },
    delete(req, res){
        var countOfDeletedRows = Portfolio.destroy({
            where: {
                id: req.params.id
            }
        });
        if(countOfDeletedRows > 0)
            res.status(204).send();
        else
            res.status(400).send("404 Not found");
    }
};