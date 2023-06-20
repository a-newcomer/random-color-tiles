
    // make sure document is loaded and ready, otherwise there won't be anything to manipulate
document.addEventListener('readystatechange', function(event) {
    if (document.readyState === "complete") {
        //populate the page with divs
        for(var i = 1; i <= 150; i++) {
            var myDiv = document.createElement('div');
            document.body.appendChild(myDiv);
            }
        //color the initial divs grays
        var myDivs = document.querySelectorAll('div');

        for (var i = 0; i < myDivs.length; i++) {
            //this adds a shade of light gray to each tile automatically, no clicking needed
            myDivs[i].style.backgroundColor = grayShades();
            console.log(grayShades());
        }
        // darken bg of first square so message is legible
        myDivs[0].style.backgroundColor = '#333';

        //Ahh! so fun - the random-number-generating function for hex colors
        function random(number) {
        return Math.floor(Math.random() * number);
        }
        //using 'random' to generate various shades of gray
        function grayShades() {
        let fraction = random(255);
        let grayShade = 'rgb(' + fraction + ',' + fraction + ',' + fraction + ', .4' + ')';
        return grayShade;
        }
        //using 'random' to generate all different colors
        function bgChange() {
        var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
        return rndCol;
        }

        var divs = document.querySelectorAll('div');
        //putting the color generating function in an 'on click' function and looping through and attaching it to all the divs, creating an oddly mesmerizing page
        for (var i = 0; i < divs.length; i++) {
            divs[i].onclick = function(e) {
                e.target.style.backgroundColor = bgChange();
            }
        }
    }
}); 