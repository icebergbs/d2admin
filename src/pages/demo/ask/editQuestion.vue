<template>
  <div>
     <el-form   ref="editQuestionForm"   label-width="72px"   style="margin:0px 60px;">   
      <el-form-item label="问题标题:"> 
        <el-input  value="用户提问问题标题？" >
        </el-input>
      </el-form-item>
      <el-form-item label="问题描述:"   >
          <el-input value="sdfe" type="textarea"   rows="4" placeholder="多行输入"  ></el-input>
      </el-form-item>
      <hr><br> 
      <el-form-item label="话题标签:"> 
        <!-- 遍历显示tags -->
        <div>
          <el-tag
            :key="tag"
            v-for="tag in dynamicTags"
            closable
            :disable-transitions="false"
            @close="handleClose(tag)">
            {{tag}}
          </el-tag>
        </div>
        <!-- 每输入一个，创建一个标签，添加到tags -->
        <el-input
          class="input-new-tag"
          v-if="inputVisible"
          v-model="inputValue"
          ref="saveTagInput"
          size="small"
          placeholder="输入话题"
          @keyup.enter.native="handleInputConfirm"
          @blur="handleInputConfirm"
        ></el-input>
        <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button> 
      </el-form-item>
      <el-form-item label="分类标签:"> 
        <!-- 遍历分类标签 选择器的值tags -->
        <div>
          <el-tag
            :key="val"
            v-for="val in value5"
            closable
            :disable-transitions="false"
            @close="handleClose(tag)">
            {{val}}
          </el-tag>
        </div> 
        <!-- select 选择项 存储选项的label值 -->
      <el-select v-model="value5" multiple placeholder="选择专业分类">
          <el-option   
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.label">
          </el-option>
      </el-select>
      </el-form-item>
      <hr>  <br>    
      <el-form-item label="问题状态:"   >
        <label>正常</label> 
         <el-button type="info" size="mini">隐藏问题</el-button>
          <el-button type="success" size="mini">回复正常</el-button>  
      </el-form-item>
     
      <el-form-item label="收藏状态:"  >
        <i class="el-icon-star-on " style="color:#409EFF;font-size:30px;"></i>
        <i class="el-icon-star-off " style="color:#606266;font-size:30px;"></i> 
      </el-form-item>
      <el-form-item align="center"> 
                <el-button type="primary" @click="submitForm('userForm')"  >保存修改</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        options: [{               // 下拉选项
          value: '选项1',
          label: '土木工程'
        }, {
          value: '选项2',
          label: '水利工程'
        }, {
          value: '选项3',
          label: '水木工程'
        }, {
          value: '选项4',
          label: '土木工程'
        }, {
          value: '选项5',
          label: '土木工程'
        }],
        value5: ['选项1'],
        dynamicTags: ['结构CAE', '结构CAE', '结构CAE'], //标签
        inputVisible: false,
        inputValue: ''      
      }
    },
    methods: {
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      }
    }
  
  }
</script>

<style scoped>
/*标签设置*/
 .el-tag {
    margin-right: 12px;
    margin-bottom: 10px;
  }
  .button-new-tag { 
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
/**/  
 
</style>

