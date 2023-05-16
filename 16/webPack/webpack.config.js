const path = require('path');

module.exports = {
    mode:'development',
    entry: path.resolve(__dirname, 'src/index.js'),
    output:{
        path: path.join(__dirname, 'build'),
        filename:'main.js'
    }
}
