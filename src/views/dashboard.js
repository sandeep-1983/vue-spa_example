import Vue from 'vue';

export default Vue.extend({
    name: 'dashboard',
    template: `<div><div id='myDashboardPage'>I am Dashboard</div><a  v-on:click="onClick"> go to SPA search</a></div>`,
    methods: {
        onClick() {
            this.$router.push('/Search');
        },
    },
});
