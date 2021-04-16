<template>
  <div>
    
    <div>
      <div class="diyilie">
      <h2 style="margin-left:30px">购物天堂</h2>
      <div class="gouwuche" id="gwcan">

        <el-button type="primary"  style="margin-right:30px" >购物车</el-button>
      <div class="liebiao">
        <div v-for="(item,index) in shangp" :key="item.id" :index="index">
          <div v-if="item.count" >
            <div class="meiyilie">
           <div class="liebiaoxiang">{{item.name}}</div> 
            {{item.price}}*{{item.count}}
            <button @click="deleteItem(item.id)" class="shanchuta">删除</button>
            </div>
          </div>
        </div>
        <button style="width:150px" @click="buyAll()">购买</button>
      </div>
      </div>
      </div>

  <el-radio-group v-model="indexstyle" class="danxuan">
      <el-radio :label="1">网格</el-radio>
      <el-radio :label="2">列表</el-radio>
  </el-radio-group>
    <indexcar :shangp="shangp"  :getIcon="getIcon" :jiayi="jiayi" v-if="indexstyle == 1"></indexcar>
    <indexbdc  :shangp="shangp"  :getIcon="getIcon" :jiayi="jiayi" v-if="indexstyle == 2"></indexbdc>
    </div>
  </div>
</template>

<script>
import indexcar from './indexcar'
import indexbdc from './indexbdc'
export default {
  components:{
    indexcar,
    indexbdc,
  },
  methods: {
    getIcon(val){
    return val
    },
    jiayi(id){
      this.shangp[id].count++
      // console.log(this);
    },
    deleteItem(id){
      // console.log(this);
      this.shangp[id].count=0
    },
    buyAll(){
      // console.log(this);
      confirm(`
      您将购买${this.namex(this.shangp)}
      需要支付${this.scax(this.shangp)}元，确定吗
      `)
    }
  },
  computed:{
  //   actNum:function(){
  //     return this.data.shangp.filters(function (item){
  //       return item.count>0?item.count:''
  //     })
  //   }
  scax:function(){
     return function(shangp){
       let num=0
       const len=shangp.length
       for(let i=0;i<len;i++){
         num+=this.shangp[i].count*this.shangp[i].price
       }
       return num
    }
  },
  namex:function(){
    return function(shangp){
      let word=''
      const len=shangp.length
      for(let j=0;j<len;j++){
        if(shangp[j].count===0)continue
        word+=shangp[j].count+'个'+shangp[j].name
      }
      return word
    }
  }
  },
  data () {
    return {
      indexstyle:1,
      shangp:[
        { id:0,
          name:"苹果",
          image:require("../assets/pingguo.jpg"),
          price:10.99,
          count:0
        },
          { id:1,
          name:"橘子",
          image:require("../assets/juzi.jpg"),
          price:8.88,
          count:0
        },
          { id:2,
          name:"香蕉-广西香蕉新鲜小米蕉♂水果包邮香蕉小香蕉10斤自然熟当季批发",
          image:require("../assets/jiao.jpg"),
          price:30,
          count:0
        },
          { id:3,
          name:"葡萄",
          image:require("../assets/putao.jpg"),
          price:19,
          count:0
        },
          { id:4,
          name:"柚子",
          image:require("../assets/youzi.jpg"),
          price:9,
          count:0
        }
      ]
    }
  }
}
</script>

<style>
*{
  /* margin: 10px; */
}
.gouwuche{
  position: relative;
}
  .diyilie{
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* position: relative; */
  }
  .danxuan{
    /* float: right;
    margin: 0;
    padding: 0; */
  }


  .liebiao{
    /* width: 200px; */
    /* height: 200px; */
    border: 1px solid black;
    position:absolute;
    display: none;
    /* background-color: blue; */
    left: -68px;
    top: 40px;
    
  }
  #gwcan:hover .liebiao{
    display: block;
    /* align-items: center; */
    /* justify-content: center; */
  }
  .liebiaoxiang{
    width:80px;
    height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    position: relative;
    padding: 3px;
  }
  .meiyilie{
    display: flex;
    width: 120px;
  }
  .shanchuta{
    padding: 0;
    position: absolute;
    right: 0;
  }
</style>
