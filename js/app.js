$(document).ready(function()    {
  $(function(){
    $("#nav a").click(function(e){
      e.preventDefault();
      $('html,body').scrollTo(this.hash,this.hash); 
    });
  });

  $('.carousel').carousel(function(){
    interval: 300;
  });

  $('body').scrollspy({ target : "#navbar-example"});
  
  $('#portfolio_i a').click(function(ev) {
    ev.preventDefault();
    $('#portfolio_i .singolo-thumbnail').addClass('fadeOut');
    $('#portfolio_i .singolo-thumbnail' + this.dataset.filter).removeClass('fadeOut');
  });
});






 
   

