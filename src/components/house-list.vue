<template>
  <div>
   
    <div v-for="(item,index) in List" :key="index" >
       <van-card
     :price="`${item.price}`+'/月'"
    
     :desc="`${item.desc}`"
     :title="`${item.title}`"
     :thumb="url+item.houseImg"
>
  <template #tags>
    <van-tag plain type="danger" class="tags">{{item.tags[0]}}</van-tag>
  </template>
 
</van-card>
    </div>
  </div>
 
</template>

<script>
export default {
  props:{
    List:{
      type:Array,
      require:true
    }
  },

  data(){
    return{
     
      url:'http://liufusong.top:8080'
    }
  },
  components:{
  },
   created(){
   },
   computed:{
   },
   methods:{
   
   }
}
</script>
<style scoped lang='less'>
/deep/.van-card__price{
      font-size: 12px;
    color: #fa5741;
}
.tags{
  color: #39becd;
    background: #e1f5f8;
}
/deep/.van-card__desc {
    font-size: 12px;
    color: #afb2b3;
}
/deep/.van-card__title{
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