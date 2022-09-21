String.prototype.camelCase = function () {
  let str = this.split(' ');

  str = str.map((word) => word.charAt(0).toUpperCase() + word.slice(1));

  return str.join('');
};
