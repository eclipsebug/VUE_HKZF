<template>
  <div>
    <Title title1="房屋管理"></Title>
     <div v-if="!isShow" class="not_found">
    
      <div class="photo">  <img src="http://liufusong.top:8080/img/not-found.png" alt=""></div>
      <div class="fabu">您还没有房源， <a href="">去发布房源</a>吧~~ </div>
     </div>
    <div v-else>
     <HousesList :List='rentList'></HousesList>

    </div>
  </div>
 
</template>

<script>
import Title from '@/components/Title.vue'
import {getRent} from '@/api'
import {mapState} from 'vuex'
import HousesList from '@/components/house-list.vue'

export default {
  data(){
    return{
      isShow:false,
      rentList:[],
      url:'http://liufusong.top:8080'
    }
  },
  components:{
    Title,
    HousesList
  },
   created(){
    this.getRent()
   },
   computed:{
    ...mapState(['user'])
   },
   methods:{
    async getRent(){
      const res=await getRent(this.user)
      this.rentList=res.data.body
      // console.log(res.data.body);
      // console.log( this.rentList);
      this.isShow=true
    }
   }
}
</script>
<style scoped lang='less'>
:deep(.van-card__price){
      font-size: 12px;
    color: #fa5741;
}
.tags{
  color: #39becd;
    background: #e1f5f8;
}
:deep(.van-card__desc ){
    font-size: 12px;
    color: #afb2b3;
}
:deep(.van-card__title){
    margin: 0;
    font-size: 15px;
    color: #394043;
    font-weight: 800;
}
.not_found{
        width: 100%;
        height: 50%;
        margin-top: 30px;
      .photo{
    text-align: center;
      margin: 0 auto;
  img{
      width: 5rem;

      }
      }
      .fabu{
        display: inline-block;
    width: 100%;
    text-align: center;
  font-size: 16px;
    height: 100px;
    a{
          color: #33be85;
    }
      }
  }
</style>