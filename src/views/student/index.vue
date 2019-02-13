<template>
    <div class="student_list">
        
        <div class="header">
            <div class="search">    
                <el-input class="search_input" v-model="search_id" placeholder="请输入学生id搜索" ></el-input><el-button type="primary" @click="search"><i class="el-icon-search"></i> 搜索</el-button>
            </div>
            <div class="add">
                <el-button type="danger" @click="()=>{this.$router.push('/add_student')}"><i class="el-icon-plus"></i> 添加学生</el-button>
            </div>
        </div>
        <div style="clear:both"></div>
        <div class="find_res" v-if="findShow">
            <el-card class="box-card" v-if="findRes.id">
                <div slot="header" class="clearfix">
                    <strong>查询结果</strong>
                </div>
                <div v-loading="loading2" class="clearfix">
                    <img :src="findRes.img" alt="" class="find_img">
                    <div class="find_info">
                        <div>姓名：{{findRes.realname}}</div>
                        <div>id：{{findRes.id}}</div>
                        <div>注册时间：{{findRes.jointime}}</div>
                        <div>班级：{{findRes.classname}}</div>
                        <div>学校：{{findRes.college}}</div>
                        <div>学号：{{findRes.number}}</div>
                        <div>地址：{{findRes.location}}</div>
                        <br>
                        <el-button @click="handleFind(findRes)">查看详情</el-button>
                        <el-button type="danger" @click="deletestudent(findRes)">删除学生</el-button>
                    </div>
                    <div class="find_desc">
                        <h3>个性签名</h3>
                        {{findRes.tdescribe}}
                    </div>
                </div>
            </el-card>
        </div>
        <el-table
            :data="studentList"
            border
            style="width: 100%"
            v-loading="loading">
            <el-table-column
            prop="id"
            label="id"
            width="60"
            >
            </el-table-column>
            <el-table-column
            prop="realname"
            label="姓名"
            width="80"
           >
            </el-table-column> 
            <el-table-column
            prop="jointime"
            label="注册时间"
            width="180"
            >
            </el-table-column>          
            <el-table-column
            prop="number"
            label="学号"
            width="60"
            >
            </el-table-column>
            <el-table-column
            prop="location"
            label="家庭住址"
            >
            </el-table-column>
            <el-table-column
            prop="classname"
            label="所在班级"
            width="180"
            >
            </el-table-column>
            <el-table-column
            prop="college"
            label="学校"
            >
            </el-table-column>
            <el-table-column
            label="操作"
            width="120"
            >
                <template slot-scope="scope">
                    <el-button @click="handleFind(scope.row)" type="text" size="small">查看</el-button>
                    <el-button @click="deletestudent(scope.row)" type="text" size="small"><span style="color:red">删除</span></el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="block">
            <el-pagination
                layout="prev, pager, next"
                :total="totalPage"
                @current-change="changePage"
                :current-page.sync="currentPage">
            </el-pagination>
        </div>
    </div>
</template>

<script>

import {
    getAllStudent_api,
    searchStudent_api,
    deleteMyStudent_api,
    // addStudent_api
} from '@/api/api.js'
import {
    formatSeconds
} from '@/api/tools.js'
import { create } from 'domain';

export default {
    async created() {
        const pages = 1
        const res = await getAllStudent_api(pages)
        console.log(res)
        if (res.status === 200) {
            this.studentList = res.data.data.pageResult
            this.totalPage = res.data.data.totalPages * 10
            this.loading = false
        }else {
            this.$message.error('网络请求失败');
        }
    },
    data() {
        return {
            studentList: [],
            loading:true,
            loading2:true,
            search_id:'',
            findShow:false,
            findRes:{},
            totalPage:10,
            currentPage:1
        }
    },
    methods: {
      handleFind(row) {
        this.$router.push({path:'/student_detail', query:{
            info:row
        }})
      },
      async changePage(e) {
        const res = await getAllStudent_api(e)
        if (res.status === 200) {
            this.studentList = res.data.data.pageResult
            this.totalPage = res.data.data.totalPages * 10
            this.loading = false
        }else {
            this.$message.error('网络请求失败');
        }
      },
      async search(){
          this.findShow = true
          if(isNaN(Number(this.search_id)) || this.search_id === '') {
              this.$message({
                  message:"请确保id有效",
                  type:'error'
              })
              this.search_id = ''
              return
          }
          const res = await searchStudent_api(this.search_id)  
          if(!res.data.meta.success){
                this.$message({
                    message:res.data.meta.message,
                    type:'error'
                })
                this.search_id = ''
                this.findRes = {
                    cname:"",
                    img:"",
                    teacher:{
                        tname:""
                    },
                    createdtime:"",
                    id:"",
                    count:""
                }
                return
          }
          this.findRes = res.data.data.studentinfo
          this.loading2 = false
      },
      deletestudent(row) {
        this.$confirm('此操作将永久删除该课程, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'error'
        }).then(async () => {
            const res = await deleteMyStudent_api(row.id)
            console.log(res)
            if (res.status === 200) {
                 this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
                const res2 = await getAllStudent_api(1)
                console.log(res2)
               
                this.loading = true
                this.findShow = false
                this.findRes = {}
                this.studentList = res2.data.data.pageResult
                this.currentPage = 1
                this.loading = false 
            }
        }).catch(() => {
            this.$message({
                type: 'error',
                message: '删除失败'
            });          
        });
      },
    },
}
</script>


<style lang="less">
    .student_list{
        .header {
            .search{
                float: left;
                .search_input{
                    width: 12rem;
                    margin-right: 1rem;
                }
            }
            .add{
                float: right
            }
            
            height: 3rem;
            margin-top: 1rem;
        }
        .box-card{
            width: 100%;
            margin-bottom: 2rem;
        }
        .find_img{
            float: left;
            height: 16rem;
            width: 25%
        }
        .find_info{
            float: left;
            margin-left: 2rem;
            width: 22%
        }
        .find_info div{
            line-height: 2em;
        }
        .find_desc{
            float: left;
            margin-left: 2rem;
            width: 43%;
        }
    }
    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }

    .box-card {
        width: 480px;
    }
</style>
