module.exports = {
	rules: {
		'accessor-pairs': [
			'off',
			{
				setWithoutGet: true,
				getWithoutSet: false,
				enforceForClassMembers: true,
			},
		],
		'arrow-body-style': [
			'error',
			'as-needed',
			{
				requireReturnForObjectLiteral: true,
			},
		],
		'block-scoped-var': 'error',
		'camelcase': [
			'error',
			{
				properties: 'always',
				ignoreDestructuring: false,
				ignoreImports: false,
				ignoreGlobals: false,
				allow: [],
			},
		],
		'capitalized-comments': [
			'off',
			'always',
			{
				line: {
					ignorePattern: '',
					ignoreInlineComments: false,
					ignoreConsecutiveComments: false,
				},
				block: {
					ignorePattern: '',
					ignoreInlineComments: false,
					ignoreConsecutiveComments: false,
				},
			},
		],
		'class-methods-use-this': [
			'error',
			{
				exceptMethods: [],
				enforceForClassFields: true,
			},
		],
		'complexity': [
			'off',
			{
				max: 20,
			},
		],
		'consistent-return': [
			'error',
			{
				treatUndefinedAsUnspecified: false,
			},
		],
		'consistent-this': 'off',
		'curly': ['error', 'all'],
		'default-case': [
			'error',
			{
				commentPattern: '',
			},
		],
		'default-case-last': 'error',
		'default-param-last': 'error',
		'dot-notation': [
			'error',
			{
				allowKeywords: true,
				allowPattern: '',
			},
		],
		'eqeqeq': [
			'error',
			'always',
			{
				null: 'ignore',
			},
		],
		'func-name-matching': [
			'off',
			'always',
			{
				considerPropertyDescriptor: true,
				includeCommonJSModuleExports: false,
			},
		],
		'func-names': [
			'warn',
			'as-needed',
			{
				generators: 'as-needed',
			},
		],
		'func-style': [
			'off',
			'expression',
			{
				allowArrowFunctions: true,
			},
		],
		'grouped-accessor-pairs': ['error', 'anyOrder'],
		'guard-for-in': 'error',
		'id-denylist': 'off',
		'id-length': [
			'off',
			{
				min: 3,
				max: Infinity,
				properties: 'always',
				exceptions: [],
				exceptionPatterns: [],
			},
		],
		'id-match': [
			'off',
			'^[a-z]+([A-Z][a-z]+)*$',
			{
				properties: true,
				classFields: true,
				onlyDeclarations: true,
				ignoreDestructuring: false,
			},
		],
		'init-declarations': ['error', 'always'],
		'logical-assignment-operators': [
			'error',
			'always',
			{
				enforceForIfStatements: false,
			},
		],
		'max-classes-per-file': [
			'error',
			{
				ignoreExpressions: false,
				max: 1,
			},
		],
		'max-depth': [
			'off',
			{
				max: 4,
			},
		],
		'max-lines': [
			'off',
			{
				max: 300,
				skipBlankLines: true,
				skipComments: true,
			},
		],
		'max-lines-per-function': [
			'off',
			{
				max: 50,
				skipBlankLines: true,
				skipComments: true,
				IIFEs: true,
			},
		],
		'max-nested-callbacks': [
			'error',
			{
				max: 3,
			},
		],
		'max-params': [
			'off',
			{
				max: 3,
			},
		],
		'max-statements': [
			'off',
			{
				max: 10,
			},
			{
				ignoreTopLevelFunctions: true,
			},
		],
		'multiline-comment-style': ['off', 'starred-block'],
		'new-cap': [
			'error',
			{
				newIsCap: true,
				capIsNew: false,
				newIsCapExceptions: [],
				newIsCapExceptionPattern: '',
				capIsNewExceptions: ['Immutable.Set', 'Immutable.List', 'Immutable.Map'],
				capIsNewExceptionPattern: '',
				properties: true,
			},
		],
		'no-alert': 'error',
		'no-array-constructor': 'error',
		'no-bitwise': [
			'error',
			{
				allow: [],
				int32Hint: false,
			},
		],
		'no-caller': 'error',
		'no-case-declarations': 'error',
		'no-confusing-arrow': [
			'error',
			{
				allowParens: true,
				onlyOneSimpleParam: false,
			},
		],
		'no-console': [
			'warn',
			{
				allow: [''],
			},
		],
		'no-continue': 'error',
		'no-delete-var': 'error',
		'no-div-regex': 'off',
		'no-else-return': [
			'error',
			{
				allowElseIf: false,
			},
		],
		'no-empty': [
			'error',
			{
				allowEmptyCatch: false,
			},
		],
		'no-empty-function': [
			'error',
			{
				allow: ['functions', 'arrowFunctions', 'methods'],
			},
		],
		'no-empty-static-block': 'error',
		'no-eq-null': 'error',
		'no-eval': [
			'error',
			{
				allowIndirect: false,
			},
		],
		'no-extend-native': [
			'error',
			{
				exceptions: [],
			},
		],
		'no-extra-bind': 'error',
		'no-extra-boolean-cast': [
			'error',
			{
				enforceForLogicalOperands: false,
			},
		],
		'no-extra-label': 'error',
		'no-extra-semi': 'error',
		'no-floating-decimal': 'error',
		'no-global-assign': [
			'error',
			{
				exceptions: [],
			},
		],
		'no-implicit-coercion': [
			'error',
			{
				boolean: false,
				number: true,
				string: true,
				disallowTemplateShorthand: false,
				allow: [],
			},
		],
		'no-implicit-globals': [
			'off',
			{
				lexicalBindings: false,
			},
		],
		'no-implied-eval': 'error',
		'no-inline-comments': [
			'off',
			{
				ignorePattern: '',
			},
		],
		'no-invalid-this': [
			'off',
			{
				capIsConstructor: true,
			},
		],
		'no-iterator': 'error',
		'no-label-var': 'error',
		'no-labels': [
			'error',
			{
				allowLoop: false,
				allowSwitch: false,
			},
		],
		'no-lone-blocks': 'error',
		'no-lonely-if': 'error',
		'no-loop-func': 'error',
		'no-magic-numbers': [
			'off',
			{
				ignore: [],
				ignoreArrayIndexes: true,
				ignoreDefaultValues: true,
				enforceConst: true,
				detectObjects: false,
			},
		],
		'no-mixed-operators': [
			'error',
			{
				groups: [
					['%', '**'],
					['%', '+'],
					['%', '-'],
					['%', '*'],
					['%', '/'],
					['/', '*'],
					['&', '|', '<<', '>>', '>>>'],
					['==', '!=', '===', '!=='],
					['&&', '||'],
				],
				allowSamePrecedence: false,
			},
		],
		'no-multi-assign': [
			'error',
			{
				ignoreNonDeclaration: false,
			},
		],
		'no-multi-str': 'error',
		'no-negated-condition': 'off',
		'no-nested-ternary': 'error',
		'no-new': 'error',
		'no-new-func': 'error',
		'no-new-object': 'error',
		'no-new-wrappers': 'error',
		'no-nonoctal-decimal-escape': 'error',
		'no-octal': 'error',
		'no-octal-escape': 'error',
		'no-param-reassign': [
			'error',
			{
				props: true,
				ignorePropertyModificationsFor: [
					'acc',
					'accumulator',
					'e',
					'ctx',
					'context',
					'req',
					'request',
					'res',
					'response',
					'$scope',
					'staticContext',
				],
				ignorePropertyModificationsForRegex: [],
			},
		],
		'no-plusplus': [
			'error',
			{
				allowForLoopAfterthoughts: true,
			},
		],
		'no-proto': 'error',
		'no-redeclare': [
			'error',
			{
				builtinGlobals: true,
			},
		],
		'no-regex-spaces': 'error',
		'no-restricted-exports': [
			'error',
			{
				restrictedNamedExports: ['default', 'then'],
			},
		],
		'no-restricted-globals': [
			'error',
			{
				name: 'isFinite',
				message: 'Use Number.isFinite instead.',
			},
			{
				name: 'isNaN',
				message: 'Use Number.isNaN instead.',
			},
			'addEventListener',
			'blur',
			'close',
			'closed',
			'confirm',
			'defaultStatus',
			'defaultstatus',
			'event',
			'external',
			'find',
			'focus',
			'frameElement',
			'frames',
			'history',
			'innerHeight',
			'innerWidth',
			'length',
			'location',
			'locationbar',
			'menubar',
			'moveBy',
			'moveTo',
			'name',
			'onblur',
			'onerror',
			'onfocus',
			'onload',
			'onresize',
			'onunload',
			'open',
			'opener',
			'opera',
			'outerHeight',
			'outerWidth',
			'pageXOffset',
			'pageYOffset',
			'parent',
			'print',
			'removeEventListener',
			'resizeBy',
			'resizeTo',
			'screen',
			'screenLeft',
			'screenTop',
			'screenX',
			'screenY',
			'scroll',
			'scrollbars',
			'scrollBy',
			'scrollTo',
			'scrollX',
			'scrollY',
			'self',
			'status',
			'statusbar',
			'stop',
			'toolbar',
			'top',
		],
		'no-restricted-imports': [
			'off',
			{
				paths: [],
				patterns: [],
			},
		],
		'no-restricted-properties': [
			'error',
			{
				object: 'arguments',
				property: 'callee',
				message: 'arguments.callee is deprecated',
			},
			{
				object: 'global',
				property: 'isFinite',
				message: 'Please use Number.isFinite instead',
			},
			{
				object: 'self',
				property: 'isFinite',
				message: 'Please use Number.isFinite instead',
			},
			{
				object: 'window',
				property: 'isFinite',
				message: 'Please use Number.isFinite instead',
			},
			{
				object: 'global',
				property: 'isNaN',
				message: 'Please use Number.isNaN instead',
			},
			{
				object: 'self',
				property: 'isNaN',
				message: 'Please use Number.isNaN instead',
			},
			{
				object: 'window',
				property: 'isNaN',
				message: 'Please use Number.isNaN instead',
			},
			{
				property: '__defineGetter__',
				message: 'Please use Object.defineProperty instead.',
			},
			{
				property: '__defineSetter__',
				message: 'Please use Object.defineProperty instead.',
			},
			{
				object: 'Math',
				property: 'pow',
				message: 'Use the exponentiation operator (**) instead.',
			},
		],
		'no-restricted-syntax': [
			'error',
			{
				selector: 'ForInStatement',
				message:
					'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
			},
			{
				selector: 'ForOfStatement',
				message:
					'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
			},
			{
				selector: 'LabeledStatement',
				message:
					'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
			},
			{
				selector: 'WithStatement',
				message:
					'`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
			},
		],
		'no-return-assign': ['error', 'always'],
		'no-return-await': 'error',
		'no-script-url': 'error',
		'no-sequences': [
			'error',
			{
				allowInParentheses: true,
			},
		],
		'no-shadow': [
			'error',
			{
				builtinGlobals: false,
				hoist: 'functions',
				allow: [],
				ignoreOnInitialization: false,
			},
		],
		'no-shadow-restricted-names': 'error',
		'no-ternary': 'off',
		'no-throw-literal': 'error',
		'no-undef-init': 'error',
		'no-undefined': 'error',
		'no-underscore-dangle': [
			'error',
			{
				allow: [],
				allowAfterThis: false,
				allowAfterSuper: false,
				allowAfterThisConstructor: false,
				enforceInMethodNames: true,
				enforceInClassFields: false,
				allowFunctionParams: false,
			},
		],
		'no-unneeded-ternary': [
			'error',
			{
				defaultAssignment: false,
			},
		],
		'no-unused-expressions': [
			'error',
			{
				allowShortCircuit: false,
				allowTernary: false,
				allowTaggedTemplates: false,
				enforceForJSX: false,
			},
		],
		'no-unused-labels': 'error',
		'no-useless-call': 'off',
		'no-useless-catch': 'error',
		'no-useless-computed-key': [
			'error',
			{
				enforceForClassMembers: false,
			},
		],
		'no-useless-concat': 'error',
		'no-useless-constructor': 'error',
		'no-useless-escape': 'error',
		'no-useless-rename': [
			'error',
			{
				ignoreImport: false,
				ignoreExport: false,
				ignoreDestructuring: false,
			},
		],
		'no-useless-return': 'error',
		'no-var': 'error',
		'no-void': [
			'error',
			{
				allowAsStatement: false,
			},
		],
		'no-warning-comments': [
			'off',
			{
				terms: ['todo', 'fixme', 'xxx'],
				location: 'start',
			},
		],
		'no-with': 'error',
		'object-shorthand': [
			'error',
			'always',
			{
				avoidQuotes: true,
				ignoreConstructors: false,
				methodsIgnorePattern: '',
				avoidExplicitReturnArrows: false,
			},
		],
		'one-var': [
			'error',
			{
				var: 'never',
				let: 'never',
				const: 'never',
				separateRequires: true,
			},
		],
		'one-var-declaration-per-line': ['error', 'always'],
		'operator-assignment': ['error', 'always'],
		'prefer-arrow-callback': [
			'error',
			{
				allowNamedFunctions: false,
				allowUnboundThis: true,
			},
		],
		'prefer-const': [
			'error',
			{
				destructuring: 'any',
				ignoreReadBeforeAssign: true,
			},
		],
		'prefer-destructuring': [
			'error',
			{
				VariableDeclarator: {
					array: false,
					object: true,
				},
				AssignmentExpression: {
					array: true,
					object: false,
				},
			},
			{
				enforceForRenamedProperties: false,
			},
		],
		'prefer-exponentiation-operator': 'error',
		'prefer-named-capture-group': 'off',
		'prefer-numeric-literals': 'error',
		'prefer-object-has-own': 'error',
		'prefer-object-spread': 'error',
		'prefer-promise-reject-errors': [
			'error',
			{
				allowEmptyReject: true,
			},
		],
		'prefer-regex-literals': [
			'error',
			{
				disallowRedundantWrapping: true,
			},
		],
		'prefer-rest-params': 'error',
		'prefer-spread': 'error',
		'prefer-template': 'error',
		'quote-props': [
			'error',
			'consistent-as-needed',
			{
				keywords: false,
				unnecessary: true,
				numbers: false,
			},
		],
		'radix': ['error', 'always'],
		'require-await': 'off',
		'require-unicode-regexp': 'off',
		'require-yield': 'error',
		'sort-imports': [
			'off',
			{
				ignoreCase: false,
				ignoreDeclarationSort: false,
				ignoreMemberSort: false,
				memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
				allowSeparatedGroups: false,
			},
		],
		'sort-keys': [
			'off',
			'asc',
			{
				caseSensitive: false,
				minKeys: 2,
				natural: true,
				allowLineSeparatedGroups: false,
			},
		],
		'sort-vars': [
			'off',
			{
				ignoreCase: true,
			},
		],
		'spaced-comment': [
			'error',
			'always',
			{
				line: {
					exceptions: ['-', '+'],
					markers: ['=', '!', '/'],
				},
				block: {
					exceptions: ['-', '+'],
					markers: ['=', '!', ':', '::'],
					balanced: true,
				},
			},
		],
		'strict': ['error', 'never'],
		'symbol-description': 'error',
		'vars-on-top': 'error',
		'yoda': [
			'error',
			'never',
			{
				exceptRange: false,
				onlyEquality: false,
			},
		],
	},
};
