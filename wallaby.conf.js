module.exports = function (wallaby) {
  return {
    files: [
      'src/**/*.js',
      'dist/**/*.js'
    ],
    tests: [
      'test/**/*.js'
    ],
    env: {
      type: 'node',
      runner: 'node'
    },
    compilers: {
      '+(src|test)/**/*.js': wallaby.compilers.babel(
        // {
        //   presets: ['@babel/preset-env', '@ava/babel-preset-stage-4']
        // }
      )
    },
    testFramework: 'jest',
    debug: true
  }
}