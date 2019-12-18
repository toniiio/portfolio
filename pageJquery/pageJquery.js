$(function()
{
	var $list,$formulaire;
	$list = $('ul');
	$formulaire = $('#formulaire');

  $formulaire.on('click', '#clique', function(e) 
  {
	e.preventDefault();
    var $this = $(this);
    $this.remove();
    $list.append("<li> Une belle amitié </li>");
	$('li').addClass("ge");
	
	});
  $formulaire.on('click', '.ge', function(e) 
  {
	$list.append("<li> Aujourd'hui c'est ton anniversaire </li>");
	$('li').addClass("gr");
  })
  $formulaire.on('click', '.gr', function(e) 
	{
	$list.append("<li> Je te souhaite tout le bonheur du monde </li>");
	$('li').addClass("ga");
	
	});
  $formulaire.on('click', '.ga', function(e) 
	{
	$( "<li>Joyeux anniversaire </li>" ).replaceAll( "li" );
	$('li').addClass("bo");
	$('body').addClass("bg");
	
	});	
}
);	

