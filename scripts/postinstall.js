const fs = require('fs');
const path = require('path');

const configPath = path.join(process.env.INIT_CWD, '.eslintrc');
const ignorePath = path.join(process.env.INIT_CWD, '.eslintignore');

if (!fs.existsSync(configPath)) {
	fs.writeFileSync(
		configPath,
		'{\n\t"extends": [\n\t\t"@meteozdemir/eslint-config-core",\n\t\t"@meteozdemir/eslint-config-core/rules/prettier"\n\t],\n\t"rules": {}\n}\n',
	);
}

if (!fs.existsSync(ignorePath)) {
	fs.writeFileSync(ignorePath, 'node_modules\n');
}
