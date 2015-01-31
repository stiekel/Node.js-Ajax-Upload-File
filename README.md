用于演示如何使用Node.js和jQuery完成不刷新的文件上传。

###相关文章

请参见[不可能不确定](http://chensd.com/)上的博文[利用Ajax无刷新上传文件到Node.js服务器](http://chensd.com/2015-01/Node-js-Ajax-Upload-File.html)。

###应用启动

如果系统中已经安装了git，则可以用下面的命令克隆：

```sh
$ git clone https://coding.net/Stiekel/Node.js-Ajax-Upload-File.git
```

也可以[下载zip包](https://coding.net/u/Stiekel/p/Node.js-Ajax-Upload-File/git/archive/master)，程序中的前端包都使用的是百度的公开库，后端代码使用npm管理，进入应用目录，执行如下的命令安装：

```sh
$ npm install
```

然后执行如下的命令可以启动应用：

```sh
$ node app.js
```

再通过浏览器访问`http://ip:3000/`即可。注意，上传的文件会保存在`/tmp`和`public`两个目录中。

###DEMO

请前往[demo](http://node-js-ajax-upload-file.codingapp.com/)。