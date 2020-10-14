<template>
  <div id="">
    <p>
    提问：
    <input v-model="question">
    </p>
    <p>{{answer}}</p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      question: '',
      answer: '你还没有问人家问题呀~'
    }
  },
  watch: {
    question: function () {
      this.answer = '等待发问~~'
      this.getAnswer()
    }
  },
  methods: {
    getAnswer: function () {
      if (this.question.indexOf('?') !== -1) {
        this.answer = '思考中-----'
        let that = this
        that.$http.post('https://www.yuque.com/api/users/1351346/profile?')
          .then(function (res) {
            if (res.data.code === 0) {
              that.answer = res.data.data
            } else {
              that.answer = res.data.message
            }
          })
      } else {
        this.answer = '一个问题一般由一个？结尾哦'
      }
    }
  }
}
</script>
