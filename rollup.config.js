import buble from 'rollup-plugin-buble'
import uglify from 'rollup-plugin-uglify'

const pkg = require('./package.json')

const DEV = 'development'

const NODE_ENV = process.env.NODE_ENV || DEV

const isDev = NODE_ENV === DEV

const plugins = [buble({
  transforms: {
    dangerousForOf: true
  }
})]

isDev || plugins.push(uglify({
  output: {
    comments: true
  }
}))

export default {
  banner: `/*!
 * ${pkg.name}: ${pkg.description}
 * Version ${pkg.version}
 * Copyright (C) 2017 JounQin <admin@1stg.me>
 * Released under the ${pkg.license} license
 *
 * Github: https://github.com/JounQin/touch-lite
 */`,
  entry: 'lib/index.js',
  dest: `dist/touch${isDev ? '' : '.min'}.js`,
  format: 'umd',
  moduleName: 'Touch',
  amd: {
    id: pkg.name
  },
  plugins
}
