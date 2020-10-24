# common-css
### 一、Introduction
收纳了平时项目中常用到的css。<br>
#### 1、dist/style/main.css
该文件包含了pc和mobile所有的样式，是两者的集合。
但通常不需要用到main.css，我们只需要根据业务运行的设备选择pc或者mobile中的一个即可。<br>
如果使用如下代码引入，则其实引入的就是main.css文件,因为package.json中指定了入口文件是main.css。

```javascript
//指向的是dist/style/main.css
import 'lv-common-css';
```

#### 2、dist/style/pc.css
pc端常用的css。
### 3、dist/style/mobile.css
移动端常用的css。

#### 4、dist/style/common/font.css
此文件中包含的是一些对字体的定义，如font12(font-size:12px)、font1rem(font-size:1rem)、bold(字体加粗)、italic（斜体）等等。

#### 5、dist/style/common/box.css
此文件中包含的是关于盒子模型以及弹性盒子模型的css。

#### 6、dist/style/common/color.css
此文件中包含的是关于字体颜色、背景色的css。

#### 7、dist/style/common/init.css
清除一些浏览器默认样式，通常作为页面初始化使用。

### 二、Usage

#### 1、下载
```javascript
npm install lv-common-css --save
```

#### 2、引入

````javascript
// 方法一：支持es6语法的开发环境
import 'lv-common-css';     //main.css
import 'lv-common-css/dist/style/pc.css';     //pc.css
import 'lv-common-css/dist/style/mobile.css';     //mobile.css

// 方法二：使用link标签引入
<link rel="stylesheet" href="node_modules/lv-common-css/dist/style/pc.css">
<link rel="stylesheet" href="node_modules/lv-common-css/dist/style/mobile.css">
<link rel="stylesheet" href="node_modules/lv-common-css/dist/style/main.css">   //基本用不到

````
