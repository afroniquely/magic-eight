$(document).ready(function(){

  // $('button').click(function(){
  //   $('img').removeClass().addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
  //     $(this).removeClass();
  //   })
  // })

  $('button').on("click", function() {
    console.log('hello')
    $('img').removeClass();
    setTimeout(function(){$('img').addClass('animated zoomIn')}, 1
    );
  });
});
