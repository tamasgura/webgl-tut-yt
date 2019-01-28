import {canvas, gl} from './createContext'

export function resizeCanvas (width, height) {
  canvas.width = width;
  canvas.height = height;
  gl.viewport(0, 0, width, height)
}
