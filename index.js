( function () {

    const __tools = require("./tools");
    const __utils = require("./utils");

    const _programList = [{
            name: "Base Converter",
            action: _doBaseConvert
        }, {
            name: "Hot Potato",
            action: _doHotPotato
        }];
    const _colorProgram = "\x1b[44m%s\x1b[0m";
    const _colorWrong = "\x1b[33m%s\x1b[0m";

    _askProgram();

    function _askProgram() {

        const _readline = __tools.readlineInterface();
        console.log(_colorProgram, "Which program do you want to process?");
        _programList.map( (_value, _index) => console.log(`[ ${ _index } ] ${ ( _value || {} ).name }`) );
        console.log("[   ] exit");
        _readline.question("> ", _answer => {
                _readline.close();
                console.log();
                if ( !(_answer) || _answer === "exit" ) return console.log(_colorProgram, "Bye!");
                let _index = 0;
                while ( _programList.length ) {
                    const _programData = _programList[_index] || {} ;
                    _answer = String(_answer).trim();
                    if ( _answer !== String(_index++) ) {
                        if( _answer.toUpperCase() !== _programData.name.toUpperCase() ) continue;
                    }
                    console.log(_colorProgram, `Running program: ${ _programData.name }`);
                    _programData.action();
                    return;
                }
                console.log(_colorWrong, "Can not find the program!");
                console.log();
                _askProgram();
            });

    }

    function _doBaseConvert() {

        const _readline = __tools.readlineInterface();
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

        const _readline = __tools.readlineInterface();
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
                    _readline.close();
                    console.log(`O ${ _result }`);
                    console.log();
                    _askProgram();
                } );
        }

    }

}() );