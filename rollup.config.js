import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import path from 'path';
import shebang from 'rollup-plugin-preserve-shebang';
import { terser } from 'rollup-plugin-terser';

export default {
  input: path.join(__dirname, 'src', 'main.ts'),
  output: {
    dir: path.join(__dirname, 'dist'),
    format: 'cjs',
  },
  plugins: [
    shebang(),
    resolve({ browser: false }),
    commonjs(),
    typescript(),
    terser(),
  ],
};
