$(function() {
  // --------------STEP 1--------------
  // wrap every word in every `<p>` tag with a `<span>` tag.
  // for example: <p>Hey there</p>
  // becomes: <p><span>Hey</span><span>there</span></p>
  // HINT: the `split` array method is your friend

  // TODO: your code here!
  var allText = ($("p").text());
  console.log(allText)

  var splitText = [];
  splitText.push(allText.split(' '));
  console.log(splitText)

  var another = [];
  for (var i = 0; i < splitText.length; i++) {
    var str = i;
    //add span tag to each string
    }

  // --------------STEP 2--------------
  // Next, change spans to random colors, once per second

  // TODO: your code here!
    var colors = [//add css colors here for randomizer];

    var randomColor = function(colors) {
      //fill in formula for random color here (Math.floor, Math.random)
    }

    $('span').css(color, function(){
      //apply function to css color
    })

});