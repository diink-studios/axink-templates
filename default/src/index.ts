import { Axink, Color } from 'axink';
import { scenes } from './scenrd/scenes.ts';
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
