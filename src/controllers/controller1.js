const DummyService1 = require('../services/dummy-service-1');
const DummyService2 = require('../services/dummy-service-2');

const { logger } = require('../utils');

class Controller1 {
  constructor() {
    logger('Controller1 created');
  }

  async useDummyService1(req, res) {
    logger('Serving dummy1 from controller 1');
    const data = await DummyService1.dummy();
    res.status(200).json(data);
  }

  async useDummyService2(req, res) {
    logger('Serving dummy2 from controller 1');
    const data = await DummyService2.dummy();
    res.status(200).json(data);
  }
}

module.exports = new Controller1();
