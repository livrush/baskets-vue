<template>
  <div id="app">
    <app-header></app-header> 
    <app-main></app-main>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {}
  }
}
</script>

<style lang="scss">
body {
  background-image: url('./assets/pixel_weave/pixel_weave_dark.png');
}

h1, h2, h3, h4, h5, h6 {
    font-family: 'Lobster', sans-serif;    
}

#app {
  font-family: 'Cabin', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.flex-row {
  display: flex;
}

.form {
  background: rgba(255, 255, 255, 0.5);
  width: 500px;
  margin: 0 auto 25px auto;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 15px;
  box-sizing: border-box;
  .input-section {
    margin-bottom: 5px;
  }
}

.left-text {
  text-align: left;
}

.bg-color {
  color: white;
  font-weight: bold;
}

.bg-red {
  color: white;
  font-weight: bold;
  background: maroon;
}

.bg-green {
  color: white;
  font-weight: bold;
  background: forestgreen;
}

.bg-blue {
  color: white;
  font-weight: bold;
  background: darkblue;
}

.text-red {
  font-weight: bold;
  color: maroon;
}

.text-green {
  font-weight: bold;
  color: forestgreen;
}

.text-blue {
  font-weight: bold;
  color: darkblue;
}

.text-ivory {
  font-weight: bold;
  color: ivory;
}

.text-NA {
  font-weight: bold;
  color: grey;
}
</style>
