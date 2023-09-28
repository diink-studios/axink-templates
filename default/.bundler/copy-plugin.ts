import {
  Plugin,
  PluginBuild,
} from 'https://deno.land/x/esbuild@v0.17.10/mod.js';
import {
  type CopyOptions,
  copySync,
} from 'https://deno.land/std@0.101.0/fs/copy.ts';
import { emptyDirSync } from 'https://deno.land/std@0.101.0/fs/empty_dir.ts';

interface CopyPluginOptions extends CopyOptions {
  src?: string;
  dest?: string;
}

export const copyPlugin = (options: CopyPluginOptions = {}): Plugin => ({
  name: 'esbuild-copy-plugin',
  setup(build: PluginBuild) {
    const src = options.src || './assets';
    const dest = options.dest || './dist';

    build.onStart(() => {
      emptyDirSync(dest);
      Deno.removeSync(dest);
    });
    build.onEnd(() => copySync(src, dest));
  },
});
