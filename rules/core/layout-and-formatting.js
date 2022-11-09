module.exports = {
	rules: {
		'array-bracket-newline': ['off', 'consistent'],
		'array-bracket-spacing': [
			'error',
			'never',
			{
				singleValue: false,
				objectsInArrays: false,
				arraysInArrays: false,
			},
		],
		'array-element-newline': [
			'off',
			{
				multiline: true,
				minItems: 3,
			},
		],
		'arrow-parens': ['error', 'always'],
		'arrow-spacing': [
			'error',
			{
				before: true,
				after: true,
			},
		],
		'block-spacing': ['error', 'always'],
		'brace-style': [
			'error',
			'1tbs',
			{
				allowSingleLine: false,
			},
		],
		'comma-dangle': [
			'error',
			{
				arrays: 'always-multiline',
				objects: 'always-multiline',
				imports: 'always-multiline',
				exports: 'always-multiline',
				functions: 'always-multiline',
			},
		],
		'comma-spacing': [
			'error',
			{
				before: false,
				after: true,
			},
		],
		'comma-style': [
			'error',
			'last',
			{
				exceptions: {
					ArrayExpression: false,
					ArrayPattern: false,
					ArrowFunctionExpression: false,
					CallExpression: false,
					FunctionDeclaration: false,
					FunctionExpression: false,
					ImportDeclaration: false,
					ObjectExpression: false,
					ObjectPattern: false,
					VariableDeclaration: false,
					NewExpression: false,
				},
			},
		],
		'computed-property-spacing': [
			'error',
			'never',
			{
				enforceForClassMembers: true,
			},
		],
		'dot-location': ['error', 'property'],
		'eol-last': ['error', 'always'],
		'func-call-spacing': ['error', 'never'],
		'function-call-argument-newline': ['error', 'consistent'],
		'function-paren-newline': ['error', 'multiline-arguments'],
		'generator-star-spacing': [
			'error',
			{
				named: {
					before: false,
					after: true,
				},
				anonymous: {
					before: false,
					after: true,
				},
				method: {
					before: false,
					after: true,
				},
			},
		],
		'implicit-arrow-linebreak': ['error', 'beside'],
		'indent': [
			'error',
			'tab',
			{
				ignoredNodes: [
					'JSXAttribute',
					'JSXIdentifier',
					'JSXNamespacedName',
					'JSXMemberExpression',
					'JSXSpreadAttribute',
					'JSXExpressionContainer',
					'JSXElement',
					'JSXElement>*',
					'JSXOpeningElement',
					'JSXClosingElement',
					'JSXFragment',
					'JSXOpeningFragment',
					'JSXClosingFragment',
					'JSXText',
					'JSXEmptyExpression',
					'JSXSpreadChild',
				],
				SwitchCase: 1,
				VariableDeclarator: 1,
				outerIIFEBody: 1,
				MemberExpression: 'off',
				FunctionDeclaration: {
					parameters: 1,
					body: 1,
				},
				FunctionExpression: {
					parameters: 1,
					body: 1,
				},
				StaticBlock: {
					body: 1,
				},
				CallExpression: {
					arguments: 1,
				},
				ArrayExpression: 1,
				ObjectExpression: 1,
				ImportDeclaration: 1,
				flatTernaryExpressions: false,
				offsetTernaryExpressions: false,
				ignoreComments: false,
			},
		],
		'jsx-quotes': ['off', 'prefer-double'],
		'key-spacing': [
			'error',
			{
				singleLine: {
					beforeColon: false,
					afterColon: true,
					mode: 'strict',
				},
				multiLine: {
					beforeColon: false,
					afterColon: true,
					mode: 'strict',
				},
			},
		],
		'keyword-spacing': [
			'error',
			{
				before: true,
				after: true,
				overrides: {},
			},
		],
		'line-comment-position': [
			'error',
			{
				position: 'above',
				ignorePattern: '',
				applyDefaultIgnorePatterns: false,
			},
		],
		'linebreak-style': ['error', 'unix'],
		'lines-around-comment': [
			'off',
			{
				beforeBlockComment: true,
				afterBlockComment: true,
				beforeLineComment: true,
				afterLineComment: false,
				allowBlockStart: true,
				allowBlockEnd: true,
				allowObjectStart: true,
				allowObjectEnd: true,
				allowArrayStart: true,
				allowArrayEnd: true,
				allowClassStart: true,
				allowClassEnd: true,
				applyDefaultIgnorePatterns: true,
				ignorePattern: '',
			},
		],
		'lines-between-class-members': [
			'error',
			'always',
			{
				exceptAfterSingleLine: false,
			},
		],
		'max-len': [
			'error',
			{
				code: 100,
				tabWidth: 4,
				comments: 0,
				ignorePattern: '',
				ignoreComments: false,
				ignoreTrailingComments: true,
				ignoreUrls: true,
				ignoreStrings: true,
				ignoreTemplateLiterals: true,
				ignoreRegExpLiterals: true,
			},
		],
		'max-statements-per-line': [
			'error',
			{
				max: 1,
			},
		],
		'multiline-ternary': ['error', 'never'],
		'new-parens': ['error', 'always'],
		'newline-per-chained-call': [
			'error',
			{
				ignoreChainWithDepth: 4,
			},
		],
		'no-extra-parens': [
			'error',
			'all',
			{
				conditionalAssign: true,
				returnAssign: false,
				nestedBinaryExpressions: false,
				ignoreJSX: 'all',
				enforceForArrowConditionals: false,
				enforceForSequenceExpressions: false,
				enforceForNewInMemberExpressions: false,
				enforceForFunctionPrototypeMethods: false,
			},
		],
		'no-mixed-spaces-and-tabs': 'error',
		'no-multi-spaces': [
			'error',
			{
				ignoreEOLComments: false,
				exceptions: {},
			},
		],
		'no-multiple-empty-lines': [
			'error',
			{
				max: 1,
				maxEOF: 0,
				maxBOF: 0,
			},
		],
		'no-tabs': [
			'error',
			{
				allowIndentationTabs: true,
			},
		],
		'no-trailing-spaces': [
			'error',
			{
				skipBlankLines: false,
				ignoreComments: false,
			},
		],
		'no-whitespace-before-property': 'error',
		'nonblock-statement-body-position': [
			'error',
			'beside',
			{
				overrides: {},
			},
		],
		'object-curly-newline': [
			'error',
			{
				ObjectExpression: {
					multiline: true,
					minProperties: 1,
					consistent: true,
				},
				ObjectPattern: {
					multiline: true,
					minProperties: 1,
					consistent: true,
				},
				ImportDeclaration: {
					multiline: true,
					minProperties: 1,
					consistent: true,
				},
				ExportDeclaration: {
					multiline: true,
					minProperties: 1,
					consistent: true,
				},
			},
		],
		'object-curly-spacing': [
			'error',
			'always',
			{
				arraysInObjects: true,
				objectsInObjects: true,
			},
		],
		'object-property-newline': [
			'error',
			{
				allowAllPropertiesOnSameLine: false,
			},
		],
		'operator-linebreak': [
			'error',
			'before',
			{
				overrides: {
					'=': 'none',
				},
			},
		],
		'padded-blocks': [
			'error',
			{
				blocks: 'never',
				classes: 'never',
				switches: 'never',
			},
			{
				allowSingleLineBlocks: true,
			},
		],
		'padding-line-between-statements': [
			'error',
			{
				blankLine: 'always',
				prev: 'directive',
				next: '*',
			},
			{
				blankLine: 'any',
				prev: 'directive',
				next: 'directive',
			},
			{
				blankLine: 'always',
				prev: ['var', 'let', 'const'],
				next: '*',
			},
			{
				blankLine: 'any',
				prev: ['var', 'let', 'const'],
				next: ['var', 'let', 'const'],
			},
			{
				blankLine: 'always',
				prev: '*',
				next: 'return',
			},
		],
		'quotes': [
			'error',
			'single',
			{
				avoidEscape: true,
				allowTemplateLiterals: true,
			},
		],
		'rest-spread-spacing': ['error', 'never'],
		'semi': [
			'error',
			'always',
			{
				omitLastInOneLineBlock: false,
			},
		],
		'semi-spacing': [
			'error',
			{
				before: false,
				after: true,
			},
		],
		'semi-style': ['error', 'last'],
		'space-before-blocks': [
			'error',
			{
				functions: 'always',
				keywords: 'always',
				classes: 'always',
			},
		],
		'space-before-function-paren': [
			'error',
			{
				anonymous: 'always',
				named: 'never',
				asyncArrow: 'always',
			},
		],
		'space-in-parens': [
			'error',
			'never',
			{
				exceptions: [],
			},
		],
		'space-infix-ops': [
			'error',
			{
				int32Hint: false,
			},
		],
		'space-unary-ops': [
			'error',
			{
				words: true,
				nonwords: false,
				overrides: {},
			},
		],
		'switch-colon-spacing': [
			'error',
			{
				before: false,
				after: true,
			},
		],
		'template-curly-spacing': ['error', 'never'],
		'template-tag-spacing': ['error', 'never'],
		'unicode-bom': ['error', 'never'],
		'wrap-iife': [
			'error',
			'inside',
			{
				functionPrototypeMethods: false,
			},
		],
		'wrap-regex': 'off',
		'yield-star-spacing': [
			'error',
			{
				before: false,
				after: true,
			},
		],
	},
};
