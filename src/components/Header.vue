<template>
  <div id="header">
    <h1>Sabo-Rush Longaberger Database</h1>
    <!-- <div class="button-row">
      <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#basket" aria-expanded="false" aria-controls="basket">
        Edit Baskets
        <i class="fa fa-shopping-basket" aria-hidden="true"></i>
      </button>
      <button id="show-ceramic-form" class="btn btn-info">
        Edit Ceramics
        <i class="fa fa-coffee" aria-hidden="true"></i>
      </button>
      <button id="show-accessory-form" class="btn btn-warning">
        Edit Accessories
        <i class="fa fa-tag" aria-hidden="true"></i>
      </button>
    </div> -->
    <!-- <div class="button-row">
      <button id="show-basket-products" class="btn btn-primary">
        Show Baskets
        <i class="fa fa-shopping-basket" aria-hidden="true"></i>
      </button>
      <button id="show-ceramic-products" class="btn btn-info">
        Show Ceramics
        <i class="fa fa-coffee" aria-hidden="true"></i>
      </button>
      <button id="show-accessories-products" class="btn btn-warning">
        Show Accessories
        <i class="fa fa-tag" aria-hidden="true"></i>
      </button>
    </div> -->
    <nav class="flex-row">
      <div id="show-basket-form" class="nav-choice" data-toggle="collapse" data-target="#basket" aria-expanded="false" aria-controls="basket">
        <div class="text d-none d-sm-block">Baskets</div>
        <i class="fa fa-shopping-basket" aria-hidden="true"></i>
      </div>
      <div id="show-ceramic-form" class="nav-choice">
        <div class="text d-none d-sm-block">Ceramics</div>
        <i class="fa fa-coffee" aria-hidden="true"></i>
      </div>
      <div id="show-accessory-form" class="nav-choice">
        <div class="text d-none d-sm-block">Accessories</div>
        <i class="fa fa-tag" aria-hidden="true"></i>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {};
  },
}
</script>

<style lang="scss">
#header {
  width: 100%;
  position: relative;
  text-align: center;
  background: white;
  margin-bottom: 25px;
  padding: 25px 15px 75px 15px;

  nav {
    background: #2c3e50;
    position: absolute;
    bottom: 0;
    left: 0;
    align-items: center;
    width: 100vw;
  }

  .nav-choice {
    height: 50px;
    color: #fff;
    margin-left: 15px;
    padding-right: 15px;
    border-right: 1px solid;
    display: flex;
    align-content: center;
    cursor: pointer;

    .text {
      line-height: 50px;
      margin-right: 10px;
    }
  }

  .fa {
    display: flex;
    align-items: center;
  }

  .btn {
    margin-bottom: 15px;
  }
}
</style>
