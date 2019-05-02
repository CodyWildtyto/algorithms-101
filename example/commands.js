( function () {

    const Stack = require("./../Stack");
    const Queue = require("./../Queue");

    module.exports = {
            baseConverter: _performBaseConverter,
            hotPotato: _performHotPotato
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

    function _performHotPotato(_nameList, _number) {

        const _queue = new Queue();
        let _eliminated = "";
        let _tmpIndex;
        ( _nameList || [] ).map( _name => _queue.enqueue(_name) );
        while ( _queue.size > 1 ) {
            _tmpIndex = 0;
            while ( _tmpIndex++ < _number ) {
                _queue.enqueue(_queue.dequeue());
            }
            _eliminated = _queue.dequeue();
            console.log(`X ${ _eliminated }`);
        }
        return _queue.dequeue();

    }

}() );