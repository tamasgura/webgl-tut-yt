export const canvas = document.getElementById('canvas');

export const gl = getGlContext()

function getGlContext () {
  let wgl = canvas.getContext('webgl');
  if (!wgl) {
    console.log('WebGL not supported, falling back on experimental-webgl')
    wgl = canvas.getContext('experimental-webgl');
  }
  if (!wgl) {
    alert('Your browser does not support WebGL')
    return false
  }
  return wgl
}

