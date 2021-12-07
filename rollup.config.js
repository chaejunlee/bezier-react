import { DEFAULT_EXTENSIONS } from '@babel/core'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import url from '@rollup/plugin-url'
import commonjs from '@rollup/plugin-commonjs'
import alias from '@rollup/plugin-alias'
import babel from '@rollup/plugin-babel'
import { visualizer } from 'rollup-plugin-visualizer'
import path from 'path'

import packageJson from './package.json'

const extensions = DEFAULT_EXTENSIONS.concat(['.ts', '.tsx'])

const rootDir = path.resolve(__dirname)

const getPathByDirName = (dirName) => path.resolve(rootDir, 'src', dirName)

const aliasPlugin = alias({
  entries: {
    Components: getPathByDirName('components'),
    Constants: getPathByDirName('constants'),
    Foundation: getPathByDirName('foundation'),
    Hooks: getPathByDirName('hooks'),
    Layout: getPathByDirName('layout'),
    Types: getPathByDirName('types'),
    Utils: getPathByDirName('utils'),
    Worklets: getPathByDirName('worklets'),
  },
})

const commonPlugins = [
  commonjs(),
  babel({
    babelHelpers: 'runtime',
    exclude: 'node_modules/**',
    extensions,
  }),
  peerDepsExternal(),
  url(),
  visualizer({
    filename: 'stats.html',
  }),
  aliasPlugin,
]

const configGenerator = ({
  output: _output,
  plugins: _plugins,
}) => ({
  input: 'src/index.ts',
  output: {
    ..._output,
    sourcemap: true,
  },
  plugins: [
    ..._plugins,
    ...commonPlugins,
  ],
  external: [/@babel\/runtime/],
})

export default [
  // CommonJS
  configGenerator({
    output: {
      file: packageJson.main,
      format: 'cjs',
    },
    plugins: [
      nodeResolve({
        mainFields: ['main', 'module'],
        extensions,
      }),
    ],
  }),
  // ESModules
  configGenerator({
    output: {
      dir: 'build',
      format: 'esm',
      preserveModules: true,
    },
    plugins: [
      nodeResolve({
        extensions,
      }),
    ],
  }),
]
