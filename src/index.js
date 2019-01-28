import {draw} from './draw'

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
