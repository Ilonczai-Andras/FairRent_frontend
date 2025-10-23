import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import { provideAuth0 } from '@auth0/auth0-angular';
import { routes } from './app/app.routes';

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    provideAuth0({
      domain: 'dev-6zqe7b0fdanpjyzi.us.auth0.com',
      clientId: 'VKsCLOXsGGPhmvT0iFRgAn71H406NjtK',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    })
  ]
});
