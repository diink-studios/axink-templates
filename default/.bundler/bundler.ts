import * as esbuild from 'https://deno.land/x/esbuild@v0.17.10/mod.js';
import { copyPlugin } from './copy-plugin.ts';

const ctx = await esbuild.context({
  entryPoints: [`./src/index.ts`],
  bundle: true,
  outfile: './dist/app.js',
  write: true,
  format: 'esm', // this will ensure we don't have CJS issues later.
  minify: true,
  treeShaking: true,
  plugins: [
    copyPlugin({
      src: './src/resources',
      dest: './dist/resources',
      overwrite: true,
    }),
  ],
  // watch: {
  //   onRebuild(error, result) {
  //     error
  //       ? console.error("watch build failed: ", error)
  //       : console.log("Watch build succesful: ", result);
  //   },
  // },
  target: ['chrome58', 'firefox57', 'safari11', 'edge18'],
});

// console.log(result);

await ctx.watch();
console.log('watching...');
