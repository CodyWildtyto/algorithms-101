( function () {

    const __readline = require("readline");
    const __utils = require("./utils");

    ( function () {

        const _programDictionary = {
                1: {
                        name: "Base Converter",
                        action: _doBaseConvert
                    }
            };
        const _programList = Object.keys(_programDictionary);
        const _readline = __readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });
        console.log("Which program do you want to process?");
        _programList.map( _key => console.log(`[ ${_key} ] ${ (_programDictionary[_key] || {} ).name }`) );
        _readline.question("> ", _answer => {
                _readline.close();
                while ( _programList.length ) {
                    const _key = _programList.shift();
                    const _data = _programDictionary[_key] || {} ;
                    if ( _answer !== _key && _answer !== _data.name ) continue;
                    console.log("\x1b[44m%s\x1b[0m", `Running program: ${ _data.name }`);
                    _data.action();
                    return;
                }
                console.log("\x1b[33m%s\x1b[0m", "Can not find the program!");
            });

    }() );

    function _doBaseConvert() {

        console.log(__utils.baseConverter(100345, 2));
        console.log(__utils.baseConverter(100345, 8));
        console.log(__utils.baseConverter(100345, 16));

    }

}() );