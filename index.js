module.exports = get

function get(obj, path, fallback) {
  if (!obj || !path) return fallback
  const paths = Array.isArray(path) ? path : path.split(".")

  let results = obj
  let i = 0

  while (i < paths.length && results !== undefined && results !== null) {
    let shortPath = paths[i]
    let keys = Object.keys(results)
    let key = keys.find(e => e.indexOf(shortPath) === 0)
    results = results[key]
    i++
  }

  if (i === paths.length) {
    return results !== undefined ? results : fallback;
  }
  return results !== undefined && results !== null ? results : fallback
}
