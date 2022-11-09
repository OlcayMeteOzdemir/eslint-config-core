module.exports = {
	rules: {
		'array-callback-return': [
			'error',
			{
				allowImplicit: true,
				checkForEach: false,
			},
		],
		'constructor-super': 'error',
		'for-direction': 'error',
		'getter-return': [
			'error',
			{
				allowImplicit: true,
			},
		],
		'no-async-promise-executor': 'error',
		'no-await-in-loop': 'error',
		'no-class-assign': 'error',
		'no-compare-neg-zero': 'error',
		'no-cond-assign': ['error', 'always'],
		'no-const-assign': 'error',
		'no-constant-binary-expression': 'error',
		'no-constant-condition': [
			'warn',
			{
				checkLoops: true,
			},
		],
		'no-constructor-return': 'error',
		'no-control-regex': 'error',
		'no-debugger': 'error',
		'no-dupe-args': 'error',
		'no-dupe-class-members': 'error',
		'no-dupe-else-if': 'error',
		'no-dupe-keys': 'error',
		'no-duplicate-case': 'error',
		'no-duplicate-imports': [
			'off',
			{
				includeExports: true,
			},
		],
		'no-empty-character-class': 'error',
		'no-empty-pattern': 'error',
		'no-ex-assign': 'error',
		'no-fallthrough': [
			'error',
			{
				commentPattern: '',
			},
		],
		'no-func-assign': 'error',
		'no-import-assign': 'error',
		'no-inner-declarations': ['error', 'functions'],
		'no-invalid-regexp': [
			'error',
			{
				allowConstructorFlags: [],
			},
		],
		'no-irregular-whitespace': [
			'error',
			{
				skipStrings: false,
				skipComments: false,
				skipRegExps: false,
				skipTemplates: false,
			},
		],
		'no-loss-of-precision': 'error',
		'no-misleading-character-class': 'error',
		'no-new-native-nonconstructor': 'error',
		'no-new-symbol': 'error',
		'no-obj-calls': 'error',
		'no-promise-executor-return': 'error',
		'no-prototype-builtins': 'error',
		'no-self-assign': [
			'error',
			{
				props: true,
			},
		],
		'no-self-compare': 'error',
		'no-setter-return': 'error',
		'no-sparse-arrays': 'error',
		'no-template-curly-in-string': 'error',
		'no-this-before-super': 'error',
		'no-undef': [
			'error',
			{
				typeof: true,
			},
		],
		'no-unexpected-multiline': 'error',
		'no-unmodified-loop-condition': 'error',
		'no-unreachable': 'error',
		'no-unreachable-loop': [
			'error',
			{
				ignore: [],
			},
		],
		'no-unsafe-finally': 'error',
		'no-unsafe-negation': [
			'error',
			{
				enforceForOrderingRelations: true,
			},
		],
		'no-unsafe-optional-chaining': [
			'error',
			{
				disallowArithmeticOperators: true,
			},
		],
		'no-unused-private-class-members': 'error',
		'no-unused-vars': [
			'error',
			{
				vars: 'all',
				varsIgnorePattern: '',
				args: 'after-used',
				argsIgnorePattern: '',
				ignoreRestSiblings: false,
				destructuredArrayIgnorePattern: '',
				caughtErrors: 'none',
				caughtErrorsIgnorePattern: '',
			},
		],
		'no-use-before-define': [
			'error',
			{
				functions: true,
				classes: true,
				variables: true,
				allowNamedExports: false,
			},
		],
		'no-useless-backreference': 'error',
		'require-atomic-updates': [
			'off',
			{
				allowProperties: false,
			},
		],
		'use-isnan': [
			'error',
			{
				enforceForSwitchCase: true,
				enforceForIndexOf: true,
			},
		],
		'valid-typeof': [
			'error',
			{
				requireStringLiterals: true,
			},
		],
	},
};
