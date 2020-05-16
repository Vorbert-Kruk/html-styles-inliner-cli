#!/usr/bin/env node
const { getArgValue } = require('./args');
const { params } = require('./consts');

console.log(getArgValue(params.input), getArgValue(params.output));

// inline <ścieżka do html-a> <output html-a>
