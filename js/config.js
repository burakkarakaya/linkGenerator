//TEMPLATE ALANLARI İLE SETTINGTEKİ SLUG ALANLARI EŞİT OLMALI
var config = {
	
	'text': {
		'template': '<div class="content" style="width:{{width}}%;height:{{height}}%;top:{{top}}%;left:{{left}}%;"><h2 class="title">{{title}}</h2><p class="desc">{{desc}}</p><small>{{smallText}}</small></div>',
		'settings': {
			'title':{ 'title': 'TITLE', 'slug': '{{title}}', 'defaultValue': 'TITLE' },
			'desc':{ 'title': 'DESCRIPTION', 'slug': '{{desc}}', 'defaultValue': 'DESCRIPTION' },
			'smallText':{ 'title': 'SMALL TEXT', 'slug': '{{smallText}}', 'defaultValue': 'smalltext' },
			'width':{ 'title': 'WIDTH', 'slug': '{{width}}', 'defaultValue': 0 },
			'height':{ 'title': 'HEIGHT', 'slug': '{{height}}', 'defaultValue': 0 },
			'top':{ 'title': 'TOP', 'slug': '{{top}}', 'defaultValue': 0 },
			'left':{ 'title': 'LEFT', 'slug': '{{left}}', 'defaultValue': 0 }
		},
		'resizable': true,
		'type': 'textArea'
	},
	
	'text': {
		'template': '<div style="top:{{top}}%;left:{{left}}%;" class="pin"><span class="ems-icon-holder circle red"><i class="ems-icon plus3"></i></span> <div class="pin-content ems-inline animated fadeIn"> <div class="pin-content-img"><img src="{{src}}"/></div><div class="pin-content-text"> <h5>{{title}}</h5> <h6>{{smallText}}</h6> <p>{{desc}}</p><a href="{{link}}" class="btn btn-text">{{buttonText}}</a></div></div></div>',
		'settings': {
			'title':{ 'title': 'TITLE', 'slug': '{{title}}', 'defaultValue': 'TITLE' },
			'desc':{ 'title': 'DESCRIPTION', 'slug': '{{desc}}', 'defaultValue': 'DESCRIPTION' },
			'smallText':{ 'title': 'SMALL TEXT', 'slug': '{{smallText}}', 'defaultValue': 'smalltext' },
			'link':{ 'title': 'TARGET URL', 'slug': '{{link}}', 'defaultValue': 'javascript:void(0);' },
			'buttonText':{ 'title': 'BUTTON TEXT', 'slug': '{{buttonText}}', 'defaultValue': 'KEŞFET' },
			'top':{ 'title': 'TOP', 'slug': '{{top}}', 'defaultValue': 0 },
			'left':{ 'title': 'LEFT', 'slug': '{{left}}', 'defaultValue': 0 }
		},
		'resizable': false,
		'type': 'pinButton'
	},
	
	'link': {
		'template': '<a href="{{link}}" class="{{class}}" style="top:{{top}}%;left:{{left}}%;"><span>{{buttonText}}</span><i></i></a>',
		'settings': {
			'link':{ 'title': 'TARGET URL', 'slug': '{{link}}', 'defaultValue': '#' },
			'class':{ 'title': 'BUTTON CLASS', 'slug': '{{class}}', 'defaultValue': '' },
			'buttonText':{ 'title': 'BUTTON TEXT', 'slug': '{{buttonText}}', 'defaultValue': 'BUTTON' },
			'top':{ 'title': 'TOP', 'slug': '{{top}}', 'defaultValue': 0 },
			'left':{ 'title': 'LEFT', 'slug': '{{left}}', 'defaultValue': 0 }
		},
		'resizable': false,
		'type': 'linkButton'
	},
	
	'hitArea': {
		'template': '<a href="{{link}}" class="{{class}}" style="width:{{width}}%;height:{{height}}%;top:{{top}}%;left:{{left}}%;"></a>',
		'settings': {
			'link':{ 'title': 'TARGET URL', 'slug': '{{link}}', 'defaultValue': '#' },
			'class':{ 'title': 'BUTTON CLASS', 'slug': '{{class}}', 'defaultValue': '' },
			'width':{ 'title': 'WIDTH', 'slug': '{{width}}', 'defaultValue': 0 },
			'height':{ 'title': 'HEIGHT', 'slug': '{{height}}', 'defaultValue': 0 },
			'top':{ 'title': 'TOP', 'slug': '{{top}}', 'defaultValue': 0 },
			'left':{ 'title': 'LEFT', 'slug': '{{left}}', 'defaultValue': 0 }
		},
		'resizable': true,
		'type': 'hitArea'
	}
	
};
