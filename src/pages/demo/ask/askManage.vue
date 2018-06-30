<template>
  <Container type="ghost" :responsive="true"  >
        <el-card class="box-card">
          <div class="clearfix" slot="header">
             <!-- 顶部 -->   
                <!-- <div class="filter-container">                     -->
                    <!-- 搜索条件 -->
                    <div style="height:60px">
                     
                      <div style="float:right;margin-top:20px;">
                        <el-input @keyup.enter.native="handleFilter" style="width: 200px;" class="filter-item" placeholder="输入搜索内容" >
                        </el-input>
                        <el-button class="filter-item"  @click="handleFilter"  type="primary" icon="el-icon-search"></el-button>
                        &nbsp;&nbsp;
                        <el-button type="primary" @click="addQuestion"><i class="el-icon-edit"></i>新建提问</el-button>
                      </div>
                       <label class="lab">问答管理</label>
                    </div>
                      
                     
                   <div style="padding-top:20px;">
                    <!-- 筛选条件 -->
                    <div style="float:right;">
                        <el-select v-model="value11.ansNum"   clearable  size="mini" placeholder="回答数">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        <el-select
                            v-model="value11.category" 
                            clearable
                            size="mini" 
                            style="margin-left: 8px;"
                            placeholder="专业分类">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        <el-select
                            v-model="value11.state" 
                            clearable
                            size="mini" 
                            style="margin-left: 8px;"
                            placeholder="状态">
                            <el-option
                            v-for="(item , index) in ['正常','隐藏']"
                            :key="index"
                            :label="item"
                            :value="index">
                            </el-option>
                        </el-select>
                        <el-select
                            v-model="value11.collect" 
                            clearable
                            size="mini" 
                            style="margin-left: 8px;"
                            placeholder="收藏">
                            <el-option
                            v-for="(item , index) in ['已收藏','未收藏']"
                            :key="index"
                            :label="item"
                            :value="index">
                            </el-option>
                        </el-select>
                        <el-button class="filter-item" type="primary"  size="mini"  @click="handleFilter">筛选</el-button> 
                        <hr>
                    </div> 

                     <el-button type="primary" @click="betchRecommend" size="small" >推荐</el-button> 
                     <el-button type="primary" @click="betchHide" size="small" >隐藏</el-button> 
                   </div>              
                <!-- </div> -->
          </div>
          <div class="tables">
            <!-- 表格 -->
            <el-table ref="userManageTable" :data="userList" element-loading-text="拼命加载中" border  fit highlight-current-row>
                <el-table-column type="selection" width="65">

                </el-table-column>
                <el-table-column prop="id" label="问题ID" width="">
                      
                </el-table-column>
                <el-table-column label="问题标题" width="">
                    
                </el-table-column>
                <el-table-column label="提问者" width="">
                    
                </el-table-column>
                <el-table-column label="回答数" width="">
                    
                </el-table-column>
                <el-table-column label="话题标签" width="">
                    
                </el-table-column>
                <el-table-column label="专业分类" width="">
                    
                </el-table-column>
                <el-table-column label="账号状态" width="">
                    
                </el-table-column>
                <el-table-column label="状态" width="">
                    
                </el-table-column>
                <el-table-column label="推荐" width="94" align="center">
                  <template slot-scope="scope">
                    <div><label>上次推荐</label></div>
                    <div> <label>2018-08-08</label></div>                 
                    <el-button type="primary" @click="betchRecommend" size="mini" >推荐</el-button>    
                  </template>
                   
                </el-table-column>
                <el-table-column label="收藏" width="">
                    
                </el-table-column>
                <el-table-column label="操作" width="100" align="center">
                  <template slot-scope="scope"  >
                    <el-button type="primary"  @click="answer" size="mini"  style="width:70px;" >回答</el-button>
                    <el-button type="primary"  @click="editQuestion" size="mini" style="width:70px;">编辑</el-button>
                    <el-button type="primary"  @click.native="active({name:'demo-ask-askManage-lookAnswer'})" size="mini" style="width:70px;" >查看回答</el-button>
                  </template>
                     
                </el-table-column>  
            </el-table>
          </div>
          <!-- 分页 -->
          <div  class="pagination-container">  
            <el-pagination
            background
            @current-change="handleCurrentChange"
            :current-page="listQuery.currPage"
            :page-size="listQuery.pageSize"
            layout="total, prev, pager, next, jumper"
            :total="400">
            </el-pagination>
          </div>
       
        </el-card>
        <!-- 新建提问 弹窗 -->
        <el-dialog title="提问" :visible.sync="dialogAddQuestionVisible" width="800px" center >
          <CreateQuestion></CreateQuestion>
        </el-dialog>
        <!-- 回答 弹窗 -->
        <el-dialog  title="回答" :visible.sync="dialogAnswerVisible"  width="800px" center >
            <Answer></Answer>
        </el-dialog>
        <!-- 编辑 弹窗 -->
        <el-dialog title="编辑问题" :visible.sync="dialogEditQuestionVisible" width="800px" center >
           <EditQuestion></EditQuestion>
        </el-dialog>


  </Container>
</template>
<script>
 import CreateQuestion from './createQuestion'
 import Answer from './answer'
 import EditQuestion from './editQuestion'

export default {
    components:{
        CreateQuestion,
        Answer,
        EditQuestion
    },
    data(){
        return{
            value11: [
              {ansNum:''},
              {category:''},
              {state:''},
              {collect:''}

            ],
            options: [{
                value: '选项1',
                label: '小号'
                }, {
                value: '选项2',
                label: '官方'
                }, {
                value: '选项3',
                label: '普通'
                }, {
                value: '选项4',
                label: '专家'
                }] ,
            userList:[ 
              {id:1},
              {id:2},
              {id:3},
              {id:4},
              {id:5 },
              {id:6},
              { id:7 },
              {id:8},
              {id:9},
              {id:10},
              {id:11},
              {id:12},
              {id:13}],
            listQuery:{            //分页参数
                currPage :1,
                pageSize: 20
            },
            dialogAddQuestionVisible: false,
            dialogAnswerVisible: false,
            dialogEditQuestionVisible: false     
        }
       
    },
    methods:{
        //新建提问
        addQuestion(){
            this.dialogAddQuestionVisible = true;
        },
        //回答
        answer(){
          this.dialogAnswerVisible = true;
        },
        //编辑
        editQuestion(){
          this.dialogEditQuestionVisible = true;
        },
        //搜索
        handleFilter(){
            
        },
        //操作分页
        handleCurrentChange(val){
            console.log(`每页 ${val} 条`)
        },
       //批量推荐
       betchRecommend(){
          this.$confirm('确认推荐选中用户 ?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'info'
          }).then(() => {
            this.$message({
              type: 'success',
              message: '推荐成功!'
            });
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '推荐失败!'
            });          
          });
       },
       //批量隐藏
       betchHide(){
        this.$confirm('确认隐藏选中用户 ?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'info'
          }).then(() => {
            this.$message({
              type: 'success',
              message: '隐藏成功!'
            });
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '隐藏失败!'
            });          
          });
       },
       // 跳转到某个路由
        active (item) {
          this.$router.push({
            name: item.name
          })
        }
    }
}
</script>
<style scoped>
  .demo-askManage{
      padding: 20px;
  } 
  .el-select{
      width: 122px;
  }
   
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  
  hr{
       margin-bottom: 0px;
  }
  .el-button+.el-button{
    margin-top: 3px;
    margin-left: 0px;
  }
</style>
<style>
/* .man-ope .el-dialog__body{
  padding: 0px 20px;
} */
</style>





