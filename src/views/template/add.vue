<template>
	<el-form ref="form" :model="form" label-width="80px"  style="margin:20px;width:40%;min-width:300px;">
		<el-form-item label="用户名">
			<el-input v-model="form.username"></el-input>
		</el-form-item>
        <el-form-item label="密码">
			<el-input v-model="form.password" type="password"></el-input>
		</el-form-item>
        <el-form-item label="确认密码">
			<el-input v-model="confirm_password" type="password"></el-input>
		</el-form-item>
		<el-form-item>
			<el-button type="primary" @click="onSubmit">录入</el-button>
		</el-form-item>
	</el-form>
</template>

<script>
    import {
        addAdmin_api
    } from '@/api/api.js'
	export default {
		data() {
			return {
				form: {
                    id:0,
                    lastlogin: "2019-02-13T08:46:53.624Z",
                    password: "",
                    salt: "string",
                    username: ""
                },
                confirm_password:''
			}
		},
		methods: {
            
			async onSubmit() {
				if (this.form.username !=="" && this.form.password === this.confirm_password && this.form.password !== ""){
                    let obj = {
                        password: this.form.password,
                        username: this.form.username
                        }
                    // console.log(this.form)
                    // console.log(obj)

                    const res = await addAdmin_api(obj)
                    this.$message({
                        message:'录入成功',
                        type:"success"
                    })
                    this.form = {
                        lastlogin: "2019-02-13T08:46:53.624Z",
                        password: "",
                        salt: "string",
                        username: ""
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