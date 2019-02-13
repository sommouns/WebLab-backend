import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import Table from './views/nav1/Table.vue'
import Form from './views/nav1/Form.vue'
import user from './views/nav1/user.vue'
import Page4 from './views/nav2/Page4.vue'
import Page5 from './views/nav2/Page5.vue'
import Page6 from './views/nav3/Page6.vue'

import Course from './views/course/index.vue'
import AddCourse from './views/course/add.vue'
import CourseDetail from './views/course/detail.vue'


import Student from './views/student/index.vue'
import AddStudent from './views/student/add.vue'
import StudentDetail from './views/student/detail.vue'


import Admin from './views/admin/index.vue'
import AddAdmin from './views/admin/add.vue'

import Template from './views/template/index.vue'
import AddTemplate from './views/template/add.vue'

import Teacher from './views/teacher/index.vue'
import AddTeacher from './views/teacher/add.vue'
import TeacherDetail from './views/teacher/detail.vue'

import Report from './views/reports/index.vue'
import ReportDetail from './views/reports/detail.vue'

import echarts from './views/charts/echarts.vue'

let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    { path: '/main', component: Main, hidden: true },
    // {
    //     path: '/',
    //     component: Home,
    //     name: '导航一',
    //     iconCls: 'el-icon-message',//图标样式class
    //     children: [
    //         { path: '/main', component: Main, name: '主页', hidden: true },
    //         { path: '/table', component: Table, name: 'Table' },
    //         { path: '/form', component: Form, name: 'Form' },
    //         { path: '/user', component: user, name: '列表' },
    //     ]
    // },
    {
        path: '/',
        component: Home,
        name: '课程',
        iconCls: 'fa fa-address-card',
        children: [
            { path: '/course', component: Course, name: '管理课程' },
            // { path: '/add_course', component: AddCourse, name: '添加课程' },
            { path: '/course_detail', component: CourseDetail, name: '课程详情', hidden: true }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '学生',
        iconCls: 'fa fa-user-circle',
        children: [
            { path: '/student', component: Student, name: '管理学生' },
            { path: '/add_student', component: AddStudent, name: '添加学生' },
            { path: '/student_detail', component: StudentDetail, name: '学生详情', hidden: true }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '教师',
        iconCls: 'fa fa-user-circle-o',
        children: [
            { path: '/teacher', component: Teacher, name: '管理教师' },
            { path: '/add_teacher', component: AddTeacher, name: '添加教师' },
            { path: '/teacher_detail', component: TeacherDetail, name: '教师详情', hidden: true }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '管理员',
        iconCls: 'fa fa-address-card-o',
        children: [
            { path: '/admin', component: Admin, name: '管理管理员' },
            { path: '/add_admin', component: AddAdmin, name: '添加管理员' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '课程模板',
        iconCls: 'fa fa-asterisk',
        children: [
            { path: '/template', component: Template, name: '管理课程模板' },
            { path: '/add_template', component: AddTemplate, name: '添加课程模板' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '实验报告',
        iconCls: 'fa fa-calculator',
        children: [
            { path: '/report', component: Report, name: '管理实验报告' },
            { path: '/report_detail', component: ReportDetail, name: '实验报告详情', hidden: true }
        ]
    },
    // {
    //     path: '/',
    //     component: Home,
    //     name: 'Charts',
    //     iconCls: 'fa fa-bar-chart',
    //     children: [
    //         { path: '/echarts', component: echarts, name: 'echarts' }
    //     ]
    // },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;