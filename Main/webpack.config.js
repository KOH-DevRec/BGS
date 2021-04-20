module.exports = {
    // モード値を production に設定すると最適化された状態で、
    // development に設定するとソースマップ有効でJSファイルが出力される
    mode: "production",

    // メインとなるJavaScriptファイル（エントリーポイント）
    entry: "./src/render/index.js",
    output: {
        path: __dirname + "/public/",
        filename: "bundle.js"
    },
    performance: {
        hints: false
    },
    module: {
        rules: [
            {
                // 拡張子 .js の場合
                test: /\.js$/,
                use: [
                    {
                        // Babel を利用する
                        loader: "babel-loader",
                        // Babel のオプションを指定する
                        options: {
                            presets: [
                                // プリセットを指定することで、ES2020 を ES5 に変換
                                "@babel/preset-env",
                                // React の JSX を解釈
                                "@babel/react"
                            ],
                        },
                    },
                ],
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env', '@babel/preset-react'],
                  plugins: ['@babel/plugin-transform-runtime'],
                },
              },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'file-loader',
                options: {},
            },
            {
                // 対象となるファイルの拡張子(cssのみ)
                test: /\.css$/,
                // Sassファイルの読み込みとコンパイル
                use: [
                    // スタイルシートをJSからlinkタグに展開する機能
                    "style-loader",
                    // CSSをバンドルするための機能
                    "css-loader"
                ],
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: "babel-loader"
                    },
                    {
                        loader: "react-svg-loader",
                    }
                ]
            },
        ],
    },
    // ES5(IE11等)向けの指定
    target: ["web", "es5"],
};