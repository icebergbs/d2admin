<template>
   
    <el-form   ref="userRecommendForm"     label-width="128px"  style='width: 648px; margin-left:25px;'>
      <el-form-item label="选择推送至的专业:"  >
        <template slot-scope="scope"> 
         <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange" >
           全选</el-checkbox>
          <!-- <div style="margin: 15px 0;"></div> -->
          <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange" >
            <el-checkbox v-for="city in cities" :label="city" :key="city" style="width:150px;">{{city}}</el-checkbox>
          </el-checkbox-group>
        </template>
      </el-form-item>
    </el-form>
  
</template>
<script>
  const cityOptions = ['上海是是是', '北京', '广州是是是', '深圳','杭州是是是收水电','郑州'];
  export default {
    data() {
      return {
        checkAll: false,
        checkedCities: ['上海', '北京'],
        cities: cityOptions,
        isIndeterminate: true
      };
    },
    methods: {
      handleCheckAllChange(val) {
        this.checkedCities = val ? cityOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      }
    }
  };
</script>
<style >
 .el-checkbox__inner{
  height: 18px;
  width: 18px;
}
.el-checkbox{
  margin-right: 20px;
}
.el-checkbox+.el-checkbox{
  margin-left: 0px;
}
</style>
