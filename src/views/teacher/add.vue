<template>
	<el-form ref="form" :model="form" label-width="80px"  style="margin:20px;width:40%;min-width:300px;">
		<el-form-item label="姓名">
			<el-input v-model="form.tname"></el-input>
		</el-form-item>
        <el-form-item label="qq号码">
			<el-input v-model="form.qq" type="number"></el-input>
		</el-form-item>
         <el-form-item label="手机号码">
			<el-input v-model="form.phone" type="number"></el-input>
		</el-form-item>
		<el-form-item label="邮箱">
            <el-input v-model="form.email"></el-input>
		</el-form-item>
		<el-form-item>
			<el-button type="primary" @click="onSubmit">录入</el-button>
		</el-form-item>
	</el-form>
</template>

<script>
    import {
        addTeacher_api
    } from '@/api/api.js'
	export default {
		data() {
			return {
				form: {
                    email: "",
                    img: "",
                    jointime: "2019-02-13T08:23:32.659Z",
                    phone: 0,
                    qq: 0,
                    tname: ""
                }
			}
		},
		methods: {
			async onSubmit() {
				if (this.form.tname !==""){
                    this.form.jointime = Date().now
                    const res = await addTeacher_api(this.form)
                    this.$message({
                        message:'录入成功',
                        type:"success"
                    })
                    this.form = {
                        email: "string",
                        img: "string",
                        jointime: "2019-02-13T08:23:32.659Z",
                        phone: 0,
                        qq: 0,
                        tname: ""
                    }
                }else{
                    this.$message({
                        message:'不能为空',
                        type:"error"
                    })
                }
                
			}
		}
	}

</script>