<template>
    <div>
        <el-form ref="form" label-width="80px"  style="margin:20px;width:40%;min-width:300px;" >
            <el-form-item label="姓名">
                <el-input v-model="form.realname" :disabled=isDisabled></el-input>
            </el-form-item>
            <el-form-item label="学号">
                <el-input v-model="form.number" type="number" :disabled=isDisabled></el-input>
            </el-form-item>
            <el-form-item label="班级">
                <el-input v-model="form.classname" :disabled=isDisabled></el-input>
            </el-form-item>
            <el-form-item label="院校">
                <el-input v-model="form.college" :disabled=isDisabled></el-input>
            </el-form-item>
            <el-form-item label="个人签名">
                <el-input v-model="form.tdescribe" type="textarea"  :disabled=isDisabled></el-input>
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
    modifyStudent_api,
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
            if (this.form.classname !=="" && this.form.college !=="" && this.form.number !== 0 && this.form.realname !==""){
                    const res = await modifyStudent_api(this.form.id, this.form)
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