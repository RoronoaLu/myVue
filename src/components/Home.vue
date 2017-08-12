<template>
    <div id="temp">
        <!--轮播图  -->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in list" :key="item.id">
                <img v-bind:src="item.img">
            </mt-swipe-item>
        </mt-swipe>


        <!--九宫格  -->
        <div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/news/newslist">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/photos/photoslist">
		                    <span class="mui-icon mui-icon-email"><span class="mui-badge">0</span></span>
		                    <div class="mui-media-body">图片分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/goods/doosloist">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">商品购买</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/feedback">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">留言反馈</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/view">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">视频专区</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/callback">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">联系我们</div></router-link></li>
		        </ul> 
		</div>
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
    
        this.getImgs()
    },
    methods : {
        getImgs(){
           
            var url = 'http://182.254.146.100:8899/api/getlunbo';
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
    .mint-swipe{
        height: 300px;
    }
    .mint-swipe-item img{
        width: 100%;
        height: 100%
    }
    .mint-swipe-item{
        width: 100%;
        height: 300px;
    }
    /*  九宫格样式*/
    .mui-content,.mui-content ul{
		background-color: #fff;
	}
	.mui-grid-view.mui-grid-9 .mui-table-view-cell{
		border-right:0px;
		border-bottom:0px;
	}
	.mui-grid-view.mui-grid-9{
		border-top:0px;
		border-left:0px;
	}
	.mui-icon-home:before,
	.mui-icon-email:before,
	.mui-icon-chatbubble:before,
	.mui-icon-location:before,
	.mui-icon-search:before,
	.mui-icon-phone:before{
		content: '';
		display: inline-block;
		width: 50px;
		height: 50px;
		background-repeat: round;
	}

	.mui-icon-home:before{
		background-image: url(../../statics/imgs/1.png);
	}

	.mui-icon-email:before{
		background-image: url(../../statics/imgs/2.png);
	}
	.mui-icon-chatbubble:before{
		background-image: url(../../statics/imgs/3.png);
	}
	.mui-icon-location:before{
		background-image: url(../../statics/imgs/4.png);
	}
	.mui-icon-search:before{
		background-image: url(../../statics/imgs/5.png);
	}
	.mui-icon-phone:before{
		background-image: url(../../statics/imgs/6.png);
	}

</style>
