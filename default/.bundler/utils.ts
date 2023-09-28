import {
  dirname,
  fromFileUrl,
  join,
} from 'https://deno.land/std@0.178.0/path/mod.ts';
import { readableStreamFromReader } from 'https://deno.land/std@0.178.0/streams/mod.ts';

const rootPath = join(fromFileUrl(import.meta.url), '../../dist');
// console.log(rootPath);

export const getFile = async (
  relativePath: string,
): Promise<ReadableStream<Uint8Array> | undefined> => {
  try {
    let f;

    if (relativePath === '/') {
      console.log('(Server) File to open: ', rootPath + '/index.html');
      f = await Deno.open(rootPath + '/index.html');
    } else {
      console.log('(Server) File to open: ', rootPath + relativePath);
      f = await Deno.open(rootPath + relativePath);
    }

    return readableStreamFromReader(f);
  } catch (error) {
    console.log(error);
  }
};

export const randomId = async (): Promise<string> => {
  return await crypto.randomUUID().split('-').join('') +
    await crypto.randomUUID().split('-').join('');
};
