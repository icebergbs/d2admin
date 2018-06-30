<template>
  <Container type="ghost" :responsive="true"  >
 
    <el-card class="box-card">
       <div class="clearfix" slot="header">
    
          <!-- 顶部 --> 
          <div>
            <div style=" float:right;margin-top:20px;">     
              <el-button type="primary" size="small" @click.native="active({name:'demo-ask-askManage'})">返回</el-button>
            </div>
            <label class="lab">回答列表</label>
          </div>
          <div style="margin:auto;width:500px;height:60px;border: 1px solid;display: flex;justify-content:center;align-items:center">
            <label style="margin-right:45px;">问题ID：134355</label><label>格局生变 内容产业未来何去何从？</label>
          </div> 
          <div> 
            <el-button type="primary" @click="betchRecommend" size="small" >批量推荐</el-button>    
          </div>    
       </div>
 
       <div class="tables">
            <!-- 表格 -->
            <el-table ref="answerListTable" :data="answerList" element-loading-text="拼命加载中" border  fit highlight-current-row>
                <el-table-column type="selection" width="65">

                </el-table-column>
                <el-table-column prop="id" label="回答ID" width="">
                      
                </el-table-column>
                <el-table-column label="回答内容" width="">
                    
                </el-table-column>
                <el-table-column label="回答者信息" width="">
                    
                </el-table-column>
                <el-table-column label="支持数" width="">
                    
                </el-table-column>
                <el-table-column label="评论数" width="">
                    
                </el-table-column>
                <el-table-column label="采纳" width="">
                    
                </el-table-column>
                <el-table-column label="状态" width="">   
                    
                </el-table-column>
                <el-table-column label="推荐" width="" align="center">
                   <template slot-scope="scope">
                    <div><label>上次推荐</label></div>
                    <div> <label>2018-08-08</label></div>                 
                    <el-button type="primary" @click="betchRecommend" size="mini" >推荐</el-button> 
                   </template>  
                </el-table-column>
                <el-table-column label="收藏" width=""> 
                  <template slot-scope="scope"> 
                    <i class="el-icon-star-on " style="color:#409EFF;font-size:30px;"></i>
                    <i class="el-icon-star-off " style="color:#606266;font-size:30px;"></i> 
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
    
  </Container>
</template>
<script>
export default {
  data(){
    return{
      answerList:[{id:1},
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
      }
    }
  },
  methods:{
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
       //操作分页
        handleCurrentChange(val){
            console.log(`每页 ${val} 条`)
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
