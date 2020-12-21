import Plugin from 'src/plugin-system/plugin.class';
import Mark from '../node_modules/mark.js/src/vanilla';

// The plugin skeleton
export default class ExamplePlugin extends Plugin {

    static options = {
            "element": "mark",
            "className": "",
            "exclude": [],
            "separateWordSearch": true,
            "accuracy": "partially",
            "diacritics": true,
            "synonyms": {},
            "iframes": false,
            "iframesTimeout": 0,
            "acrossElements": false,
            "caseSensitive": false,
            "ignoreJoiners": false,
            "ignorePunctuation": [],
            "wildcards": "disabled",
            "each": function(node){},
            "filter": function(textNode, foundTerm, totalCounter, counter){
                return true; // must return either true or false
            },
            "noMatch": function(term){},
            "done": function(counter){},
            "debug": false,
            "log": window.console
    };

    static selectors = {
        collapseItemP: '.collapse-item p',
        questionTabSpan: '.questiontab span',
    };


    init() {
        var that = this;
        this.markInstanceP = new Mark(document.querySelectorAll('.collapse-item p'));
        this.markInstanceSpan = new Mark(document.querySelectorAll('.questiontab span'));
        this._registerEvents();

    }
    _registerEvents() {
        console.log('test');
        this.el.addEventListener("input",event => this._onInput(event))
    }
    /**
     * callback when the form has changed
     *
     * @param event
     * @private
     */
    _onInput(event){

        let test = this.markInstanceP;
        let test1 = this.markInstanceSpan;


        let searchFieldValue = event.target.value;
        let options = this.options;

        test.unmark({
            done: function(){
                test.mark(searchFieldValue, options);
            }
        });

        test1.unmark({
            done: function(){
                test1.mark(searchFieldValue, options);
            }
        });



    }


}
