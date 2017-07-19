<template>
    <div>
        <div class="panel" v-cloak v-for="(v,i) in HData">
            <div class="panel-L"><img :src="v.ImgSrc"></div>
            <div class="panel-R">
                <h3>{{v.Title}}</h3>
                <b>{{v.Status}}</b>
                <p>{{v.Time}}</p>
                <p>{{v.Name}}</p>
                <h4>¥{{v.Price}}</h4>
                <div>
                    <mt-button type="default" size="small" @click="dfddf">再来一单</mt-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        HData: {
            type: Array,
            required: true
        }
    },
    methods:{
        dfddf(){
            console.log(this.HData);
        }
    }
}
</script>

<style lang="less">
.panel {
    display: flex;
    display: -webkit-flex;
    display: -webkit-box;
    padding: 0 .8em;
    border-bottom:1px solid #cccccc;
    padding-top: 5px;
    .panel-L {
        margin-right: .8em;
        width: 60px;
        height: 60px;
        line-height: 60px;
        text-align: left;
        img{
            width: 100%;
            height:100%;
        }
    }
    .panel-R {
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        text-align: left;
        min-width: 0;
        padding: 5px 0;
        b {
            float: right;
        }
        h3 {
            max-width: 5rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            float: left;
            font-weight: bold;
        }
        p,
        h4 {
            clear: both;
            padding-top: 18px;
        }
        div {
            text-align: right;
            padding: 18px 0;
        }
    }
}
</style>
