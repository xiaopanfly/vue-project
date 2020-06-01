<template>
<div class="product-detail">
    <div class="introduce">
        <div class="intr-img">
            <template v-if="carrentId == 1">
                <img src="@images/product1.png" alt="product1">
            </template>
            <template v-if="carrentId == 2">
                <img src="@images/product2.png" alt="product2">
            </template>
            <template v-if="carrentId == 3">
                <img src="@images/product3.png" alt="product3">
            </template>
            <template v-if="carrentId == 4">
                <img src="@images/product4.png" alt="product4">
            </template>
        </div>
        <div class="intr-con">
            <h2>矿井地面通风管</h2>
            <p>
                <strong>产品描述: </strong>产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述
            </p>
            <p>
                <strong>产品规格: </strong>产品规格产品规格产品规格产品规格产品规格产品规格产品规格产品规格产品规格产品规格
            </p>
        </div>
    </div>
    <hr>
    <div class="describe">
        <p>
            <strong>产品描述: </strong>产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述
        </p>
        <div>
            <p>
                <strong>产品特点: </strong>
            </p>
            <ol>
                <li>产品特点产品特点产品特点产品特点产品特点产品特点</li>
                <li>产品特点产品特点产品特点产品特点产品特点产品特点</li>
                <li>产品特点产品特点产品特点产品特点产品特点产品特点</li>
                <li>产品特点产品特点产品特点产品特点产品特点产品特点</li>
                <li>产品特点产品特点产品特点产品特点产品特点产品特点</li>
                <li>产品特点产品特点产品特点产品特点产品特点产品特点</li>
            </ol>
        </div>
        <p>
            <strong>产品规格: </strong>产品规格产品规格产品规格产品规格产品规格产品规格产品规格产品规格产品规格产品规格
        </p>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            carrentId: 0
        }
    },
    watch: {
        '$route': {
            handler(n) {
                this.carrentId = n.params.id
            },
            immediate: true
        }
    }
}
</script>
