//JavaScript
	
$(document).ready(function(e){	
$('#principal').height($('#page').height());//calcular el alto de la pantalla del dispositivo
	document.addEventListener("deviceready",function(){
	//precarga el sonido
	audio=window.plugins.LowLatencyAudio;
	audio.preloadFX('caballo','audio\granja\caballo.mp3',function(){},function(e){alert('Error '+e);});
	audio.preloadFX('cerdo','audio\granja\cerdo.mp3',function(){},function(e){alert('Error '+e);});
	audio.preloadFX('chivo','audio\granja\chivo.mp3',function(){},function(e){alert('Error '+e);});
	audio.preloadFX('gallo','audio\granja\gallo.mp3',function(){},function(e){alert('Error '+e);});
	audio.preloadFX('ganzos','audio\granja\ganzos.mp3',function(){},function(e){alert('Error '+e);});
	audio.preloadFX('perro','audio\granja\perro.mp3',function(){},function(e){alert('Error '+e);});
	audio.preloadFX('elefante','audio\granja\elefante.mp3',function(){},function(e){alert('Error '+e);});
	audio.preloadFX('leon','audio\granja\leon.mp3',function(){},function(e){alert('Error '+e);});
	audio.preloadFX('puma','audio\granja\puma.mp3',function(){},function(e){alert('Error '+e);});
	audio.preloadFX('rana','audio\granja\rana.mp3',function(){},function(e){alert('Error '+e);});
	audio.preloadFX('gorila','audio\granja\gorila.mp3',function(){},function(e){alert('Error '+e);});
	audio.preloadFX('monos','audio\granja\monos.mp3',function(){},function(e){alert('Error '+e);});

	
	//reproducir las notas
	
	$('.nota').bind('touchstart', function(){$(this).addClass('tocada'); audio.play($(this).attr('id'));});
	$('.nota').bind('touchend',function(){$(this).removeClass('tocada');});
	
	
	},false); //deviceready
});//ready