var fs = require('fs');
var path = require('path');

var args = process.argv.slice(2);
var inputPath = args[0];
var outputPath = args[1];

var input = JSON.parse(fs.readFileSync(inputPath, 'utf-8'));
var output = {
	// identification
	name: input.name,
	version: process.env['GIT_TAG'],

	// discovery
	author: input.author,
	bugs: input.bugs,
	contributors: input.contributors,
	description: input.description,
	homepage: input.homepage,
	keywords: input.keywords,
	license: input.license,
	repository: input.repository,

	// dependencies
	dependencies: input.dependencies,
	peerDependencies: input.peerDependencies,

	// environment
	cpu: input.cpu,
	os: input.os,

	// entry points
	bin: input.bin,
	main: input.main,
	man: input.man,

	// contents
	files: ["**/*.js", "**/*.d.ts"],
};
fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));
