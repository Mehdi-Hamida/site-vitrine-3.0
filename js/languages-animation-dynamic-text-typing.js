//SCRIPT ANIMATION DYNAMIC TEXT TYPING - LANGUES PARLEES ...
         // List of sentences
         var _LANGUAGE_CONTENT2 = [ 
            "Je parle Français",
            "I speak English",
            "Hablo Español"
        ];
        
        // Current sentence being processed
        var _PART2 = 0;
        
        // Character number of the current sentence being processed 
        var _PART_INDEX2 = 0;
        
        // Holds the handle returned from setInterval
        var _INTERVAL_VAL2;
        
        // Element that holds the text
        var _ELEMENT2 = document.querySelector("#languages-typing-text");
        
        // Cursor element 
        // var _CURSOR = document.querySelector("#cursor");
        
        // Implements typing effect
        function Type2() { 
            // Get substring with 1 characater added
            var languageText = _LANGUAGE_CONTENT2[_PART2].substring(0, _PART_INDEX2 + 1);
            _ELEMENT2.innerHTML = `💬` + languageText;
            _PART_INDEX2++;
        
            // If full sentence has been displayed then start to delete the sentence after some time
            if(languageText === _LANGUAGE_CONTENT2[_PART2]) {
                // Hide the cursor
                // _CURSOR.style.display = 'none';
        
                clearInterval(_INTERVAL_VAL2);
                setTimeout(function() {
                    _INTERVAL_VAL2 = setInterval(Delete2, 50);
                }, 1000);
            }
        }
        
        // Implements deleting effect
        function Delete2() {
            // Get substring with 1 character deleted
            var languageText =  _LANGUAGE_CONTENT2[_PART2].substring(0, _PART_INDEX2 - 1);
            _ELEMENT2.innerHTML = `💬` + languageText;
            _PART_INDEX2--;
        
            // If sentence has been deleted then start to display the next sentence
            if(languageText === '') {
                clearInterval(_INTERVAL_VAL2);
        
                // If current sentence was last then display the first one, else move to the next
                if(_PART2 == (_LANGUAGE_CONTENT2.length - 1))
                    _PART2 = 0;
                else
                    _PART2++;
                
                _PART_INDEX2 = 0;
        
                // Start to display the next sentence after some time
                setTimeout(function() {
                    // _CURSOR.style.display = 'inline-block';
                    _INTERVAL_VAL2 = setInterval(Type2, 100);
                }, 200);
            }
        }
        
        // Start the typing effect on load
        _INTERVAL_VAL2 = setInterval(Type2, 0);