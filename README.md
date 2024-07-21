# @movahhedi/eslint-config

## Install

If you prefer to set up manually:

```bash
pnpm i -D eslint @movahhedi/eslint-config
```

And create `eslint.config.mjs` in your project root:

```js
// eslint.config.mjs
import movahhediConfig from "@movahhedi/eslint-config";

export default movahhediConfig();
```

Or if you want to add your own rules:

```js
// eslint.config.mjs
import movahhediConfig from "@movahhedi/eslint-config";

export default [
	...movahhediConfig(),
	{
		rules: {
			// your rules
		},
	},
];
```
