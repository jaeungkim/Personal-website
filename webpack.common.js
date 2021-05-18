const HtmlWebpackPlugin = require("html-webpack-plugin");
const InterpolateHtmlPlugin = require("interpolate-html-plugin");
const path = require("path");
const fs = require("fs");

const appDirectory = fs.realpathSync(process.cwd());

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: { // File extensions. Add others and needed (e.g. scss, json)
        extensions: [
            ".js", ".jsx"
        ],
        modules: ["node_modules"],
        // Aliases help with shortening relative paths
        // 'Components/button' === '../../../components/button'
        alias: {
            _screens: path.resolve(appDirectory, "src/screens"),
            _images: path.resolve(appDirectory, "src/assets/images")
        }
    },
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: ["@svgr/webpack"]
            }, 
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"]
            }, 
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.(gif|png|jpe?g|ico)$/i,
                use: ["file-loader"]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ["file-loader"],
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                template: path.resolve(appDirectory, "public/index.html"),
                filename: "index.html",
                favicon: './public/favicon.ico'
            }
        ),
        new InterpolateHtmlPlugin({
            PUBLIC_URL: 'static' // can modify `static` to another name or get it from `process`
        })
    ]
};
