<template>
    <div id="temp">
        <!--新闻列表  -->
        <ul class="mui-table-view">
				<li v-for="item in list" class="mui-table-view-cell mui-media" :key="item.id">
					<router-link v-bind="{to:'/news/newsinfo/'+item.id}">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							{{item.title}}
							<p class='mui-ellipsis' v-text="item.zhaiyao"></p>

                            <div class="bottom">
                                <span>添加时间：{{item.add_time | datefmt('YYYY-MM-DD HH:mm:ss')}}</span>
                                <span class="click">点击：{{item.click}}</span>
                            </div>
						</div>
					</router-link>
				</li>
			</ul>
    </div>
</template>

<script>

import { Toast } from 'mint-ui';
export default {
    data(){
        return {
            list : []
        }
    },
    created : function(){
    
        this.getnewslist()
    },
    methods : {
        getnewslist(){
           
            var url = 'http://182.254.146.100:8899/api/getnewslist';
            this.$http.get(url).then(function(res){
                var data = res.body;
                console.log(data)
                // 错误处理
                if (data.status != 0) {
                    Toast(data.message);
                    return ;
                }
                this.list = data.message;
            })
        }
    }
}

</script>

<style scoped>
   .mui-table-view-cell img{
       width: 80px;
       height: 80px;
   }
   .mui-table-view .mui-media-object{
       max-width: 80px;
       line-height: 80px;
   }

   .bottom{
       margin-top: 1.5em;
       color: skyblue;
       font-size: 14px;
   }
   .bottom .click{
       margin-left: 1em;
   }
</style>
