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
