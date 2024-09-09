import { defineConfig } from "tsup";

export default defineConfig({
	entry: [
		"src/eslint.ts",
		"src/prettier.ts",
		"src/stylelint.ts",
	],
	shims: true,
});
