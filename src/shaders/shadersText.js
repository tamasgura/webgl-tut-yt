export let vertexShaderText = [
  'precision mediump float;',
  'attribute vec2 coordinates;',
  'attribute vec3 color;',
  'varying vec3 fragColor;',
  'void main() {',
  'fragColor = color;',
  'gl_Position = vec4(coordinates, 0.0, 1.0);',
  '}'
].join('\n')

export let fragmentShaderText = [
  'precision mediump float;',
  'varying vec3 fragColor;',
  'void main() {',
  'gl_FragColor = vec4(fragColor, 1.0);',
  '}'
].join('\n')
