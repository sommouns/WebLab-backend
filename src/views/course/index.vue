<template>
    <div>
        
    </div>
</template>

<script>
import {
    getAllCourse
} from '@/api/api.js'
import $ from 'jquery'
import axios from 'axios'
export default {
    async created() {
        const pages = 1
        const res = await getAllCourse(pages)
        // console.log($)
        console.log(res)
    }  
}
</script>