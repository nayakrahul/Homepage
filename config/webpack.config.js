const path = require('path');

module.exports = ({ mode } = { mode: "production" }) => {

    return {
            mode,
            entry: "./src/App.js",
            output: {
                filename: "index.js"
            },
            devServer: {
              port: 3000,
              host: '0.0.0.0'
            },
            module: {
                rules: [
                 {
                    test: /\.jpe?g|png$/,
                    exclude: /node_modules/,
                    use: ["url-loader", "file-loader"]
                },
                    {
                        test: /\.(js|jsx)$/,
                        exclude: /node_modules/,
                        loader: "babel-loader"
                    },{
                      test: /\.(js|jsx)?$/,
                      exclude: /node_modules/,
                      loader: 'babel-loader',
                      options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                      }
                    },
                    {
                      test: /(\.css$)/,
                      loader: 'style-loader'
                    },
                    {
                      test: /(\.css$)/,
                      loader: 'css-loader'
                    },
                    {
                      test: /(\.css$)/,
                      loader: 'postcss-loader'
                    },
                    {
                      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                      use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 100000
                            }
                        }
                    ]
                    },
                    {
                      test: /\.scss$/,
                      loader: 'style-loader'
                    },
                    {
                      test: /\.scss$/,
                      loader: 'css-loader'
                    },
                    {
                      test: /\.scss$/,
                      loader: 'sass-loader'
                    },
                    {
                        test: /\.(woff(2)?|ttf|otf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                        use: [
                          {
                            loader: 'file-loader',
                            options: {
                              name: '[name].[ext]',
                              outputPath: 'fonts/'
                            }
                          }
                        ]
                      }
                ]
            }
        }
};

