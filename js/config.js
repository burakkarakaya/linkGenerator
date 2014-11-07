//TEMPLATE ALANLARI İLE SETTINGTEKİ SLUG ALANLARI EŞİT OLMALI
var config = {
	
	'text': {
		'template': '<div class="content"><h2 class="title">{{title}}</h2><p class="desc">{{desc}}</p></div>',
		'settings': {
			'title':{ 'title': 'TITLE', 'slug': '{{title}}', 'defaultValue': 'title' },
			'desc':{ 'title': 'DESCRIPTION', 'slug': '{{desc}}', 'defaultValue': 'description' }
		},
		'resizable': true,
		'type': 'textButton'
	},
	
	'link': {
		'template': '<a href="{{link}}" class="{{class}}"><span>{{buttonText}}</span><i></i></a>',
		'settings': {
			'link':{ 'title': 'TARGET URL', 'slug': '{{link}}', 'defaultValue': '#' },
			'class':{ 'title': 'BUTTON CLASS', 'slug': '{{class}}', 'defaultValue': '' },
			'buttonText':{ 'title': 'BUTTON TEXT', 'slug': '{{buttonText}}', 'defaultValue': 'BUTTON' }
		},
		'resizable': false,
		'type': 'linkButton'
	},
	
	'hitArea': {
	
	}
	
	
};