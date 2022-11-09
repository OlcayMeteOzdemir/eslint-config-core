module.exports = {
	plugins: ['import'],
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.json', '.mjs'],
			},
		},
		'import/extensions': ['.js', '.jsx', '.mjs'],
		'import/core-modules': [],
		'import/ignore': ['node_modules', '\\.(coffee|scss|css|less|hbs|svg|json)$'],
	},
	rules: {
		'import/no-unresolved': [
			'error',
			{
				commonjs: true,
				amd: false,
				caseSensitive: true,
				caseSensitiveStrict: false,
			},
		],
		'import/named': 'error',
		'import/default': 'off',
		'import/namespace': [
			'off',
			{
				allowComputed: false,
			},
		],
		'import/no-restricted-paths': [
			'off',
			{
				zones: [
					{
						target: '',
						from: '',
						except: [],
						message: '',
					},
				],
			},
		],
		'import/no-absolute-path': [
			'error',
			{
				esmodule: true,
				commonjs: true,
				amd: false,
			},
		],
		'import/no-dynamic-require': 'error',
		'import/no-internal-modules': [
			'off',
			{
				allow: [],
				forbid: [],
			},
		],
		'import/no-webpack-loader-syntax': 'error',
		'import/no-self-import': 'error',
		'import/no-cycle': [
			'error',
			{
				maxDepth: Infinity,
				ignoreExternal: false,
			},
		],
		'import/no-useless-path-segments': [
			'error',
			{
				commonjs: true,
				noUselessIndex: false,
			},
		],
		'import/no-relative-parent-imports': 'off',
		'import/no-relative-packages': 'error',
		'import/export': 'error',
		'import/no-named-as-default': 'error',
		'import/no-named-as-default-member': 'error',
		'import/no-deprecated': 'off',
		'import/no-extraneous-dependencies': [
			'error',
			{
				devDependencies: [
					'test/**',
					'tests/**',
					'spec/**',
					'**/__tests__/**',
					'**/__mocks__/**',
					'test.{js,jsx}',
					'test-*.{js,jsx}',
					'**/*{.,_}{test,spec}.{js,jsx}',
					'**/jest.config.js',
					'**/jest.setup.js',
					'**/vue.config.js',
					'**/webpack.config.js',
					'**/webpack.config.*.js',
					'**/rollup.config.js',
					'**/rollup.config.*.js',
					'**/gulpfile.js',
					'**/gulpfile.*.js',
					'**/Gruntfile{,.js}',
					'**/protractor.conf.js',
					'**/protractor.conf.*.js',
					'**/karma.conf.js',
					'**/.eslintrc.js',
				],
				optionalDependencies: false,
				peerDependencies: true,
				bundledDependencies: true,
			},
		],
		'import/no-mutable-exports': 'error',
		'import/no-unused-modules': [
			'off',
			{
				missingExports: true,
				unusedExports: true,
				ignoreExports: [],
			},
		],
		'import/unambiguous': 'off',
		'import/no-commonjs': [
			'off',
			{
				allowRequire: false,
				allowConditionalRequire: true,
				allowPrimitiveModules: false,
			},
		],
		'import/no-amd': 'error',
		'import/no-nodejs-modules': [
			'off',
			{
				allow: [],
			},
		],
		'import/no-import-module-exports': [
			'error',
			{
				exceptions: [],
			},
		],
		'import/first': 'error',
		'import/exports-last': 'error',
		'import/no-duplicates': 'error',
		'import/no-namespace': [
			'off',
			{
				ignore: [],
			},
		],
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				js: 'never',
				jsx: 'never',
				mjs: 'never',
			},
		],
		'import/order': [
			'error',
			{
				'groups': [['builtin', 'external', 'internal']],
				'newlines-between': 'ignore',
				'alphabetize': {
					order: 'ignore',
					caseInsensitive: false,
				},
				'warnOnUnassignedImports': false,
			},
		],
		'import/newline-after-import': [
			'error',
			{
				count: 1,
			},
		],
		'import/prefer-default-export': 'error',
		'import/max-dependencies': [
			'off',
			{
				max: 10,
				ignoreTypeImports: false,
			},
		],
		'import/no-unassigned-import': [
			'off',
			{
				allow: [],
			},
		],
		'import/no-named-default': 'error',
		'import/no-default-export': 'off',
		'import/no-named-export': 'off',
		'import/no-anonymous-default-export': [
			'off',
			{
				allowArray: false,
				allowArrowFunction: false,
				allowAnonymousClass: false,
				allowAnonymousFunction: false,
				allowCallExpression: true,
				allowNew: false,
				allowLiteral: false,
				allowObject: false,
			},
		],
		'import/group-exports': 'off',
		'import/dynamic-import-chunkname': [
			'off',
			{
				importFunctions: [],
				webpackChunknameFormat: '[0-9a-zA-Z-_/.]+',
			},
		],
	},
};
