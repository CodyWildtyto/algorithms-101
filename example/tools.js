( function () {

    const __readline = require("readline");

    module.exports = {
            readlineInterface: _performReadlineInterface
        };

    function _performReadlineInterface() {

        return __readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });

    }

}() );