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

在destination.vue中`<img src=''>`的src使用`./assets/destination/image-moon.png`或`@/assets/destination/image-moon.png`形式来引用图片，可以正确解析图片路径

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

## 当数据未准备好但页面已开始渲染的解决方案

当数据未准备好但页面已开始渲染，这可能导致页面出现错误或显示不完整。以下是解决这种情况的几种方法：

1. **条件渲染**：使用 `v-if` 或 `v-show` 指令在模板中对数据准备情况进行检查，并只有在数据准备好时才渲染相关内容。这样可以防止未准备好的数据影响页面的显示。

   ```
   vueCopy code<div v-if="dataIsReady">
       <!-- 在此处放置需要渲染的内容 -->
   </div>
   ```

2. **加载状态/占位符**：在数据未准备好时，可以使用加载状态或占位符来代替页面内容。这样可以让用户知道数据正在加载，并避免页面因数据未准备好而显示错误内容。

   ```
   vueCopy code<div v-if="!dataIsReady">
       <!-- 显示加载状态或占位符 -->
       <p>Loading...</p>
   </div>
   <div v-else>
       <!-- 数据准备好后渲染的内容 -->
       <p>{{ yourData }}</p>
   </div>
   ```

3. **异步加载数据**：尽可能地提前加载数据，例如在组件生命周期的 `created` 钩子中触发异步操作来获取数据。这样可以尽早地开始数据加载，以减少数据准备时间和页面渲染之间的差异。

   ```
   javascriptCopy codeexport default {
       data() {
           return {
               dataIsReady: false,
               yourData: null
           };
       },
       created() {
           fetchData().then((data) => {
               this.yourData = data;
               this.dataIsReady = true;
           });
       }
   };
   ```

## 单独设置页面样式

https://hooray.github.io/posts/ddffb6ac/

页面在跳转时，在跳转页面执行到 mounted() 前，会先执行原页面的 beforeDestory() 和 destroyed() 方法，然后再执行跳转页面的 mounted() 

所以将设置Body背景图片的逻辑写到mounted()中就可以实现单独设置页面背景图片样式的效果

## 三种响应方式：watch、watchEffect、reactive

### watch

`watch`可以观察单个或多个数据源，并在改变时触发回调函数，它返回的旧值-新值这样的数据，有助于我们了解**数据变化之前之后的对比。**

```vue
<template>
  <button @click="count++">Click me</button>
  <p>Clicked: {{ count }} times</p>
</template>

<script>
import { ref, watch } from 'vue';

export default {
  setup() {
    const count = ref(0);

    watch(count, (newValue, oldValue) => {
      console.log(`Count changed from ${oldValue} to ${newValue}`);
    });

    return { count };
  }
};
</script>
```

### watchEffect

```vue
<template>
  <button @click="count++">Click me</button>
  <p>You clicked {{ count }} times</p>
</template>

<script>
import { ref, watchEffect } from 'vue';

export default {
  setup() {
    const count = ref(0);

    watchEffect(() => {
      console.log(`Count is ${count.value}`);
    });

    return { count };
  }
};
</script>
```

`watchEffect`会立即执行传入的函数，并在函数内**任何响应式数据**变化时重新执行，对于**需要立即执行并自动追踪依赖**的逻辑，`watchEffect`会非常方便。

### reactive

```vue
<template>
  <button @click="state.count++">Click me</button>
  <p>You clicked {{ state.count }} times</p>
</template>

<script>
import { reactive } from 'vue';

export default {
  setup() {
    const state = reactive({ count: 0 });

    return { state };
  }
};
</script>
```

`reactive`函数接收一个普通对象然后返回该普通对象的响应式代理。等同于 2.x 的 `Vue.observable()` 。`reactive` 和 `watch` 的主要区别在于`reactive`可以用于创建一个新的响应式对象，而`watch`用于观察已有的数据源的改变。

#### 优先使用`reactive`的情况

1. 需要创建一个新的响应式对象。`reactive`是创建新的响应式数据的直接方法，而`watch`和`watchEffect`主要是监听已经存在的响应式数据。
2. 需要管理一个组件内部多个响应式属性。`reactive`可以在一个对象中管理多个属性，这比为每个属性单独创建一个`watch`或`watchEffect`效率更高。
3. 当你需要对对象的某个属性进行响应式处理，并且希望保持对象的形态不变时。`reactive`返回的是一个原始对象的响应式代理，你可以直接像访问普通对象一样操作它。

#### 使用reactive实现购物车例子

假设一个购物车组件，其中包含商品的列表，每个商品都有数量和价格等属性，需要计算购物车的总价格。

在这种情况下，一个很好的做法是把购物车作为一个`reactive`对象，每个商品也是一个`reactive`对象，这样就可以很容易地添加，删除和更新商品，计算总价等等。

```Vue
<template>
  <div>
    <div v-for="(item, index) in cart.items" :key="index">
      <p>产品名称: {{ item.name }}</p>
      <p>产品数量: {{ item.quantity }}</p>
      <p>产品价格: {{ item.price }}</p>
      <button @click="increaseQuantity(index)">增加数量</button>
      <button @click="removeItem(index)">移除商品</button>
    </div>
    <p>购物车总价: {{ totalPrice }}</p>
  </div>
</template>

<script>
import { reactive, computed } from 'vue';

export default {
  setup() {
    const cart = reactive({
      items: [
        { name: '商品1', quantity: 2, price: 10 },
        { name: '商品2', quantity: 1, price: 20 },
        { name: '商品2', quantity: 1, price: 20 }
      ]
    });

    const totalPrice = computed(() => {
      return cart.items.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
    });

    function increaseQuantity(index) {
      cart.items[index].quantity++;
    }

    function removeItem(index) {
      cart.items.splice(index, 1);
    }

    return {
      cart,
      totalPrice,
      increaseQuantity,
      removeItem
    };
  }
};
</script>
```

## 组合式API`setup`函数的基本使用

```vue
<template>
  <div>
    <p>{{ count }}</p>
    <button @click="increment">增加</button>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue';

export default {
  setup() {
    const state = reactive({
      count: 0,
      // 还有其他属性...
    });

    function increment() {
      state.count++;
    }
    
    return {
        /*state对象有很多属性，可以使用toRefs函数一次性把state对象的所有属性转换为响应式引用，返回给模板使用*/
      ...toRefs(state),
      increment
    };
  }
};
</script>
```

## 关于`<script setup>`语法糖

在 Vue 3.2 版本开始，Vue 提供了新的 `<script setup>` 语法糖，它将 `<script>` 变成了一个 `setup` 函数块。在 `<script setup>` 内部，不能再使用 `export default` 定义和导出一个组件选项对象，因为 `setup` 并不是一个组件对象，而只是一个函数。在 `<script setup>` 中，所有的 `export` 函数或者变量都会暴露为组件的公共 API，可以在模板中直接使用。

```vue
<template>
  <button @click="increment">{{ count }}</button>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}
</script>
```

在这个例子中，`count` 和 `increment` 函数都是直接导出并在模板中使用的，没有使用 `export default`。
