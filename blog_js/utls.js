//notes from 12/8/15
//Ajax call to grab template
$.get('dialog/speech1.txt'.function(data) {
  console.log(data);
}).done(function() {
  console.log('I should come second!');
  console.log('I should come third!');
});

//or wrap into $.get but could have user issues$.get('dialog/speech1.txt'.function(data) {
$.get('dialog/speech1.txt'.function(data) {
  console.log(data);
  console.log('I should come second!');
  console.log('I should come third!');
});
//test for ajax calls
$.get('dialog/speech1.txt'.function(data) {
  console.log('Im the data!');
  console.log(data);
}).always(function() {
  console.log('I should come always!');
}).fail(function() {
  console.log('I should come if fail!');
});

//condensed version -- but anonymous function
$.get('dialog/speech1.txt').done(function() {
  console.log('I should come second!');
});
  console.log('I should come third!');

//name function - no anomymous function
demo = {};
demo.getData = (function (data) {
  console.log(data);
};
demo.getDone = function () {
  console.log('I should come two');
}
demo.getDoneR = function () {
  console.log('I should come third!');
}
