//backend

function code(letters){
  var finalArray = [];
  debugger;
  var letters = letters.toLowerCase();
  var letters = letters.split(" ");
  var letters = letters.join("");
  var letters = letters.split("");
  console.log(letters);
  if (letters.length === 3){
    for (var i = 0;i < letters.length; i+=2){
      finalArray.push(letters[i+i]);
      console.log(letters);
    };
  };
  console.log(finalArray);
};







//frontend
$(document).ready(function(){
  $(".userInput").submit(function(event){
    event.preventDefault();
    var inputMod = $('input#sentence').val();
    code(inputMod);
  });
});
