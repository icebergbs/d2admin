<template>
    <div>
         <el-form   ref="userForm" :model="userForm" :rules="rules" label-width="85px" size="medium" style='width: 300px; margin-left:50px;'>
            <el-form-item label="用户名:" prop="name">
                <el-input v-model="userForm.name" placeholder="请输入 用户名"></el-input>
            </el-form-item>
            <el-form-item label="头像:">
               <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="userForm.imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
               </el-upload>
            </el-form-item>
            <el-form-item label="专业领域:" prop="field">
                <el-select v-model="userForm.field" placeholder="选择专业领域">
                    <el-option label="1" value="1"></el-option>
                    <el-option label="2" value="2"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="个性签名:" prop="sign">
               <el-input type="textarea" v-model="userForm.sign" placeholder="多行输入"></el-input>
            </el-form-item>
            <el-form-item label="账户类型:" prop="radio">
                <el-radio v-model="userForm.type" label="1">小号</el-radio>
                <el-radio v-model="userForm.type" label="2">官方账号</el-radio>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('userForm')">创建账户</el-button>
            </el-form-item>
         </el-form>
    </div>
</template>
<script>
export default {
    data(){
        return{
            userForm : {
                name:'',
                sign:'',
                field:'',
                imageUrl:'',
                type:1
            },
            imageUrl:'',
            rules:{
              name:[
                { required: true, message: '请输入活动名称', trigger: 'blur' },
                { min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur' }
              ],
              field:[
                { required: true, message: '请选择活动区域', trigger: 'change' }
              ],
              sign:[

              ],
              redio:[
                { required: true, message: '请选择活动资源', trigger: 'change' }
              ]
            }
            
        }
    },
    methods:{
        //头像上传处理
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
        },
        //表单提交
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
            if (valid) {
                alert('submit!');
            } else {
                console.log('error submit!!');
                return false;
            }
            });
      },
    }
    
}
</script>
<style>
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 10px;
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
    width: 88px;
    height: 88px;
    line-height: 88px;
    text-align: center;
  }
  .avatar {
    width: 88px;
    height: 88px;
    display: block;
  }
</style>
