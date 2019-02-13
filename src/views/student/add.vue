<template>
	<el-form ref="form" :model="form" label-width="80px"  style="margin:20px;width:40%;min-width:300px;">
		<el-form-item label="姓名">
			<el-input v-model="form.realname"></el-input>
		</el-form-item>
        <el-form-item label="学号">
			<el-input v-model="form.number" type="number"></el-input>
		</el-form-item>
		<el-form-item label="班级">
            <el-input v-model="form.classname"></el-input>
		</el-form-item>
        <el-form-item label="院校">
            <el-input v-model="form.college"></el-input>
		</el-form-item>
		<el-form-item>
			<el-button type="primary" @click="onSubmit">录入</el-button>
		</el-form-item>
	</el-form>
</template>

<script>
    import {
        addStudent_api
    } from '@/api/api.js'
	export default {
		data() {
			return {
				form: {
                    classname: "",
                    college: "",
                    img: "string",
                    jointime: "2019-02-13T07:14:50.728Z",
                    location: "string",
                    number: 0,
                    realname: "",
                    tdescribe: "string"
                }
			}
		},
		methods: {
			async onSubmit() {
				if (this.form.classname !=="" && this.form.college !=="" && this.form.number !== 0 && this.form.realname !==""){
                    const res = await addStudent_api(this.form)
                    this.$message({
                        message:'录入成功',
                        type:"success"
                    })
                    this.form = {
                        classname: "",
                        college: "",
                        img: "string",
                        jointime: "2019-02-13T07:14:50.728Z",
                        location: "string",
                        number: 0,
                        realname: "",
                        tdescribe: "string"
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