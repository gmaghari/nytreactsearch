const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Stores the title, publish date/time, and URL of article
const articleSchema = new Schema({
    title: String,
    date: { type: Date, default: Date.now },
    url: String,
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;