/********************************/
import logger from './logger.js';
logger('Log: Export default', 'log');

/********************************/

import {
    TYPE_LOG,
    TYPE_WARN,
    TYPE_ERROR
} from './constants.js';

logger('Log: Export destructuring', TYPE_LOG);
logger('Log: Export destructuring', TYPE_WARN);
logger('Log: Export destructuring', TYPE_ERROR);

/********************************/

import * as constants from './constants.js';

logger('Log: Export with as', constants.TYPE_LOG);
logger('Log: Export with as', constants.TYPE_WARN);
logger('Log: Export with as', constants.TYPE_ERROR);

/********************************/


import logger2 from './logger/index.js';
logger2('Log: Export through "Logger/index.js"',TYPE_WARN)

/********************************/

import logger3 from './logger/index.js';
logger3('Log: Export with as through "Logger/index.js"',TYPE_ERROR)

