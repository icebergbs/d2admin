<template>
   <div >
     <div style="margin: 0px 130px;">
        <div style="display: inline-block;position:absolute;">
          <img v-if="false"    class="avatar">
          <i v-else class="el-icon-picture avatar-uploader-icon"></i>
        </div>
      
       <ul style="list-style-type:none;display:inline">
         <li>
           <label class="lab">用户名： {{userInfo.name}}</label>
           <label class="lab">ID： {{userInfo.id}}</label>
         </li>
         <li>
           <label class="lab">账号身份： {{userInfo.type}}</label>
            <label class="lab">专业领域： {{userInfo.field}}</label>
         </li>
         <li>
           <label>注册日期： {{userInfo.date}}</label>
         </li>
         <li>
           <label>最近登录： {{userInfo.currLoginTime}}</label>
         </li>
         <hr> 
         <li>
          <label>专业分： {{userInfo.grade}}</label>
          <!-- 扣减操作 -->
          <el-popover
            placement="right-end"
            width="200"
            v-model="visible2">
            <el-form ref="scoreForm" :model="scoreForm" label-width="74px" size="mini" > 
              <el-form-item   label="扣减分值:"  style="margin-bottom:8px;" >
                <el-input-number  v-model="scoreForm.score" controls-position="right" size="mini" style="width:88px"></el-input-number>
              </el-form-item>
              <el-form-item label="理由:" style="margin-bottom:8px" >
                <el-input type="textarea" v-model="scoreForm.cause"></el-input>
              </el-form-item>
            </el-form>
            <div style="text-align: right; margin: 0">
              <el-button size="mini" type="text" @click="visible2 = false">取消</el-button>
              <el-button type="primary" size="mini" @click="visible2 = false">确定</el-button>
            </div>
            <el-button slot="reference"  class="btn"   type="primary" size="small">扣减</el-button>
          </el-popover>
          <!-- 增加操作 -->
          <el-popover
            placement="right-end"
            width="200"
            v-model="visible1">
            <el-form ref="scoreForm" :model="scoreForm" label-width="74px" size="mini" > 
              <el-form-item   label="增加分值:"  style="margin-bottom:8px;" >
                <el-input-number  v-model="scoreForm.score" controls-position="right" size="mini" style="width:88px"></el-input-number>
              </el-form-item>
              <el-form-item label="理由:" style="margin-bottom:8px" >
                <el-input type="textarea" v-model="scoreForm.cause"></el-input>
              </el-form-item>
            </el-form>
            <div style="text-align: right; margin: 0">
              <el-button size="mini" type="text" @click="visible2 = false">取消</el-button>
              <el-button type="primary" size="mini" @click="visible2 = false">确定</el-button>
            </div>
            <el-button slot="reference"  class="btn"   type="primary" size="small">增加</el-button>
          </el-popover>
         </li>
         <hr>
         <li>
           <label>账号绑定</label>
         </li>
         <li>
           <label>手机号：{{userInfo.phoneNumber}}</label>
            <el-button class="btn" type="primary" size="small">解绑</el-button>
         </li>
         <li>
           <label>&nbsp;&nbsp; 微信：{{userInfo.phoneNumber}}</label>
            <el-button class="btn" type="primary" size="small">解绑</el-button>
         </li>
         <li>
           <label>&nbsp; &nbsp;&nbsp;&nbsp;QQ：{{userInfo.phoneNumber}}</label>
            <el-button class="btn" type="primary" size="small">解绑</el-button>
         </li>
         <hr>
         <li>
           <label>账号状态：<span  class="state">禁言一周</span>  ({{userInfo.date}}日截止) </label>
            <el-button class="btn" type="primary" size="small">恢复正常</el-button>
         </li>
         <li>
           <label>违规处罚：</label>
            <el-button class="btn" type="danger" size="small">永久禁言</el-button>
            <el-button class="btn" type="warning" size="small">禁言一月</el-button>
            <el-button class="btn" type="warning" size="small">禁言一周</el-button>
         </li>
         <li>
           <label></label>
           <el-button class="btn" type="danger" size="small">冻结禁言</el-button>
            <el-button class="btn" type="warning" size="small">冻结一月</el-button>
            <el-button class="btn" type="warning" size="small">冻结一周</el-button>   
         </li>
           <hr>
         <li style="text-align:center;">
         
            <el-button  type="danger" >注销账户</el-button>   
         </li>
       </ul>
 
     </div> 
   </div>
</template>
<script>
export default {
   data(){
     return{
        userInfo:{
          id: '123',
          name: 'xx',
          type:'小号',
          field:'土木工程',
          date:'2016-08-23',
          currLoginTime:'2016-08-23  18:20:20',
          grade:'666',
          phoneNumber: '136666666'
        },
        visible1:false,
        visible2:false,
        scoreForm:{
          score:1,
          cause:''
        }
     }
   },
   methods:{
     scoreOpe(){

     }
   }

}
</script>
<style scoped>
.avatar { 
    width: 56px;
    height: 56px;
    line-height: 20px;
    text-align: center;
    border: 1px solid rgba(187, 187, 187, 1);
    display: inline-block;
    border-radius: 28px;
     

  }
.avatar-uploader-icon { 
    width: 56px;
    height: 56px;
    line-height: 20px;
    text-align: center;
    border: 1px solid rgba(187, 187, 187, 1);
    border-radius: 28px; 
    display: inline-block; 

  }  
  label{
    height: 23px;
    line-height: 20px;
    color: rgba(16, 16, 16, 1);
    font-size: 14px;
    font-family: Roboto;
    margin-right: 50px;
  }
  
  .lab{
     display: inline-block;
     width: 150px;  /*控制用户详情 前两行 */
  }
  li,hr{
    margin-bottom: 28px;
  }
  li{
    margin-left: 66px; /*左边外边框 控制与头像距离*/
  }
  .state{
    width: 57px;
    height: 41px;
    line-height: 41px;
    color: rgba(16, 16, 16, 1);
    font-size: 28px;
    text-align: center;
    font-family: Roboto;
  }
  .btn{
    float: right;
    margin-right: 24px;
  }
  .btn+.btn{
    margin-left: 0px;
  }

</style>
