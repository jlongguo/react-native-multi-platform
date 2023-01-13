# react-native-multi-platform

react-native 0.71版本内置了typescript,这个例子使用的社区的typescript模板：[react-native-template-typescript](https://github.com/react-native-community/react-native-template-typescript)
## Getting started

## Installation

- 环境配置：  

    我使用的是android studio 和 Xcode 安装的依赖，xcode环境配置还是比较麻烦的，可以找些教程看下，比如:[expo](https://docs.expo.dev/get-started/installation/)


### develop
```
npm run start | expo start
```
### build

```
npm run build
```

### dev

```
npm run start
```

***

## Description



- 开发：  
    使用npm run start 会在各端安装运行app 应用，我使用的iphone的模拟器+android真机+chrome(web)浏览器，三端可以同时开启服务，方便开发，也可以使用expo start在Expo Go App中运行环境中运行。

- 打包方式：  
    | 平台名称 | 打包资源包 | 打包应用包 |  资源包多包拆分 |
    | :----: |   :----:  |  :----:  | :----:|
    | web    |   ✅      |   --    |   ✅（支持打包公共资源包和业务资源包拆分）| 
    | android |  ✅      |   ✅     |  --    |   
    | ios    |   ✅      |   ✅     |  --    |  
