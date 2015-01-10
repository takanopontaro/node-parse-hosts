fs = require 'fs'


describe 'All tests', ->

  it 'Setup for all', ->

  it 'Get content of the hosts file.', ->
    obj = (require '../lib/main').get 'spec/hosts'
    expect(obj['127.0.0.1']).toBeDefined()
    expect(obj['255.255.255.255']).toBeDefined()
    expect(obj['::1']).not.toBeDefined()
    expect(obj['fe80::1%lo0']).not.toBeDefined()
    expect(obj['192.168.1.10']).toBeDefined()
    expect(obj['192.168.50.1']).toBeDefined()
    expect(obj['192.168.50.2']).not.toBeDefined()
    expect(obj['127.0.0.1']).toEqual ['localhost', 'host1', 'host2', 'host3', 'host6']
    expect(obj['255.255.255.255']).toEqual ['broadcasthost']
    expect(obj['192.168.1.10']).toEqual ['host7']
    expect(obj['192.168.50.1']).toEqual ['host8', 'host9']

  it 'Tear down for all', ->
