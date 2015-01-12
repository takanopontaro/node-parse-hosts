'use strict'

_  = require 'lodash'
fs = require 'fs'

get = (path) ->
  path ?= switch process.platform
    when 'win32' then 'C:/Windows/System32/drivers/etc/hosts'
    else '/etc/hosts'
  buf = '' + fs.readFileSync path
  obj = {}
  for line in buf.replace(/#.*/g, '').split /[\r\n]/
    md = /(\d+\.\d+\.\d+\.\d+)\s+(.+)/.exec line
    obj[md[1]] = _.union obj[md[1]] || [], md[2].trim().split /\s+/ if md
  obj

exports.get = ->
  get.apply null, arguments

exports.optimize = ->
  res = get.apply null, arguments
  res['127.0.0.1'] ?= ['localhost']
  res
