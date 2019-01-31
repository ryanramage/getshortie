const test = require('tape')
const get = require('../')
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
  t.equals(4, get(obj, 'a'))
  t.equals(1, get(obj, 'the.long'))
  t.equals('ryan', get(obj, 'the.name.is.here'))
  t.end()
})

test('short paths work', t => {
  t.equals(4, get(obj, 'a'))
  t.equals(1, get(obj, 't.l'))
  t.equals('ryan', get(obj, 't.n.i.h'))
  t.end()
})
