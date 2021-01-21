// src/environments/environment.ts

import { domain, clientId, audience, serverUrl } from '../../auth_config.json';

export const environment = {
  production: false,
  auth: {
    domain,
    clientId,
    redirectUri: `${window.location.origin}/callback`,
    audience,
  },
  dev: {
    serverUrl,
  },
};
