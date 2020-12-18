const { join, resolve } = require('path');
module.exports = () => {
    return {
        resolve: {
            alias: {
                '@mark': resolve(
                    join(__dirname, '..', 'node_modules', 'mark.js')
                )
            }
        }
    };
};
