 function makegrid(size) {
   for (var i = 0; i < size; i++) 
   {
     for (var j = 0; j < size; j++) 
     {
       $("#container").append('<div class = "box"></div>');
     };
   };
   $(".box").width(960 / size);
   $(".box").height(960 / size);
 };

 function destroygrid() {
   $(".box").remove();
 };

 function changecolor() {
   $('.box').on('mouseenter', function() {
     $(this).css('background-color', 'rgb(255,255,255)');
   });
 };

 function opacitycolor() {
   $('.box').on('mouseenter', function() {
     //$(this).css('opacity', 'rgb(255,255,255)');
     opac($(this));
   });
 };


 function trailcolor() {
   $('.box').hover( function() {
     $(this).css('opacity', 0);
   },
    function() {
     $(this).fadeTo('opacity', 1);
   });
 };


function opac(t){
  var opacity = t.css('opacity');
	   var nextOpacity = opacity - 0.1;
	   if (nextOpacity > 0)
     { 
       t.css('opacity', nextOpacity); 
     }
	   else 
     { 
       t.css('opacity', '0'); 
     }
}

 function resetcolor() {

   $(".box").css('background-color', 'rgb(100, 200, 200)');
   $(".box").css('opacity', 1);

 };

 $(document).ready(function() {

   makegrid(16);
   changecolor();

   var size = 16;

   $('#reset').on('click', resetcolor);
   
   $('#normal').on('click', function() {
     destroygrid();
     size = prompt("enter size");
     makegrid(size);
     changecolor();
   });
   
    $('#opacity').on('click', function() {
     destroygrid();
     size = prompt("enter size");
     makegrid(size);
     opacitycolor();
   });
   
    $('#trail').on('click', function() {
     destroygrid();
     size = prompt("enter size");
     makegrid(size);
     trailcolor();
   });
   var b,c

 });
