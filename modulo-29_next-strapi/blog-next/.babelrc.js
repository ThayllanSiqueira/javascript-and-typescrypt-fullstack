module.exports = {
  presets: [
    "next/babel",
    '@babel/preset-env',
    "@babel/preset-typescript"
  ],
  plugins: [
    [
      "styled-components",
      {
        "ssr": true,
        "displayName": true
      }
    ]
  ],
  env: {
    test: {
      plugins: [
        [
          "styled-components",
          {
            "ssr": false,
            "displayName": false
          }
        ]
      ],
      // Exclua plugins indesejados do parser do Babel
      exclude: ["@babel/plugin-syntax-import-assertions", "@babel/plugin-syntax-import-attributes"]
    }
  }
}
