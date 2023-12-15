# space-tourism-work-vue3
使用Vue3重写space-tourism-work

## topBar顶部导航栏组件
### 1. 如何给`RouterLink`添加样式？
😃RouterLink会被解析成`a`标签，可以直接在`a`标签上添加样式
（所以重写就不用修改css样式了！）
### 2. 如何只给所点击的RouterLink添加active样式？
😃使用Vue的路由功能结合 `:class` 绑定实现这一效果
写法：
```vue3
<RouterLink to="/" :class="{ active: $route.path === '/' }"></RouterLink>
```

## 加载静态图片资源的路径问题

```
// 文件目录
---src
----assets
------destination
--------image-moon.png
----views
------destination.vue
----App.vue
----main.js
---db.json
```

在destination.vue中<img src=''>的src使用`./assets/destination/image-moon.png`或`@/assets/destination/image-moon.png`形式来引用图片，可以正确解析图片路径

但是当使用变量存放以上两种形式的图片路径时，发现无法正确解析图片，将路径修改成`/src/assets/destination/image-moon.png`时，可以正确解析图片路径

> 
> 在 Vue 项目中，使用`@`别名路径（`@/...`）是Webpack或者Vue CLI提供的一种别名路径，用于指向项目根目录中`src`文件夹。这种路径别名在Vue组件、JavaScript文件中（通过import），以及一些Webpack配置中有效。
>
> 当你在`db.json`文件中使用`@/assets/destination/image-moon.png`这样的别名路径时，这个路径别名`@`在`db.json`文件中是无法被解析的，因为`db.json`文件并不是通过Webpack或Vue CLI处理的，它不会理解和处理`@`这种别名路径。
>
> 相反，如果你使用相对于项目根目录的绝对路径（如`/src/assets/destination/image-moon.png`），它是一种在文件系统层级上的绝对路径，指向了正确的文件位置。在`db.json`文件中，使用这样的绝对路径可以正确地指向图片的位置，因为它是以文件系统路径的方式进行解析的。

若将图片存放在public文件夹下，则不会经过打包，可以直接通过`/image-moon.png`解析图片路径

```
// 文件目录
---public
----image-moon.png
---src
...
```

## data属性为什么是一个函数而不是一个对象？

https://vue3js.cn/interview/vue/data.html

data属性使用函数的形式，每次创建组件实例时，会返回一个新的数据对象的副本，以确保每个组件实例都有自己的数据副本，避免了数据共享和相互影响的问题。当`data`被定义为一个函数时，在Vue中，会以工厂函数的方式调用它来创建数据对象的一个副本。

## v-for 作用域问题

https://cn.vuejs.org/guide/essentials/list.html

`v-for` 的作用域限定在其标签内部，并且在其内部可以访问到 `v-for` 的参数以及组件实例中的数据和方法。
