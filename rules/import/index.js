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
		'import/export': 'error',
		'import/no-deprecated': 'off',
		'import/no-empty-named-blocks': 'error',
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
		'import/no-named-as-default': 'error',
		'import/no-named-as-default-member': 'error',
		'import/no-unused-modules': [
			'off',
			{
				missingExports: true,
				unusedExports: true,
				ignoreExports: [],
			},
		],
		'import/no-amd': 'error',
		'import/no-commonjs': [
			'off',
			{
				allowRequire: false,
				allowConditionalRequire: true,
				allowPrimitiveModules: false,
			},
		],
		'import/no-import-module-exports': [
			'error',
			{
				exceptions: [],
			},
		],
		'import/no-nodejs-modules': [
			'off',
			{
				allow: [],
			},
		],
		'import/unambiguous': 'off',
		'import/default': 'off',
		'import/named': 'error',
		'import/namespace': [
			'off',
			{
				allowComputed: false,
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
		'import/no-cycle': [
			'error',
			{
				maxDepth: Infinity,
				ignoreExternal: false,
				allowUnsafeDynamicCyclicDependency: false,
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
		'import/no-relative-packages': 'error',
		'import/no-relative-parent-imports': 'off',
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
		'import/no-self-import': 'error',
		'import/no-unresolved': [
			'error',
			{
				commonjs: true,
				amd: false,
				caseSensitive: true,
				caseSensitiveStrict: false,
			},
		],
		'import/no-useless-path-segments': [
			'error',
			{
				commonjs: true,
				noUselessIndex: false,
			},
		],
		'import/no-webpack-loader-syntax': 'error',
		'import/consistent-type-specifier-style': ['off', 'prefer-inline'],
		'import/dynamic-import-chunkname': [
			'off',
			{
				importFunctions: [],
				webpackChunknameFormat: '[0-9a-zA-Z-_/.]+',
			},
		],
		'import/exports-last': 'error',
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				js: 'never',
				jsx: 'never',
				mjs: 'never',
			},
		],
		'import/first': 'error',
		'import/group-exports': 'off',
		'import/max-dependencies': [
			'off',
			{
				max: 10,
				ignoreTypeImports: false,
			},
		],
		'import/newline-after-import': [
			'error',
			{
				count: 1,
				considerComments: true,
			},
		],
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
		'import/no-default-export': 'off',
		'import/no-duplicates': 'error',
		'import/no-named-default': 'error',
		'import/no-named-export': 'off',
		'import/no-namespace': [
			'off',
			{
				ignore: [],
			},
		],
		'import/no-unassigned-import': [
			'off',
			{
				allow: [],
			},
		],
		'import/order': [
			'error',
			{
				'groups': [['builtin', 'external', 'internal']],
				'newlines-between': 'ignore',
				'alphabetize': {
					order: 'ignore',
					orderImportKind: 'ignore',
					caseInsensitive: false,
				},
				'warnOnUnassignedImports': false,
			},
		],
		'import/prefer-default-export': 'error',
	},
};
