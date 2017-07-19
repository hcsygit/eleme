<template>
    <div>
        <v-header v-if="HeaderType==1"></v-header>
        <v-header1 v-else :Htitle="Htitle"></v-header1>
        <div class="HomeMain">
            <router-view></router-view>
        </div>
        <v-footer></v-footer>
    </div>
</template>

<script>
import vHeader from './Header.vue';
import vHeader1 from './Header1.vue';
import vFooter from './Footer.vue';
export default {
    data() {
        return {
            HeaderType: 1,
            Htitle: "发现"
        }
    },
    components: {
        vHeader, vFooter, vHeader1
    },
    watch: {

    },
    updated() {
        this.HeaderType = this.$store.state.HeaderType;
        if (this.HeaderType == 2) { this.Htitle = "发现"; }
        if (this.HeaderType == 3) { this.Htitle = "订单"; }
        if (this.HeaderType == 4) { this.Htitle = "我的"; }
    }

}
</script>

<style>
header {
    height: 50px !important;
    line-height: 50px;
    overflow: hidden;
    *zoom: 1
}

.HomeMain {
    position: absolute;
    top: 50px;
    bottom: 66px;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    left: 0;
    right: 0;
}
</style>

