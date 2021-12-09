const { logger } = require('../utils');

class DummyService2 {
  constructor() {
    logger('DummyService2 created');
  }

  async dummy() {
    return new Promise((resolve) =>
      setTimeout(
        () => resolve({ func: 'dummy2', field1: 'value1', field2: 'value2' }),
        2000,
      ),
    );
  }
}

module.exports = new DummyService2();
