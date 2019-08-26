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
var AWS = require('aws-sdk');
export default {
  data () {
    return {
      first_msg: 'はじめまして"はじまり"です。'
    }
  },
  methods: {
    getList () {
      var apigateway = new AWS.APIGateway({apiVersion: '2015-07-09'});
      var credentials = new AWS.SharedIniFileCredentials({profile: 'apigw-ui-account'});
      AWS.config.credentials = credentials;
      var params = {
        resourceId: 'ijjcnlkghg',
        restApiId: 'wiyn9yxq5a'
      };
      apigateway.getResource(params, function (err, data) {
        if (err) console.log(err, err.stack);
        else console.log(data);
      });
      console.log('xxx')
    }
  }
}

</script>
