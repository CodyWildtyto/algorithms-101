( function () {

    const __readline = require("readline");
    const __utils = require("./utils");

    const _programDictionary = {
            1: {
                    name: "Base Converter",
                    action: _doBaseConvert
                },
            2: {
                    name: "Hot Potato",
                    action: _doHotPotato
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
        console.log("[   ] exit");
        _readline.question("> ", _answer => {
                _readline.close();
                if ( !(_answer) || _answer === "exit" ) return console.log(_colorProgram, "Bye!");
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

        const _readline = _getReadlineInterface();
        _readline.question("Number: ", _requestNumber => {
                _readline.question("Base (2): ", _baseNumber => {
                        _readline.close();
                        console.log(__utils.baseConverter(_requestNumber, ( _baseNumber || 2 )));
                        console.log();
                        _askProgram();
                    } );
            } );

    }

    function _doHotPotato() {

        const _readline = _getReadlineInterface();
        const _optionList = [];
        _askQuestion();

        function _askQuestion() {
            _readline.question("Add option (Empty for passing): ", _requestOption => {
                    if ( _requestOption ) {
                        _optionList.push(_requestOption);
                        _askQuestion();
                    } else _askIndex();
                } );
        }

        function _askIndex() {
            console.log(_optionList.toString());
            _readline.question("Index of the loser: ", _index => {
                    const _result = __utils.hotPotato(_optionList, _index);
                    console.log(`O ${ _result }`);
                    console.log();
                    _askProgram();
                } );
        }

    }

    function _getReadlineInterface() {

        return __readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });

    }

}() );