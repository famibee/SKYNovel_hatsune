"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const hPlg = {};
const h = require('./plugin').default;
for (const nm in h) hPlg[nm] = require(`./plugin/${nm}`);

const {app} = require('skynovel/app');
app(hPlg);
