<template>
  <div>
    <lable>直接输出的模式：</lable>
    <div>{{msg}}</div>
    <lable>解析后输出的模式：</lable>
    <div v-html="msg"></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: '<div stly="font-size:30px;color:red">helloWorld</div>'
    }
  }
}
</script>
