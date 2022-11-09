module.exports = {
	extends: [
		'./rules/core/possible-problems',
		'./rules/core/suggestions',
		'./rules/core/layout-and-formatting',
		'./rules/import',
	],
	env: {
		es6: true,
		browser: true,
		node: true,
	},
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
};
