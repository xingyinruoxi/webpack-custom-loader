const less = require("less");
module.exports = function(source) {
    const result = less.render(source);
    this.callback(null, result);
};