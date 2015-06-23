$(document).ready(function()    {
 $(function(){
  $("#nav a").click(function(e){
    e.preventDefault();
    $('html,body').scrollTo(this.hash,this.hash); 
  });
});

 $('.carousel').carousel({
        interval: 300
      });

$('body').scrollspy({ target : "#navbar-example"});
  
});