<template>
<div class="products">
    <div class="products-img">
        <ul>
            <li @click="handleClick(1)">
                <img src="@images/product1.png">
                <div class="describe">
                    <p>矿井地面通风管</p>
                </div>
            </li>
            <li @click="handleClick(2)">
                <img src="@images/product2.png">
                <div class="describe">
                    <p>矿井地面通风管</p>
                </div>
            </li>
            <li @click="handleClick(3)">
                <img src="@images/product3.png">
                <div class="describe">
                    <p>矿井地面通风管</p>
                </div>
            </li>
            <li @click="handleClick(4)">
                <img src="@images/product4.png">
                <div class="describe">
                    <p>矿井地面通风管</p>
                </div>
            </li>
        </ul>
    </div>
    <div class="pagination">
        <el-pagination prev-text="上一页" next-text="下一页" background layout="prev, pager, next" :page-count="8" :pager-count="5">
        </el-pagination>
    </div>
</div>
</template>

<script>
export default {
    methods: {
        handleClick(val) {
            this.$router.push({
                path: `/product/${val}`
            })
        }
    }
}
</script>
