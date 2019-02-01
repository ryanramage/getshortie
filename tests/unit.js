const test = require('tape')
const shortie = require('../')
let obj = {
  the: {
    long: 1,
    name: {
      is: {
        here: 'ryan'
      }
    }
  },
  terrible: {
    long: 'err'
  },
  really: {
    it: {
      is: 3
    }
  },
  a: 4
}

test('normal paths work', t => {
  t.equals(4, shortie.get(obj, 'a'))
  t.equals(1, shortie.get(obj, 'the.long'))
  t.equals('ryan', shortie.get(obj, 'the.name.is.here'))
  t.end()
})

test('short paths work', t => {
  t.equals(4, shortie.get(obj, 'a'))
  t.equals(1, shortie.get(obj, 't.l'))
  t.equals('ryan', shortie.get(obj, 't.n.i.h'))
  t.end()
})

test('find the full path', t => {
  t.equals('a', shortie.path(obj, 'a'))
  t.equals('the.long', shortie.path(obj, 't.l'))
  t.equals('the.name.is.here', shortie.path(obj, 't.n.i.h'))
  t.end()
})
