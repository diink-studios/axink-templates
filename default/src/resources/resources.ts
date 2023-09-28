import { waterShader } from "./shaders/water-shader";
import { simpleShader } from "./shaders/simple-shader";
import { unlitWaterShader } from './shaders/unlit-water-shader';

type Resources = {
  images: Map<string, any>;
  videos: Map<string, any>;
  models: Map<string, any>;
  shaders: Map<string, any>;
  fonts: Array<string>;
};


export const resources: Resources = {
  images: new Map([
    ['enjin', 'enjin.png'],
    ['player', 'player.png'],
    ['witch', 'witch_idle.png'],
    ['character', 'character.png'],
    ['water-shader', 'water-shader.png'],
  ]),
  videos: new Map([]),
  models: new Map([]),
  shaders: new Map([]),
  fonts: [],
};
