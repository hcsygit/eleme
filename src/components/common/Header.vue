<template>
    <div class="Header">
        <mt-header fixed title="饿了么">
            <router-link to="/Address" slot="left">
                <span class="icon iconfont icon-dingwei"></span>杭州龙翔桥
            </router-link>
        </mt-header>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style>
.mint-header.is-fixed{
    z-index: 100;
}
</style>
