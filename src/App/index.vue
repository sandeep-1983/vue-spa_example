<template>
    <div>
        <h1>Vue SPA</h1>
        <router-view></router-view>
        <a v-on:click="makeGetRequest"> CLICK to GET data</a>
        <div id='resp'>RESPONSE:{{resp}}</div>
    </div>
</template>
<style>
a {
  text-decoration: underline;
}
a:visited {
  font-family: Arial;
  color: green;
  text-decoration: none;
}
#resp {
  color: green;
}
</style>
<script src="./App.js"></script>
