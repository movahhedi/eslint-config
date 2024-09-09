import { defineConfig } from "prettier-define-config";

export function prettierConfig(options: Parameters<typeof defineConfig>[0]) {
	return defineConfig({
		trailingComma: "all",
		useTabs: true,
		tabWidth: 4,
		semi: true,
		printWidth: 90,
		singleQuote: false,
		singleAttributePerLine: false,
		jsxSingleQuote: false,
		bracketSpacing: true,
		bracketSameLine: false,
		endOfLine: "crlf",
		htmlWhitespaceSensitivity: "strict",

		...options,
	})
}
