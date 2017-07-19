<template>
    <div class="Header">
        <mt-header fixed :title="Htitle"></mt-header>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    props:{
         Htitle:{
             type:String
         }       
    }
}
</script>

<style>
.mint-header.is-fixed{
    z-index: 100;
}
</style>
