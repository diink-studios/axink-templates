import { Webview } from 'https://deno.land/x/webview@0.7.5/mod.ts';

const webview = new Webview();

webview.title = "Axink Tech Demo";

webview.navigate(`http://localhost:5050`);

webview.run();
