'use strict';
var fs, _;

_ = require('lodash');

fs = require('fs');

exports.get = function(path) {
  var buf, line, md, obj, _i, _len, _ref;
  if (path == null) {
    path = (function() {
      switch (process.platform) {
        case 'win32':
          return 'C:/Windows/System32/drivers/etc/hosts';
        default:
          return '/etc/hosts';
      }
    })();
  }
  buf = '' + fs.readFileSync(path);
  obj = {};
  _ref = buf.replace(/#.*/g, '').split(/[\r\n]/);
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    line = _ref[_i];
    md = /(\d+\.\d+\.\d+\.\d+)\s+(.+)/.exec(line);
    if (md) {
      obj[md[1]] = _.union(obj[md[1]] || [], md[2].trim().split(/\s+/));
    }
  }
  return obj;
};

//# sourceMappingURL=main.js.map
