module.exports = {
  runtimeCompiler: true,
  publicPath: "/", // 设置打包文件相对路径
  devServer: {
    proxy: {
      "/matermanger": {
        //target: "http://lxrweixinxxggz.vipgz1.idcfengye.com", //对应自己的接口
        target: "http://lxrweixinxxg.viphk1.ngrok.org", //对应自己的接口
        changeOrigin: true,
        pathRewrite: {
          "^/matermanger": "/matermanger"
        }
      }
    }
  }
};
