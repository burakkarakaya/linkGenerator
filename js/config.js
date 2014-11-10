//TEMPLATE ALANLARI İLE SETTINGTEKİ SLUG ALANLARI EŞİT OLMALI
var config = {
	
	'text': {
		'template': '<div class="content" style="width:{{width}}px;height:{{height}}px;top:{{top}}px;left:{{left}}px;"><h2 class="title">{{title}}</h2><p class="desc">{{desc}}</p></div>',
		'settings': {
			'title':{ 'title': 'TITLE', 'slug': '{{title}}', 'defaultValue': 'title' },
			'desc':{ 'title': 'DESCRIPTION', 'slug': '{{desc}}', 'defaultValue': 'description' },
			'width':{ 'title': 'WIDTH', 'slug': '{{width}}', 'defaultValue': '' },
			'height':{ 'title': 'HEIGHT', 'slug': '{{height}}', 'defaultValue': '' },
			'top':{ 'title': 'TOP', 'slug': '{{top}}', 'defaultValue': '' },
			'left':{ 'title': 'LEFT', 'slug': '{{left}}', 'defaultValue': '' }
		},
		'resizable': true,
		'type': 'textButton'
	},
	
	'link': {
		'template': '<a href="{{link}}" class="{{class}}" style="top:{{top}}px;left:{{left}}px;"><span>{{buttonText}}</span><i></i></a>',
		'settings': {
			'link':{ 'title': 'TARGET URL', 'slug': '{{link}}', 'defaultValue': '#' },
			'class':{ 'title': 'BUTTON CLASS', 'slug': '{{class}}', 'defaultValue': '' },
			'buttonText':{ 'title': 'BUTTON TEXT', 'slug': '{{buttonText}}', 'defaultValue': 'BUTTON' },
			'top':{ 'title': 'TOP', 'slug': '{{top}}', 'defaultValue': '' },
			'left':{ 'title': 'LEFT', 'slug': '{{left}}', 'defaultValue': '' }
		},
		'resizable': false,
		'type': 'linkButton'
	},
	
	'hitArea': {
	
	}
	
};