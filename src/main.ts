import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { appendNonce, addLibs } from './appendNonce';

if (environment.production) {
  enableProdMode();
}

appendNonce(); // not useful with scripts loaded by bundler

addLibs(); // useful to add 3rd party scripts

document.addEventListener('DOMContentLoaded', () => {
  platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
});
