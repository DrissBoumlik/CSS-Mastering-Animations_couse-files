$(function(){

      $('.example .button').click(function(){
        $(this).parents('.example').toggleClass('is-transitioned');
      });

})
