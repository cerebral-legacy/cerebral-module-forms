var isWindows = process.platform === 'win32'
var trailingSlashRe = isWindows ? /[^:]\\$/ : /.\/$/
function osPath () {
  var path

  if (isWindows) {
    path = process.env.TEMP ||
			process.env.TMP ||
			(process.env.SystemRoot || process.env.windir) + '\\temp'
  } else {
    path = process.env.TMPDIR ||
		process.env.TMP ||
		process.env.TEMP ||
		'/tmp'
  }

  if (trailingSlashRe.test(path)) {
    path = path.slice(0, -1)
  }

  return path
}

module.exports = osPath
