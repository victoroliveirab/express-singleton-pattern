const { Router } = require('express');

const Controller1 = require('../controllers/controller1');
const Controller2 = require('../controllers/controller2');

const { logger } = require('../utils');

logger('Running routes/index.js');

const router = new Router();

router.get('/controller1/dummy1', Controller1.useDummyService1);
router.get('/controller1/dummy2', Controller1.useDummyService2);
router.get('/controller2/dummy1', Controller2.useDummyService1);
router.get('/controller2/dummy2', Controller2.useDummyService2);

module.exports = router;
