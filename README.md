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

## 从JSON动态加载图片路径问题

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

在destination.vue中使用`./assets/destination/image-moon.png`或`@/assets/destination/image-moon.png`形式来引用图片，可以正确解析图片路径

但是当在db.json文件中存放图片路径以上两种形式的图片路径时，发现无法正确解析图片，将路径修改成`/src/assets/destination/image-moon.png`时，可以正确解析图片路径

> 
> 在 Vue 项目中，使用`@`别名路径（`@/...`）是Webpack或者Vue CLI提供的一种别名路径，用于指向项目根目录中`src`文件夹。这种路径别名在Vue组件、JavaScript文件中（通过import），以及一些Webpack配置中有效。
>
> 当你在`db.json`文件中使用`@/assets/destination/image-moon.png`这样的别名路径时，这个路径别名`@`在`db.json`文件中是无法被解析的，因为`db.json`文件并不是通过Webpack或Vue CLI处理的，它不会理解和处理`@`这种别名路径。
>
> 相反，如果你使用相对于项目根目录的绝对路径（如`/src/assets/destination/image-moon.png`），它是一种在文件系统层级上的绝对路径，指向了正确的文件位置。在`db.json`文件中，使用这样的绝对路径可以正确地指向图片的位置，因为它是以文件系统路径的方式进行解析的。
>
> 所以，如果要在`db.json`文件中引用图片路径，推荐使用相对于项目根目录的绝对路径或者直接使用网络可访问的URL路径。
