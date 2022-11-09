const fs = require('fs');
const path = require('path');

const configPath = path.join(process.env.INIT_CWD, '.eslintrc.js');
const ignorePath = path.join(process.env.INIT_CWD, '.eslintignore');

if (!fs.existsSync(configPath)) {
	fs.writeFileSync(
		configPath,
		"module.exports = {\n\textends: ['@meteozdemir/eslint-config-core', '@meteozdemir/eslint-config-core/rules/prettier'],\n\trules: {},\n};\n",
	);
}

if (!fs.existsSync(ignorePath)) {
	fs.writeFileSync(ignorePath, 'node_modules\n');
}
