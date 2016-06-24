/**
 * Created by Pol on 2015-12-31.
 */
console.log('test');

$(document).ready(function() {
    getQuote();
    buttonRandom();
});


function getQuote () {
    // https://en.wikipedia.org/w/api.php?action=opensearch&search=dog&limit=10&namespace=0&format=json
    var link = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=";
    console.log(link);
    $.getJSON(link, showQuote);
}

function showQuote(quoteData) {
    console.log("---------------- data");

}

function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

function buttonRandom () {
    // button for choose random quote
    $('.buttonRandom').click(function(){
        console.log('click');

    });
}