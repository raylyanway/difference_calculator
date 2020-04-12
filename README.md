# Difference Calculator

<a href="https://codeclimate.com/github/raylyanway/project-lvl2-s353/maintainability"><img src="https://api.codeclimate.com/v1/badges/1d6d683da082f45b1392/maintainability" /></a>
[![Build Status](https://travis-ci.org/raylyanway/difference_calculator.svg?branch=master)](https://travis-ci.org/raylyanway/difference_calculator)

Console utility to find differences in configuration files.

## install

`npm install -g raylyanway_difference_calculator`

## list of commands:

- help output: `gendiff -h`
- flat file comparison (JSON): `gendiff before.json after.json`
- flat file comparison (YAML): `gendiff before.yml after.yml`
- flat file comparison (INI): `gendiff before.ini after.ini`
- recursive comparison (JSON, YAML, INI): `gendiff beforeNested.json afterNested.json`
- output with Plain format: `gendiff --format plain before.json after.json`
- output with Json format: `gendiff --format json before.json after.json`
