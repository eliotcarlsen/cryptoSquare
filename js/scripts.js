//backend
 function code(letters){
   debugger;
   var letters = letters.toLowerCase();
   var letters = letters.split(" ")
   var letters = letters.join();
   for (var i = 0; i<= letters.length; i ++){
   var letters = letters.replace("," , "");
      console.log(letters);
 };
};




//frontend
$(document).ready(function(){
  $(".userInput").submit(function(event){
    event.preventDefault();
    var inputMod = $('input#sentence').val();
    var input = code(inputMod);
    console.log(inputMod);
  });



});
