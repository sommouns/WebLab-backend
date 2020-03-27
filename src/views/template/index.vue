<template>
    <div class="template_list">
        
        <div class="header">
            <div class="search">    
                <el-input class="search_input" v-model="search_id" placeholder="请输入学生id搜索" ></el-input><el-button type="primary" @click="search"><i class="el-icon-search"></i> 搜索</el-button>
            </div>
            <div class="add">
                <el-button type="danger" @click="()=>{this.$router.push('/add_template')}"><i class="el-icon-plus"></i> 添加学生</el-button>
            </div>
        </div>
        <div style="clear:both"></div>
        <div class="find_res" v-if="findShow">
            <el-card class="box-card" v-if="findRes.id">
                <div slot="header" class="clearfix">
                    <strong>查询结果</strong>
                </div>
                <!-- <div v-loading="loading2" class="clearfix">
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
                        <el-button>查看详情</el-button>
                        <el-button type="danger" @click="deletetemplate(findRes)">删除学生</el-button>
                    </div>
                    <div class="find_desc">
                        <h3>个性签名</h3>
                        {{findRes.tdescribe}}
                    </div>
                </div> -->
            </el-card>
        </div>
        <el-table
            :data="templateList"
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
            prop="cname"
            label="名称"
           >
            </el-table-column> 
            <el-table-column
            prop="createdby"
            label="创建者"
            >
            </el-table-column>          
            <el-table-column
            prop="createtime"
            label="创建时间"
            >
            </el-table-column>
            
            <el-table-column
            label="操作"
            width="120"
            >
                <template slot-scope="scope">
                    <el-button @click="handleFind(scope.row)" type="text" size="small">查看</el-button>
                    <el-button @click="deletetemplate(scope.row)" type="text" size="small"><span style="color:red">删除</span></el-button>
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
    getAllTemplate_api,
    searchTemplate_api,
    deleteMyTemplate_api,
    // addtemplate_api
} from '@/api/api.js'
import {
    formatSeconds
} from '@/api/tools.js'
import { create } from 'domain';

export default {
    async created() {
        const pages = 1
        const res = await getAllTemplate_api(pages)
        console.log(res)
        if (res.status === 200) {
            this.templateList = res.data.data.pageResult
            this.totalPage = res.data.data.totalPages * 10
            this.loading = false
        }else {
            this.$message.error('网络请求失败');
        }
    },
    data() {
        return {
            templateList: [],
            loading:true,
            loading2:true,
            search_id:'',
            findShow:false,
            findRes:{},
            currentPage:1,
            totalPage:10,
        }
    },
    methods: {
      handleFind(row) {
        console.log(row);
      },
            async changePage(e) {
                const res = await getAllTemplate_api(e)
                if (res.status === 200) {
                    this.templateList = res.data.data.pageResult
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
          const res = await searchTemplate_api(this.search_id)  
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
          this.findRes = res.data.data.templateinfo
          this.loading2 = false
      },
      deletetemplate(row) {
        this.$confirm('此操作将永久删除该课程, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'error'
        }).then(async () => {
            const res = await deleteMyTemplate_api(row.id)
            console.log(res)
            if (res.status === 200) {
                 this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
                const res2 = await getAllTemplate_api(1)
                console.log(res2)
               
                this.loading = true
                this.findShow = false
                this.findRes = {}
                this.currentPage = 1   
                this.templateList = res2.data.data.pageResult
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


<style lang="scss">
    .template_list{
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
