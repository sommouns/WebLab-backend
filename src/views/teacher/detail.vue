<template>
    <div>
        <el-form ref="form" label-width="80px"  style="margin:20px;width:40%;min-width:300px;" >
            <el-form-item label="姓名">
                <el-input v-model="form.tname" :disabled=isDisabled></el-input>
            </el-form-item>
            <el-form-item label="QQ号码">
                <el-input v-model="form.qq" type="number" :disabled=isDisabled></el-input>
            </el-form-item>
            <el-form-item label="邮箱">
                <el-input v-model="form.email" :disabled=isDisabled></el-input>
            </el-form-item>
            <el-form-item label="电话号码">
                <el-input v-model="form.phone" :disabled=isDisabled></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="() => {this.isDisabled = false}" v-if="isDisabled">修改</el-button>
                <el-button type="primary" @click="saveChange" v-if="!isDisabled">保存</el-button>
                <el-button type="primary" @click="() => {this.form = this.copy(this.$route.query.info);this.isDisabled = true}" v-if="!isDisabled">取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import {
    modifyTeacher_api,
} from '@/api/api.js'
export default {
    created() {
        this.form = this.copy(this.$route.query.info)
    },
    data(){
        return {
            form:{},
            isDisabled:true
        }
    },
    methods:{
        async saveChange(){
            if (this.form.tname !== ""){
                    const res = await modifyTeacher_api(this.form.id, this.form)
                    this.$message({
                        message:'保存成功',
                        type:"success"
                    })
                }else{
                    this.$message({
                        message:'不能为空',
                        type:"error"
                    })
                    this.form = this.copy(this.$route.query.info)
                }
                this.isDisabled = true
        },
        copy(obj) {
            var newobj = {};
            for ( var attr in obj) {
                newobj[attr] = obj[attr];
            }
            return newobj;
        }
    }
}
</script>