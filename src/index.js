import Vue from 'vue';
import initRouter from './routes';
import App from './App';

const mainView = new Vue({
  el: "#app",
  render: createElement => createElement(App),
  router: initRouter(),
});
