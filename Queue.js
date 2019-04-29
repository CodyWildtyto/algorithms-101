( function () {

    module.exports = Queue;

    function Queue() {

        let _itemList = [];
        Object.defineProperty(this, "isEmpty", {
                get: () => !(_itemList.length),
                enumerable: true
            });
        Object.defineProperty(this, "size", {
                get: () => _itemList.length,
                enumerable: true
            });
        this.enqueue = _item => _itemList.push(_item);
        this.dequeue = () => _itemList.shift();
        this.front = () => _itemList[0];
        this.clear = () => _itemList = [];
        this.print = () => console.log(_itemList.toString());

    }

}() );