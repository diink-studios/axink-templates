import { Axink, Color } from 'https://deno.land/x/axink@0.0.2-alpha/src/mod.ts';
import { scenes } from './scenes/scenes.ts';
import { entities } from './entities/entities.ts';
import { scripts } from './scripts/scripts.ts';
import { resources } from './resources/resources.ts';

const project = new Axink({
  graphics: {
    background: 0x000000,
    scaleFactor: 32,
  },
});

project.init({ entities, resources, scripts });

scenes.forEach(scene => {
  project.addScene(scene);
})

project.start();
