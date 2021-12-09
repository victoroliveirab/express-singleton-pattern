const { logger } = require('../utils');

class DummyService1 {
  constructor() {
    logger('DummyService1 created');
  }

  async dummy() {
    return new Promise((resolve) =>
      setTimeout(
        () => resolve({ func: 'dummy1', field1: 'value1', field2: 'value2' }),
        2000,
      ),
    );
  }
}

module.exports = new DummyService1();
