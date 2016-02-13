module.exports = function joinPath (/*base, path1, path2, ... */) {
  var baseIndex = arguments[1][0] === '.' || arguments[1][0] === '..' ? 0 : 1;
  var path = arguments[baseIndex].slice();

  for(var i = baseIndex+1; i < arguments.length; i++) {
    path = arguments[i].reduce(function (path, component) {
      if(component == '.') {
        return path;
      } else if(component === '..') {
        return path.slice(0, -1);
      } else {
        return path.concat(component);
      }
    }, path);
  }

  return path;
}
