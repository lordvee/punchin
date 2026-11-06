'use strict';

module.exports = (prefix, pkgJSON) => {
  return Object.keys(pkgJSON.dependencies)
    .filter(d => (d.startsWith(prefix) || d.startsWith(`@punch-in/${prefix}`) ) && d.length > prefix.length)
    .map(pkgName => pkgName.replace(/@punch-in\//, '').substring(prefix.length + 1));
};
