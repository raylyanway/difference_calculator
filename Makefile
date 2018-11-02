install:
	npm install

help:
	npx babel-node -- src/bin/gendiff.js -h

json:
	npx babel-node -- src/bin/gendiff.js ./__test__/__fixtures__/before.json ./__test__/__fixtures__/after.json

yaml:
	npx babel-node -- src/bin/gendiff.js ./__test__/__fixtures__/before.yaml ./__test__/__fixtures__/after.yaml

publish:
	npm publish

lint:
	npx eslint .

test:
	npm test
