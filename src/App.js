import Vue from 'vue';
import axios from 'axios';
export default Vue.extend({
    name: 'App',
    data() {
        return {
            resp: '',
        };
    },
    template: `<div>
        <h1>Vue SPA</h1>
        <router-view></router-view>
        <a v-on:click="makeGetRequest"> CLICK to GET data</a>
        <div>RESPONSE:{{resp}}</div>
    </div>`,
    methods: {
        makeGetRequest() {
            axios({ method: "GET", "url": "dummyAjaxCall/WelcomeNote" })
                .then(result => {
                    console.log(result);
                    this.resp = result.data;
                }, error => {
                    console.log('Error in SPA land:', error);
                    console.error(error);
                });

        }
    },
});
