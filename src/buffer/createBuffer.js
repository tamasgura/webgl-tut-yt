import {gl} from '../init/createContext'

export function createBuffer (program, vertices) {
  const vBO = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, vBO);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW)
  
  const positionAttribLocation = gl.getAttribLocation(program, 'coordinates');
  const colorAttribLocation = gl.getAttribLocation(program, 'color');
  
  gl.vertexAttribPointer(
    positionAttribLocation,             // Attr location
    2,                                  // Number of elements per attribute
    gl.FLOAT,                           // Type of elements
    false,                              // Normalize
    5 * Float32Array.BYTES_PER_ELEMENT, // Size of an individual vertex
    0                                   // Offset from the beginning of a single vertex to this attribute
  )
  gl.vertexAttribPointer(
    colorAttribLocation,                // Attr location
    3,                                  // Number of elements per attribute
    gl.FLOAT,                           // Type of elements
    false,                              // Normalize
    5 * Float32Array.BYTES_PER_ELEMENT, // Size of an individual vertex
    2 * Float32Array.BYTES_PER_ELEMENT, // Offset from the beginning of a single vertex to this attribute
  )
  
  
  gl.enableVertexAttribArray(positionAttribLocation);
  gl.enableVertexAttribArray(colorAttribLocation);
}
