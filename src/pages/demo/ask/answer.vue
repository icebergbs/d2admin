<template>
  <div>  
    <el-form   ref="answerForm"     label-width="72px"   style="margin:0px 50px;">   
      <el-form-item label="问题标题:"> 
        <label>用户提问问题标题？</label>
      </el-form-item>
      <hr><br>      
      <el-form-item label="问题回答:" prop="sign" >
        <el-input type="textarea"   rows="15" placeholder="多行输入" size="small">
                  
        </el-input>
      </el-form-item>
      <br>
      <el-form-item label="发布账号:"  >
        <el-input   placeholder="请输入账号" size="small" style="width:215px;" ></el-input>
         &nbsp;
        <el-button type="primary"  size="mini">随机一个</el-button>
      </el-form-item>
      <el-form-item align="center"> 
                <el-button type="primary" @click="submitForm('userForm')"  >确认发布</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
