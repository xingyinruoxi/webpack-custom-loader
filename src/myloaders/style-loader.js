module.exports = function(source) {
    console.log("source=====", source, JSON.stringify(source));
    return `const ele = document.createElement('style');
    ele.innerHTML = ${JSON.stringify(source)};
    document.head.appendChild(ele)
  `;
};