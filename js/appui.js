// PLUGINS

/* Generate a random uuid. http://www.broofa.com */
(function(){var e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");Math.uuid=function(d,c){var b=[],a;c=c||e.length;if(d)for(a=0;a<d;a++)b[a]=e[0|Math.random()*c];else{var f;b[8]=b[13]=b[18]=b[23]="-";b[14]="4";for(a=0;36>a;a++)b[a]||(f=0|16*Math.random(),b[a]=e[19==a?f&3|8:f])}return b.join("")};Math.uuidFast=function(){for(var d=Array(36),c=0,b,a=0;36>a;a++)8==a||13==a||18==a||23==a?d[a]="-":14==a?d[a]="4":(2>=c&&(c=33554432+16777216*Math.random()|0),b=c&15,c>>=4,d[a]=
e[19==a?b&3|8:b]);return d.join("")};Math.uuidCompact=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(d){var c=16*Math.random()|0;return("x"==d?c:c&3|8).toString(16)})}})();

// Global Variable
var con = $('#appWizard'), scene = $('.scene', con), background = $('.background', scene), menu = $('ul.settings li a', con), outputArea = $('.output', con), outputObj = {}; 

// Draggable, Resizable
(function(window){
	function AppUI( obj, objID, callback ){

		var template = obj["template"] || '',
			settings = obj["settings"] || {}
			resizable = obj["resizable"] || false,
			type = obj["type"] || 'button',
			output = '',
			ID = DefaultValue(),
			objPos = {}; 
			
		if( ID != undefined ){ 
			
			//APPEND
			scene.append( ID );				
			$('span.settings', ID).append( createSettings() );
			
			//EVENT
			ID.draggable({ containment:'parent'	}).on('dragstop', function( event, ui ){
				objPos['{{left}}'] = ui.position.left;
     			objPos['{{top}}'] = ui.position.top;
				generateOutput();
			});

			if( resizable ){
				ID.addClass('resizable').resizable({ containment:'parent' }).on('dragstop', function( event, ui ){
					objPos['{{width}}'] = ui.size.width;
	     			objPos['{{height}}'] = ui.size.height;
					generateOutput();
				});
			}
			
			$('a.removeBtn', ID).unbind('click').bind('click', function(){
				var con = $( this ).parents('.box');
				if( con.hasClass('resizable') ) 
					con.resizable('destroy');
					con.draggable('destroy').remove();
				
				deleteOutputObj( objID ); //delete obj	
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
					theme += '<li><span>'+ s['title'] +'</span><input type="text" class="'+ i +'" value="'+ s['defaultValue'] +'" rel="'+ s['slug'] +'" /></li>';
				}
				theme += '</ul>';
			return theme;	
		}
		
		function generateOutput(){
			var theme = template;
			
			// Position & Size
			for( var i in objPos ){
				theme = theme.replace( i, objPos[ i ] );
			}
			
			console.log( theme );
		}
		
		function output(){
			if( callback != undefined ) callback();
		}
		
		//GLOBAL VARIABLE
		this.getOutput = function(){
			return output;
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
	var id = Math.uuid( 5 );
	outputObj[ id ] = new AppUI( obj, id );
}

function deleteOutputObj( id ){
	if( outputObj[ id ] != null ){
		outputObj[ id ] = null;
		delete outputObj[ id ];
		generateHtml();
	}
}

//GENERATE BUTTON
$('a.generateBtn').bind('click', generateHtml);
function generateHtml(){
	var html = '';
	for( var i in outputObj )
		html += outputObj[ i ].getOutput();
	outputArea.val( html );
}


//FILE UPLOAD
$('.fileUpload').bind('change', function(){
	console.log( $( this ).val() );
});
