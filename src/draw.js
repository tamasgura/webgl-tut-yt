import {
  gl,
} from './init/createContext'

import {resizeCanvas} from './init/resizeCanvas'
import {clearColor} from './util/clearColor'

import {linkProgram} from './program/linkProgram'
import {addShaders} from './shaders/addShaders'
import {createBuffer} from './buffer/createBuffer'

export function draw (vertices) {
  console.log('draw', vertices)
  // Resize canvas to full width
  resizeCanvas(document.documentElement.clientWidth, document.documentElement.clientHeight);

// Clear
  clearColor()
  
  // Add shaders
  const addShadersResult = addShaders()
  let vertexShader, fragmentShader;
  if (addShadersResult === false) {
    return
  } else {
    vertexShader = addShadersResult.vertexShader;
    fragmentShader = addShadersResult.fragmentShader;
  }
  
  // Link program
  const linkResult = linkProgram(vertexShader, fragmentShader)
  let program
  if (linkResult === false) {
    return
  } else {
    program = linkResult.program
  }
  
  // Create buffer
  console.log({vertices})
  createBuffer(program, vertices.value);
  
  // Main render loop
  gl.useProgram(program);
  gl.drawArrays(gl.TRIANGLES, 0, 3/*vertices.value.length / vertices.dimensions*/);
  
}
