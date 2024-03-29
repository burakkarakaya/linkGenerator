// PLUGINS

/* Generate a random uuid. http://www.broofa.com */
(function(){var e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");Math.uuid=function(d,c){var b=[],a;c=c||e.length;if(d)for(a=0;a<d;a++)b[a]=e[0|Math.random()*c];else{var f;b[8]=b[13]=b[18]=b[23]="-";b[14]="4";for(a=0;36>a;a++)b[a]||(f=0|16*Math.random(),b[a]=e[19==a?f&3|8:f])}return b.join("")};Math.uuidFast=function(){for(var d=Array(36),c=0,b,a=0;36>a;a++)8==a||13==a||18==a||23==a?d[a]="-":14==a?d[a]="4":(2>=c&&(c=33554432+16777216*Math.random()|0),b=c&15,c>>=4,d[a]=
e[19==a?b&3|8:b]);return d.join("")};Math.uuidCompact=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(d){var c=16*Math.random()|0;return("x"==d?c:c&3|8).toString(16)})}})();

// Global Variable
var con = $('#appWizard'), scene = $('.scene', con), sceneW = scene.width(), sceneH = scene.height(), background = $('.background', scene), menu = $('ul.settings li a', con), outputArea = $('.output', con), outputObj = {}; 

// Draggable, Resizable
(function(window){
	function AppUI( obj, objID, callback ){

		var template = obj["template"] || '',
			settings = obj["settings"] || {},
			resizable = obj["resizable"] || false,
			type = obj["type"] || 'button',
			output = '',
			ID = DefaultValue();

		if( ID != undefined ){ 
			
			//APPEND
			scene.append( ID );				
			$('span.settings', ID).append( createSettings() );
			
			//EVENT
			ID.draggable({ containment:'parent'	}).on('dragstop', onDragStop).trigger('dragstop');
	
			if( resizable ){
				ID.addClass('resizable').resizable({ containment:'parent' }).on('resizestop', onResizeStop).trigger('resizestop');
			}
	
			$('a.removeBtn', ID).unbind('click').bind('click', function(){
				if( ID.hasClass('resizable') ) 
					ID.resizable('destroy');
					ID.draggable('destroy').remove();
				deleteOutputObj( objID ); //delete obj	
			});
			$('a.settingsBtn', ID).bind('click', function(){
				$('span.settings').removeClass('opened');
				$( this ).parents('span.settings').toggleClass('opened');
			});
			$('ul.settingList input', ID).bind('keyup', function(){			
				/* DEFAULT DEĞERLERİNE DÖNDÜRME
				if( val.length == 0 ){
					val = getDefaultValue( rel );
					_this.val( val );
				}*/
				generateOutput();
			});	
		}
		
		function onDragStop( event, ui ){
			ui = ui || { 'position': { 'left': ID.offset().left, 'top': ID.offset().top } };
			var x = ui.position.left, y = ui.position.top;
				x = ( x / sceneW * 100 ).toFixed( 2 );
				y = ( y / sceneH * 100 ).toFixed( 2 );
			$('ul.settingList li.top input', ID).val( y );
			$('ul.settingList li.left input', ID).val( x );
			generateOutput();
		}
		
		function onResizeStop( event, ui ){ 
			ui = ui || { 'size': { 'width': ID.width(), 'height': ID.height() } };
			var w = ui.size.width, h = ui.size.height;
				w = Math.round( w / sceneW * 100 );
				h = Math.round( h / sceneH * 100 );
			$('ul.settingList li.width input', ID).val( w );
			$('ul.settingList li.height input', ID).val( h );
			generateOutput();
		}		
		
		function DefaultValue(){
			var theme = template;
			for( var i in settings )
				theme = theme.replace( settings[i]['slug'], settings[i]['defaultValue'] );
			output = theme;		
			return $( '<div class="box '+ type +'"><div class="controls"><span class="settings"><a href="javascript:void(0);" class="settingsBtn">Settings<i></i></a></span><a href="javascript:void(0);" class="removeBtn">Remove<i></i></a></div><span class="theme">' + theme + '</span></div>' );	
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
					theme += '<li class="'+ i +'"><span>'+ s['title'] +'</span><input type="text" value="'+ s['defaultValue'] +'" rel="'+ s['slug'] +'" /></li>';
				}
				theme += '</ul>';
			return theme;	
		}
		
		function generateOutput(){
			
			var theme = template;			
			$('ul.settingList input', ID).each(function(i, k) {
				var _this = $( this ), rel = _this.attr('rel'), val = _this.val();			
				if( rel != undefined && rel != null && rel != '' )
					theme = theme.replace( rel, val );	
			});
			
			$('span.theme', ID).html( theme );
			output = theme;
			
			setTimeout( generateHtml, 1 );
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
		if( config[ rel ]['template'] )
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

// DIV OUTSIDE DETECT
$("body, html").click(function(e) {
	if( e.target.className != "settings" && $( e.target ).parents("span.settings").size() != 1 )
		$('span.settings').removeClass('opened');	
});

//FILE UPLOAD
$('.fileUpload').bind('change', function(){
	var src = 'upload/' + getFileNameFromPath( $( this ).val() );
		getImageSize(src, function( obj ){
			sceneW = obj['width'];
			sceneH = obj['height'];
			scene.removeAttr('style').width( sceneW ).height( sceneH );
		});
		background.html('<img src="'+ src +'" />');
});

function getFileNameFromPath( path ){ var ary = path.split("\\"); return ary[ary.length - 1]; }

function getImageSize( src, success, err ){
	var img = new Image();
		img.onload = function(){
			if( success != undefined ) 
				success( { 'width': this.width, 'height': this.height } );
		}
		img.onerror = function(){ if( err != undefined ) err(); }
		img.src = src;
}

//$('<style type="text/css">@import url("http://sass.proj-e.com/sites/arcelik/style.css")</style>').appendTo("head");





///////////////////// PLUGINS
(function($) {
    $.fn.extend({
        minusLinkGenerator: function( options, callback ){
            var defaults = {};
            var options = $.extend(defaults, options);
            return this.each(function() {
				
                var o = options, 
					el = $( this ),
					scene = el.find('.scene'), 
					background = el.find('.background'), 
					menu = el.find('ul.settings li a'), 
					outputArea = el.find('.output'), 
					fileUpload = el.find('.fileUpload'),
					sceneW = scene.width() || 0, 
					sceneH = scene.height() || 0, 
					outputObj = {},
					uty = {
						trimText: function( k ){	return k.replace(/(^\s+|\s+$)/g,'');	},
						detectEl: function( ID ){ return ID.length > 0 ? true : false; }
					},
					main = {
						cls: { opened: 'opened' },
						generateHtml: function(){
							var _t = this, htm = '';
							for( var i in _t.outputObj )
								htm += _t.outputObj[ i ].getOutput();
							outputArea.val( htm );
						},
						addObject: function( o ){
							var _t = this, id = Math.uuid( 5 );
							_t.outputObj[ id ] = new AppUI({ id: id, data: o });
						},
						removeObject: function( id ){
							var _t = this;
							if( _t.outputObj[ id ] != null ){
								outputObj[ id ] = null;
								delete outputObj[ id ];
								_t.generateHtml();
							}
						},
						addEvent: function(){
							var _t = this;
							if( uty.detectEl( menu ) )
								menu.bind('click', function(){
									var ths = $( this ), rel = ths.attr('rel') || '';
									if( rel != '' )
										if( config[ rel ] )
											_t.addObject( config[ rel ] );
									
								});
							
							$('body, html').bind('click touchstart', function( e ){
								var m = $('span.settings', el); 
								if( !m.is( e.target ) && m.has( e.target ).length === 0 )
									m.removeClass( _t['cls']['opened'] );
							});	
						},
						init: function(){
							var _t = this;
								_t.addEvent();
							
						}
					};
				
				main.init();
				
            })
        }
    })
})(jQuery, window);

//$('#appWizard').minusLinkGenerator();