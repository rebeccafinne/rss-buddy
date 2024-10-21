// netlify/functions/deploy.ts

import type { Config } from '@netlify/functions';

const BUILD_HOOK =
  'https://api.netlify.com/build_hooks/6716200818a0262d78930eef'; 

export default async (req: Request) => {
  await fetch(BUILD_HOOK, {
    method: 'POST',
  })
};

export const config: Config = {
  schedule: '0 0 * * *',
};
