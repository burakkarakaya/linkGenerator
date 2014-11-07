// Global Variable
var con = $('#appWizard'), scene = $('.scene', con), background = $('.background', scene), menu = $('ul.settings li a', con); 

// Draggable, Resizable
(function(window){
	function AppUI( obj, callback ){

		var template = obj["template"] || '',
			settings = obj["settings"] || {}
			resizable = obj["resizable"] || false,
			type = obj["type"] || 'button',
			output = '',
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
				ID.addClass('resizable').resizable({ containment:'parent' }).on('dragstop', function( event, ui ){
					console.log('sdsadsd');
				});
			}
			
			$('a.removeBtn', ID).bind('click', function(){
				var con = $( this ).parents('.box');
				if( resizable ) con.resizable('destroy')
				con.draggable('destroy').remove();
			});
			$('a.settingsBtn', ID).bind('click', function(){
				$( this ).parents('span.settings').toggleClass('opened');
			});
			$('ul.settingList input', ID).bind('keyup', function(){
				var theme = template,
					con = $( this ).parents('.box');
				
				$('ul.settingList input', con).each(function(i, k) {
                    var _this = $( this ), rel = _this.attr('rel'), val = _this.val();
					
					/* DEFAULT DEĞERLERİNE DÖNDÜRME
					if( val.length == 0 ){
						val = getDefaultValue( rel );
						_this.val( val );
					}
					*/
					
					theme = theme.replace( rel, val );	
				});
				$('span.theme', con).html( theme );
				output = theme;
			});	
		}
		
		function DefaultValue(){
			var theme = template;
			for( var i in settings )
				theme = theme.replace( settings[i]['slug'], settings[i]['defaultValue'] );
			
			output = theme;		
			
			return $( '<div class="box"><a href="javascript:void(0);" class="removeBtn">Remove<i></i></a><span class="theme">' + theme + '</span><span class="settings"><a href="javascript:void(0);" class="settingsBtn">Settings<i></i></a></span></div>' );	
		}
		
		function getDefaultValue( rel ){
			var def = '';
			for( var i in settings ){
				var s = settings[ i ];
				if( s['slug'] == rel ) def = s['defaultValue'];
			}
			return def;
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
		
		//GLOBAL VARIABLE
		this.getOutput = function(){
			return 
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

