install:
	npm install

help:
	npx babel-node -- src/bin/gendiff.js -h

json:
	npx babel-node -- src/bin/gendiff.js ./__tests__/__fixtures__/before.json ./__tests__/__fixtures__/after.json

yaml:
	npx babel-node -- src/bin/gendiff.js ./__tests__/__fixtures__/before.yaml ./__tests__/__fixtures__/after.yaml

ini:
	npx babel-node -- src/bin/gendiff.js ./__tests__/__fixtures__/before.ini ./__tests__/__fixtures__/after.ini

jsonNested:
	npx babel-node -- src/bin/gendiff.js ./__tests__/__fixtures__/beforeNested.json ./__tests__/__fixtures__/afterNested.json

jsonNestedFormat:
	npx babel-node -- src/bin/gendiff.js --format plain ./__tests__/__fixtures__/beforeNested.json ./__tests__/__fixtures__/afterNested.json

jsonNestedFormatJson:
	npx babel-node -- src/bin/gendiff.js --format json ./__tests__/__fixtures__/beforeNested.json ./__tests__/__fixtures__/afterNested.json

publish:
	npm publish

lint:
	npx eslint .

test:
	npm test
