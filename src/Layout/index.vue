<template>
<div :class="['main',isHome?'home':'sub']">
    <header>
        <div class="navbar">
            <div class="logo">
                <img src="@images/logo.png" alt="logo">
            </div>
            <div class="nav-menu">
                <router-link to='/'>首页</router-link>
                <router-link to='/product'>产品</router-link>
                <router-link to='/contact'>联系</router-link>
            </div>
        </div>
        <div class="banner">
            <swiper :options="swiperOption" ref="swiperBanner">
                <swiper-slide><img src="@images/2.png" alt="banner"></swiper-slide>
                <swiper-slide><img src="@images/2.png" alt="banner"></swiper-slide>
                <swiper-slide><img src="@images/2.png" alt="banner"></swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
        <div class="banner-title">
            <h1>{{title}}
                <p>{{titleEn}}</p>
            </h1>
            <p>{{phoneInfo}}</p>
        </div>
    </header>
    <div class="content">
        <router-view></router-view>
    </div>
    <Footer></Footer>
</div>
</template>

<script>
import Footer from '@/components/Footer'
export default {
    name: 'layout',
    components: {
        Footer
    },
    data() {
        return {
            isHome: false,
            title: '',
            titleEn: '',
            phoneInfo: '',
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination'
                }
            }
        }
    },
    watch: {
        '$route': {
            handler(n) {
                this.title = n.meta.title
                this.titleEn = n.meta.titleEn
                this.phoneInfo = n.meta.phone
                if (n.path == '/') this.isHome = true
                else this.isHome = false
            },
            immediate: true,
            deep: true
        }
    }
}
</script>
