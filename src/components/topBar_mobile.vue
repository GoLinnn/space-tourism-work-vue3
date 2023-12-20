<template>
    <div class="topbar_mobile">
        <div class="logo_box">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
                <g fill="none" fill-rule="evenodd">
                    <circle cx="24" cy="24" r="24" fill="#FFF" />
                    <path fill="#0B0D17"
                        d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z" />
                </g>
            </svg>
        </div>
        <div class="topbar_box" @click="showNav">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
                <g fill="#D0D6F9" fill-rule="evenodd">
                    <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
                </g>
            </svg>
        </div>
    </div>
    <div class="topbar_nav" v-if="isShow">
        <div @click="hideNav">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21">
                <g fill="#D0D6F9" fill-rule="evenodd">
                    <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
                    <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
                </g>
            </svg>
        </div>
        <ul class="topnav_mobile font2">
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
export default {
    data() {
        return {
            isShow: false
        }
    },
    methods: {
        showNav() {
            this.isShow = true
        },
        hideNav() {
            this.isShow = false
        }
    },
    watch: {
        '$route'() {
            this.isShow = false;
        }
    },
}
</script>
<style scoped>
body {
    background-color: black;
}

.topbar_mobile {
    width: 100%;
    height: 40px;
    margin-top: 24px;
    padding: 0 24px 0 24px;

    @media screen and (min-width: 375px) {
        display: block;
    }

    @media screen and (min-width: 768px) {
        display: none;
    }

    @media screen and (min-width: 1440px) {
        display: none;
    }
}

.topbar_mobile .logo_box {
    float: left;
    width: 40px;
    height: 40px;
    background-color: var(--home-foreground);
    border-radius: 50%;
}


.topbar_mobile .topbar_box {
    float: right;
    width: 24px;
    height: 20px;
    margin-top: 10px;
}

/* 菜单页面 */
.topbar_nav {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 999;
    width: 254px;
    height: 667px;
    background-color: var(--home-foreground-25);
    backdrop-filter: blur(30px);
}

.topbar_nav .close {
    float: right;
    margin-top: 34px;
    margin-right: 25px;
}

.topbar_nav .topnav_mobile {
    margin-top: 118px;
    margin-left: 30px;
}

.topbar_nav .topnav_mobile a {
    display: inline-block;
    height: 48px;
    font-size: 16px;
    letter-spacing: 2.7px;
    font-weight: 200;

}

.topbar_nav .topnav_mobile a span {
    font-weight: bold;
    margin-right: 12px;
}
</style>