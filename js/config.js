//TEMPLATE ALANLARI İLE SETTINGTEKİ SLUG ALANLARI EŞİT OLMALI
var config = {
	
	'text': {
		'template': '<div class="content" style="width:{{width}}px;height:{{height}}px;top:{{top}}px;left:{{left}}px;"><h2 class="title">{{title}}</h2><p class="desc">{{desc}}</p><small>{{smallText}}</small></div>',
		'settings': {
			'title':{ 'title': 'TITLE', 'slug': '{{title}}', 'defaultValue': '' },
			'desc':{ 'title': 'DESCRIPTION', 'slug': '{{desc}}', 'defaultValue': '' },
			'smallText':{ 'title': 'SMALL TEXT', 'slug': '{{smallText}}', 'defaultValue': '' },
			'width':{ 'title': 'WIDTH', 'slug': '{{width}}', 'defaultValue': 0 },
			'height':{ 'title': 'HEIGHT', 'slug': '{{height}}', 'defaultValue': 0 },
			'top':{ 'title': 'TOP', 'slug': '{{top}}', 'defaultValue': 0 },
			'left':{ 'title': 'LEFT', 'slug': '{{left}}', 'defaultValue': 0 }
		},
		'resizable': true,
		'type': 'textArea'
	},
	
	'link': {
		'template': '<a href="{{link}}" class="{{class}}" style="top:{{top}}px;left:{{left}}px;"><span>{{buttonText}}</span><i></i></a>',
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
		'template': '<a href="{{link}}" class="{{class}}" style="width:{{width}}px;height:{{height}}px;top:{{top}}px;left:{{left}}px;"></a>',
		'settings': {
			'link':{ 'title': 'TARGET URL', 'slug': '{{link}}', 'defaultValue': '#' },
			'class':{ 'title': 'BUTTON CLASS', 'slug': '{{class}}', 'defaultValue': '' },
			'width':{ 'title': 'WIDTH', 'slug': '{{width}}', 'defaultValue': 0 },
			'height':{ 'title': 'HEIGHT', 'slug': '{{height}}', 'defaultValue': 0 },
			'top':{ 'title': 'TOP', 'slug': '{{top}}', 'defaultValue': 0 },
			'left':{ 'title': 'LEFT', 'slug': '{{left}}', 'defaultValue': 0 }
		},
		'resizable': true,
		'type': 'linkButton'
	}
	
};