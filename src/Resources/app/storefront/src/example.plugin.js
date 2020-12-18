import Plugin from 'src/plugin-system/plugin.class';

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
        console.log('init');
        document.querySelector('.c108-faq-suchfeld').addEventListener('input', function (e) {
            var instance = new Mark(document.querySelectorAll('p'));
            instance.mark(e.target.value, options);
        });

    }
}
