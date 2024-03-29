const axios = require('axios');
const path = require('path');
const { spawnSync } = require('child_process');

/**
 * Run python script, pass in `-u` to not buffer console output
 * @return {ChildProcess}
 */

const textToSummary = require('../../utils/mock-text-summary');

module.exports = {
	createSummary: (args, req) => {
		const { text } = args.summaryInput;
		try {
			if (!req.isAuth) {
				throw new Error('Unauthenticated!');
			}
			const size = 0.95;
			// function runScript() {
			// 	return spawnSync('python', [
			// 		'-u',
			// 		path.join(__dirname, '../../ML/Summary/script.py'),
			// 		'__main__',
			// 		decodeURI(text),
			// 		size,
			// 	]);
			// }
			// const subprocess = runScript();
			// const result = subprocess.output[1].toString();
			return { text: encodeURI(text), summary: encodeURI(result) };
		} catch (err) {
			console.log(err);
			throw err;
		}
	},
};
