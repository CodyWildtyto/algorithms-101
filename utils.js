( function () {

    const Stack = require("./Stack");

    module.exports = {
            baseConverter: _performBaseConverter
        };

    function _performBaseConverter(_decimal, _baseNumber) {

        const _DIGITS = "0123456789ABCDEF";
        const _stackInstance = new Stack();
        let _baseString = "";
        let _remanet;
        while ( _decimal > 0 ) {
            _remanet = Math.floor( _decimal % _baseNumber );
            _stackInstance.push(_remanet);
            _decimal = Math.floor( _decimal / _baseNumber );
        }
        while ( _stackInstance.size ) {
            _baseString += _DIGITS[_stackInstance.pop()];
        }
        return _baseString;

    }

}() );