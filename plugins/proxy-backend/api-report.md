## API Report File for "@backstage/plugin-proxy-backend"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
import { Config } from '@backstage/config';
import express from 'express';
import { Logger } from 'winston';
import { PluginEndpointDiscovery } from '@backstage/backend-common';

// Warning: (ae-forgotten-export) The symbol "RouterOptions" needs to be exported by the entry point index.d.ts
// Warning: (ae-missing-release-tag) "createRouter" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export function createRouter(options: RouterOptions): Promise<express.Router>;
```
