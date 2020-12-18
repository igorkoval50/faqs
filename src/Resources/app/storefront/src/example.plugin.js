import Plugin from 'src/plugin-system/plugin.class';
import Mark from '../node_modules/mark.js/src/vanilla';

// Import logger
import { mark } from '@mark';

// Initializing the logger

// The plugin skeleton
export default class ExamplePlugin extends Plugin{
    init() {
        var options = {
            "element": "mark",
            "className": "",
            "exclude": [],
            "separateWordSearch": true,
            "accuracy": "partially",
            "diacritics": true,
            "synonyms": {},
            "iframes": false,
            "iframesTimeout": 5000,
            "acrossElements": false,
            "caseSensitive": false,
            "ignoreJoiners": false,
            "ignorePunctuation": [],
            "wildcards": "disabled",
            "each": function(node){
                // node is the marked DOM element
            },
            "filter": function(textNode, foundTerm, totalCounter, counter){
                // textNode is the text node which contains the found term
                // foundTerm is the found search term
                // totalCounter is a counter indicating the total number of all marks
                //              at the time of the function call
                // counter is a counter indicating the number of marks for the found term
                return true; // must return either true or false
            },
            "noMatch": function(term){
                // term is the not found term
            },
            "done": function(counter){
                // counter is a counter indicating the total number of all marks
            },
            "debug": false,
            "log": window.console
        };

        var markInstanceP = new Mark(document.querySelectorAll(".collapse-item p"));
        var markInstanceSpan = new Mark(document.querySelectorAll(".questiontab span"));
        // Cache DOM elements
        var keywordInput = document.querySelector(".c108-faq-suchfeld");

        function performMark() {

            var keyword = keywordInput.value;

            markInstanceP.unmark({
                done: function(){
                    markInstanceP.mark(keyword, options);
                }
            });

            markInstanceSpan.unmark({
                done: function(){
                    markInstanceSpan.mark(keyword, options);
                }
            });
        };

        keywordInput.addEventListener("input", performMark);

    }
}
