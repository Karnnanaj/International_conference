// craco.config.js
module.exports = {
    webpack: {
      configure: {
        externals: {
          '@splinetool/runtime': 'SplineRuntime',
        },
      },
    },
  };
  