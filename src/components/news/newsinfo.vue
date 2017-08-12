<template>
    <div id="temp">
        <!--新闻详情页  -->
        <div class="title">
            <h4>{{info.title}}</h4>
            <p>{{info.add_time | datefmt('YYYY-MM-DD')}}</p>
        </div>
        <div class="content" v-html="info.content"></div>
    </div>
</template>

<script>

import { Toast } from 'mint-ui';
export default {
    data(){
        return {
            id:0,
            info : []
        }
    },
    created : function(){
    
        this.id = this.$route.params.id;
        this.getnewslist()
    },
    methods : {
        getnewslist(){
           
            var url = 'http://182.254.146.100:8899/api/getnew/'+this.id;
            this.$http.get(url).then(function(res){
                var body = res.body;
                // 错误处理
                if (body.status != 0) {
                    Toast(body.message);
                    return ;
                }
                this.info = body.message[0];
            })
        }
    }
}

</script>

<style scoped>
    .title h4{
        color: #0094ff;
    }
    .title p{
        color:rgba(0,0,0,0.5);
    }

    .title,.content{
        padding: 5px;
    }
</style>
