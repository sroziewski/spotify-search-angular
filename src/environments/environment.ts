import { AuthConfig } from "src/app/security/auth.service";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api_url: 'https://api.spotify.com/v1/search',
  authConfig: {
    url: 'https://accounts.spotify.com/authorize',
    client_id:'59e4301062924eb09789485feafef5bd',
    redirect_uri:'http://localhost:4200/',
    response_type:'token'
  } as AuthConfig
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

