const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Article
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(400).json(err));
    },
    findById: function(req, res) {
        db.Article
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(400).json(err));
    }
}