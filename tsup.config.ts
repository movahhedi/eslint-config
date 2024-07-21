import { defineConfig } from "tsup";

export default defineConfig({
	entry: [
		"src/index.ts",
		"src/prettier.ts",
		"src/stylelint.ts",
	],
	shims: true,
});
