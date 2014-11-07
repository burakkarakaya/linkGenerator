// Global Variable
var con = $('#appWizard'), scene = $('.scene', con), background = $('.background', scene), menu = $('ul.settings li a', con); 

// Draggable, Resizable
(function(window){
	function AppUI( obj, callback ){

		var template = obj["template"] || '',
			settings = obj["settings"] || {}
			resizable = obj["resizable"] || false,
			type = obj["type"] || 'button',
			ID = DefaultValue(); 
			
			
			
		if( ID != undefined ){ 
			
			//APPEND
			scene.append( ID );				
			$('span.settings', ID).append( createSettings() );
			
			//EVENT
			ID.draggable({ containment:'parent'	}).on('dragstop', function( event, ui ){
				if( callback != undefined ) callback();
			});

			if( resizable ){
				// resizable active
			}
			
			$('a.removeBtn', ID).bind('click', function(){
				$( this ).parents('.box').draggable('destroy').remove();
			});
			$('a.settingsBtn', ID).bind('click', function(){
				$( this ).parents('span.settings').toggleClass('opened');
			});
			$('ul.settingList input', ID).bind('keyup', function(){
				var theme = template;
				$('ul.settingList input', ID).each(function(i, k) {
                    var _this = $( this ), rel = _this.attr('rel'), val = _this.val();
					theme = theme.replace( rel, val );	
				});
				$('span.theme', ID).html( theme );
			});	
		}
		
		function DefaultValue(){
			var theme = template;
			for( var i in settings )
				theme = theme.replace( settings[i]['slug'], settings[i]['defaultValue'] );	
			return $( '<div class="box"><a href="javascript:void(0);" class="removeBtn">Remove<i></i></a><span class="theme">' + theme + '</span><span class="settings"><a href="javascript:void(0);" class="settingsBtn">Settings<i></i></a></span></div>' );	
		}
		
		function createSettings(){
			var theme = '<ul class="settingList">';
				for( var i in settings ){
					var s = settings[ i ];
					theme += '<li><span>'+ s['title'] +'</span><input type="text" value="'+ s['defaultValue'] +'" rel="'+ s['slug'] +'" /></li>';
				}
				theme += '</ul>';
			return theme;	
		}
		
		function output(){
			if( callback != undefined ) callback();
		}
		
	};
	window.AppUI = AppUI;
})(window);

// MENU
menu.bind('click', function(){
	var _this = $( this ), rel = _this.attr('rel');
	if( rel != undefined && rel != null && rel != '' ){
		createConfig( config[ rel ] );
	}
});

function createConfig( obj ){
	new AppUI( obj );
}

//FILE UPLOAD
$('.fileUpload').bind('change', function(){
	console.log( $( this ).val() );
});

