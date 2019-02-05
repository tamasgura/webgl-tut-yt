import {draw} from './draw'
import './styles.css'
import { mat4 } from 'gl-matrix'

const vertices = {
  value: [
    // x,y        R, G, B
    0.0, 0.5,     1.0, 1.0, 0.0,
    -0.5, -0.5,   0.7, 0.0, 1.0,
    0.5, -0.5,    0.1, 1.0, 0.6,
  ],
  dimensions: 2 // x, y
}

draw(vertices)

const identity = new Float32Array(16)

console.log(identity)
mat4.identity(identity)
console.log(identity)
// TODO 2/815
