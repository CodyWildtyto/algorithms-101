( function () {

    let _itemList = [];

    ( function () {

        module.exports = _StackClass;

    }() );

    function _StackClass() {

        this.push = _performPush;
        this.pop = _performPop;
        this.clear = _performClear;
        this.peek = _getPeek;
        this.size = _getSize;
        this.print = _getPrint;
        this.isEmpty = _getIsEmpty;

    }

    function _performPush(_item) {

        return _itemList.push(_item);

    }

    function _performPop() {

        return _itemList.pop();

    }

    function _performClear() {

        _itemList = [];

    }

    function _getPeek() {

        return _itemList[ ( _itemList.length - 1 ) ];

    }

    function _getSize() {

        return _itemList.length;

    }

    function _getPrint() {

        console.log(_itemList.toString());

    }

    function _getIsEmpty() {

        return !(_itemList.length);

    }

}() );