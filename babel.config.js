const presets = [
  [
    "@babel/env",
    {
      targets: {
        // edge: "15+",
        // ie: "11",
        // firefox: "50",
        // chrome: "64",
        // safari: "11.1",
        browsers: [
          'Chrome >= 60',
          'Safari >= 10.1',
          'iOS >= 10.3',
          'Firefox >= 54',
          'Edge >= 15',
        ]
      },
      useBuiltIns: "usage",
      corejs: "3.4.1"
    }
  ],
];

module.exports = { presets };
