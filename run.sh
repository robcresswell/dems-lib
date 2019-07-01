#!/bin/sh
node -r 'ts-node/register/transpile-only' -r 'dotenv/config' src/main.ts
