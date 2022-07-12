<template>
  <div>
    <MapCity></MapCity>
    <div class="showList">
      <van-tabs v-model="active">
  <van-tab title="区域"><van-area  :area-list="conditionList.area" /></van-tab>
  
  <van-tab title="租金">  
    <template #default>
    <van-picker
  title="标题"
  show-toolbar
  :columns="conditionList.price.label"
 
/>
    </template>
     </van-tab>
  <van-tab title="筛选">
     <template #default>
      <van-cell is-link  @click="showPopup">展示弹出层</van-cell>
<van-popup v-model="show"  position="right" :style="{ height: '80%',watch:'80%' }" ><House/></van-popup>
     </template>
  </van-tab>
</van-tabs>
    </div>
  
      <HousesList :List='list'></HousesList>
   
  </div>

  <div>
    <van-tab title="方式"> 
     <div v-for="(item,index) in conditionList.rentType" :key="">{{item}}</div>

  </van-tab>
  </div>
</template>

<script>
import { Toast } from 'vant';

import { areaList } from '@vant/area-data';
import MapCity from "@/components/MapCity.vue";
import {getHouses,housesCondition} from '@/api/houses'
import {House} from '@/components/houses.vue'
import HousesList from '@/components/house-list.vue'
import {mapState} from 'vuex'
export default {
  data() {
    return {
      conditionList:[],
       active: 2,
       areaList,
   list: [],
      loading: false,
      finished: false,
      show:false
    };
  },
  created(){
    this.getHouses()
    this.housesCondition()
  },
 methods: {
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
    showPopup(){
      this.show=true
    },
    async getHouses(){
      const res=await getHouses(this.hotCityNow.value)
     this.list=res.data.body.list
    },
    async housesCondition(){
      const res=await housesCondition(this.hotCityNow.value)
      // console.log(res);
      this.conditionList=res.body
    }
  },
  components:{
    MapCity,
  HousesList,
  House
  },
   computed:{
    ...mapState(['hotCityNow'])
  }
};
</script>

<style scoped lang='less'>
.showList{
  margin-top: 100px;
}
.van-tab__pane{
  width: 100%;
  height: 40%;
}
  
</style>
