<template>
    <div style="padding-top:1rem">
        <el-collapse v-model="activeName" accordion>
            <el-collapse-item title="所有实验报告" name="1">
                <el-table :data="reportsList" highlight-current-row v-loading="listLoading"  style="width: 100%;">

                    <el-table-column prop="id" label="id" width="60" sortable>
                    </el-table-column>
                    <el-table-column prop="cname" label="实验名称" width="300"  sortable>
                    </el-table-column>
                    <el-table-column prop="sname" label="学生姓名" width="140" sortable>
                    </el-table-column>
                    <el-table-column prop="tmpId" label="模板id" width="120" sortable>
                    </el-table-column>
                    <el-table-column prop="grade" label="成绩" min-width="180" sortable>
                    </el-table-column>
                    <el-table-column label="操作" width="150">
                        <template scope="scope">
                            <el-button size="small" @click="handleEdit(scope.row)">查看</el-button>
                            <el-button type="danger" size="small" @click="handleDel(scope.row)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <div class="block">
                    <el-pagination
                        layout="prev, pager, next"
                        :total="totalPage1"
                        @current-change="changePage1"
                        :current-page.sync="currentPage1">
                    </el-pagination>
                </div>
            </el-collapse-item>
            <el-collapse-item title="通过id查看指定实验报告" name="2">
                <el-input class="search_input" v-model="search_id" placeholder="请输入课程id搜索" ></el-input><el-button type="primary" @click="searchReportById"><i class="el-icon-search"></i> 搜索</el-button>
                
                <el-table :data="findRes" highlight-current-row v-loading="loading2"  style="width: 100%;margin-top:1rem">
                    <el-table-column prop="id" label="id" width="60" sortable>
                    </el-table-column>
                    <el-table-column prop="cname" label="实验名称" width="300"  sortable>
                    </el-table-column>
                    <el-table-column prop="sname" label="学生姓名" width="100" sortable>
                    </el-table-column>
                    <el-table-column prop="tmpId" label="模板id" width="120" sortable>
                    </el-table-column>
                    <el-table-column prop="grade" label="成绩" min-width="180" sortable>
                    </el-table-column>
                    <el-table-column label="操作" width="150">
                        <template scope="scope">
                            <el-button size="small" @click="handleEdit(scope.row)">查看</el-button>
                            <el-button type="danger" size="small" @click="handleDel(scope.row)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-collapse-item>
            <el-collapse-item title="通过学号获得所有实验报告" name="3">
                <el-input class="search_input" v-model="search_id2" placeholder="请输入学号搜索" ></el-input><el-button type="primary" @click="searchReportByStudentId"><i class="el-icon-search"></i> 搜索</el-button>
                
                <el-table :data="findRes2" highlight-current-row v-loading="loading3"  style="width: 100%;margin-top:1rem">
                    <el-table-column prop="id" label="id" width="60" sortable>
                    </el-table-column>
                    <el-table-column prop="cname" label="实验名称" width="300"  sortable>
                    </el-table-column>
                    <el-table-column prop="sname" label="学生姓名" width="100" sortable>
                    </el-table-column>
                    <el-table-column prop="tmpId" label="模板id" width="120" sortable>
                    </el-table-column>
                    <el-table-column prop="grade" label="成绩" min-width="180" sortable>
                    </el-table-column>
                    <el-table-column label="操作" width="150">
                        <template scope="scope">
                            <el-button size="small" @click="handleEdit(scope.row)">查看</el-button>
                            <el-button type="danger" size="small" @click="handleDel(scope.row)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                 <div class="block">
                    <el-pagination
                        layout="prev, pager, next"
                        :total="totalPage2"
                        @current-change="changePage2"
                        :current-page.sync="currentPage2">
                    </el-pagination>
                </div>
            </el-collapse-item>
            <el-collapse-item title="通过课程模版ID和课程ID获得所有实验报告" name="4">
                <el-input class="search_input" v-model="corse_id" placeholder="请输入课程id" ></el-input>
                <el-input class="search_input" v-model="temp_id" placeholder="请输入模板id" ></el-input>
                <el-button type="primary" @click="searchReportByCourseIdAndTempId"><i class="el-icon-search"></i> 搜索</el-button>
                
                <el-table :data="findRes3" highlight-current-row v-loading="loading4"  style="width: 100%;margin-top:1rem">
                    <el-table-column prop="id" label="id" width="60" sortable>
                    </el-table-column>
                    <el-table-column prop="cname" label="实验名称" width="300"  sortable>
                    </el-table-column>
                    <el-table-column prop="sname" label="学生姓名" width="100" sortable>
                    </el-table-column>
                    <el-table-column prop="tmpId" label="模板id" width="120" sortable>
                    </el-table-column>
                    <el-table-column prop="grade" label="成绩" min-width="180" sortable>
                    </el-table-column>
                    <el-table-column label="操作" width="150">
                        <template scope="scope">
                            <el-button size="small" @click="handleEdit(scope.row)">查看</el-button>
                            <el-button type="danger" size="small" @click="handleDel(scope.row)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                 <div class="block">
                    <el-pagination
                        layout="prev, pager, next"
                        :total="totalPage3"
                        @current-change="changePage3"
                        :current-page.sync="currentPage3">
                    </el-pagination>
                </div>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>
<script>
    import {
        getAllReports_api,
        searchReportById_api,
        searchReportByStudentId_api,
        searchReportByCourseIdAndTempId_api
    } from '@/api/api.js'
  export default {
      async created() {
        const res = await getAllReports_api(this.currentPage1)
        if (res.status === 200) {
            this.reportsList = res.data.data.pageResult
            this.totalPage1 = res.data.data.totalPages * 10
            this.loading = false
        }else {
            this.$message.error('网络请求失败');
        }
      },
    data() {
      return {
        activeName: '1',
        listLoading:false,
        currentPage1: 1,
        currentPage2:1,
        currentPage3:1,
        totalPage1:10,
        totalPage2:10,
        totalPage3:10,
        
        reportsList:[],
        loading:true,
        loading2:false,
        loading3:false,
        loading4:false,
        search_id:'',
        search_id2:'',
        corse_id:'',
        temp_id:'',
        findRes:[],
        findRes2:[],
        findRes3:[],
      };
    },
    methods:{
        async changePage1(){
            const res = await getAllReports_api(this.currentPage1)
            if (res.status === 200) {
                this.reportsList = res.data.data.pageResult
                this.totalPage1 = res.data.data.totalPages * 10
                this.loading = false
            }else {
                this.$message.error('网络请求失败');
            }
        },
         async changePage2(){
            const res = await getAllReports_api(this.currentPage2)
            if (res.status === 200) {
                this.findRes2 = res.data.data.pageResult
                this.totalPage2 = res.data.data.totalPages * 10
                this.loading3 = false
            }else {
                this.$message.error('网络请求失败');
            }
        },
          async changePage3(){
            const res = await getAllReports_api(this.currentPage3)
            if (res.status === 200) {
                this.findRes3 = res.data.data.pageResult
                this.totalPage3 = res.data.data.totalPages * 10
                this.loading4 = false
            }else {
                this.$message.error('网络请求失败');
            }
        },
        handleEdit(row) {
            this.$router.push({path:'/report_detail', query:{
                info:row
            }})
        },
        async searchReportById(id){
            this.loading2 = true
            this.findRes = []
            if(isNaN(Number(this.search_id)) || this.search_id === '') {
                this.$message({
                    message:"请确保id有效",
                    type:'error'
                })
                this.search_id = ''
                return
            }
            const res = await searchReportById_api(this.search_id)  
            if(!res.data.meta.success){
                    this.$message({
                        message:res.data.meta.message,
                        type:'error'
                    })
                    this.search_id = ''
                    this.findRes = []
                    return
            }
            this.findRes.push(res.data.data.reportinfo)
            this.loading2 = false
        },
        async searchReportByStudentId(id){
            this.loading3 = true
            this.findRes2 = []
            if(isNaN(Number(this.search_id2)) || this.search_id2 === '') {
                this.$message({
                    message:"请确保id有效",
                    type:'error'
                })
                this.search_id2 = ''
                return
            }
            const res = await searchReportByStudentId_api(this.search_id2, 1)  
            if(!res.data.meta.success){
                    this.$message({
                        message:res.data.meta.message,
                        type:'error'
                    })
                    this.search_id2 = ''
                    this.findRes2 = []
                    return
            }
            this.totalPage2 = res.data.data.totalPages * 10
            this.findRes2 = res.data.data.pageResult
            this.loading3 = false
        },
        async searchReportByCourseIdAndTempId(id){
            this.loading4 = true
            this.findRes3 = []
            if(isNaN(Number(this.corse_id)) || isNaN(Number(this.temp_id)) || this.corse_id === '' || this.temp_id === '') {
                this.$message({
                    message:"请确保id有效",
                    type:'error'
                })
                this.corse_id = ''
                this.temp_id = ''
                return
            }
            const res = await searchReportByCourseIdAndTempId_api(this.corse_id, this.temp_id , 1)  
            if(!res.data.meta.success){
                    this.$message({
                        message:res.data.meta.message,
                        type:'error'
                    })
                    this.corse_id = ''
                    this.temp_id = ''
                    this.findRes3 = []
                    return
            }
            this.totalPage3 = res.data.data.totalPages * 10
            this.findRes3 = res.data.data.pageResult
            this.loading4 = false
        }
    }
  }
</script>

<style lang="less">
.search_input{
    width: 12rem;
    margin-right: 1rem;
}
</style>
