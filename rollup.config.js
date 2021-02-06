import typescript from 'rollup-plugin-typescript2';
// import resolve from '@rollup/plugin-node-resolve';
// import commonjs from '@rollup/plugin-commonjs';
// import serve from 'rollup-plugin-serve';
// import { readdirSync } from 'fs';
// import path from 'path';

// const getDirectories = (source) =>
//   readdirSync(source, { withFileTypes: true })
//     .filter((dirent) => dirent.isDirectory())
//     .map((dirent) => dirent.name);

const rollupEnv = process.env.ROLLUP_ENV;
console.log('rollup env:', rollupEnv);

// const dirs = getDirectories('./module/');
// const sourcePath = './module/';
// const configList = getDirectories(sourcePath).map((moduleName) => {
//   return {
//     input: path.join(sourcePath, moduleName, 'index.ts'),
//     output: [
//       { file: path.join('./dist', `${moduleName }.js`) },
//       { file: path.join('./dist', `${moduleName }.esm.js`), format: 'esm' },
//     ],
//     plugins: [
//       typescript(),
//       resolve({ browser: true }),
//       commonjs(),
//     ],
//   };
// });

export default [
  {
    input: './src/index.ts',
    output: [
      { file: './dist/index.cjs.js', format: 'cjs', exports: 'auto' },
      { file: './dist/index.esm.js', format: 'es' },
    ],
    plugins: [
      typescript(),
      // resolve({ browser: true }),
      // commonjs(),
    ],
  },
];
