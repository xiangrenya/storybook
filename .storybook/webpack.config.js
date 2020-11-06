const path = require('path');
module.exports = {
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude:[/node_modules/, path.resolve("../dist")],
                use: {
                    loader: 'babel-loader'
                },
            }
        ]
    }
}