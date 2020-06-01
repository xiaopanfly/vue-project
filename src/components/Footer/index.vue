<template>
<footer>
    <div :class="['foot-content',isContact?'':'contact-on']">
        <div class="foot-left form">
            <div class="title">
                <h1>免费为您定制</h1>
                <p>在线填写需求，我们将尽快为您答疑解惑</p>
            </div>
            <div class="content">
                <form action="javascript:void(0)">
                    <input type="text" placeholder="贵姓">
                    <input type="text" placeholder="所属行业">
                    <input type="text" placeholder="电话号码">
                    <input type="text" placeholder="电子邮箱">
                    <textarea placeholder="您的问题阐述"></textarea>
                    <button @click="halderSubmit">提交</button>
                </form>
            </div>
        </div>
        <div v-if="isContact" class="foot-right form">
            <div class="title">
                <h1>联系我们</h1>
                <p>欢迎前来联系</p>
            </div>
            <div class="content">
                <div class="contus">
                    <div class="address">
                        <div class="icon">
                            <img src="@images/address.png" alt="address">
                        </div>
                        <div class="arescon">江阴市徐霞客镇雪海路4号</div>
                    </div>
                    <div class="telephone">
                        <div class="icon">
                            <img src="@images/telephone.png" alt="telephone">
                        </div>
                        <div class="tecon">133-2815-2109 0510-86536880</div>
                    </div>
                    <div class="email">
                        <div class="icon">
                            <img src="@images/email.png" alt="email">
                        </div>
                        <div class="emcon">526257856@qq.com</div>
                    </div>
                    <div class="fax">
                        <div class="icon">
                            <img src="@images/fax.png" alt="fax">
                        </div>
                        <div class="faxcon">0510-86536550</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="statement">
        <p>版权所有 @ 2018-2038 众盛通风 保留一切权利 备案号: 苏ICP备12000169号</p>
    </div>
</footer>
</template>

<script>
export default {
    data() {
        return {
            isContact: true
        }
    },
    methods: {
        halderSubmit() {
            console.log('click')
        }
    },
    watch: {
        '$route': {
            handler(n) {
                if (n.meta.contact == false) this.isContact = false
                else this.isContact = true
            },
            immediate: true
        }
    }
}
</script>
