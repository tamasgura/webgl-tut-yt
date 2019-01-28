import {gl} from '../init/createContext'

const defaultColor = {
  r: 0.75,
  g: 1.0,
  b: 0.8,
  a: 1.0,
}

export function clearColor (color) {
  if (!color) {
    color = defaultColor;
  }
  gl.clearColor(color.r, color.g, color.b, color.a);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
}
