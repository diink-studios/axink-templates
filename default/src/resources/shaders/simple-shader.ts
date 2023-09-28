import { Vector2 } from '../../../../axink-deno/src/index.ts';

export const simpleShader = {
  uniforms: {
    time: { type: "f", value: 1.0 },
    resolution: { type: "v2", value: new Vector2() }
  },
  vertexShader: `
  uniform float time;
  uniform vec2 resolution;
  void main()	{
      gl_Position = vec4( position, 1.0 );
  }`,
  fragmentShader: `
  uniform float time;
  uniform vec2 resolution;
  void main()	{
      float x = mod(time + gl_FragCoord.x, 20.) < 10. ? 1. : 0.;
      float y = mod(time + gl_FragCoord.y, 20.) < 10. ? 1. : 0.;
      gl_FragColor = vec4(vec3(min(x, y)), 1.);
  }`
}
