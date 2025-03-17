import { defineConfig } from "prettier-define-config";

// eslint-disable-next-line @typescript-eslint/naming-convention
export function prettierConfig(options: Parameters<typeof defineConfig>[0]) {
	return defineConfig({
		trailingComma: "all",
		useTabs: true,
		tabWidth: 4,
		semi: true,
		printWidth: 105,
		singleQuote: false,
		singleAttributePerLine: false,
		jsxSingleQuote: false,
		bracketSpacing: true,
		bracketSameLine: false,
		endOfLine: "crlf",
		htmlWhitespaceSensitivity: "strict",

		...options,
	});
}
