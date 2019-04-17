( function () {

    const __readline = require("readline");
    const __utils = require("./utils");

    const _programDictionary = {
            1: {
                    name: "Base Converter",
                    action: _doBaseConvert
                }
        };
    const _colorProgram = "\x1b[44m%s\x1b[0m";
    const _colorWrong = "\x1b[33m%s\x1b[0m";

    ( function () {

        _askProgram();

    }() );

    function _askProgram() {

        const _programList = Object.keys(_programDictionary) ;
        const _readline = __readline.createInterface({
                input: process.stdin,
                output: process.stdout
            }) ;
        console.log("Which program do you want to process?");
        _programList.map( _key => console.log(`[ ${_key} ] ${ (_programDictionary[_key] || {} ).name }`) );
        _readline.question("> ", _answer => {
                _readline.close();
                while ( _programList.length ) {
                    const _key = _programList.shift();
                    const _data = _programDictionary[_key] || {} ;
                    if ( _answer !== _key && _answer !== _data.name ) continue;
                    console.log(_colorProgram, `Running program: ${ _data.name }`);
                    _data.action();
                    return;
                }
                console.log(_colorWrong, "Can not find the program!");
                _askProgram();
            });

    }

    function _doBaseConvert() {

        const _readline = __readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });
        _readline.question("Number: ", _requestNumber => {
                _readline.question("Base (2): ", _baseNumber => {
                        _readline.close();
                        console.log(__utils.baseConverter(_requestNumber, ( _baseNumber || 2 )));
                        _askProgram();
                    } );
            } );

    }

}() );