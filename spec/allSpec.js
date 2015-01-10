var fs;

fs = require('fs');

describe('All tests', function() {
  it('Setup for all', function() {});
  it('Get content of the hosts file.', function() {
    var obj;
    obj = (require('../lib/main')).get('spec/hosts');
    expect(obj['127.0.0.1']).toBeDefined();
    expect(obj['255.255.255.255']).toBeDefined();
    expect(obj['::1']).not.toBeDefined();
    expect(obj['fe80::1%lo0']).not.toBeDefined();
    expect(obj['192.168.1.10']).toBeDefined();
    expect(obj['192.168.50.1']).toBeDefined();
    expect(obj['192.168.50.2']).not.toBeDefined();
    expect(obj['127.0.0.1']).toEqual(['localhost', 'host1', 'host2', 'host3', 'host6']);
    expect(obj['255.255.255.255']).toEqual(['broadcasthost']);
    expect(obj['192.168.1.10']).toEqual(['host7']);
    return expect(obj['192.168.50.1']).toEqual(['host8', 'host9']);
  });
  return it('Tear down for all', function() {});
});

//# sourceMappingURL=allSpec.js.map
