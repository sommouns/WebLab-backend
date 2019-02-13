<template>
    <div class="detail">
        <el-form ref="form" :model="detail" label-width="80px" >
                <el-form-item label="课程名称">
                    <strong>{{detail.cname}}</strong>
                </el-form-item>
                <el-form-item label="课程简介">
                    {{detail.cdescribe}}
                </el-form-item>
                <el-form-item label="课程图标">
                    <img :src="detail.img" alt="">
                    <!-- <el-input type="textarea" v-model="detail.cdescribe"></el-input> -->
                </el-form-item>
                <el-form-item label="课程名称">
                    <!-- <el-input v-model="detail.tch_id"></el-input> -->
                    {{detail.teacher.tname}}
                </el-form-item>
                <el-form-item label="课程章节" >
                    <el-tag
                    v-for="tag in detail.courseTempletes"
                    :key="tag.id"
                    type="primary"
                    style="margin-left:5px"
                    :disable-transitions="false"
                    >
                    {{tag.cname}}
                    </el-tag>
                </el-form-item>
                <el-tag type="danger">课程参与人数：<strong>{{detail.count}}人</strong></el-tag>
            </el-form>

    </div>
</template>
<script>
export default {
    created(){
        this.detail = this.$route.query.detail
    },
    data() {
        return {
            detail:{}
        }
    }
}
</script>