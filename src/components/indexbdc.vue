<template>
  <div>
    <div class="dacontent1">
    <div v-for="(item,index) in shangp" :key="item.id" :index="index" >
      <div class="baoni1">
      <div class="pic1">
        <img :src="getIcon(item.image)"  alt="">
      </div>
      <div class="shuzhi"> 
     <div class="mingzi1">{{item.name}}</div>
     <div class="jiage">{{item.price+'元'}}</div>
      </div>
      <div class="youce">
     <button class="jiagou1" @click="jiayi(item.id)">加入购物车</button>
      </div>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
export default {
  name:"indexbdc",
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

<style >
  .dacontent1{
    display: flex;
    flex-direction: column;
    margin: 10px;
    
  }
  .baoni1{
    display: flex;
    flex-wrap: wrap;
    border: 1px solid black;
    box-sizing: border-box;
    width: 85%;
    height: 130px;
    padding: 20px;
     margin: 10px;
    position: relative;
  }
  .pic1{
    width: 100px;
    height: 100px;
  }
  .pic1 img{
    width: 100%;
    height: 100%;
  }
  .jiagou1{
    height: 30px;
    padding: 0;
    /* margin-top: 5px;
    margin-left: 20px; */
  }
    .mingzi1{
    /* margin: 20px; */
    /* width:200px; */
    height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;/*强制不换行*/
    /* padding-left: 0; */
  }
    .shuzhi{
   
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 0;
    /* margin-left: -50px; */
  }
  .youce{
    /* border: 1px solid green; */
    height: 50px;
    position: absolute;
    right: 10px;
    bottom: 0px;
  }
</style>