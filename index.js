module.exports = {get, path}

function get (obj, path) {
  let {results} = _get(obj, path)
  return results
}

function path (obj, path) {
  let {actualPath} = _get(obj, path)
  return actualPath.join('.')
}

function _get(obj, path) {
  if (!obj || !path) return fallback
  const paths = Array.isArray(path) ? path : path.split(".")

  let results = obj
  let actualPath = []
  let i = 0

  while (i < paths.length && results !== undefined && results !== null) {
    let shortPath = paths[i]
    let keys = Object.keys(results)
    let key = keys.find(e => e.indexOf(shortPath) === 0)
    actualPath.push(key)
    results = results[key]
    i++
  }
  return {results, actualPath}
}
