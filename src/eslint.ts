/* eslint-disable max-lines */
// cspell:ignore chunkname lestin endregion camelcase

import EslintJs from "@eslint/js";
import { type Linter } from "eslint";
// import { typescriptEslintParser } from "@typescript-eslint/parser";
// import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";
// import jsoncPlugin from "eslint-plugin-jsonc";
import PackageJson from "eslint-plugin-package-json";
// import importPlugin from "eslint-plugin-import";
import Perfectionist from "eslint-plugin-perfectionist";
import PrettierPluginRecommended from "eslint-plugin-prettier/recommended";
import ReactPlugin from "eslint-plugin-react";
import UnusedImports from "eslint-plugin-unused-imports";
import { defineConfig } from "eslint/config";
// import redosPlugin from "eslint-plugin-redos";
import Globals from "globals";
import TsEslint from "typescript-eslint";

const longParentPath =
	"{#,%,.," + Array.from({ length: 10 }, (a, i) => "../".repeat(i + 1).slice(0, -1)).join(",") + "}";

type IRulesRecord = Linter.Config["rules"];

//#region import plugin rules
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const importPluginRules: IRulesRecord = {
	"sort-imports": [
		"off",
		{
			ignoreCase: true,
			ignoreDeclarationSort: false,
			ignoreMemberSort: false,
			memberSyntaxSortOrder: ["none", "all", "single", "multiple"],
			allowSeparatedGroups: false,
		},
	],
	// "import/default": "error",
	"import/dynamic-import-chunkname": ["off"],
	"import/export": "error",
	"import/exports-last": "off",
	"import/extensions": [
		"off",
		"ignorePackages",
		{
			js: "never",
			mjs: "never",
			jsx: "never",
		},
	],
	"import/first": "error",
	"import/group-exports": "off",
	"import/max-dependencies": ["off", { max: 10 }],
	"import/named": "error",
	"import/namespace": "off",
	// "import/newline-after-import": "error",
	"import/no-absolute-path": "error",
	// "import/no-amd": "error",
	"import/no-anonymous-default-export": "off",
	"import/no-commonjs": "off",
	"import/no-cycle": "error",
	"import/no-default-export": "off",
	"import/no-deprecated": "off",
	"import/no-duplicates": "error",
	"import/no-dynamic-require": "error",
	"import/no-extraneous-dependencies": "off",
	"import/no-internal-modules": "off",
	"import/no-mutable-exports": "off",
	"import/no-named-as-default": "off",
	// "import/no-named-as-default-member": "error",
	"import/no-named-default": "error",
	"import/no-named-export": "off",
	"import/no-namespace": "off",
	"import/no-nodejs-modules": "off",
	"import/no-relative-parent-imports": "off",
	"import/no-restricted-paths": "off",
	"import/no-self-import": "error",
	"import/no-unassigned-import": "off",
	"import/no-unresolved": ["off", { commonjs: true, caseSensitive: true }],
	"import/no-unused-modules": "off",
	"import/no-useless-path-segments": "error",
	"import/no-webpack-loader-syntax": "error",
	"import/order": [
		"off",
		{
			groups: ["builtin", "external", "internal", "parent", "index", "sibling", "unknown"],
			pathGroups: [
				{
					pattern: "lestin",
					group: "external",
					position: "before",
				},
				{
					pattern: `${longParentPath}/Basics/**`,
					group: "parent",
					position: "before",
				},
				{
					pattern: `${longParentPath}/Auth/**`,
					group: "parent",
					position: "before",
				},
				{
					pattern: `${longParentPath}/Account/**`,
					group: "parent",
					position: "before",
				},
				{
					pattern: `${longParentPath}/Tables/**`,
					group: "parent",
					position: "before",
				},
				{
					pattern: `${longParentPath}/Models/**`,
					group: "parent",
					position: "before",
				},
				{
					pattern: `${longParentPath}/Components/**`,
					group: "parent",
					position: "before",
				},
				{
					pattern: `${longParentPath}/Utilities/**`,
					group: "parent",
					position: "before",
				},
				{
					pattern: `${longParentPath}/Entities/**`,
					group: "parent",
					position: "before",
				},
				{
					pattern: `@/**`,
					group: "unknown",
					position: "before",
				},
				{
					pattern: `${longParentPath}/shared/**`,
					group: "unknown",
					position: "before",
				},
				{
					pattern: `${longParentPath}/images/**`,
					patternOptions: { partial: true },
					group: "unknown",
					position: "before",
				},
				{
					pattern: `${longParentPath}/styles/**/*.{css,scss}`,
					patternOptions: { partial: true },
					group: "unknown",
					position: "before",
				},
			],
			alphabetize: {
				order: "asc",
				caseInsensitive: true,
			},
			warnOnUnassignedImports: true,
			"newlines-between": "always",
			distinctGroup: false,
		},
	],
	"import/prefer-default-export": "off",
	"import/unambiguous": "off",
};
//#endregion

//#region main rules
const rules: IRulesRecord = {
	// "redos/no-vulnerable": "error",

	"perfectionist/sort-named-imports": [
		"warn",
		{
			type: "natural",
			groupKind: "values-first",
			ignoreCase: true,
			ignoreAlias: true,
		},
	],
	"perfectionist/sort-exports": [
		"warn",
		{
			type: "natural",
			ignoreCase: true,
		},
	],
	"perfectionist/sort-imports": [
		"warn",
		{
			type: "natural",
			ignoreCase: true,
			newlinesBetween: "always",
			groups: [
				["builtin", "builtin-type"],
				["external", "external-type"],
				["internal", "internal-type"],
				["parent", "parent-type"],
				["index", "index-type"],
				["sibling", "sibling-type"],
				"style",
				"side-effect-style",
				"side-effect",
				"object",
				"unknown",
			],
		},
	],
	"perfectionist/sort-jsx-props": [
		"warn",
		{
			type: "natural",
			ignoreCase: true,
			groups: [
				"name",
				"id",
				"class",
				"type",
				"label",
				"componentText",
				"placeholder",
				"checked",
				"changedChecked",
				"value",
				"changedValue",
				"src",
				"direction",
				"disabled",
				"hidden",
				"language",
				"ref",
				"assign",
				"maxLength",
				"event",
				"width",
				"height",
				"style",
				"unknown",
				"shorthand",
			],
			customGroups: {
				name: "^name$",
				id: "^id$",
				class: "^class(Name)?$",
				type: "^(input)?[tT]ype?$",
				label: "^label$",
				componentText: "^(checkboxText|radioText|text|message)$",
				placeholder: "^placeholder$",
				checked: "^checked$",
				changedChecked: "^changedChecked$",
				value: "^value$",
				changedValue: "^changedValue$",
				src: "^src$",
				disabled: "^disabled$",
				hidden: "^hidden$",
				direction: ["^direction$", "^dir$"],
				language: "^language$",
				ref: "^ref$",
				assign: "^assign$",
				event: "^on.+",
				maxLength: "^maxLength$",
				width: "^width$",
				height: "^height$",
				style: "^style$",
			},
		},
	],
	"perfectionist/sort-object-types": [
		"warn",
		{
			type: "natural",
			ignoreCase: true,
		},
	],
	"perfectionist/sort-interfaces": [
		"warn",
		{
			type: "natural",
			ignoreCase: true,
			groupKind: "required-first",
			partitionByNewLine: true,
			groups: ["id", "unknown"],
			customGroups: {
				id: "id",
			},
		},
	],
	/* "perfectionist/sort-objects": [
		"warn",
		{
			type: "natural",
			ignoreCase: true,
			partitionByNewLine: true,
			partitionByComment: true,
		},
	], */
	"perfectionist/sort-named-exports": [
		"warn",
		{
			type: "natural",
			ignoreCase: true,
			groupKind: "values-first",
		},
	],

	camelcase: ["off", { ignoreImports: true }],
	"no-mixed-operators": "warn",
	"no-mixed-spaces-and-tabs": "off",
	"no-inner-declarations": "off",
	"prefer-arrow-callback": ["warn"],
	semi: ["warn", "always"],
	strict: 0,
	"no-unused-vars": ["off"],
	"no-undef": ["off"],
	"prettier/prettier": ["warn", { useTabs: true, tabWidth: 4 }],
	"no-tabs": ["off", { allowIndentationTabs: true }],
	quotes: ["warn", "double", { avoidEscape: true }],
	"prefer-const": [
		"warn",
		{
			destructuring: "all",
			ignoreReadBeforeAssign: true,
		},
	],
	"no-var": ["off"],
	"no-unreachable": ["warn"],
	"no-multi-spaces": [
		"warn",
		{
			exceptions: {
				// eslint-disable-next-line @typescript-eslint/naming-convention
				VariableDeclarator: true,
				// eslint-disable-next-line @typescript-eslint/naming-convention
				FunctionExpression: true,
			},
		},
	],
	"key-spacing": [0, { align: "value" }],
	"no-underscore-dangle": 0,
	"newline-per-chained-call": ["off", { ignoreChainWithDepth: 3 }],
	"max-lines": ["warn", 600],
	"max-depth": ["warn", 3],
	"max-params": ["warn", 3],
	"max-len": [
		"off",
		{
			code: 105,
			tabWidth: 4,
			ignoreComments: true,
			ignoreTrailingComments: true,
			ignoreUrls: true,
			ignoreStrings: true,
			ignoreTemplateLiterals: true,
			ignoreRegExpLiterals: true,
		},
	],
	indent: ["off", "tab"],
	"@typescript-eslint/indent": ["off", "tab"],
	"@typescript-eslint/ban-ts-comment": "off",
	"@typescript-eslint/no-inferrable-types": ["off"],
	"@typescript-eslint/no-empty-interface": ["warn", { allowSingleExtends: true }],
	"@typescript-eslint/no-explicit-any": ["off"],
	"@typescript-eslint/no-require-imports": [
		"warn",
		{
			allow: ["/package\\.json$"],
		},
	],
	"@typescript-eslint/no-empty-object-type": [
		"warn",
		{
			allowInterfaces: "with-single-extends",
			allowObjectTypes: "never",
		},
	],
	"no-unused-expressions": "off",
	"@typescript-eslint/no-unused-expressions": "off",
	"@typescript-eslint/no-unused-vars": [
		"warn",
		{
			args: "none",
			argsIgnorePattern: "^_",
			varsIgnorePattern: "^_",
			caughtErrorsIgnorePattern: "^_",
			destructuredArrayIgnorePattern: "^_",
		},
	],
	"@typescript-eslint/consistent-type-imports": [
		"warn",
		{
			prefer: "type-imports",
			disallowTypeAnnotations: true,
			fixStyle: "inline-type-imports",
		},
	],
	"@typescript-eslint/naming-convention": [
		"warn",
		{
			selector: "default",
			format: ["camelCase"],
			leadingUnderscore: "forbid",
			trailingUnderscore: "forbid",
		},
		{
			selector: "import",
			format: [],
			leadingUnderscore: "forbid",
			trailingUnderscore: "forbid",
			custom: {
				regex: "(^[xzv]?(?:_?[A-Z0-9][a-z0-9]*\\d*)*$)|(^_$)",
				match: true,
			},
		},
		{
			selector: "property",
			format: ["camelCase", "snake_case"],
			leadingUnderscore: "allow",
		},
		{
			selector: "property",
			modifiers: ["private"],
			format: ["camelCase", "snake_case"],
			leadingUnderscore: "require",
			trailingUnderscore: "allow",
		},
		{
			selector: "property",
			modifiers: ["requiresQuotes"],
			format: [],
		},
		{
			selector: "variable",
			format: [],
			custom: {
				regex: "^(_|([A-Z]?[a-z]+(?:_?[A-Z0-9][a-z0-9]*\\d*)*\\d*))$",
				match: true,
			},
		},
		/* {
				"selector": "variable",
				"types": ["function"],
				"format": [],
				"custom": {
					"regex": "^[A-Z]?[a-z0-9]+(?:_?[A-Z0-9][a-z0-9]*\\d*)*\\d*$",
					"match": true
				}
			}, */
		{
			selector: "variable",
			types: ["array", "boolean", "number", "string"],
			// "modifiers": ["const"],
			format: [],
			custom: {
				regex: "(^[a-z]+(?:_?[A-Z0-9][a-z0-9]*\\d*)*$)|(^_$)",
				match: true,
			},
		},
		{
			selector: "enumMember",
			format: [],
			custom: {
				regex: "^[A-Z][a-z]+(?:_?[A-Z0-9][a-z0-9]*\\d*)*$",
				match: true,
			},
		},
		{
			selector: "function",
			format: ["PascalCase"],
		},
		{
			selector: "method",
			format: ["camelCase", "PascalCase"],
			leadingUnderscore: "allow",
		},
		/* {
				"selector": "variable-Q",
				"modifiers": ["const"],
				"format": [],
				"custom": {
					"regex": "^_|([A-Z]?[a-z]+(?:_?[A-Z][a-z]*\\d*)*)$",
					"match": true
				}
			}, */
		{
			selector: "variable",
			types: ["boolean"],
			format: ["PascalCase"],
			prefix: ["is", "should", "has", "can", "did", "will", "go", "obeys", "needs"],
		},
		{
			selector: "typeParameter",
			format: ["PascalCase"],
			prefix: ["T"],
		},
		{
			selector: ["variable", "function"],
			format: ["camelCase"],
			leadingUnderscore: "allow",
		},
		{
			selector: "class",
			format: [],
			custom: {
				regex: "^[A-Z][a-z]+(?:_?[A-Z0-9][a-z0-9]+\\d*)*$",
				match: true,
			},
		},
		{
			selector: ["interface", "typeAlias"],
			format: [],
			prefix: ["I"],
			custom: {
				regex: "^[A-Z][a-z]+(?:_?[A-Z0-9][a-z0-9]+\\d*)*$",
				match: true,
			},
		},
		{
			selector: "typeLike",
			format: [],
			custom: {
				regex: "^[A-Z][a-z]+(?:_?[A-Z0-9][a-z0-9]+\\d*)*$",
				match: true,
			},
		},
	],
	"react/jsx-key": ["off"],
	"react/jsx-max-props-per-line": ["warn", { maximum: 4, when: "multiline" }],
	"react/prop-types": ["off"],
	"react/react-in-jsx-scope": ["off"],
	"react/no-unknown-property": [
		"error",
		{
			ignore: [
				"ref",
				"assign",
				"class",
				"innerHTML",
				"stroke-width",
				"stroke-linecap",
				"stroke-linejoin",
				"stroke-miterlimit",
				"stroke-opacity",
				"stroke-dasharray",
				"funcShow",
				"funcDismiss",
			],
		},
	],

	"unused-imports/no-unused-imports": "warn",
	"unused-imports/no-unused-vars": [
		"off",
		{
			vars: "all",
			varsIgnorePattern: "^_",
			args: "after-used",
			argsIgnorePattern: "^_",
		},
	],
};
//#endregion

//#region package.json rules
/* const packageJsonRules = {
	"jsonc/sort-keys": [
		"error",
		{
			pathPattern: "^$", // Hits the root properties
			order: [
				"name",
				"version",
				"private",
				"publishConfig",
			],
		},
		{
			// cspell: disable-next-line
			pathPattern: "^(?:dev|peer|optional|bundled)?[Dd]ependencies$",
			order: { type: "asc" },
		},
	],
}; */
//#endregion

//#region eslint config
interface IOptions {
	tsconfig?: string;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export function eslintConfig(options: IOptions) {
	return defineConfig([
		EslintJs.configs.recommended,
		...(TsEslint.configs.recommended as any),
		{
			files: [
				// "eslint.config.*",
				"**/node_modules",
				"**/vendor",
				"**/temp/**",
				"**/dist/**",
				"**/build/**",
			],

			rules: {
				"no-unused-vars": "off",
				"@typescript-eslint/no-unused-vars": "off",
				"no-undef": "off",
				"no-unused-expressions": "off",
				"no-var": "off",
				"no-tabs": "off",
				indent: "off",
			},
		},
		{
			files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
			ignores: [
				// "eslint.config.*",
				"**/node_modules",
				"**/vendor",
				"**/temp/**",
				"**/dist/**",
				"**/build/**",
			],
			settings: {
				// ecmascript: 6,
				react: {
					version: "999.999.999",
				},
			},
			languageOptions: {
				ecmaVersion: 2022,
				sourceType: "module",
				parser: TsEslint.parser,
				parserOptions: {
					parser: TsEslint.parser,
					project: options.tsconfig,
					ecmaFeatures: {
						jsx: true,
					},
				},
				globals: {
					...Globals.browser,
					...Globals.node,
				},
			},
			plugins: {
				// import: importPlugin,
				"@typescript-eslint": TsEslint.plugin,
				react: ReactPlugin,
				perfectionist: Perfectionist,
				"unused-imports": UnusedImports,
			},

			rules,
		},
		{
			files: ["**/*.cjs", "**/*.cts"],
			ignores: [
				// "eslint.config.*",
				"**/node_modules",
				"**/vendor",
				"**/temp/**",
				"**/dist/**",
				"**/build/**",
			],
			languageOptions: {
				ecmaVersion: 2022,
				sourceType: "commonjs",
				globals: {
					...Globals.node,
					...Globals.amd,
				},
			},
			plugins: {
				// import: importPlugin,
				"@typescript-eslint": TsEslint.plugin,
				react: ReactPlugin,
				perfectionist: Perfectionist,
				"unused-imports": UnusedImports,
			},

			rules: {
				...rules,

				"@typescript-eslint/no-require-imports": "off",
			},
		},
		{
			...PackageJson.configs.recommended,
			/* plugins: {
				jsonc: jsoncPlugin,
			}, */
			rules: {
				// ...packageJsonRules,
				...PackageJson.configs.recommended.rules,
				"package-json/order-properties": [
					"warn",
					{
						order: "sort-package-json",
					},
				],
				"package-json/sort-collections": [
					"error",
					[
						// "scripts",
						"dependencies",
						"devDependencies",
						"peerDependencies",
						// "config",
					],
				],
				"package-json/valid-package-def": "off",
			},
		},

		PrettierPluginRecommended,
		{
			rules: {
				"prettier/prettier": "warn",
			},
		},
	]);
}
//#endregion
