const path = require('path')

// Eslint
module.exports = {
  mode: 'development',
  entry: [
    './src/scripts/index.js',
    './src/styles/main.scss'
  ],
  output: {
    filename: 'kmacoders-script.js',
    path: path.resolve(__dirname, 'dist/assets')
  },
  module: {
    rules: [
      // Babel
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      // Url loader: Base64 image
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader'
          },
        ],
      },
      {
				test: /\.scss$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'kmacoders-style.css',
						}
					},
					{
						loader: 'extract-loader'
					},
					{
            loader: 'css-loader?-url',
            options: { sourceMap: true }
					},
					{
						loader: 'postcss-loader'
					},
					{
            loader: 'sass-loader',
            options: { sourceMap: true }
					}
				]
			}
    ]
  },
  watch: true,
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  resolve: {
    extensions: ['.wasm', '.mjs', '.js', '.json']
  }
}


