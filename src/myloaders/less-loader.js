const less = require("less");
module.exports = function(source) {
    const result = less.render(source, (e, output) => {
        this.callback(e, output.css);
    });
};