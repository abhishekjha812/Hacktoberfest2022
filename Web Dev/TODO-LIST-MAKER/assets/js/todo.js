//check off specific todos by clicking

$("ul").on("click" , "li" , function () {
    
   $(this).toggleClass("compeleted");

});

//click on X to delete todo
 $("ul").on("click ", "span",function (event) {
    $(this).parent().fadeOut(500,function () {
     $(this).remove();       
    })                 // TO SPARE THE SPAN (X) AND DELTE WHOLE li
    event.stopPropagation();
 });


//EVENT BUBBLE ^^

$("input[type='text']").keypress(function (event) {
  if(event.which === 13){
   //grabbing new todo from input
   var todoText = $(this).val();
   $(this).val("");
    //create a new li and add to ul
     $("ul").append("<li> <span><i class='fas fa-trash'></i></span>" + todoText +"</li>")
  }
});

$(".fa-plus").click(function () {
   $("input[type='text']").fadeToggle();
});





function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
 }



 $(".moon").on("click" , function () {
    
   $(this).toggleClass("compeleteds");

});
