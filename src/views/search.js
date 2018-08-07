import Vue from 'vue';
export default Vue.extend({
    name: 'search',
    template: `<div><div id='mySearchPage'>I am Search</div><a  v-on:click="onClick"> go to SPA dashboard</a></div>`,
    methods: {
        onClick() {
            this.$router.push('/');
        },
    },
});
