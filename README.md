# webpack
webpack_examples

webpack的安装使用。  
1、建立一个空的项目文件夹；  
2、终端cd定位到该文件夹；  
3、sudo cnpm init -y 「初始化一个json文件」. 
4、sudo cnpm install -D webpack 「安装webpack」. 
5、sudo cnpm install -D webpack-cli 「安装webpack-cli」  
6、在项目根目录下创建文件夹src【放置项目源文件】、dist【打包后的文件会在这里生成。要上传的项目也是从这里上传】、文件webpack.config.js；此时的项目结构为：  
webpack-demo  
node_modules  
src  
index.js【项目源文件】  
dist  
index.html  
webpack.config.js 
package.json  

7、安装lodash文件：sudo cnpm install —save lodash。安装完毕之后json文件里面会多处一行代码：dependencies:{“lodash”:’…’}  
8、编写 src/index.js 文件；webpack.config.js文件，并在html的<script></script>中引入打包后的js文件。  
9、终端执行npx webpack.此时dist文件夹里会自动生成一个js文件，文件名是我们在webpack.config.js中output里规定的文件名，此js文件由我们写的js文件与lodash文件打包而成。  
