<template>
    <Container type="ghost" :responsive="true" >
        <el-card class="box-card">
          <div class="clearfix" slot="header">
             <!-- 顶部 -->     
                    <!-- 搜索条件 -->
                    <div style="height:60px">
                      <div style=" float:right;margin-top:20px;">
                        <el-input @keyup.enter.native="handleFilter" style="width: 200px; padding-left: 15px;" class="filter-item" placeholder="输入搜索内容" >
                        </el-input>
                        <el-button class="filter-item"  @click="handleFilter"  type="primary" icon="el-icon-search"></el-button> 
                        <el-button type="primary" @click="addUser"><i class="el-icon-edit"></i>新增用户</el-button>
                      </div>
                       <label class="lab">用户管理</label>
                    </div>
                      
                   <div style="padding-top:20px;">
                       <!-- 筛选条件 -->
                    <div style="float:right">
                        <el-select v-model="value11"   clearable  size="mini" placeholder="账号身份">
                          <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                          </el-option>
                        </el-select>
                        <el-select
                            v-model="value11" 
                            clearable
                            size="mini" 
                            style="margin-left: 8px;"
                            placeholder="专业领域">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        <el-select
                            v-model="value11" 
                            size="mini" 
                            clearable
                            style="margin-left: 8px;"
                            placeholder="专家分">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        <el-select
                            v-model="value11" 
                            clearable
                            size="mini" 
                            style="margin-left: 8px;"
                            placeholder="账号状态">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        <el-select
                            v-model="value11" 
                            clearable
                            size="mini" 
                            style="margin-left: 8px;"
                            placeholder="收藏状态">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        <el-button class="filter-item" type="primary"  size="mini"  @click="handleFilter">筛选</el-button> 
                         <hr>
                    </div>
                     <el-button type="primary" @click="betchRecommend" size="small" >批量推荐</el-button> 
                   </div>              
          </div>
          <div class="tables">
            <!-- 表格 -->
            <el-table ref="userManageTable" :data="userList" element-loading-text="拼命加载中" border  fit highlight-current-row>
                <el-table-column type="selection"   width="65">

                </el-table-column>
                <el-table-column prop="id" label="用户ID" width="">
                      
                </el-table-column>
                <el-table-column label="用户信息" width="">
                    
                </el-table-column>
                <el-table-column label="账号绑定" width="">
                    
                </el-table-column>
                <el-table-column label="账号身份" width="">
                    
                </el-table-column>
                <el-table-column label="专业领域" width="">
                    
                </el-table-column>
                <el-table-column label="专家分" width="">
                    
                </el-table-column>
                <el-table-column label="账号状态" width="">
                    
                </el-table-column>
                <el-table-column label="注册日期" width="">
                    
                </el-table-column>
                <el-table-column label="最后登录" width="">
                    
                </el-table-column>
                <el-table-column label="收藏" width="">
                    
                </el-table-column>
                <el-table-column label="推荐" width="">
                  <template slot-scope="scope">
                    <el-button type="primary" @click="betchRecommend" size="mini" >推荐</el-button> 
                  </template>
                 
                </el-table-column>
                <el-table-column label="操作" width="">
                  <template slot-scope="scope">
                    <el-button type="primary"  @click="manageOpe" size="mini">管理操作</el-button>
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
        <!-- 新增用户 弹窗 -->
        <el-dialog title="创建用户：" :visible.sync="dialogFormVisible" width="800px" >
          <UserAdd></UserAdd>
        </el-dialog>
        <!-- 用户推荐操作 -->
        <el-dialog title="用户推荐操作" :visible.sync="dialogUserRecommendVisible" width="800px" center>
          <user-recommend></user-recommend>
        </el-dialog>
        <!-- 操作管理 弹窗 -->
        <el-dialog class="man-ope" title="用户详情：" :visible.sync="dialogUserDetailVisible"  width="800px" >
           <UserManageOpe></UserManageOpe>
        </el-dialog>

    </Container>
     
</template>
<script>
import UserAdd from './userAdd'
import UserRecommend from './userRecommend'
import UserManageOpe from './userManageOpe'

export default {
    components:{
        UserAdd,
        UserRecommend,
        UserManageOpe
    },
    data(){
        return{
            value11: '',
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
            dialogFormVisible: false,
            dialogUserRecommendVisible: false,
            dialogUserDetailVisible: false     
        }
       
    },
    methods:{
        //添加用户
        addUser(){
            this.dialogFormVisible = true;
        },
        //操作管理
        manageOpe(){
          this.dialogUserDetailVisible = true;
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
          this.dialogUserRecommendVisible = true;
          // this.$confirm('确认推荐选中用户 ?', '提示', {
          //   confirmButtonText: '确定',
          //   cancelButtonText: '取消',
          //   type: 'info'
          // }).then(() => {
          //   this.$message({
          //     type: 'success',
          //     message: '推荐成功!'
          //   });
          // }).catch(() => {
          //   this.$message({
          //     type: 'info',
          //     message: '推荐失败!'
          //   });          
          // });
       }
    }
}
</script>
<style scoped>
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
</style>
<style>
.man-ope .el-dialog__body{
  padding: 0px 20px;
}
</style>
 




