<template>
  <div>
      <div class="HSearch">
           <select style="width:29%;float:left;">
               <option>杭州市</option>
           </select>
           <input type="text" style="width:69%;float:left">
      </div>
     
  </div>
</template>

<script>
export default {
   data(){
       return{
           value:''
       }
   }
}
</script>

<style>
  .HSearch{
      height: 36px;
      padding: 7px 0px;
      background-color: #46aaff;
      overflow: hidden; *zoom: 1;
  }
  .HSearch select,input{
    height: 36px;
    line-height: 36px;
    border: 0;
    background-color: #46aaff;
    outline-style: none;
    color: #fff;
  }
  .HSearch input{
    background-color: #fff;
  }
</style>
