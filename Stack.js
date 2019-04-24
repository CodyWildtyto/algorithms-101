( function () {

    module.exports = Stack;

    function Stack() {

        let _itemList = [];
        Object.defineProperty(this, "size", _describeSize());
        Object.defineProperty(this, "isEmpty", _describeIsEmpty());
        this.push = _performPush;
        this.pop = _performPop;
        this.clear = _performClear;
        this.peek = _performPeek;
        this.print = _performPrint;

        function _describeSize() {
            return {
                    get: () => _itemList.length,
                    enumerable: true
                };
        }

        function _describeIsEmpty() {
            return {
                    get: () => !(_itemList.length),
                    enumerable: true
                };
        }

        function _performPush(_item) {
            return _itemList.push(_item);
        }

        function _performPop() {
            return _itemList.pop();
        }

        function _performClear() {
            return _itemList = [];
        }

        function _performPeek() {
            return _itemList[ ( _itemList.length - 1 ) ];
        }

        function _performPrint() {
            console.log(_itemList.toString());
        }

    }

}() );