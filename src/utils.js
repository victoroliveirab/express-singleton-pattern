const formatter = new Intl.DateTimeFormat('pt-BR', {
  hour12: false,
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  fractionalSecondsDigits: 3,
});

const logger = (content = '') => {
  const date = new Date();
  const millis = date.getMilliseconds().toString().padStart(3, '0');

  console.log(`[${formatter.format(date)}:${millis}] ${content}`);
};

module.exports = {
  logger,
};
