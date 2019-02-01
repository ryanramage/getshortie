getshortie
=========

Use shortend path names to do similar to lodash get

eg

```
const shortie = require('shortie')
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

shortie.get(obj, 'a') // 4
shortie.get(obj, 't.l') // 1
shortie.get(obj, 't.n.i.h') // 'ryan'

shortie.path(obj, 't.n.i.h') // 'the.name.is.here'

```

used in [Pilot](https://github.com/hundredrabbits/Pilot) and [Orca](https://github.com/hundredrabbits/Orca) to save space when setting effect values on nested objects
