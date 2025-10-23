import js from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import sveltePlugin from 'eslint-plugin-svelte';
import svelteParser from 'svelte-eslint-parser';

export default [
	// Global ignores
	{
		ignores: [
			'**/node_modules/**',
			'**/.svelte-kit/**',
			'**/build/**',
			'**/dist/**',
			'**/.pnpm-store/**',
			'**/package/**',
			'**/.env*',
			'**/pnpm-lock.yaml',
			'**/package-lock.json',
			'**/yarn.lock'
		]
	},

	// Config files (no type checking)
	{
		files: ['*.config.js', '*.config.ts', 'vite.config.*', 'svelte.config.*'],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				ecmaVersion: 2022,
				sourceType: 'module'
			},
			globals: {
				console: 'readonly',
				process: 'readonly',
				__dirname: 'readonly',
				__filename: 'readonly',
				exports: 'writable',
				module: 'writable',
				require: 'readonly',
				globalThis: 'readonly'
			}
		},
		plugins: {
			'@typescript-eslint': tsPlugin
		},
		rules: {
			...js.configs.recommended.rules,
			'@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
			'@typescript-eslint/no-explicit-any': 'warn',
			'no-console': 'off'
		}
	},

	// Base JavaScript/TypeScript configuration
	{
		files: ['src/**/*.js', 'src/**/*.ts'],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				ecmaVersion: 2022,
				sourceType: 'module',
				project: './tsconfig.json',
				extraFileExtensions: ['.svelte']
			},
			globals: {
				console: 'readonly',
				process: 'readonly',
				__dirname: 'readonly',
				__filename: 'readonly',
				exports: 'writable',
				module: 'writable',
				require: 'readonly',
				globalThis: 'readonly',
				window: 'readonly',
				document: 'readonly',
				navigator: 'readonly',
				location: 'readonly',
				localStorage: 'readonly',
				sessionStorage: 'readonly',
				fetch: 'readonly',
				setTimeout: 'readonly',
				setInterval: 'readonly',
				clearTimeout: 'readonly',
				clearInterval: 'readonly'
			}
		},
		plugins: {
			'@typescript-eslint': tsPlugin
		},
		rules: {
			...js.configs.recommended.rules,
			...tsPlugin.configs.recommended.rules,
			'@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
			'@typescript-eslint/no-explicit-any': 'warn',
			'no-console': 'off',
			'no-undef': 'off' // TypeScript handles this
		}
	},

	// Svelte files configuration
	{
		files: ['src/**/*.svelte'],
		languageOptions: {
			parser: svelteParser,
			parserOptions: {
				parser: tsParser,
				ecmaVersion: 2022,
				sourceType: 'module',
				project: './tsconfig.json',
				extraFileExtensions: ['.svelte']
			},
			globals: {
				console: 'readonly',
				window: 'readonly',
				document: 'readonly',
				navigator: 'readonly',
				location: 'readonly',
				localStorage: 'readonly',
				sessionStorage: 'readonly',
				fetch: 'readonly',
				setTimeout: 'readonly',
				setInterval: 'readonly',
				clearTimeout: 'readonly',
				clearInterval: 'readonly'
			}
		},
		plugins: {
			svelte: sveltePlugin,
			'@typescript-eslint': tsPlugin
		},
		rules: {
			...sveltePlugin.configs.recommended.rules,
			...tsPlugin.configs.recommended.rules,
			'@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
			'@typescript-eslint/no-explicit-any': 'warn',
			'svelte/no-unused-svelte-ignore': 'warn',
			'svelte/valid-compile': 'warn',
			'no-console': 'off',
			'no-undef': 'off' // TypeScript handles this
		}
	}
];

