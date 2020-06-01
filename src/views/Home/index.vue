<template>
<div>
    <div class="advantage">
        <div class="company">
            <div class="com-img">
                <div class="pseudo">
                    <div class="pseudo-child">
                        <img src="@images/1.png" alt="com-img" />
                    </div>
                </div>
            </div>
            <div class="com-info">
                <div>
                    <h1>河南省众合日盛机电工程有限公司</h1>
                    <p>公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍</p>
                    <p>公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍</p>
                    <router-link to="/contact">联系我们</router-link>
                </div>
            </div>
        </div>
        <div class="merit">
            <div class="merit-title">
                <h1>我们的优势</h1>
                <p>Our Advantages</p>
            </div>
            <ul>
                <li>
                    <div class="icon">
                        <img src="@images/experience.png" alt="experience">
                    </div>
                    <p>20年施工经验</p>
                </li>
                <li>
                    <div class="icon">
                        <img src="@images/design.png" alt="design">
                    </div>
                    <p>免费设计方案</p>
                </li>
                <li>
                    <div class="icon">
                        <img src="@images/team.png" alt="team">
                    </div>
                    <p>专业施工团队</p>
                </li>
                <li>
                    <div class="icon">
                        <img src="@images/administration.png" alt="administration">
                    </div>
                    <p>规范施工管理</p>
                </li>
                <li>
                    <div class="icon">
                        <img src="@images/sale.png" alt="sale">
                    </div>
                    <p>贴心售前售后</p>
                </li>
            </ul>
        </div>
        <div class="adva-img">
            <img src="@images/adva.png" alt="adva-img">
        </div>
        <div class="factory-img">
            <ul>
                <li>
                    <img src="@images/factory1.png" alt="factory1">
                </li>
                <li>
                    <img src="@images/factory2.png" alt="factory2">
                </li>
                <li>
                    <img src="@images/factory3.png" alt="factory3">
                </li>
            </ul>
        </div>
    </div>
    <div class="certificate margin-bottom-100">
        <div class="cert-icon">
            <div class="icon">
                <img src="@images/certificate.png" alt="certificate">
                <div class="title">
                    <h2>荣誉证书</h2>
                    <p>Certificate of honor</p>
                </div>
            </div>
        </div>
        <div class="cert-swiper">
            <swiper :options="certOption">
                <swiper-slide>
                    <img src="@images/certificate1.png" alt="certificate1">
                </swiper-slide>
                <swiper-slide>
                    <img src="@images/certificate2.png" alt="certificate2">
                </swiper-slide>
                <swiper-slide>
                    <img src="@images/certificate3.png" alt="certificate3">
                </swiper-slide>
                <swiper-slide>
                    <img src="@images/certificate4.png" alt="certificate4">
                </swiper-slide>
                <swiper-slide>
                    <img src="@images/certificate5.png" alt="certificate5">
                </swiper-slide>
                <swiper-slide>
                    <img src="@images/certificate6.png" alt="certificate6">
                </swiper-slide>
            </swiper>
        </div>
    </div>
    <div class="advertisement margin-bottom-100">
        <div class="title">
            <h2>众盛一站式解决通风降温、排尘除烟难题</h2>
        </div>
        <div class="adver-phone">
            <div class="icon">
                <img src="@images/phone.png" alt="phone">
            </div>
            <div class="ph-title">
                <p>联系热线</p>
                <h2>133-2815-2109</h2>
            </div>
        </div>
    </div>
    <div class="product margin-bottom-100">
        <div class="product-title">
            <div class="t-con">
                <h1>众盛产品中心</h1>
                <p>Product Center</p>
            </div>
            <router-link to="/product">更多产品</router-link>
        </div>
        <div class="product-img">
            <ul>
                <li>
                    <img src="@images/product1.png">
                    <div class="describe">
                        <p>矿井地面通风管</p>
                    </div>
                </li>
                <li>
                    <img src="@images/product2.png">
                    <div class="describe">
                        <p>矿井地面通风管</p>
                    </div>
                </li>
                <li>
                    <img src="@images/product3.png">
                    <div class="describe">
                        <p>矿井地面通风管</p>
                    </div>
                </li>
                <li>
                    <img src="@images/product4.png">
                    <div class="describe">
                        <p>矿井地面通风管</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            certOption: {
                slidesPerView: 6,
                autoplay: true,
                delay: 1000,
                spaceBetween: 30,
                loop: true,
                centeredSlides: true
            }
        }
    }
};
</script>
