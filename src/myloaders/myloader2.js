module.exports = function(source) {
    /*  setTimeout(() => {
                                                  console.log("9999999999999");
                                                  this.callback(null, source + "00000000000");
                                              }, 3000); */
    const callback = this.async();
    setTimeout(() => {
        // console.log("++++++++++++++++++++++++++++");
        const result = source.replace("周林", "zhouLin");
        // const result = source + "7777777777";
        callback(null, result);
    }, 3000);
};