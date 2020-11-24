#!/usr/bin/env node
import { green } from './colors';

async function main() {}

main()
  .then(() => {
    console.log(green('✓ Success!'));
  })
  .catch((error: unknown) => {
    console.log(error);
  });
