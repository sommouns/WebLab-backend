<template>
    <div class="course_list">

        <div class="header">
            <div class="search">
                <el-input class="search_input"
                          v-model="search_id"
                          placeholder="请输入课程id搜索"></el-input>
                <el-button type="primary"
                           @click="search"><i class="el-icon-search"></i> 搜索</el-button>
            </div>

        </div>
        <div style="clear:both"></div>
        <div class="find_res"
             v-if="findShow">
            <el-card class="box-card"
                     v-if="findRes.id">
                <div slot="header"
                     class="clearfix">
                    <strong>查询结果</strong>
                </div>
                <div v-loading="loading2"
                     class="clearfix">
                    <img :src="findRes.img"
                         alt=""
                         class="find_img">
                    <div class="find_info">
                        <div>课程名称：{{findRes.cname}}</div>
                        <div>教师：{{findRes.teacher.tname}}</div>
                        <div>参加人数：{{findRes.count}}</div>
                        <div>课程id：{{findRes.id}}</div>
                        <div>课程创建时间：{{findRes.createdtime}}</div>
                        <br>
                        <el-button @click="handleFind(findRes)">查看详情</el-button>
                        <el-button type="danger"
                                   @click="deleteCourse(findRes)">删除课程</el-button>
                    </div>
                    <div class="find_desc">
                        <h3>课程简介</h3>
                        {{findRes.cdescribe}}
                    </div>
                </div>
            </el-card>
        </div>
        <el-table :data="courseList"
                  border
                  style="width: 100%"
                  v-loading="false">
            <el-table-column prop="id"
                             label="课程id"
                             width="80">
            </el-table-column>
            <el-table-column prop="cname"
                             label="课程名称">
            </el-table-column>
            <el-table-column prop="teacher.tname"
                             label="教师">
            </el-table-column>
            <el-table-column prop="createdtime"
                             label="创建时间">
            </el-table-column>
            <el-table-column prop="count"
                             label="报名人数">
            </el-table-column>
            <el-table-column prop="teacher.email"
                             label="教师邮箱">
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button @click="handleFind(scope.row)"
                               type="text"
                               size="small">查看</el-button>
                    <el-button @click="deleteCourse(scope.row)"
                               type="text"
                               size="small"><span style="color:red">删除</span></el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="block">
            <el-pagination layout="prev, pager, next"
                           :total="totalPage">
            </el-pagination>
        </div>

    </div>
</template>

<script>

import {
    getAllCourse_api,
    deleteMyCourse_api,
    searchCourse_api,
    addCourse_api
} from '@/api/api.js'
import {
    formatSeconds
} from '@/api/tools.js'
import { create } from 'domain';

export default {
    // async created () {
    //     const pages = 1
    //     const res = await getAllCourse_api(pages)
    //     if (res.status === 200) {
    //         this.courseList = res.data.data.pageResult
    //         this.totalPage = res.data.data.totalPages * 10
    //         this.loading = false
    //     } else {
    //         this.$message.error('网络请求失败');
    //     }
    // },
    data () {
        return {
            courseList: [
                {
                    id: '00001',
                    cname: 'WebGoat',
                    teacher: {
                        tname: '叶安心',
                        email: '969728883@qq.com'
                    },
                    createdtime: '2019-07-12',
                    count: 20,

                }
            ],
            loading: true,
            loading2: true,
            search_id: '',
            findShow: false,
            findRes: {},
            totalPage: 10,
        }
    },
    methods: {
        handleFind (row) {
            this.detail = row
            this.$router.push({ path: `/course_detail`, query: { detail: this.detail } })
        },
        async search () {
            this.findShow = true
            if (isNaN(Number(this.search_id)) || this.search_id === '') {
                this.$message({
                    message: "请确保id有效",
                    type: 'error'
                })
                this.search_id = ''
                return
            }
            const res = await searchCourse_api(this.search_id)
            if (!res.data.meta.success) {
                this.$message({
                    message: res.data.meta.message,
                    type: 'error'
                })
                this.search_id = ''
                this.findRes = {
                    cname: "",
                    img: "",
                    teacher: {
                        tname: ""
                    },
                    createdtime: "",
                    id: "",
                    count: ""
                }
                return
            }
            this.findRes = res.data.data.courseinfo
            this.loading2 = false
        },
        deleteCourse (row) {
            this.$confirm('此操作将永久删除该课程, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'error'
            }).then(async () => {
                const res = await deleteMyCourse_api(row.id)
                console.log(res)
                if (res.status === 200) {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                    const res2 = await getAllCourse_api(1)
                    console.log(res2)

                    this.loading = true
                    this.findShow = false
                    this.findRes = {}
                    this.courseList = res2.data.data.pageResult
                    this.loading = false
                }
            }).catch(() => {
                this.$message({
                    type: 'error',
                    message: '删除失败'
                });
            });
        },
        addCourse () {
            this.$router.push('/add_course')
        }
    },
}
</script>


<style lang="scss">
.course_list {
    .header {
        .search {
            float: left;
            .search_input {
                width: 12rem;
                margin-right: 1rem;
            }
        }
        .add {
            float: right;
        }

        height: 3rem;
        margin-top: 1rem;
    }
    .box-card {
        width: 100%;
        margin-bottom: 2rem;
    }
    .find_img {
        float: left;
        height: 12rem;
        width: 27%;
    }
    .find_info {
        float: left;
        margin-left: 2rem;
        width: 18%;
    }
    .find_info div {
        line-height: 2em;
    }
    .find_desc {
        float: left;
        margin-left: 2rem;
        width: 47%;
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
    clear: both;
}

.box-card {
    width: 480px;
}
</style>
