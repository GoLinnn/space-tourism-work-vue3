<template>
    <!-- 2023.12.13 我做成了！！✌ -->
    <div class="topbar">
        <div class="logo_box">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
                <g fill="none" fill-rule="evenodd">
                    <circle cx="24" cy="24" r="24" fill="#FFF" />
                    <path fill="#0B0D17"
                        d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z" />
                </g>
            </svg>
        </div>
        <div class="line"></div>
        <ul class="topnav font2">
            <li>
                <RouterLink to="/" :class="{ active: $route.path === '/' }"><span>00</span>Home</RouterLink>
            </li>
            <li>
                <RouterLink to="/destination" :class="{ active: $route.path === '/destination' }"><span>01</span>Destination
                </RouterLink>
            </li>
            <li>
                <RouterLink to="/crew" :class="{ active: $route.path === '/crew' }"><span>02</span>Crew</RouterLink>
            </li>
            <li>
                <RouterLink to="/technology" :class="{ active: $route.path === '/technology' }"><span>03</span>Technology
                </RouterLink>
            </li>
        </ul>
    </div>
</template>
<script>
import { RouterLink, RouterView } from 'vue-router'
export default {

}
</script>
<style>
.topbar {
    position: relative;
    height: 96px;
    line-height: 96px;

    @media screen and (min-width: 375px) {
        display: none;
    }

    @media screen and (min-width: 768px) {
        display: block;
        width: 100vw;
        margin-top: 0;
    }

    @media screen and (min-width: 1440px) {
        display: block;
        width: 1440px;
        margin-top: 40px;
    }
}

.topbar .logo_box {
    float: left;
    width: 48px;
    height: 48px;
    margin-left: 55px;
    margin-top: 24px;
    background-color: var(--home-foreground);
    border-radius: 50%;
}

/* 线条 */
.line {
    /* 置于最顶层 */
    position: absolute;
    z-index: 999;
    float: left;
    height: 1px;
    margin-top: 48px;
    margin-left: 166px;
    background-color: var(--home-foreground-25);

    /* 可以将 @media 样式写在相应元素样式上下文附近，而不是在样式的文件最底部或单独的样式文件中编写，更利于后期的维护。 */
    @media screen and (min-width: 768px) {
        width: 0;
    }

    @media screen and (min-width: 1440px) {
        width: 473px;
    }
}

.topbar .topnav {
    position: absolute;
    right: 0;
    display: flex;
    height: 100%;
    background-color: var(--home-foreground-nav);
    backdrop-filter: blur(30px);

    @media screen and (min-width: 768px) {
        width: 473px;
        padding-left: 72px;
    }

    @media screen and (min-width: 1440px) {
        width: 830px;
        padding-left: 110px;
    }
}

.topbar .topnav a {
    display: inline-block;
    height: 96px;

    @media screen and (min-width: 768px) {
        margin-left: 20px;
        font-size: 14px;
        letter-spacing: 2.36px;
    }

    @media screen and (min-width: 1440px) {
        margin-left: 50px;
        font-size: 16px;
        letter-spacing: 2.7px;
    }
}

.topbar .topnav .active {
    border-bottom: 3px solid var(--home-foreground);
}

.topbar .topnav a span {
    font-weight: bold;
    margin-right: 12px;

    @media screen and (min-width: 768px) {
        display: none;
    }

    @media screen and (min-width: 1440px) {
        display: inline-block;
    }
}

.topbar .topnav a:hover {
    border-bottom: 3px solid var(--home-foreground-hover);
}
</style>