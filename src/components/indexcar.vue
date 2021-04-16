<template>
  <div>
    <div class="dacontent">
    <div v-for="(item,index) in shangp" :key="item.id" :index="index" >
      <div class="baoni">
      <div class="pic">
        <img :src="getIcon(item.image)"  alt="">
      </div>
      <div class="bufh">
     <div class="mingzi">{{item.name}}</div>
     <div class="jiage">{{item.price+'元'}}</div>
      </div>
     <button class="jiagou" @click="jiayi(item.id)">加入购物车</button>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
export default {
  name:"indexcar",
  props:{
    shangp:{
      type:Array,
      required:true
    },
    getIcon:{
      type:Function,
      required:true
    },
    jiayi:{
      type:Function,
      required:true
    }
  }
}
</script>

<style>
  .mingzi{
    width:200px;
    height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;/*强制不换行*/
  }
    .jiagou{
    height: 30px;
    padding: 0;
    margin-top: 5px;
    margin-left: 20px;
  }
  .pic{
    width: 350px;
    height: 350px;
  }
  .pic img{
    width: 100%;
    height: 100%;
  }
  .baoni{
    display: flex;
    flex-wrap: wrap;
    border: 1px solid black;
    box-sizing: border-box;
    width: 400px;
    height: 430px;
    padding: 20px;
  margin: 10px;
  }
  .dacontent{
    display: flex;
    flex-wrap: wrap;
    margin: 10px;
  }
  .bufh{
    margin-top: 10px;
    display: flex;

  }
</style>
