install:
	npm install

gendiff:
	npx babel-node -- src/bin/gendiff.js -h

publish:
	npm publish

lint:
	npx eslint .
