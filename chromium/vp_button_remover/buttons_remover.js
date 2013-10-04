var style = document.styleSheets[0];

for (var i = 0; i < style.rules.length; i++)
	if (style.rules[i].cssText.search('.btn')>-1)
		style.removeRule(i--);

