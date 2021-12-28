#!/usr/bin/env node

/**
 * Module dependencies.
 */

var bin = require('../app');
var httpTools = require('../lib/httpTools');
/**
 * Get port from environment and store in Express.
*/
httpTools.start(bin);
