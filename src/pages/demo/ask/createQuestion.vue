<template>
   <div>
     <el-form   ref="questionForm"   label-width="85px" size="small" style='width: 500px; margin-left:60px;'>
            <el-form-item label="问题标题:" prop="name"  >
                <el-input   placeholder="请输入问题" style="width:500px"></el-input>
            </el-form-item>
             <el-form-item label="问题描述:" prop="sign" >
               <el-input type="textarea"   rows="6" placeholder="多行输入" style="width:500px"></el-input>
            </el-form-item>
            <el-form-item label="问题配图:">
               <el-upload
                class="avatar-uploader inblock"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl"   class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
               </el-upload>
               <label>&nbsp;(选填)</label>
            </el-form-item>
             <el-form-item label="问题悬赏:" prop="sign">
               <el-input      placeholder="输入悬赏金币数额" class="inp"></el-input> &nbsp;&nbsp;(选填) 
            </el-form-item> 
            <el-form-item label="话题标签:" prop="sign">
               <el-input        placeholder="输入话题" class="inp"></el-input>
               &nbsp;  
               <el-button type="primary" size="mini">添加</el-button>
            </el-form-item> 
            <el-form-item label="发布账号:" prop="sign">
               <el-input     placeholder="输入账号" class="inp" ></el-input> 
               &nbsp;
               <el-button type="primary"  size="mini">随机一个</el-button>
            </el-form-item> 
            <br>
            <el-form-item align="center"> 
                <el-button type="primary" @click="submitForm('userForm')" size="medium">确认发布</el-button>
            </el-form-item>
         </el-form>
   </div>
</template>
<script>
export default {
   data() {
      return {
        imageUrl: ''
      };
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }  
}
</script>

<style sccped>
.inp{
  width: 215px;
}
.inblock{
   display: inline-block;
}
 .avatar-uploader .el-upload {
    border: 1px solid #d9d9d9;
    cursor: pointer;
    position: relative;
    overflow: hidden; 
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 78px;
    height: 78px;
    line-height: 78px;
    text-align: center;
  }
  .avatar {
    width: 78px;
    height: 78px;
    display: inline-block;
  }
</style>

