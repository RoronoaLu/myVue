<template>
    <div>
        <!--顶部  -->
        <mt-header fixed title="我的商城"></mt-header>
        <!--底部  -->
        <nav class="mui-bar mui-bar-tab">
            <a class="mui-tab-item mui-active" href="#tabbar">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </a>
            <a class="mui-tab-item" href="#tabbar-with-chat">
                <span class="mui-icon mui-icon-email">
    
                </span>
                <span class="mui-tab-label">消息</span>
            </a>
            <a class="mui-tab-item" href="#tabbar-with-contact">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
                    <span class="mui-badge">0</span>
                </span>
                <span class="mui-tab-label">购物车</span>
            </a>
            <a class="mui-tab-item" href="#tabbar-with-map">
                <span class="mui-icon mui-icon-search"></span>
                <span class="mui-tab-label">搜索</span>
            </a>
        </nav>
    </div>
</template>

<script>

import { add } from './calc.js';

import { Toast } from 'mint-ui';


export default {
    data() {
        return {
            msg: 'hello vuejs'
        }
    },
    methods: {
        add,
        tip: function () {
            // Toast('提示信息');
            Toast({
                message: '操作成功',
                iconClass: 'icon icon-success'
            });

        }
    },
    created() {

    }
}
</script>

<style scoped>
.red {
    color: red;
}
</style>