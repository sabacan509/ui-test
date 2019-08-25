<template>
  <div>
    <h1>ここがすべての始まりだ</h1>
    <img src="static/image/hajimari.jpeg"/>
    <h2>{{first_msg}}</h2>
  </div>
</template>

<script>
export default {
  data () {
    return {
      first_msg : 'はじめまして"はじまり"です。',
    }
  }
}
</script>
