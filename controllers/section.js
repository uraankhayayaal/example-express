const Section = require('../models').Section;

module.exports = {
    create(req, res, next){
        console.log(req.body); 
        return Section.create({
            title: req.body.title,
            description: req.body.description,
            photo: req.body.photo,
            isPublic: req.body.isPublic,
        })
        .then(section => res.status(201).send(section))
        .catch(error => res.status(400).send(error));
    },
    index(req, res){
        Section.findAll().then(sections => {
            res.send(JSON.stringify(sections));
        })
    }
};