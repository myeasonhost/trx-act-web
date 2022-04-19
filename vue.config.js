const path = require("path");
// const CompressionWebpackPlugin = require("compression-webpack-plugin"); // 开启gzip压缩， 按需引用
// const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i; // 开启gzip压缩， 按需写入
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin; // 打包分析
const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);
const resolve = dir => path.join(__dirname, dir);
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/", // 公共路径
  indexPath: "index.html", // 相对于打包路径index.html的路径
  outputDir: process.env.outputDir || "dist", // 'dist', 生产环境构建文件的目录
  assetsDir: "static", // 相对于outputDir的静态资源(js、css、img、fonts)目录
  lintOnSave: false, // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码
  runtimeCompiler: true, // 是否使用包含运行时编译器的 Vue 构建版本
  productionSourceMap: !IS_PROD, // 生产环境的 source map
  parallel: require("os").cpus().length > 1, // 是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建。
  pwa: {}, // 向 PWA 插件传递选项。
  chainWebpack: config => {
    config.resolve.symlinks(true); // 修复热更新失效
    // 如果使用多页面打包，使用vue inspect --plugins查看html是否在结果数组中
    config.plugin("html").tap(args => {
      // 修复 Lazy loading routes Error
      args[0].chunksSortMode = "none";
      return args;
    });
    config.resolve.alias // 添加别名
      .set("@", resolve("src"))
      .set("@assets", resolve("src/assets"))
      .set("@components", resolve("src/components"))
      .set("@views", resolve("src/views"))
      .set("@store", resolve("src/store"));
    // 压缩图片
    // 需要 npm i -D image-webpack-loader
    // config.module
    //     .rule("images")
    //     .use("image-webpack-loader")
    //     .loader("image-webpack-loader")
    //     .options({
    //         mozjpeg: {
    //             progressive: true,
    //             quality: 65
    //         },
    //         optipng: {
    //             enabled: false
    //         },
    //         pngquant: {
    //             quality: [0.65, 0.9],
    //             speed: 4
    //         },
    //         gifsicle: {
    //             interlaced: false
    //         },
    //         webp: {
    //             quality: 75
    //         }
    //     });
    // 打包分析, 打包之后自动生成一个名叫report.html文件(可忽视)
    if (IS_PROD) {
      config.plugin("webpack-report").use(BundleAnalyzerPlugin, [
        {
          analyzerMode: "static"
        }
      ]);
    }
  },
  // configureWebpack: config => {
  //     // 开启 gzip 压缩
  //     // 需要 npm i -D compression-webpack-plugin
  //     const plugins = [];
  //     if (IS_PROD) {
  //         plugins.push(
  //             new CompressionWebpackPlugin({
  //                 filename: "[path].gz[query]",
  //                 algorithm: "gzip",
  //                 test: productionGzipExtensions,
  //                 threshold: 10240,
  //                 minRatio: 0.8
  //             })
  //         );
  //     }
  //     config.plugins = [...config.plugins, ...plugins];
  // },
  // css: {
  //     extract: IS_PROD,
  //     requireModuleExtension: false, // 去掉文件名中的 .module
  //     loaderOptions: {
  //         // 给 less-loader 传递 Less.js 相关选项
  //         less: {
  //             // `globalVars` 定义全局对象，可加入全局变量
  //             globalVars: {
  //                 primary: '#333'
  //             }
  //         }
  //     }
  // },
  devServer: {
    overlay: {
      // 让浏览器 overlay 同时显示警告和错误
      warnings: true,
      errors: true
    },
    host: "localhost",
    port: 8850, // 端口号
    https: false, // https:{type:Boolean}
    open: false, //配置自动启动浏览器
    hotOnly: true, // 热更新
    // proxy: 'http://localhost:8080'   // 配置跨域处理,只有一个代理
    proxy: {
      //配置多个跨域
      "/m/php": {
        target: "http://47.75.90.65:8073", // 灰度 A站 /mobile/1.0.4
        changeOrigin: true,
        pathRewrite: {
          "^/m/php": "/" // 这里理解成用‘/api'代替target里面的地址，后面组件中我们掉接口时直接用api代替
          // 比如我要调用'http://40.00.100.133:3002/user/login'，直接写‘/api/user/login'即可
        }
      },
      "/api2": {
        target: "http://172.12.12.12:2018",
        changeOrigin: true,
        //ws: true,//websocket支持
        secure: false,
        pathRewrite: {
          "^/api2": "/"
        }
      }
    }
  }
};
// // const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// // const webpack = require("webpack");
// const CompressionWebpackPlugin = require('compression-webpack-plugin'); // gzip 压缩
// const productionGzipExtensions = ['js', 'html', 'css'];
// // const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
// const IS_PROD = process.env.NODE_ENV === 'production';
// module.exports = {
//   extends: ["plugin:vue/essential"], // "@vue/prettier"关闭检查
//   configureWebpack: {
//     resolve: {
//       alias: {
//         'vue$': 'vue/dist/vue.esm.js' // 预编译 + 运行时，  适用于 dev 环境
//       }
//     }
//   },
//   parserOptions: {
//     parser: 'babel-eslint'
// },
//   rules: {
//     //严格的检查缩进问题，不是报错，我们可以关闭这个检查规则,然后在终端输入npm run dev
//     "indent": ["off", 2],
//     //使用eslint时，严格模式下，报错Missing space before function parentheses的问题，意思是在方法名和刮号之间需要有一格空格。
//     'space-before-function-paren': 0,
//     'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
//     'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
//     //关闭prettier
//     "prettier/prettier": "off"
// },
//     //打包优化moment时间函数
//     // plugins: [
//     //     new webpack.ContextReplacementPlugin(
//     //     /moment[/\\]locale$/,
//     //     /zh-cn/,
//     //     ),
//     // ],

//     // 将部署应用程序的基本URL
//     // 将部署应用程序的基本URL。
//     // 默认情况下，Vue CLI假设您的应用程序将部署在域的根目录下。
//     // https://www.my-app.com/。如果应用程序部署在子路径上，则需要使用此选项指定子路径。例如，如果您的应用程序部署在https://www.foobar.com/my-app/，集baseUrl到'/my-app/'.

//     publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',

//     // outputDir: 在npm run build时 生成文件的目录 type:string, default:'dist'

//     outputDir: 'dist',

//     assetsDir: '',

//     // pages:{ type:Object,Default:undfind }
//     /*
//     构建多页面模式的应用程序.每个“页面”都应该有一个相应的JavaScript条目文件。该值应该是一
//     个对象，其中键是条目的名称，而该值要么是指定其条目、模板和文件名的对象，要么是指定其条目
//     的字符串，
//     注意：请保证pages里配置的路径和文件名 在你的文档目录都存在 否则启动服务会报错的
//     */
//     pages: {
//         src1: {
//             // 入口文件，相对于多页面应用的main.js，必需。
//             entry: 'src/main.js',
//             // 应用的模板，相当于单页面应用的public/index.html，非必须，省略时默认与模块名一致。
//             template: 'public/index.html',
//             //o 编译后 dist目录中输出的文件名，非必须，省略时默认与模块名一致。
//             filename: 'index.html',
//             chunks: ['src1']
//         },
//         src2: {
//             // 入口文件，相对于多页面应用的main.js，必需。
//             entry: 'src1/main.js',
//             // 应用的模板，相当于单页面应用的public/index.html，非必须，省略时默认与模块名一致。
//             template: 'public/index1.html',
//             //o 编译后 dist目录中输出的文件名，非必须，省略时默认与模块名一致。
//             filename: 'index1.html',
//             // 当使用 title 选项时，
//             // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
//             title: 'src1',
//             // 在这个页面中包含的块，默认情况下会包含
//             // 提取出来的通用 chunk 和 vendor chunk。
//             chunks: ['chunk-vendors', 'chunk-common', 'index']
//         },
//         // 只有entry属性时，直接用字符串表示模块入口，其他默认与模块名一致

//     },

//     //   lintOnSave：{ type:Boolean default:true } 问你是否使用eslint
//     lintOnSave: false,
//     // productionSourceMap：{ type:Bollean,default:true } 生产源映射
//     // 如果您不需要生产时的源映射，那么将此设置为false可以加速生产构建
//     productionSourceMap: !IS_PROD, // 生产环境的 source map
//     // devServer:{type:Object} 3个属性host,port,https
//     // 它支持webPack-dev-server的所有选项

//     devServer: {
//         port: 8090, // 端口号
//         host: '0.0.0.0', // 本地和局域网
//         // host: 'localhost', // 只有本地
//         https: false, // https:{type:Boolean}
//         open: false, //配置自 动启动浏览器
//         // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
//         proxy: {
//         '/api':{
//             target:'http://api.k780.com/?app=weather.today&weaid=1&appkey=10003&sign=b59bc3ef6191eb9f747dd4e83c99f2a4&format=json',  //跨域的域名
//             ws: true,  // 代理 websockets
//             changeOrigin: true, //是否开启跨域
//             pathRewrite:{
//                 '^/api':'/'  // 重写地址
//             }
//         }
//     },
//     configureWebpack: config => {
//         if (IS_PROD) {
//             config.plugins.push(new CompressionWebpackPlugin({
//                 algorithm: 'gzip',
//                 test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),  //匹配文件名
//                 threshold: 10240, //对超过10k的数据进行压缩
//                 minRatio: 0.8,
//                 deleteOriginalAssets: false //是否删除原文件
//             }));
//             config.externals = {
//                 'jquery': '$',
//                 'vue': 'Vue',
//                 'vue-router': 'VueRouter',
//                 'vuex':'Vuex',
//             };
//         }
//         // 移除 prefetch 插件
//         // config.plugins.delete('prefetch')

//         // 将css 分离打包
//         // config.plugins.push(new MiniCssExtractPlugin({
//         //     // Options similar to the same options in webpackOptions.output
//         //     // both options are optional
//         //     filename: "[name].css",
//         //     chunkFilename: "[id].css"
//         // }));

//         // 将插件暴露到window中
//         // config.plugins.push(new webpack.ProvidePlugin({
//         //     $:'jquery'
//         // }));
//     },
//     chainWebpack: config => {
//         if (IS_PROD) {
//             // 打包分析
//             // config.plugin('webpack-report').use(BundleAnalyzerPlugin, [{
//             //         analyzerMode: 'static'
//             //     }]);
//             // 删除预加载
//             config.plugins.delete('preload');
//             config.plugins.delete('prefetch');
//             // 压缩代码
//             config.optimization.minimize(true);
//             // 分割代码
//             // config.optimization.splitChunks({
//             //     chunks: 'all'
//             // });

//             // 公共资源提取，
//             // vendors提取的是第三方公共库(满足提取规则的node_modules里面的且页面引入的)，这些文件会打到dist/js/chunk-vendors.js里面
//             // 提取规则是每个页面都引入的才会打到chunk-vendors.js里面(如vue.js)
//             // 控制条件是minChunks字段，所以该字段的值是当前activity/src/projects里面的html的个数
//             // common提取的应该是除了vendors提取后，剩余的满足条件的公共静态模块
//             // 我们的项目不需要common，所以将common置为{}，覆盖默认common配置
//             // config.optimization.splitChunks({
//             //     cacheGroups: {
//             //         vendors: {
//             //             name: 'chunk-vendors',
//             //             minChunks: 2,
//             //             test: /node_modules/,
//             //             priority: -10,
//             //             chunks: 'initial'
//             //         },
//             //         common: {}
//             //     }
//             // });
//         }
//         // 修改loader 中关于images的设置
//         // config.module
//         //     .rule('images')
//         //     .use('url-loader')
//         //     .loader('url-loader')
//         //     .tap(options => {
//         //         options.limit = 9999; // 修改 不大于9999字节的图片不打包 base64转码
//         //         options.publicPath = 'www.baidu.com'; // 对打包后的图片路径加上www.baidu.com
//         //         // modify the options...
//         //         return options
//         //     });

//         // 添加loader => 解析html中的图片。 <img src="./favicon.png"> => <img src="data:image/png;base64,AA....////8=">
//         //注=======  图片路径错误，会导致打包失败。
//         /*额外支持一项黑科技：
//         <div>
//             #include("./layout/top.html")
//         </div>
//         */
//         // config.module
//         //     .rule('html')
//         //     .test(/\.(htm|html)$/i)
//         //     .use('html-withimg-loader')
//         //     .loader('html-withimg-loader')
//         //     .end();

//         // config.plugin('extract-css').use(MiniCssExtractPlugin);

//         config.module.rules.push({
//             // 处理css
//             test: /\.css$/,
//             use: [{
//                 loader: MiniCssExtractPlugin.loader,
//                 options: {
//                     // you can specify a publicPath here
//                     // by default it use publicPath in webpackOptions.output
//                     publicPath: '../'
//                 }
//             },"css-loader"]
//         })
//         // config.module.rules.push({
//         //     // 处理jquery
//         //     test: require.resolve('jquery'),
//         //     use: [{
//         //         loader: 'expose-loader',
//         //         options: 'jquery'
//         //     }, {
//         //         loader: 'expose-loader',
//         //         options: '$'
//         //     }, {
//         //         loader: 'expose-loader',
//         //         options: 'jQuery'
//         //     }]
//         // })

//         // config
//         //     .plugin('html')
//         //     .tap(args => {
//         //         args[0].template = '/Users/username/proj/app/templates/index.html'
//         //         return args
//         //     })

//     },
//     // externals: {   // 打包时不打包以下依赖
//     //     jquery: "$"
//     // },
//     css: {
//         // // 是否使用css分离插件 ExtractTextPlugin
//         // extract: true,
//         // // 开启 CSS source maps?
//         // sourceMap: false,
//         // // 启用 CSS modules for all css / pre-processor files.
//         // modules: false,
//         // css预设器配置项
//         loaderOptions: {
//             css: {},
//             postcss: {
//                 plugins: [
//                     // require('postcss-px2rem')({
//                     //     remUnit: 37.5
//                     // })
//                 ]
//             }
//         }
//     },
//   }
// }
