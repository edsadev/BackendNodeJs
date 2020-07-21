const log = new console.Console({
  stdout: process.stdout,
  strerr: process.strerr
});

const emojis = {
  log: "\u001b[37m ☺",
  danger: "\u001b[31m ☠",
  info: "\u001b[34m ℹ",
  warning: "\u001b[33m ⚠",
  love: "\u001b[35m ❤"
};

console.Console.prototype.logger = function(text) {
  this.log(`${emojis.log} ${text}`);
};

console.Console.prototype.warning = function(text) {
  this.warn(`${emojis.warning} ${text}`);
};

console.Console.prototype.information = function(text) {
  this.info(`${emojis.info} ${text}`);
};

console.Console.prototype.danger = function(text) {
  this.error(`${emojis.danger} ${text}`);
};

console.Console.prototype.love = function() {
  this.error(`${emojis.love} This was made with love for you`);
};

log.logger("This is a normal log");
log.information("This is a info log");
log.warning("This is a warning log you should read it");
log.danger("This is a error log, You are in fire");
log.love();