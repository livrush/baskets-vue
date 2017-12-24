import Vue from 'vue';
import App from './App.vue';
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Basket from './components/forms/Basket.vue';
import Baskets from './components/products/Baskets.vue';

Vue.component('basket', Basket);
Vue.component('baskets', Baskets);

Vue.component('app-header', Header);
Vue.component('app-main', Main);

new Vue({
  el: '#app',
  render: h => h(App),
});
