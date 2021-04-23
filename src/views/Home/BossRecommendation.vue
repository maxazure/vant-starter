<template>
  <div>
    <van-sticky>
      <van-nav-bar title="老板娘说 " left-text="返回" left-arrow @click-left="onClickLeft"/>
    </van-sticky>
    <van-search v-model="value" placeholder="请输入搜索关键词" />

    <van-row style="padding-top:0.62rem;padding-bottom:0.93rem;background-color:#FFFFFF;" type='flex' justify='space-around'>
      <van-button style="width:20.3%;height:1.94rem;font-size:13px">推荐穿法</van-button>
      <van-button style="width:20.3%;height:1.94rem;font-size:13px">时尚穿法</van-button>
      <van-button style="width:20.3%;height:1.94rem;font-size:13px">炫酷穿法</van-button>
      <van-button style="width:20.3%;height:1.94rem;font-size:13px">保守穿法</van-button>
    </van-row>

    <van-row style="height:8.75rem;border-top:1px solid #797979;" type='flex' justify='space-around'>
      <van-col span="7" style="display:flex;align-items:center">
        <van-image width="120" height="120" src="https://img01.yzcdn.cn/vant/cat.jpeg"/>
      </van-col>
      <van-col span="15" style="display:flex;justify-content:center;flex-direction:column">
        <van-row>
          <div style="font-size:14px;font-weight:bold;line-height:1.5rem">时尚穿法 | 腿粗、屁股大、胯宽、千万不要穿这4件衣服！！</div>
        </van-row>
        <van-row>
          <div style="font-size:12px;line-height:1.5rem">搭配毛衣、卫衣也是ok的。既减龄又淑女，上班上班穿都没问题~相比包臀裙而言A字型的长裙能很好的遮盖住胯…</div>
        </van-row>
      </van-col>
    </van-row>
    
    <van-row style="height:8.75rem;border-top:1px solid #797979;" type='flex' justify='space-around'>
      <van-col span="7" style="display:flex;align-items:center">
        <van-image width="120" height="120" src="https://img01.yzcdn.cn/vant/cat.jpeg"/>
      </van-col>
      <van-col span="15" style="display:flex;justify-content:center;flex-direction:column">
        <van-row>
          <div style="font-size:14px;font-weight:bold;line-height:1.5rem">时尚穿法 | 腿粗、屁股大、胯宽、千万不要穿这4件衣服！！</div>
        </van-row>
        <van-row>
          <div style="font-size:12px;line-height:1.5rem">搭配毛衣、卫衣也是ok的。既减龄又淑女，上班上班穿都没问题~相比包臀裙而言A字型的长裙能很好的遮盖住胯…</div>
        </van-row>
      </van-col>
    </van-row>

    <van-row style="height:8.75rem;border-top:1px solid #797979;" type='flex' justify='space-around'>
      <van-col span="7" style="display:flex;align-items:center">
        <van-image width="120" height="120" src="https://img01.yzcdn.cn/vant/cat.jpeg"/>
      </van-col>
      <van-col span="15" style="display:flex;justify-content:center;flex-direction:column">
        <van-row>
          <div style="font-size:14px;font-weight:bold;line-height:1.5rem">时尚穿法 | 腿粗、屁股大、胯宽、千万不要穿这4件衣服！！</div>
        </van-row>
        <van-row>
          <div style="font-size:12px;line-height:1.5rem">搭配毛衣、卫衣也是ok的。既减龄又淑女，上班上班穿都没问题~相比包臀裙而言A字型的长裙能很好的遮盖住胯…</div>
        </van-row>
      </van-col>
    </van-row>

    <van-row style="height:8.75rem;border-top:1px solid #797979;" type='flex' justify='space-around'>
      <van-col span="7" style="display:flex;align-items:center">
        <van-image width="120" height="120" src="https://img01.yzcdn.cn/vant/cat.jpeg"/>
      </van-col>
      <van-col span="15" style="display:flex;justify-content:center;flex-direction:column">
        <van-row>
          <div style="font-size:14px;font-weight:bold;line-height:1.5rem">时尚穿法 | 腿粗、屁股大、胯宽、千万不要穿这4件衣服！！</div>
        </van-row>
        <van-row>
          <div style="font-size:12px;line-height:1.5rem">搭配毛衣、卫衣也是ok的。既减龄又淑女，上班上班穿都没问题~相比包臀裙而言A字型的长裙能很好的遮盖住胯…</div>
        </van-row>
      </van-col>
    </van-row>

    <van-row style="height:8.75rem;border-top:1px solid #797979;" type='flex' justify='space-around'>
      <van-col span="7" style="display:flex;align-items:center">
        <van-image width="120" height="120" src="https://img01.yzcdn.cn/vant/cat.jpeg"/>
      </van-col>
      <van-col span="15" style="display:flex;justify-content:center;flex-direction:column">
        <van-row>
          <div style="font-size:14px;font-weight:bold;line-height:1.5rem">时尚穿法 | 腿粗、屁股大、胯宽、千万不要穿这4件衣服！！</div>
        </van-row>
        <van-row>
          <div style="font-size:12px;line-height:1.5rem">搭配毛衣、卫衣也是ok的。既减龄又淑女，上班上班穿都没问题~相比包臀裙而言A字型的长裙能很好的遮盖住胯…</div>
        </van-row>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import { NavBar, Search, Button, Image as VanImage, Sticky } from 'vant'

export default {
  name:'BossRecommendation',

  components:{
    [NavBar.name]:NavBar,
    [Search.name]:Search,
    [Button.name]:Button,
    [VanImage.name]:VanImage,
    [Sticky.name]:Sticky
  }
  
}
</script>

<style scoped>

</style>