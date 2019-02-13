<template>
    <div class="detail">
        <el-form ref="detail" :model="detail" label-width="80px" >
                    <br><h2><strong>{{detail.cname}}</strong></h2>
 

                <el-form-item label="实验者">
                   {{detail.sname}}
                </el-form-item>
                <el-form-item label="报告id">
                    <!-- <el-input v-model="detail.tch_id"></el-input> -->
                    {{detail.id}}
                </el-form-item>
               
                <el-form-item label="课程id">
                    <!-- <el-input v-model="detail.tch_id"></el-input> -->
                    {{detail.courseId}}
                </el-form-item>
                <el-form-item label="创建时间" >
                    {{detail.createdtime}}
                </el-form-item>
                <el-form-item label="实验评价" >
                    {{detail.remark}}
                </el-form-item>
                <el-form-item label="成绩" >
                    {{detail.grade}}
                </el-form-item>
                <h3>报告内容</h3>
                <div v-html="detail.content">
                </div>
                
            </el-form>

    </div>
</template>
<script>
export default {
    created(){
        this.detail = this.$route.query.info
    },
    data() {
        return {
            detail:{}
        }
    }
}
</script>