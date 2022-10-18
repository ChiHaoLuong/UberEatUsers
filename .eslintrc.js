module.exports = {
	root: true,
	extends: ['@react-native-community', 'prettier'],
	parser: '@typescript-eslint/parser',
	overrides: [
		{
			files: ['src/**/*.{ts,tsx}'],
			rules: {
				'@typescript-eslint/no-shadow': ['error'],
				'no-shadow': 'off',
				'no-undef': 'off',
				'prettier/prettier': 'error',
			},
			plugins: ['@typescript-eslint', 'prettier/@typescript-eslint'],
			parserOptions: {
				tsconfigRootDir: './',
				project: './tsconfig.json',
			},
		},
	],
}
