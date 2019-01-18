import eslint from 'rollup-plugin-eslint';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';


export default {
  entry: 'src/index-localStorage.js',

  external: [
    'axios',
    // 'vanilla.js/forge/des',
    // 'vanilla.js/forge/rsa',
    // 'vanilla.js/forge/sha256',
  ],

  plugins: [
    eslint(),

    commonjs({
      sourceMap: false,
    }),

    resolve({
      browser: true,
    }),

    babel({
      exclude: 'node_modules/**'
    }),

    uglify({
      compress: {
        drop_console: true,
      },
      output: {
        max_line_len: 80,
      },
    }),
  ],

  targets: [
    { dest: 'dist/bus.js', format: 'cjs', globals: { forge: 'forge' } },
  ],
};
