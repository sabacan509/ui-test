<template>
  <div>
    <h1>ここがすべての始まりだ</h1>
    <div>
      <img src="static/image/hajimari.jpeg" style="width:120px"/>
    </div>
    <div id="ex1">
      <button v-on:click="getList">API Gatewayにアクセスする</button>
    </div>
    <h2>{{first_msg}}</h2>
  </div>
</template>

<script>

export default {
  data () {
    return {
      first_msg: 'はじめまして"はじまり"です。'
    }
  },
  methods: {
    getList () {
      console.log('xxx')
    }
  }
}

</script>
