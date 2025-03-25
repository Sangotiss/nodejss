const render = require("ejs");

const getHomepage = (req, res) => {
    res.send('hello');
}
const ok = (req, res) => {
    res.render('sample.ejs')
}
const kkk = (req, res) => {
    res.render('Backend/sam.ejs');
}
module.exports =
{
    getHomepage, ok, kkk
}